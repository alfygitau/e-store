import axios from "axios";

export const authLogin = async (username, password) => {
  try {
    const response = await axios.post(
      "https://ah.egroup.co.ke/shop/portal/api/auth/request",
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (e) {
    return new Error(e);
  }
};
