/**
 * Retrieves data from multiple endpoints and processes it.
 * @param baseUrl - baseUrl - CMS URL.
 * @param userApiKey - User's API key for authorization.
 * @param name - Name of the asset.
 * @param amount - Amount of the asset.
 * @param unitOfMeasure - Unit of measure for the asset.
 * @returns - An object containing processed data - Info of organisation, user, chain, multiAddress, multiPublicKey, channelId and other related data.
 */
export declare const getData: (baseUrl: string, userApiKey: string, name: string, amount: string, unitOfMeasure: string) => Promise<any>;
