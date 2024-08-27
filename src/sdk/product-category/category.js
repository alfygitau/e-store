import { client } from "../client/client";

export const createCategory = async (payload) => {
  try {
    const response = await client.post("/category/create", payload);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await client.get("/category");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
