import { client } from "../client/client";

export const getUsers = async () => {
  try {
    const response = await client.get("/users");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
