import axios from "axios";

function httpClient(baseURL) {
  const baseClient = axios.create({
    baseURL,
    timeout: 10000,
  });
  baseClient.interceptors.request.use(async (request) => {
    const user = await JSON.parse(localStorage.getItem("authUser"));
    console.log(user);
    const accessToken = user.token;
    return {
      ...request,
      headers: {
        ...request.headers,
        ...(accessToken ? { Authorization: `bearer ${accessToken}` } : {}),
      },
    };
  });

  return baseClient;
}

export const client = httpClient("https://ah.egroup.co.ke/shop/portal/api");
