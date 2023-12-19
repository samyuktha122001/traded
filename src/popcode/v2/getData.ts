import axios from 'axios';
import { getAuthorizationHeader } from '../../utils/auth';

// Importing various API endpoints and constants
import { chainUrlPath, orgInfoUrl, userInfoUrl } from '../../v2/api';

/**
 * Retrieves data from multiple endpoints and processes it.
 * @param baseUrl - baseUrl - CMS URL.
 * @param userApiKey - User's API key for authorization.
 * @param name - Name of the asset.
 * @param amount - Amount of the asset.
 * @param unitOfMeasure - Unit of measure for the asset.
 * @returns - An object containing processed data - Info of organisation, user, chain, multiAddress, multiPublicKey, channelId and other related data.
 */

export const getData = async (
  baseUrl: string,
  userApiKey: string,
  templateId: string,
  xSkuchainSession: any,
): Promise<any> => {

  // userInfo API
  const userData = await axios.get(`${baseUrl}${userInfoUrl}`, {
    headers: { Authorization: `users API-Key ${userApiKey}` }
  });
  const userInfo = userData.data;

  const tenantDetails = JSON.parse(userData?.data?.user?.tenants?.value);
  const { domainUrl } = tenantDetails;

  // OrgInfo API
  const orgData = await axios.get(`${baseUrl}${orgInfoUrl}${domainUrl}`, {
    headers: getAuthorizationHeader(userApiKey, userInfo?.user?.tenants?.value)
  });
  const orgInfo = orgData.data;

  // chain info API
  const chainInfo = await axios.get(`${baseUrl}${chainUrlPath}`, {
    headers: getAuthorizationHeader(userApiKey, userInfo?.user?.tenants?.value)
  });
  const chainData = chainInfo.data;

  let template;

  try {
    const templateResponse = await axios.get(`${baseUrl}/track/get-template/${templateId}`, {
      headers: { Authorization: `users API-Key ${userApiKey}`, 'X-Skuchain-Session': xSkuchainSession }
    });

    template = templateResponse.data[0];

  } catch (error) {
    console.error("Error fetching template:", error);
  }


  return {
    userInfo,
    orgInfo,
    chainData,
    template: template.value
  };
};
