const identity = <T>(value: T) : T => (value);
  
export const createFiAminoConverters = () => {
    return {
      '/trade.track.MsgPopcodeMint': {
        aminoType: 'track/PopcodeMint',
        toAmino: identity,
        fromAmino: identity,
      }
    };
}