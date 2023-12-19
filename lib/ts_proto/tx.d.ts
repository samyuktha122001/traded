import Long from "long";
import _m0 from "protobufjs/minimal";
import { CounterTx } from "./counter_tx";
import { EnvelopeIBC } from "./envelope";
import { Hook } from "./hook";
import { Rules } from "./rules";
export declare const protobufPackage = "trade.track";
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
export declare const MsgPopcodeMint: {
    encode(message: MsgPopcodeMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPopcodeMint;
    fromJSON(object: any): MsgPopcodeMint;
    toJSON(message: MsgPopcodeMint): unknown;
    create<I extends {
        Creator?: string | undefined;
        CounterTx?: {
            Address?: string | undefined;
            Counter?: string | undefined;
            PrevCounter?: string | undefined;
            Document?: string | undefined;
            EventData?: string | undefined;
        } | undefined;
        Envelope?: {
            EventName?: string | undefined;
            TxType?: string | undefined;
            EncryptedFields?: boolean | undefined;
            SenderOrg?: string | undefined;
            ReceiverOrg?: string | undefined;
            Metadata?: string | undefined;
            ChainId?: string | undefined;
            Port?: string | undefined;
            ChannelID?: string | undefined;
            TimeoutTimestamp?: string | number | Long | undefined;
        } | undefined;
        Hooks?: {
            Name?: string | undefined;
            Rbac?: string | undefined;
        }[] | undefined;
        Rules?: {
            OnChain?: {
                Name?: string | undefined;
                Params?: string | undefined;
            }[] | undefined;
            PreChain?: {
                Name?: string | undefined;
                Params?: string | undefined;
            }[] | undefined;
            PostChain?: {
                Name?: string | undefined;
                Params?: string | undefined;
            }[] | undefined;
        } | undefined;
        Version?: string | undefined;
    } & {
        Creator?: string | undefined;
        CounterTx?: ({
            Address?: string | undefined;
            Counter?: string | undefined;
            PrevCounter?: string | undefined;
            Document?: string | undefined;
            EventData?: string | undefined;
        } & {
            Address?: string | undefined;
            Counter?: string | undefined;
            PrevCounter?: string | undefined;
            Document?: string | undefined;
            EventData?: string | undefined;
        } & { [K in Exclude<keyof I["CounterTx"], keyof CounterTx>]: never; }) | undefined;
        Envelope?: ({
            EventName?: string | undefined;
            TxType?: string | undefined;
            EncryptedFields?: boolean | undefined;
            SenderOrg?: string | undefined;
            ReceiverOrg?: string | undefined;
            Metadata?: string | undefined;
            ChainId?: string | undefined;
            Port?: string | undefined;
            ChannelID?: string | undefined;
            TimeoutTimestamp?: string | number | Long | undefined;
        } & {
            EventName?: string | undefined;
            TxType?: string | undefined;
            EncryptedFields?: boolean | undefined;
            SenderOrg?: string | undefined;
            ReceiverOrg?: string | undefined;
            Metadata?: string | undefined;
            ChainId?: string | undefined;
            Port?: string | undefined;
            ChannelID?: string | undefined;
            TimeoutTimestamp?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_1 in Exclude<keyof I["Envelope"]["TimeoutTimestamp"], keyof Long>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["Envelope"], keyof EnvelopeIBC>]: never; }) | undefined;
        Hooks?: ({
            Name?: string | undefined;
            Rbac?: string | undefined;
        }[] & ({
            Name?: string | undefined;
            Rbac?: string | undefined;
        } & {
            Name?: string | undefined;
            Rbac?: string | undefined;
        } & { [K_3 in Exclude<keyof I["Hooks"][number], keyof Hook>]: never; })[] & { [K_4 in Exclude<keyof I["Hooks"], keyof {
            Name?: string | undefined;
            Rbac?: string | undefined;
        }[]>]: never; }) | undefined;
        Rules?: ({
            OnChain?: {
                Name?: string | undefined;
                Params?: string | undefined;
            }[] | undefined;
            PreChain?: {
                Name?: string | undefined;
                Params?: string | undefined;
            }[] | undefined;
            PostChain?: {
                Name?: string | undefined;
                Params?: string | undefined;
            }[] | undefined;
        } & {
            OnChain?: ({
                Name?: string | undefined;
                Params?: string | undefined;
            }[] & ({
                Name?: string | undefined;
                Params?: string | undefined;
            } & {
                Name?: string | undefined;
                Params?: string | undefined;
            } & { [K_5 in Exclude<keyof I["Rules"]["OnChain"][number], keyof import("./rule").Rule>]: never; })[] & { [K_6 in Exclude<keyof I["Rules"]["OnChain"], keyof {
                Name?: string | undefined;
                Params?: string | undefined;
            }[]>]: never; }) | undefined;
            PreChain?: ({
                Name?: string | undefined;
                Params?: string | undefined;
            }[] & ({
                Name?: string | undefined;
                Params?: string | undefined;
            } & {
                Name?: string | undefined;
                Params?: string | undefined;
            } & { [K_7 in Exclude<keyof I["Rules"]["PreChain"][number], keyof import("./rule").Rule>]: never; })[] & { [K_8 in Exclude<keyof I["Rules"]["PreChain"], keyof {
                Name?: string | undefined;
                Params?: string | undefined;
            }[]>]: never; }) | undefined;
            PostChain?: ({
                Name?: string | undefined;
                Params?: string | undefined;
            }[] & ({
                Name?: string | undefined;
                Params?: string | undefined;
            } & {
                Name?: string | undefined;
                Params?: string | undefined;
            } & { [K_9 in Exclude<keyof I["Rules"]["PostChain"][number], keyof import("./rule").Rule>]: never; })[] & { [K_10 in Exclude<keyof I["Rules"]["PostChain"], keyof {
                Name?: string | undefined;
                Params?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["Rules"], keyof Rules>]: never; }) | undefined;
        Version?: string | undefined;
    } & { [K_12 in Exclude<keyof I, keyof MsgPopcodeMint>]: never; }>(base?: I | undefined): MsgPopcodeMint;
    fromPartial<I_1 extends {
        Creator?: string | undefined;
        CounterTx?: {
            Address?: string | undefined;
            Counter?: string | undefined;
            PrevCounter?: string | undefined;
            Document?: string | undefined;
            EventData?: string | undefined;
        } | undefined;
        Envelope?: {
            EventName?: string | undefined;
            TxType?: string | undefined;
            EncryptedFields?: boolean | undefined;
            SenderOrg?: string | undefined;
            ReceiverOrg?: string | undefined;
            Metadata?: string | undefined;
            ChainId?: string | undefined;
            Port?: string | undefined;
            ChannelID?: string | undefined;
            TimeoutTimestamp?: string | number | Long | undefined;
        } | undefined;
        Hooks?: {
            Name?: string | undefined;
            Rbac?: string | undefined;
        }[] | undefined;
        Rules?: {
            OnChain?: {
                Name?: string | undefined;
                Params?: string | undefined;
            }[] | undefined;
            PreChain?: {
                Name?: string | undefined;
                Params?: string | undefined;
            }[] | undefined;
            PostChain?: {
                Name?: string | undefined;
                Params?: string | undefined;
            }[] | undefined;
        } | undefined;
        Version?: string | undefined;
    } & {
        Creator?: string | undefined;
        CounterTx?: ({
            Address?: string | undefined;
            Counter?: string | undefined;
            PrevCounter?: string | undefined;
            Document?: string | undefined;
            EventData?: string | undefined;
        } & {
            Address?: string | undefined;
            Counter?: string | undefined;
            PrevCounter?: string | undefined;
            Document?: string | undefined;
            EventData?: string | undefined;
        } & { [K_13 in Exclude<keyof I_1["CounterTx"], keyof CounterTx>]: never; }) | undefined;
        Envelope?: ({
            EventName?: string | undefined;
            TxType?: string | undefined;
            EncryptedFields?: boolean | undefined;
            SenderOrg?: string | undefined;
            ReceiverOrg?: string | undefined;
            Metadata?: string | undefined;
            ChainId?: string | undefined;
            Port?: string | undefined;
            ChannelID?: string | undefined;
            TimeoutTimestamp?: string | number | Long | undefined;
        } & {
            EventName?: string | undefined;
            TxType?: string | undefined;
            EncryptedFields?: boolean | undefined;
            SenderOrg?: string | undefined;
            ReceiverOrg?: string | undefined;
            Metadata?: string | undefined;
            ChainId?: string | undefined;
            Port?: string | undefined;
            ChannelID?: string | undefined;
            TimeoutTimestamp?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_14 in Exclude<keyof I_1["Envelope"]["TimeoutTimestamp"], keyof Long>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I_1["Envelope"], keyof EnvelopeIBC>]: never; }) | undefined;
        Hooks?: ({
            Name?: string | undefined;
            Rbac?: string | undefined;
        }[] & ({
            Name?: string | undefined;
            Rbac?: string | undefined;
        } & {
            Name?: string | undefined;
            Rbac?: string | undefined;
        } & { [K_16 in Exclude<keyof I_1["Hooks"][number], keyof Hook>]: never; })[] & { [K_17 in Exclude<keyof I_1["Hooks"], keyof {
            Name?: string | undefined;
            Rbac?: string | undefined;
        }[]>]: never; }) | undefined;
        Rules?: ({
            OnChain?: {
                Name?: string | undefined;
                Params?: string | undefined;
            }[] | undefined;
            PreChain?: {
                Name?: string | undefined;
                Params?: string | undefined;
            }[] | undefined;
            PostChain?: {
                Name?: string | undefined;
                Params?: string | undefined;
            }[] | undefined;
        } & {
            OnChain?: ({
                Name?: string | undefined;
                Params?: string | undefined;
            }[] & ({
                Name?: string | undefined;
                Params?: string | undefined;
            } & {
                Name?: string | undefined;
                Params?: string | undefined;
            } & { [K_18 in Exclude<keyof I_1["Rules"]["OnChain"][number], keyof import("./rule").Rule>]: never; })[] & { [K_19 in Exclude<keyof I_1["Rules"]["OnChain"], keyof {
                Name?: string | undefined;
                Params?: string | undefined;
            }[]>]: never; }) | undefined;
            PreChain?: ({
                Name?: string | undefined;
                Params?: string | undefined;
            }[] & ({
                Name?: string | undefined;
                Params?: string | undefined;
            } & {
                Name?: string | undefined;
                Params?: string | undefined;
            } & { [K_20 in Exclude<keyof I_1["Rules"]["PreChain"][number], keyof import("./rule").Rule>]: never; })[] & { [K_21 in Exclude<keyof I_1["Rules"]["PreChain"], keyof {
                Name?: string | undefined;
                Params?: string | undefined;
            }[]>]: never; }) | undefined;
            PostChain?: ({
                Name?: string | undefined;
                Params?: string | undefined;
            }[] & ({
                Name?: string | undefined;
                Params?: string | undefined;
            } & {
                Name?: string | undefined;
                Params?: string | undefined;
            } & { [K_22 in Exclude<keyof I_1["Rules"]["PostChain"][number], keyof import("./rule").Rule>]: never; })[] & { [K_23 in Exclude<keyof I_1["Rules"]["PostChain"], keyof {
                Name?: string | undefined;
                Params?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_24 in Exclude<keyof I_1["Rules"], keyof Rules>]: never; }) | undefined;
        Version?: string | undefined;
    } & { [K_25 in Exclude<keyof I_1, keyof MsgPopcodeMint>]: never; }>(object: I_1): MsgPopcodeMint;
};
export declare const MsgPopcodeMintResponse: {
    encode(_: MsgPopcodeMintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPopcodeMintResponse;
    fromJSON(_: any): MsgPopcodeMintResponse;
    toJSON(_: MsgPopcodeMintResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): MsgPopcodeMintResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgPopcodeMintResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    PopcodeMint(request: MsgPopcodeMint): Promise<MsgPopcodeMintResponse>;
}
export declare const MsgServiceName = "trade.track.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    PopcodeMint(request: MsgPopcodeMint): Promise<MsgPopcodeMintResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
