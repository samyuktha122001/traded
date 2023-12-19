"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeStamp = void 0;
const getTimeStamp = () => {
    return (new Date().getTime() + 3600 * 1000) * 1000000 + "";
};
exports.getTimeStamp = getTimeStamp;
//# sourceMappingURL=utils.js.map