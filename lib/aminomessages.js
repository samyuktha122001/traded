"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFiAminoConverters = void 0;
const identity = (value) => (value);
const createFiAminoConverters = () => {
    return {
        '/trade.track.MsgPopcodeMint': {
            aminoType: 'track/PopcodeMint',
            toAmino: identity,
            fromAmino: identity,
        }
    };
};
exports.createFiAminoConverters = createFiAminoConverters;
//# sourceMappingURL=aminomessages.js.map