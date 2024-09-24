import { client } from "../client/client";

export const createProduct = async (payload) => {
  try {
    const response = await client.post("/product/create-batch", payload);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const editProduct = async (id, payload) => {
  try {
    const response = await client.post(`/product/update/${id}`, payload);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getProducts = async () => {
  try {
    const response = await client.get("/product");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await client.get(`/product/get/${id}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
