import axios, { AxiosResponse } from "axios";

export const GET = async (uri: string): Promise<any | null> => {
  try {
    let res: AxiosResponse;
    res = await axios.get(`${process.env.BASE_URL}${uri}`);
    console.log(`${uri} - GET Success`);
    return res.data;
  } catch (err) {
    console.log(`${uri} - GET Fail`, err);
    return err;
  }
};
