/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CounterTx } from "./counter_tx";
import { EnvelopeIBC } from "./envelope";
import { Hook } from "./hook";
import { Rules } from "./rules";

export const protobufPackage = "trade.track";

export interface MsgPopcodeMint {
  Creator: string;
  CounterTx: CounterTx | undefined;
  Envelope: EnvelopeIBC | undefined;
  Hooks: Hook[];
  Rules: Rules | undefined;
  Version: string;
}

export interface MsgPopcodeMintResponse {
}

function createBaseMsgPopcodeMint(): MsgPopcodeMint {
  return { Creator: "", CounterTx: undefined, Envelope: undefined, Hooks: [], Rules: undefined, Version: "" };
}

export const MsgPopcodeMint = {
  encode(message: MsgPopcodeMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Creator !== "") {
      writer.uint32(10).string(message.Creator);
    }
    if (message.CounterTx !== undefined) {
      CounterTx.encode(message.CounterTx, writer.uint32(18).fork()).ldelim();
    }
    if (message.Envelope !== undefined) {
      EnvelopeIBC.encode(message.Envelope, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.Hooks) {
      Hook.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.Rules !== undefined) {
      Rules.encode(message.Rules, writer.uint32(42).fork()).ldelim();
    }
    if (message.Version !== "") {
      writer.uint32(50).string(message.Version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPopcodeMint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.CounterTx = CounterTx.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.Envelope = EnvelopeIBC.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.Hooks.push(Hook.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.Rules = Rules.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgPopcodeMint {
    return {
      Creator: isSet(object.Creator) ? String(object.Creator) : "",
      CounterTx: isSet(object.CounterTx) ? CounterTx.fromJSON(object.CounterTx) : undefined,
      Envelope: isSet(object.Envelope) ? EnvelopeIBC.fromJSON(object.Envelope) : undefined,
      Hooks: Array.isArray(object?.Hooks) ? object.Hooks.map((e: any) => Hook.fromJSON(e)) : [],
      Rules: isSet(object.Rules) ? Rules.fromJSON(object.Rules) : undefined,
      Version: isSet(object.Version) ? String(object.Version) : "",
    };
  },

  toJSON(message: MsgPopcodeMint): unknown {
    const obj: any = {};
    if (message.Creator !== "") {
      obj.Creator = message.Creator;
    }
    if (message.CounterTx !== undefined) {
      obj.CounterTx = CounterTx.toJSON(message.CounterTx);
    }
    if (message.Envelope !== undefined) {
      obj.Envelope = EnvelopeIBC.toJSON(message.Envelope);
    }
    if (message.Hooks?.length) {
      obj.Hooks = message.Hooks.map((e) => Hook.toJSON(e));
    }
    if (message.Rules !== undefined) {
      obj.Rules = Rules.toJSON(message.Rules);
    }
    if (message.Version !== "") {
      obj.Version = message.Version;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPopcodeMint>, I>>(base?: I): MsgPopcodeMint {
    return MsgPopcodeMint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPopcodeMint>, I>>(object: I): MsgPopcodeMint {
    const message = createBaseMsgPopcodeMint();
    message.Creator = object.Creator ?? "";
    message.CounterTx = (object.CounterTx !== undefined && object.CounterTx !== null)
      ? CounterTx.fromPartial(object.CounterTx)
      : undefined;
    message.Envelope = (object.Envelope !== undefined && object.Envelope !== null)
      ? EnvelopeIBC.fromPartial(object.Envelope)
      : undefined;
    message.Hooks = object.Hooks?.map((e) => Hook.fromPartial(e)) || [];
    message.Rules = (object.Rules !== undefined && object.Rules !== null) ? Rules.fromPartial(object.Rules) : undefined;
    message.Version = object.Version ?? "";
    return message;
  },
};

function createBaseMsgPopcodeMintResponse(): MsgPopcodeMintResponse {
  return {};
}

export const MsgPopcodeMintResponse = {
  encode(_: MsgPopcodeMintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPopcodeMintResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(_: any): MsgPopcodeMintResponse {
    return {};
  },

  toJSON(_: MsgPopcodeMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPopcodeMintResponse>, I>>(base?: I): MsgPopcodeMintResponse {
    return MsgPopcodeMintResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPopcodeMintResponse>, I>>(_: I): MsgPopcodeMintResponse {
    const message = createBaseMsgPopcodeMintResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  PopcodeMint(request: MsgPopcodeMint): Promise<MsgPopcodeMintResponse>;
}

export const MsgServiceName = "trade.track.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.PopcodeMint = this.PopcodeMint.bind(this);
  }
  PopcodeMint(request: MsgPopcodeMint): Promise<MsgPopcodeMintResponse> {
    const data = MsgPopcodeMint.encode(request).finish();
    const promise = this.rpc.request(this.service, "PopcodeMint", data);
    return promise.then((data) => MsgPopcodeMintResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
