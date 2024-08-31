import { client } from "../client/client";

export const getCounties = async () => {
  try {
    const response = await client.get("/county");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
