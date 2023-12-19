"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvelopeIBC = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "trade.track";
function createBaseEnvelopeIBC() {
    return {
        EventName: "",
        TxType: "",
        EncryptedFields: false,
        SenderOrg: "",
        ReceiverOrg: "",
        Metadata: "",
        ChainId: "",
        Port: "",
        ChannelID: "",
        TimeoutTimestamp: long_1.default.UZERO,
    };
}
exports.EnvelopeIBC = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.EventName !== "") {
            writer.uint32(10).string(message.EventName);
        }
        if (message.TxType !== "") {
            writer.uint32(18).string(message.TxType);
        }
        if (message.EncryptedFields === true) {
            writer.uint32(24).bool(message.EncryptedFields);
        }
        if (message.SenderOrg !== "") {
            writer.uint32(34).string(message.SenderOrg);
        }
        if (message.ReceiverOrg !== "") {
            writer.uint32(42).string(message.ReceiverOrg);
        }
        if (message.Metadata !== "") {
            writer.uint32(50).string(message.Metadata);
        }
        if (message.ChainId !== "") {
            writer.uint32(58).string(message.ChainId);
        }
        if (message.Port !== "") {
            writer.uint32(66).string(message.Port);
        }
        if (message.ChannelID !== "") {
            writer.uint32(74).string(message.ChannelID);
        }
        if (!message.TimeoutTimestamp.isZero()) {
            writer.uint32(80).uint64(message.TimeoutTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnvelopeIBC();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.EventName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.TxType = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.EncryptedFields = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.SenderOrg = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.ReceiverOrg = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.Metadata = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.ChainId = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.Port = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.ChannelID = reader.string();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.TimeoutTimestamp = reader.uint64();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            EventName: isSet(object.EventName) ? String(object.EventName) : "",
            TxType: isSet(object.TxType) ? String(object.TxType) : "",
            EncryptedFields: isSet(object.EncryptedFields) ? Boolean(object.EncryptedFields) : false,
            SenderOrg: isSet(object.SenderOrg) ? String(object.SenderOrg) : "",
            ReceiverOrg: isSet(object.ReceiverOrg) ? String(object.ReceiverOrg) : "",
            Metadata: isSet(object.Metadata) ? String(object.Metadata) : "",
            ChainId: isSet(object.ChainId) ? String(object.ChainId) : "",
            Port: isSet(object.Port) ? String(object.Port) : "",
            ChannelID: isSet(object.ChannelID) ? String(object.ChannelID) : "",
            TimeoutTimestamp: isSet(object.TimeoutTimestamp) ? long_1.default.fromValue(object.TimeoutTimestamp) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.EventName !== "") {
            obj.EventName = message.EventName;
        }
        if (message.TxType !== "") {
            obj.TxType = message.TxType;
        }
        if (message.EncryptedFields === true) {
            obj.EncryptedFields = message.EncryptedFields;
        }
        if (message.SenderOrg !== "") {
            obj.SenderOrg = message.SenderOrg;
        }
        if (message.ReceiverOrg !== "") {
            obj.ReceiverOrg = message.ReceiverOrg;
        }
        if (message.Metadata !== "") {
            obj.Metadata = message.Metadata;
        }
        if (message.ChainId !== "") {
            obj.ChainId = message.ChainId;
        }
        if (message.Port !== "") {
            obj.Port = message.Port;
        }
        if (message.ChannelID !== "") {
            obj.ChannelID = message.ChannelID;
        }
        if (!message.TimeoutTimestamp.isZero()) {
            obj.TimeoutTimestamp = (message.TimeoutTimestamp || long_1.default.UZERO).toString();
        }
        return obj;
    },
    create(base) {
        return exports.EnvelopeIBC.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseEnvelopeIBC();
        message.EventName = (_a = object.EventName) !== null && _a !== void 0 ? _a : "";
        message.TxType = (_b = object.TxType) !== null && _b !== void 0 ? _b : "";
        message.EncryptedFields = (_c = object.EncryptedFields) !== null && _c !== void 0 ? _c : false;
        message.SenderOrg = (_d = object.SenderOrg) !== null && _d !== void 0 ? _d : "";
        message.ReceiverOrg = (_e = object.ReceiverOrg) !== null && _e !== void 0 ? _e : "";
        message.Metadata = (_f = object.Metadata) !== null && _f !== void 0 ? _f : "";
        message.ChainId = (_g = object.ChainId) !== null && _g !== void 0 ? _g : "";
        message.Port = (_h = object.Port) !== null && _h !== void 0 ? _h : "";
        message.ChannelID = (_j = object.ChannelID) !== null && _j !== void 0 ? _j : "";
        message.TimeoutTimestamp = (object.TimeoutTimestamp !== undefined && object.TimeoutTimestamp !== null)
            ? long_1.default.fromValue(object.TimeoutTimestamp)
            : long_1.default.UZERO;
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=envelope.js.map