import { client } from "../client/client";

export const addMerchant = async (payload) => {
  try {
    const response = await client.post("/merchant/create", payload);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMerchants = async () => {
  try {
    const response = await client.get("/merchant");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAMerchant = async (id) => {
  try {
    const response = await client.get(`/merchant/get/${id}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
