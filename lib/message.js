"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMsgPopcodeMintEncodeObject = exports.trackTypes = exports.getTypeUrl = void 0;
const tx_1 = require("./ts_proto/tx");
const tx_2 = require("./ts_proto/tx");
const getTypeUrl = (type) => {
    return `/${tx_2.protobufPackage}/${type}`;
};
exports.getTypeUrl = getTypeUrl;
exports.trackTypes = [
    ['/trade.track.MsgPopcodeMint', tx_1.MsgPopcodeMint]
];
const isMsgPopcodeMintEncodeObject = (encodeObject) => {
    return encodeObject.typeUrl === '/trade.track.MsgPopcodeMint';
};
exports.isMsgPopcodeMintEncodeObject = isMsgPopcodeMintEncodeObject;
//# sourceMappingURL=message.js.map