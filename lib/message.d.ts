import { GeneratedType, EncodeObject } from 'skud-client-base/lib/cosmjs/proto-signing';
import { MsgPopcodeMint } from './ts_proto/tx';
export declare const getTypeUrl: (type: string) => string;
export declare const trackTypes: ReadonlyArray<[string, GeneratedType]>;
export interface MsgPopcodeMintEncodeObject extends EncodeObject {
    readonly typeUrl: '/trade.track.MsgPopcodeMint';
    readonly value: Partial<MsgPopcodeMint>;
}
export declare const isMsgPopcodeMintEncodeObject: (encodeObject: EncodeObject) => encodeObject is MsgPopcodeMintEncodeObject;
