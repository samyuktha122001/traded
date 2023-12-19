/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "trade.track";

export interface EnvelopeIBC {
  EventName: string;
  TxType: string;
  EncryptedFields: boolean;
  SenderOrg: string;
  ReceiverOrg: string;
  Metadata: string;
  ChainId: string;
  Port: string;
  ChannelID: string;
  TimeoutTimestamp: Long;
}

function createBaseEnvelopeIBC(): EnvelopeIBC {
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
    TimeoutTimestamp: Long.UZERO,
  };
}

export const EnvelopeIBC = {
  encode(message: EnvelopeIBC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EnvelopeIBC {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.TimeoutTimestamp = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnvelopeIBC {
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
      TimeoutTimestamp: isSet(object.TimeoutTimestamp) ? Long.fromValue(object.TimeoutTimestamp) : Long.UZERO,
    };
  },

  toJSON(message: EnvelopeIBC): unknown {
    const obj: any = {};
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
      obj.TimeoutTimestamp = (message.TimeoutTimestamp || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnvelopeIBC>, I>>(base?: I): EnvelopeIBC {
    return EnvelopeIBC.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnvelopeIBC>, I>>(object: I): EnvelopeIBC {
    const message = createBaseEnvelopeIBC();
    message.EventName = object.EventName ?? "";
    message.TxType = object.TxType ?? "";
    message.EncryptedFields = object.EncryptedFields ?? false;
    message.SenderOrg = object.SenderOrg ?? "";
    message.ReceiverOrg = object.ReceiverOrg ?? "";
    message.Metadata = object.Metadata ?? "";
    message.ChainId = object.ChainId ?? "";
    message.Port = object.Port ?? "";
    message.ChannelID = object.ChannelID ?? "";
    message.TimeoutTimestamp = (object.TimeoutTimestamp !== undefined && object.TimeoutTimestamp !== null)
      ? Long.fromValue(object.TimeoutTimestamp)
      : Long.UZERO;
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
