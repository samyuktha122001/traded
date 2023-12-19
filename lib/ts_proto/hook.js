"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hook = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "trade.track";
function createBaseHook() {
    return { Name: "", Rbac: "" };
}
exports.Hook = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Name !== "") {
            writer.uint32(10).string(message.Name);
        }
        if (message.Rbac !== "") {
            writer.uint32(18).string(message.Rbac);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHook();
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
                    message.Rbac = reader.string();
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
        return { Name: isSet(object.Name) ? String(object.Name) : "", Rbac: isSet(object.Rbac) ? String(object.Rbac) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.Name !== "") {
            obj.Name = message.Name;
        }
        if (message.Rbac !== "") {
            obj.Rbac = message.Rbac;
        }
        return obj;
    },
    create(base) {
        return exports.Hook.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseHook();
        message.Name = (_a = object.Name) !== null && _a !== void 0 ? _a : "";
        message.Rbac = (_b = object.Rbac) !== null && _b !== void 0 ? _b : "";
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
//# sourceMappingURL=hook.js.map