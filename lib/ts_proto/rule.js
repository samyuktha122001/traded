"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "trade.track";
function createBaseRule() {
    return { Name: "", Params: "" };
}
exports.Rule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Name !== "") {
            writer.uint32(10).string(message.Name);
        }
        if (message.Params !== "") {
            writer.uint32(18).string(message.Params);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.Params = reader.string();
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
            Name: isSet(object.Name) ? String(object.Name) : "",
            Params: isSet(object.Params) ? String(object.Params) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.Name !== "") {
            obj.Name = message.Name;
        }
        if (message.Params !== "") {
            obj.Params = message.Params;
        }
        return obj;
    },
    create(base) {
        return exports.Rule.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRule();
        message.Name = (_a = object.Name) !== null && _a !== void 0 ? _a : "";
        message.Params = (_b = object.Params) !== null && _b !== void 0 ? _b : "";
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
//# sourceMappingURL=rule.js.map