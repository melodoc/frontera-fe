import { IHttpBinResponse } from './IHttpBinResponse';

export const generateTokenFromResponse = (responseObj: IHttpBinResponse) => {
  const { headers } = responseObj;
  const { json } = responseObj;

  const tokenObj = {
    Authorization: `Bearer ${Math.random().toString(36).substring(7)}`,
    'Content-Type': headers['Content-Type'],
    'User-Agent': headers['User-Agent'],
    'X-Token': headers['X-Token'],
    JSON: json
  };

  return JSON.stringify(tokenObj);
};
