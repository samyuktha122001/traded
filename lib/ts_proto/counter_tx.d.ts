import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "trade.track";
export interface CounterTx {
    Address: string;
    Counter: string;
    PrevCounter: string;
    Document: string;
    EventData: string;
}
export declare const CounterTx: {
    encode(message: CounterTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CounterTx;
    fromJSON(object: any): CounterTx;
    toJSON(message: CounterTx): unknown;
    create<I extends {
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
    } & { [K in Exclude<keyof I, keyof CounterTx>]: never; }>(base?: I | undefined): CounterTx;
    fromPartial<I_1 extends {
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
    } & { [K_1 in Exclude<keyof I_1, keyof CounterTx>]: never; }>(object: I_1): CounterTx;
};
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
