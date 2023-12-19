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
const prepareMintTx = (getData, mintData, popcodeAddress, location) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    try {
        if (!popcodeAddress) {
            throw new Error('popcode address is undefined');
        }
        const asset = {
            SkuName: mintData.skuName,
            SkuAmount: mintData.skuAmount,
            SkuUom: mintData.skuUom,
        };
        const template = JSON.parse(getData.template);
        const fieldsRes = {};
        (_b = (_a = template.mint) === null || _a === void 0 ? void 0 : _a.events[0]) === null || _b === void 0 ? void 0 : _b.fields.forEach((item) => {
            if (item.varName) {
                fieldsRes[item.varName] = item.valueType;
            }
        });
        const t = Date.now().toString();
        const ts = t.toString();
        const transformedData = (_e = (_d = (_c = template.mint) === null || _c === void 0 ? void 0 : _c.events[0]) === null || _d === void 0 ? void 0 : _d.abac) === null || _e === void 0 ? void 0 : _e.map((item) => {
            const policyId = (0, uuid_1.v4)().toString();
            const conditionSet = [
                {
                    Attribute: item.attribute,
                    Value: [item.value],
                    Operation: 'IS',
                },
            ];
            const effect = item.permission.charAt(0).toUpperCase() + item.permission.slice(1);
            return {
                PolicyID: policyId,
                ConditionSet: conditionSet,
                Effect: effect,
            };
        });
        const Mint = {
            label: (_g = (_f = template.mint) === null || _f === void 0 ? void 0 : _f.events[0]) === null || _g === void 0 ? void 0 : _g.label,
            fields: fieldsRes,
            Constraints: (_j = (_h = template.mint) === null || _h === void 0 ? void 0 : _h.events[0]) === null || _j === void 0 ? void 0 : _j.constraints,
            ABAC: transformedData,
        };
        const metadata = {
            Event: (_l = (_k = template.mint) === null || _k === void 0 ? void 0 : _k.events[0]) === null || _l === void 0 ? void 0 : _l.label,
            Actor: '',
            timestamp: ts,
            gpsLocation: {
                latitude: location.latitude,
                longitude: location.longitude,
            },
            popcodeURL: popcodeAddress,
            templateName: template.templateName,
            templateCategory: template.category,
            templateIcon: template.iconSrc
        };
        const counterTx = {
            Address: popcodeAddress.split('/')[6],
            Counter: (0, uuid_1.v4)(),
            PrevCounter: '',
            Document: JSON.stringify({ Asset: asset, Events: { Mint: Mint } }),
            EventData: JSON.stringify({ Metadata: metadata, Data: mintData }),
        };
        const mintPopcodeMsgEnvelope = {
            EventName: 'popcode_mint',
            EncryptedFields: true,
            SenderOrg: (_p = (_o = (_m = getData === null || getData === void 0 ? void 0 : getData.orgInfo) === null || _m === void 0 ? void 0 : _m.data) === null || _o === void 0 ? void 0 : _o.organization) === null || _p === void 0 ? void 0 : _p.address,
            Metadata: 'metadata',
            ChainId: ((_q = getData === null || getData === void 0 ? void 0 : getData.chainData) === null || _q === void 0 ? void 0 : _q.chainId) || '',
            TxType: (getData === null || getData === void 0 ? void 0 : getData.channelIdCc) ? 'IBC' : 'direct',
            ReceiverOrg: "",
            TimeoutTimestamp: ts
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