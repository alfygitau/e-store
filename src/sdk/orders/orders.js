import { client } from "../client/client";

export const getOrders = async () => {
  try {
    const response = await client.get(
      "https://ah.egroup.co.ke/shop/portal/api/order"
    );
    return response;
  } catch (error) {
    return new Error(error);
  }
};

export const getOrder = async (orderId) => {
  try {
    const response = await client.get(
      `https://ah.egroup.co.ke/shop/portal/api/order/get/${orderId}`
    );
    return response;
  } catch (error) {
    return new Error(error);
  }
};

export const getOrdersStatistics = async () => {
  try {
    const response = await client.get(
      `https://ah.egroup.co.ke/shop/portal/api/order/statistics`
    );
    return response;
  } catch (error) {
    return new Error(error);
  }
};
