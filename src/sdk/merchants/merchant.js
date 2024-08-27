import { client } from "../client/client";

export const addMerchant = async (payload) => {
  try {
    const response = await client.post("/merchant/create", payload);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
