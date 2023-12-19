/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "trade.track";

export interface CounterTx {
  Address: string;
  Counter: string;
  PrevCounter: string;
  Document: string;
  EventData: string;
}

function createBaseCounterTx(): CounterTx {
  return { Address: "", Counter: "", PrevCounter: "", Document: "", EventData: "" };
}

export const CounterTx = {
  encode(message: CounterTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CounterTx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): CounterTx {
    return {
      Address: isSet(object.Address) ? String(object.Address) : "",
      Counter: isSet(object.Counter) ? String(object.Counter) : "",
      PrevCounter: isSet(object.PrevCounter) ? String(object.PrevCounter) : "",
      Document: isSet(object.Document) ? String(object.Document) : "",
      EventData: isSet(object.EventData) ? String(object.EventData) : "",
    };
  },

  toJSON(message: CounterTx): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<CounterTx>, I>>(base?: I): CounterTx {
    return CounterTx.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CounterTx>, I>>(object: I): CounterTx {
    const message = createBaseCounterTx();
    message.Address = object.Address ?? "";
    message.Counter = object.Counter ?? "";
    message.PrevCounter = object.PrevCounter ?? "";
    message.Document = object.Document ?? "";
    message.EventData = object.EventData ?? "";
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
