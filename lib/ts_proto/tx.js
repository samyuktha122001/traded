"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgPopcodeMintResponse = exports.MsgPopcodeMint = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const counter_tx_1 = require("./counter_tx");
const envelope_1 = require("./envelope");
const hook_1 = require("./hook");
const rules_1 = require("./rules");
exports.protobufPackage = "trade.track";
function createBaseMsgPopcodeMint() {
    return { Creator: "", CounterTx: undefined, Envelope: undefined, Hooks: [], Rules: undefined, Version: "" };
}
exports.MsgPopcodeMint = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Creator !== "") {
            writer.uint32(10).string(message.Creator);
        }
        if (message.CounterTx !== undefined) {
            counter_tx_1.CounterTx.encode(message.CounterTx, writer.uint32(18).fork()).ldelim();
        }
        if (message.Envelope !== undefined) {
            envelope_1.EnvelopeIBC.encode(message.Envelope, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.Hooks) {
            hook_1.Hook.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.Rules !== undefined) {
            rules_1.Rules.encode(message.Rules, writer.uint32(42).fork()).ldelim();
        }
        if (message.Version !== "") {
            writer.uint32(50).string(message.Version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPopcodeMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Creator = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.CounterTx = counter_tx_1.CounterTx.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.Envelope = envelope_1.EnvelopeIBC.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.Hooks.push(hook_1.Hook.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.Rules = rules_1.Rules.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.Version = reader.string();
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
            Creator: isSet(object.Creator) ? String(object.Creator) : "",
            CounterTx: isSet(object.CounterTx) ? counter_tx_1.CounterTx.fromJSON(object.CounterTx) : undefined,
            Envelope: isSet(object.Envelope) ? envelope_1.EnvelopeIBC.fromJSON(object.Envelope) : undefined,
            Hooks: Array.isArray(object === null || object === void 0 ? void 0 : object.Hooks) ? object.Hooks.map((e) => hook_1.Hook.fromJSON(e)) : [],
            Rules: isSet(object.Rules) ? rules_1.Rules.fromJSON(object.Rules) : undefined,
            Version: isSet(object.Version) ? String(object.Version) : "",
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.Creator !== "") {
            obj.Creator = message.Creator;
        }
        if (message.CounterTx !== undefined) {
            obj.CounterTx = counter_tx_1.CounterTx.toJSON(message.CounterTx);
        }
        if (message.Envelope !== undefined) {
            obj.Envelope = envelope_1.EnvelopeIBC.toJSON(message.Envelope);
        }
        if ((_a = message.Hooks) === null || _a === void 0 ? void 0 : _a.length) {
            obj.Hooks = message.Hooks.map((e) => hook_1.Hook.toJSON(e));
        }
        if (message.Rules !== undefined) {
            obj.Rules = rules_1.Rules.toJSON(message.Rules);
        }
        if (message.Version !== "") {
            obj.Version = message.Version;
        }
        return obj;
    },
    create(base) {
        return exports.MsgPopcodeMint.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgPopcodeMint();
        message.Creator = (_a = object.Creator) !== null && _a !== void 0 ? _a : "";
        message.CounterTx = (object.CounterTx !== undefined && object.CounterTx !== null)
            ? counter_tx_1.CounterTx.fromPartial(object.CounterTx)
            : undefined;
        message.Envelope = (object.Envelope !== undefined && object.Envelope !== null)
            ? envelope_1.EnvelopeIBC.fromPartial(object.Envelope)
            : undefined;
        message.Hooks = ((_b = object.Hooks) === null || _b === void 0 ? void 0 : _b.map((e) => hook_1.Hook.fromPartial(e))) || [];
        message.Rules = (object.Rules !== undefined && object.Rules !== null) ? rules_1.Rules.fromPartial(object.Rules) : undefined;
        message.Version = (_c = object.Version) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgPopcodeMintResponse() {
    return {};
}
exports.MsgPopcodeMintResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPopcodeMintResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgPopcodeMintResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgPopcodeMintResponse();
        return message;
    },
};
exports.MsgServiceName = "trade.track.Msg";
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.MsgServiceName;
        this.rpc = rpc;
        this.PopcodeMint = this.PopcodeMint.bind(this);
    }
    PopcodeMint(request) {
        const data = exports.MsgPopcodeMint.encode(request).finish();
        const promise = this.rpc.request(this.service, "PopcodeMint", data);
        return promise.then((data) => exports.MsgPopcodeMintResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map