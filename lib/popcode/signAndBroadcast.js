"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signAndBroadcast = void 0;
const axios_1 = __importDefault(require("axios"));
const amino_1 = require("skud-client-base/lib/cosmjs/amino");
const skud_client_base_1 = require("skud-client-base");
const contants_1 = require("../utils/contants");
const signAndBroadcast = (popcodeSetup, popcodeResult) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const sign_data = popcodeResult.message;
        const chainJsonData = JSON.parse(popcodeSetup.orgInfo.data.chainJson);
        const ip_address = chainJsonData.chain.chainnode_ip;
        const fees = 0;
        const denom = "skus";
        const gas = "1500000";
        const memo = "";
        const feeData = {
            amount: (0, amino_1.coins)(fees, denom),
            gas: gas,
        };
        const url = (_a = popcodeSetup === null || popcodeSetup === void 0 ? void 0 : popcodeSetup.chainData) === null || _a === void 0 ? void 0 : _a.submitUrl;
        const chainId = (_b = popcodeSetup === null || popcodeSetup === void 0 ? void 0 : popcodeSetup.chainData) === null || _b === void 0 ? void 0 : _b.chainId;
        const accountAddress = {
            type: "tendermint/PubKeySecp256k1",
            value: (_d = (_c = popcodeSetup === null || popcodeSetup === void 0 ? void 0 : popcodeSetup.userInfo) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.wallet.publicKey,
        };
        const account_address = (0, amino_1.pubkeyToAddress)(accountAddress, contants_1.PREFIX);
        sign_data.value.Creator = account_address;
        const signArgs = {
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
        const res = yield axios_1.default.post(`http://${ip_address}:3006/api/sign-direct`, signArgs);
        const txBytes = res.data.data.txBytes;
        const broadcastRes = yield (0, skud_client_base_1.broadcastTransaction)(url, txBytes);
        const txInfo = broadcastRes.data;
        return txInfo;
    }
    catch (error) {
        throw new Error(`
          Failed to sign transaction using signDirect: ${error.message}
          `);
    }
});
exports.signAndBroadcast = signAndBroadcast;
//# sourceMappingURL=signAndBroadcast.js.map