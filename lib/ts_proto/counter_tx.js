"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterTx = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "trade.track";
function createBaseCounterTx() {
    return { Address: "", Counter: "", PrevCounter: "", Document: "", EventData: "" };
}
exports.CounterTx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Address !== "") {
            writer.uint32(10).string(message.Address);
        }
        if (message.Counter !== "") {
            writer.uint32(18).string(message.Counter);
        }
        if (message.PrevCounter !== "") {
            writer.uint32(26).string(message.PrevCounter);
        }
        if (message.Document !== "") {
            writer.uint32(34).string(message.Document);
        }
        if (message.EventData !== "") {
            writer.uint32(42).string(message.EventData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCounterTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.Counter = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.PrevCounter = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.Document = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.EventData = reader.string();
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
            Address: isSet(object.Address) ? String(object.Address) : "",
            Counter: isSet(object.Counter) ? String(object.Counter) : "",
            PrevCounter: isSet(object.PrevCounter) ? String(object.PrevCounter) : "",
            Document: isSet(object.Document) ? String(object.Document) : "",
            EventData: isSet(object.EventData) ? String(object.EventData) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.Address !== "") {
            obj.Address = message.Address;
        }
        if (message.Counter !== "") {
            obj.Counter = message.Counter;
        }
        if (message.PrevCounter !== "") {
            obj.PrevCounter = message.PrevCounter;
        }
        if (message.Document !== "") {
            obj.Document = message.Document;
        }
        if (message.EventData !== "") {
            obj.EventData = message.EventData;
        }
        return obj;
    },
    create(base) {
        return exports.CounterTx.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCounterTx();
        message.Address = (_a = object.Address) !== null && _a !== void 0 ? _a : "";
        message.Counter = (_b = object.Counter) !== null && _b !== void 0 ? _b : "";
        message.PrevCounter = (_c = object.PrevCounter) !== null && _c !== void 0 ? _c : "";
        message.Document = (_d = object.Document) !== null && _d !== void 0 ? _d : "";
        message.EventData = (_e = object.EventData) !== null && _e !== void 0 ? _e : "";
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
//# sourceMappingURL=counter_tx.js.map