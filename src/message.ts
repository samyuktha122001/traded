import { GeneratedType, EncodeObject } from 'skud-client-base/lib/cosmjs/proto-signing';
import { MsgPopcodeMint } from './ts_proto/tx';
import { protobufPackage } from './ts_proto/tx';

export const getTypeUrl = (type: string) => {
   return `/${protobufPackage}/${type}`;
};
export const trackTypes: ReadonlyArray<[string, GeneratedType]> = [
   ['/trade.track.MsgPopcodeMint', MsgPopcodeMint]
];


export interface MsgPopcodeMintEncodeObject extends EncodeObject {
   readonly typeUrl: '/trade.track.MsgPopcodeMint';
   readonly value: Partial<MsgPopcodeMint>;
}

export const isMsgPopcodeMintEncodeObject = (encodeObject: EncodeObject): encodeObject is MsgPopcodeMintEncodeObject => {
   return (encodeObject as MsgPopcodeMintEncodeObject).typeUrl ===  '/trade.track.MsgPopcodeMint';
}