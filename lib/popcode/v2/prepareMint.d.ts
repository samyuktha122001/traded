/**
 *   This is used to structure payload for minting popcode
 *
 * @param dlpcSetup - DLPC setup information including organization and user details.
 *
 * @returns A promise that resolves to `popcode_mint` which is a structured message object for minting popcode.
 *
 * @throws Will throw an error if the Axios API call fails.
 *
 * @remarks
 * - The function retrieves and parses the DLPC document from the provided setup.
 * - Then it prepares hash for particular message and data required to be signed.
 * - It then makes an API call to signHandler and extracts signatureInfo.
 * - The function then prepares the claim authorize document, envelope and other details.
 * - Finally, it structures the final message object for authorizing claim and returns it.
 */
export declare const prepareMintTx: (getData: any, mintData: any, popcodeAddress: any, location: {
    latitude: any;
    longitude: any;
}) => Promise<any>;
