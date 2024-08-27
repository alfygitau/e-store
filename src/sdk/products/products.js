import { client } from "../client/client";

export const createProduct = async () => {
  try {
    const response = await client.post("/product/create", payload);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
