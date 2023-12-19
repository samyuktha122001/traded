"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthorizationHeader = void 0;
const getAuthorizationHeader = (userApiKey, xSku) => {
    return {
        Authorization: `users API-Key ${userApiKey}`,
        'x-skuchain-session': xSku
    };
};
exports.getAuthorizationHeader = getAuthorizationHeader;
//# sourceMappingURL=auth.js.map