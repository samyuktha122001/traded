"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rules = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const rule_1 = require("./rule");
exports.protobufPackage = "trade.track";
function createBaseRules() {
    return { OnChain: [], PreChain: [], PostChain: [] };
}
exports.Rules = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.OnChain) {
            rule_1.Rule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.PreChain) {
            rule_1.Rule.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.PostChain) {
            rule_1.Rule.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRules();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.OnChain.push(rule_1.Rule.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.PreChain.push(rule_1.Rule.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.PostChain.push(rule_1.Rule.decode(reader, reader.uint32()));
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
            OnChain: Array.isArray(object === null || object === void 0 ? void 0 : object.OnChain) ? object.OnChain.map((e) => rule_1.Rule.fromJSON(e)) : [],
            PreChain: Array.isArray(object === null || object === void 0 ? void 0 : object.PreChain) ? object.PreChain.map((e) => rule_1.Rule.fromJSON(e)) : [],
            PostChain: Array.isArray(object === null || object === void 0 ? void 0 : object.PostChain) ? object.PostChain.map((e) => rule_1.Rule.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a, _b, _c;
        const obj = {};
        if ((_a = message.OnChain) === null || _a === void 0 ? void 0 : _a.length) {
            obj.OnChain = message.OnChain.map((e) => rule_1.Rule.toJSON(e));
        }
        if ((_b = message.PreChain) === null || _b === void 0 ? void 0 : _b.length) {
            obj.PreChain = message.PreChain.map((e) => rule_1.Rule.toJSON(e));
        }
        if ((_c = message.PostChain) === null || _c === void 0 ? void 0 : _c.length) {
            obj.PostChain = message.PostChain.map((e) => rule_1.Rule.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Rules.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRules();
        message.OnChain = ((_a = object.OnChain) === null || _a === void 0 ? void 0 : _a.map((e) => rule_1.Rule.fromPartial(e))) || [];
        message.PreChain = ((_b = object.PreChain) === null || _b === void 0 ? void 0 : _b.map((e) => rule_1.Rule.fromPartial(e))) || [];
        message.PostChain = ((_c = object.PostChain) === null || _c === void 0 ? void 0 : _c.map((e) => rule_1.Rule.fromPartial(e))) || [];
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=rules.js.map