"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const axios_1 = __importDefault(require("axios"));
const auth_1 = require("../../utils/auth");
// Importing various API endpoints and constants
const api_1 = require("../../v2/api");
/**
 * Retrieves data from multiple endpoints and processes it.
 * @param baseUrl - baseUrl - CMS URL.
 * @param userApiKey - User's API key for authorization.
 * @param name - Name of the asset.
 * @param amount - Amount of the asset.
 * @param unitOfMeasure - Unit of measure for the asset.
 * @returns - An object containing processed data - Info of organisation, user, chain, multiAddress, multiPublicKey, channelId and other related data.
 */
const getData = (baseUrl, userApiKey, templateId, xSkuchainSession) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g;
    // userInfo API
    const userData = yield axios_1.default.get(`${baseUrl}${api_1.userInfoUrl}`, {
        headers: { Authorization: `users API-Key ${userApiKey}` }
    });
    const userInfo = userData.data;
    const tenantDetails = JSON.parse((_c = (_b = (_a = userData === null || userData === void 0 ? void 0 : userData.data) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.tenants) === null || _c === void 0 ? void 0 : _c.value);
    const { domainUrl } = tenantDetails;
    // OrgInfo API
    const orgData = yield axios_1.default.get(`${baseUrl}${api_1.orgInfoUrl}${domainUrl}`, {
        headers: (0, auth_1.getAuthorizationHeader)(userApiKey, (_e = (_d = userInfo === null || userInfo === void 0 ? void 0 : userInfo.user) === null || _d === void 0 ? void 0 : _d.tenants) === null || _e === void 0 ? void 0 : _e.value)
    });
    const orgInfo = orgData.data;
    // chain info API
    const chainInfo = yield axios_1.default.get(`${baseUrl}${api_1.chainUrlPath}`, {
        headers: (0, auth_1.getAuthorizationHeader)(userApiKey, (_g = (_f = userInfo === null || userInfo === void 0 ? void 0 : userInfo.user) === null || _f === void 0 ? void 0 : _f.tenants) === null || _g === void 0 ? void 0 : _g.value)
    });
    const chainData = chainInfo.data;
    let template;
    try {
        const templateResponse = yield axios_1.default.get(`${baseUrl}/track/get-template/${templateId}`, {
            headers: { Authorization: `users API-Key ${userApiKey}`, 'X-Skuchain-Session': xSkuchainSession }
        });
        template = templateResponse.data[0];
    }
    catch (error) {
        console.error("Error fetching template:", error);
    }
    return {
        userInfo,
        orgInfo,
        chainData,
        template: template.value
    };
});
exports.getData = getData;
//# sourceMappingURL=getData.js.map