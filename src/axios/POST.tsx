import axios, { AxiosResponse } from "axios";

export const POST = async (uri: string, data: any) => {
  try {
    let res: AxiosResponse;
    res = await axios.post(`${process.env.BASE_URL}${uri}`, data);
    console.log(`${uri} - POST Success`);
    return res;
  } catch (err) {
    console.log(`${uri} - POST Fail`, err);
    return err;
  }
};
