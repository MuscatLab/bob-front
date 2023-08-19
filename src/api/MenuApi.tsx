import { GET } from "@/axios/GET";
import { POST } from "@/axios/POST";

export const getAllMenu = async () => {
  try {
    const data = await GET("/menus");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const postCart = async (body: any) => {
  try {
    const data = await POST("/payments/receipt/1", body);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
