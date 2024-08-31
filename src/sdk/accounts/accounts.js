import { client } from "../client/client";

export const getAccounts = async () => {
  try {
    const response = await client.get("/accounts");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
