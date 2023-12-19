/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "trade.track";

export interface Hook {
  Name: string;
  Rbac: string;
}

function createBaseHook(): Hook {
  return { Name: "", Rbac: "" };
}

export const Hook = {
  encode(message: Hook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Name !== "") {
      writer.uint32(10).string(message.Name);
    }
    if (message.Rbac !== "") {
      writer.uint32(18).string(message.Rbac);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Hook {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): Hook {
    return { Name: isSet(object.Name) ? String(object.Name) : "", Rbac: isSet(object.Rbac) ? String(object.Rbac) : "" };
  },

  toJSON(message: Hook): unknown {
    const obj: any = {};
    if (message.Name !== "") {
      obj.Name = message.Name;
    }
    if (message.Rbac !== "") {
      obj.Rbac = message.Rbac;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Hook>, I>>(base?: I): Hook {
    return Hook.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Hook>, I>>(object: I): Hook {
    const message = createBaseHook();
    message.Name = object.Name ?? "";
    message.Rbac = object.Rbac ?? "";
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
