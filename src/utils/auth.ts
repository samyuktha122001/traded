export const getAuthorizationHeader = (userApiKey: any, xSku: any) => {
  return {
    Authorization: `users API-Key ${userApiKey}`,
    'x-skuchain-session': xSku
  };
};
