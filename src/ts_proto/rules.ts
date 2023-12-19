/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Rule } from "./rule";

export const protobufPackage = "trade.track";

export interface Rules {
  OnChain: Rule[];
  PreChain: Rule[];
  PostChain: Rule[];
}

function createBaseRules(): Rules {
  return { OnChain: [], PreChain: [], PostChain: [] };
}

export const Rules = {
  encode(message: Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.OnChain) {
      Rule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.PreChain) {
      Rule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.PostChain) {
      Rule.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rules {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.OnChain.push(Rule.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.PreChain.push(Rule.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.PostChain.push(Rule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Rules {
    return {
      OnChain: Array.isArray(object?.OnChain) ? object.OnChain.map((e: any) => Rule.fromJSON(e)) : [],
      PreChain: Array.isArray(object?.PreChain) ? object.PreChain.map((e: any) => Rule.fromJSON(e)) : [],
      PostChain: Array.isArray(object?.PostChain) ? object.PostChain.map((e: any) => Rule.fromJSON(e)) : [],
    };
  },

  toJSON(message: Rules): unknown {
    const obj: any = {};
    if (message.OnChain?.length) {
      obj.OnChain = message.OnChain.map((e) => Rule.toJSON(e));
    }
    if (message.PreChain?.length) {
      obj.PreChain = message.PreChain.map((e) => Rule.toJSON(e));
    }
    if (message.PostChain?.length) {
      obj.PostChain = message.PostChain.map((e) => Rule.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Rules>, I>>(base?: I): Rules {
    return Rules.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Rules>, I>>(object: I): Rules {
    const message = createBaseRules();
    message.OnChain = object.OnChain?.map((e) => Rule.fromPartial(e)) || [];
    message.PreChain = object.PreChain?.map((e) => Rule.fromPartial(e)) || [];
    message.PostChain = object.PostChain?.map((e) => Rule.fromPartial(e)) || [];
    return message;
  },
};

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
