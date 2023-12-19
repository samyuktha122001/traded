import Long from "long";
import _m0 from "protobufjs/minimal";
import { Rule } from "./rule";
export declare const protobufPackage = "trade.track";
export interface Rules {
    OnChain: Rule[];
    PreChain: Rule[];
    PostChain: Rule[];
}
export declare const Rules: {
    encode(message: Rules, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Rules;
    fromJSON(object: any): Rules;
    toJSON(message: Rules): unknown;
    create<I extends {
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
        } & { [K in Exclude<keyof I["OnChain"][number], keyof Rule>]: never; })[] & { [K_1 in Exclude<keyof I["OnChain"], keyof {
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
        } & { [K_2 in Exclude<keyof I["PreChain"][number], keyof Rule>]: never; })[] & { [K_3 in Exclude<keyof I["PreChain"], keyof {
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
        } & { [K_4 in Exclude<keyof I["PostChain"][number], keyof Rule>]: never; })[] & { [K_5 in Exclude<keyof I["PostChain"], keyof {
            Name?: string | undefined;
            Params?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, keyof Rules>]: never; }>(base?: I | undefined): Rules;
    fromPartial<I_1 extends {
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
        } & { [K_7 in Exclude<keyof I_1["OnChain"][number], keyof Rule>]: never; })[] & { [K_8 in Exclude<keyof I_1["OnChain"], keyof {
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
        } & { [K_9 in Exclude<keyof I_1["PreChain"][number], keyof Rule>]: never; })[] & { [K_10 in Exclude<keyof I_1["PreChain"], keyof {
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
        } & { [K_11 in Exclude<keyof I_1["PostChain"][number], keyof Rule>]: never; })[] & { [K_12 in Exclude<keyof I_1["PostChain"], keyof {
            Name?: string | undefined;
            Params?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof Rules>]: never; }>(object: I_1): Rules;
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
