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
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareMintTx = void 0;
const utils_1 = require("../utils/utils");
const uuid_1 = require("uuid");
/**
 *   This is used to structure payload for minting popcode
 *
 * @param dlpcSetup - DLPC setup information including organization and user details.
 *
 * @returns A promise that resolves to `popcode_mint` which is a structured message object for minting popcode.
 *
 * @throws Will throw an error if the Axios API call fails.
 *
 * @remarks
 * - The function retrieves and parses the DLPC document from the provided setup.
 * - Then it prepares hash for particular message and data required to be signed.
 * - It then makes an API call to signHandler and extracts signatureInfo.
 * - The function then prepares the claim authorize document, envelope and other details.
 * - Finally, it structures the final message object for authorizing claim and returns it.
 */
const prepareMintTx = (getData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g;
    try {
        const actions = getData.template;
        const mintPopcodeEventData = {
            metadata: {
                popcodeUri: '',
                timestamp: (0, utils_1.getTimeStamp)(),
                gpsLocation: {
                    latitude: '',
                    longitude: ''
                }
            },
            step: {
                name: 'Mint Popcode',
                fields: {
                    skuAmount: (_a = getData === null || getData === void 0 ? void 0 : getData.asset) === null || _a === void 0 ? void 0 : _a.Amount,
                    skuName: (_b = getData === null || getData === void 0 ? void 0 : getData.asset) === null || _b === void 0 ? void 0 : _b.Name,
                    skuUom: (_c = getData === null || getData === void 0 ? void 0 : getData.asset) === null || _c === void 0 ? void 0 : _c.UnitOfMeasure
                }
            }
        };
        const counterTx = {
            Address: (0, uuid_1.v4)(),
            Counter: (0, uuid_1.v4)(),
            PrevCounter: '',
            Document: JSON.stringify({ asset: getData === null || getData === void 0 ? void 0 : getData.asset, actions: actions }),
            EventData: JSON.stringify(Object.assign({}, mintPopcodeEventData))
        };
        const mintPopcodeMsgEnvelope = {
            EventName: 'popcode_mint',
            EncryptedFields: true,
            SenderOrg: (_f = (_e = (_d = getData === null || getData === void 0 ? void 0 : getData.orgInfo) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.organization) === null || _f === void 0 ? void 0 : _f.address,
            Metadata: 'metadata',
            ChainId: ((_g = getData === null || getData === void 0 ? void 0 : getData.chainData) === null || _g === void 0 ? void 0 : _g.chainId) || '',
            TxType: (getData === null || getData === void 0 ? void 0 : getData.channelIdCc) ? 'IBC' : 'direct'
        };
        const mintPopcodeMsg = {
            CounterTx: counterTx,
            Envelope: mintPopcodeMsgEnvelope,
            Version: '2.1',
            Creator: ''
        };
        const mintPopcodeMsgObj = {
            typeUrl: '/trade.track.MsgPopcodeMint',
            value: mintPopcodeMsg
        };
        return { message: mintPopcodeMsgObj };
    }
    catch (err) {
        throw err;
    }
});
exports.prepareMintTx = prepareMintTx;
//# sourceMappingURL=prepareMint.js.map