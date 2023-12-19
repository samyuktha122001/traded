import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "trade.track";
export interface Hook {
    Name: string;
    Rbac: string;
}
export declare const Hook: {
    encode(message: Hook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Hook;
    fromJSON(object: any): Hook;
    toJSON(message: Hook): unknown;
    create<I extends {
        Name?: string | undefined;
        Rbac?: string | undefined;
    } & {
        Name?: string | undefined;
        Rbac?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Hook>]: never; }>(base?: I | undefined): Hook;
    fromPartial<I_1 extends {
        Name?: string | undefined;
        Rbac?: string | undefined;
    } & {
        Name?: string | undefined;
        Rbac?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Hook>]: never; }>(object: I_1): Hook;
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
