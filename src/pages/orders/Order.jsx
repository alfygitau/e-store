import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { orders } from "../../static/orders";
import { toast } from "react-toastify";
import { getOrder } from "../../sdk/orders/orders";

const Order = () => {
  const { id } = useParams();

  const [orderDetails, setOrderDetails] = useState({});

  const fetchOrder = async () => {
    try {
      const response = await getOrder(id);
      setOrderDetails(response.data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [id]);

  return (
    <div className="w-full h-full p-[20px] overflow-y-auto">
      <div className="mb-[20px] flex items-center justify-between">
        <p className="font-bold text-[15px]">Order details</p>
        <button className="h-[40px] bg-[#12B981] text-[13px] px-[20px] text-white rounded">
          Update order
        </button>
      </div>
      <div className="h-[300px] w-full bg-white p-[10px]">
        <div className="flex h-full flex-col justify-around">
          <div className="flex items-center gap-[20px]">
            <p className="text-[14px] text-gray-500">Order Id</p>
            <p className="text-[14px] font-semibold">{orderDetails.orderId}</p>
          </div>
          <div className="flex items-center gap-[20px]">
            <p className="text-[14px] text-gray-500">Order charge</p>
            <p className="text-[14px] font-semibold">{orderDetails.charge}</p>
          </div>
          <div className="flex items-center gap-[20px]">
            <p className="text-[14px] text-gray-500">Order status</p>
            <p className="text-[14px] font-semibold">
              {orderDetails.orderStatus}
            </p>
          </div>
          <div className="flex items-center gap-[20px]">
            <p className="text-[14px] text-gray-500">Order payment method</p>
            <p className="text-[14px] font-semibold">
              {orderDetails.paymentMethod}
            </p>
          </div>
          <div className="flex items-center gap-[20px]">
            <p className="text-[14px] text-gray-500">Order payment status</p>
            <p className="text-[14px] font-semibold">
              {orderDetails.paymentStatus}
            </p>
          </div>
          <div className="flex items-center gap-[20px]">
            <p className="text-[14px] text-gray-500">Created at</p>
            <p className="text-[14px] font-semibold">
              {orderDetails.createdAt}
            </p>
          </div>
          <div className="flex items-center gap-[20px]">
            <p className="text-[14px] text-gray-500">Updated at</p>
            <p className="text-[14px] font-semibold">
              {orderDetails.updatedAt}
            </p>
          </div>
        </div>
      </div>
      <p className="my-[20px] font-bold text-[15px]">Merchant shop details</p>
      <div className="h-[200px] w-full bg-white p-[10px]">
        <div className="flex h-full flex-col justify-around">
          <div className="flex items-center gap-[20px]">
            <p className="text-[14px] text-gray-500">Merchant Id</p>
            <p className="text-[14px] font-semibold">
              {orderDetails?.merchant?.merchantId}
            </p>
          </div>
          <div className="flex items-center gap-[20px]">
            <p className="text-[14px] text-gray-500">Merchant Business Name</p>
            <p className="text-[14px] font-semibold">
              {orderDetails?.merchant?.businessName}
            </p>
          </div>
          <div className="flex items-center gap-[20px]">
            <p className="text-[14px] text-gray-500">Merchant Business Type</p>
            <p className="text-[14px] font-semibold">
              {orderDetails?.merchant?.merchantType}
            </p>
          </div>
          <div className="flex items-center gap-[20px]">
            <p className="text-[14px] text-gray-500">
              Merchant Subscription Status
            </p>
            <p className="text-[14px] font-semibold">
              {orderDetails?.merchant?.subscriptionStatus}
            </p>
          </div>
        </div>
      </div>
      <p className="my-[20px] font-bold text-[15px]">Order products</p>
      <div>
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                Product title
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                Product desc.
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                Product quantity
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                Product price
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                Product discount
              </th>
            </tr>
          </thead>
          <tbody>
            {orderDetails?.orderItems?.length > 0 &&
              orderDetails?.orderItems?.map((item) => (
                <tr>
                  <td class="px-6 py-4 border border-gray-300">
                    {item?.title} {item?.last_name}
                  </td>
                  <td class="px-6 py-4 border border-gray-300">
                    {item?.description}
                  </td>
                  <td class="px-6 py-4 border border-gray-300">
                    {item?.quantity}
                  </td>
                  <td class="px-6 py-4 border border-gray-300">
                    {item?.price}
                  </td>
                  <td class="px-6 py-4 border border-gray-300">
                    {item?.discount}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <p className="my-[20px] font-bold text-[15px]">Order shipping address</p>
      <div></div>
    </div>
  );
};

export default Order;
