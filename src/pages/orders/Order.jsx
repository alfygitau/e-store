import React from "react";
import { useParams } from "react-router-dom";
import { orders } from "../../static/orders";

const Order = () => {
  const { id } = useParams();
  let orderDetails = orders.find((order) => order.id == Number(id));

  return (
    <div className="w-full h-full p-[20px] overflow-y-auto">
      <p>#{orderDetails.id}</p>
    </div>
  );
};

export default Order;
