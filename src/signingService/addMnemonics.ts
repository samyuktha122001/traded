import axios from "axios";

export const addMnemonicToServerWallet = async (serverWalletUrl: string, mnemonic: string) => {
    try {
        const res = await axios.post(
            `http://${serverWalletUrl}/api/mnemonics`,
            { mnemonic }
        );
        return res.data;
    } catch (error) {
        console.log(error)
        return error;
    }

};
