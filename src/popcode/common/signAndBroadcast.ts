import axios from "axios";
import {
    pubkeyToAddress,
    coins,
    StdFee,
} from "skud-client-base/lib/cosmjs/amino";
import { broadcastTransaction } from "skud-client-base";
import { SignArgs } from "../../utils/type";
import { PREFIX } from "../../utils/contants";

export const signAndBroadcast = async (
    popcodeSetup: any,
    popcodeResult: any
): Promise<any> => {
    try {
        const sign_data = popcodeResult.message;
        const chainJsonData = JSON.parse(popcodeSetup.orgInfo.data.chainJson);
        const ip_address = chainJsonData.chain.chainnode_ip;
        const fees = 0;
        const denom = "skus";
        const gas = "1500000";
        const memo = "";

        const feeData: StdFee = {
            amount: coins(fees, denom),
            gas: gas,
        };

        const url = popcodeSetup?.chainData?.submitUrl;
        const chainId = popcodeSetup?.chainData?.chainId;

        const accountAddress = {
            type: "tendermint/PubKeySecp256k1",
            value: popcodeSetup?.userInfo?.user?.wallet.publicKey,
        };

        const account_address = pubkeyToAddress(accountAddress, PREFIX);
        sign_data.value.Creator = account_address;
        const signArgs: SignArgs = {
            signerAddress: account_address,
            chainUrl: url,
            chainId: chainId,
            payload: sign_data,
            sigParams: {
                fees: feeData,
                gas: gas,
                memo: memo,
            },
        };
        const res = await axios.post(
            `http://${ip_address}:3006/api/sign-direct`,
            signArgs
        );

        const txBytes = res.data.data.txBytes;
        const broadcastRes = await broadcastTransaction(url, txBytes);
        const txInfo = broadcastRes.data;
        return txInfo;
    } catch (error: any) {
        throw new Error(`
          Failed to sign transaction using signDirect: ${error.message}
          `);
    }
};
