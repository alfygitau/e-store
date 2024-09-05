import React, { useEffect, useState } from "react";
import { orders } from "../../static/orders";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getOrders } from "../../sdk/orders/orders";

const Orders = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("2024-07-31");
  const [endDate, setEndDate] = useState("2024-07-31");

  const [allOrders, setAllOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await getOrders();
      setAllOrders(response.data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div className="p-[20px] w-full h-full overflow-y-auto">
      <p>Orders</p>
      <div className="h-[120px] px-[20px] flex items-center justify-between bg-white w-full border my-[20px]">
        <div className="flex items-center gap-[15px]">
          <button className="bg-white border px-[20px] h-[45px] text-[#000] flex items-center justify-center gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M42 27c0 6-4 16-18 16S6 33 6 27M24.008 5.1V33M12 17L24 5l12 12"
              />
            </svg>
            View order summary
          </button>
        </div>
        <div className="flex items-center gap-[15px]">
          <button
            onClick={() => navigate("/dashboard/add-product")}
            className="bg-[#12B981] px-[20px] h-[45px] text-[#fff] flex items-center justify-center gap-[10px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M12 11a1 1 0 0 1 1 1v6.584l1.293-1.292a1 1 0 0 1 1.414 1.416l-2.824 2.819c-.253.252-.5.473-.883.473c-.336 0-.566-.169-.788-.38l-2.919-2.912a1 1 0 0 1 1.414-1.416L11 18.584V12a1 1 0 0 1 1-1m-.5-9c2.784 0 5.16 1.75 6.086 4.212a6.003 6.003 0 0 1 .395 11.453a3 3 0 0 0-.858-1.785a3 3 0 0 0-1.914-.873L15 15v-3a3 3 0 0 0-5.995-.176L9 12v3a3 3 0 0 0-2.123.88a3 3 0 0 0-.875 2.02A5.002 5.002 0 0 1 5 8.416A6.5 6.5 0 0 1 11.5 2"
                />
              </g>
            </svg>
            Download all orders
          </button>
        </div>
      </div>
      <div className="h-[200px] p-[15px] flex flex-wrap justify-between bg-white w-full border my-[20px]">
        <div className="w-[30%] pb-0 mb-0 flex flex-col">
          <p>Search by customer name</p>
          <input
            type="text"
            placeholder="Search a customer(s) name"
            class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
          />
        </div>
        <div className="w-[30%] flex flex-col">
          <p>Order status</p>
          <select
            type="text"
            placeholder="Search a product(s)"
            class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
          >
            <option value="">Select a staus</option>
            <option value="delivered">Delivered</option>
            <option value="cancel">Cancelled</option>
          </select>
        </div>
        <div className="w-[30%] flex flex-col">
          <p>Method of payment</p>
          <select
            type="text"
            placeholder="Search a product(s)"
            class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
          >
            <option value="">Select a method of payment</option>
            <option value="card">Card</option>
            <option value="cash">Cash</option>
            <option value="credit">Credit</option>
          </select>
        </div>
        <div className="w-[30%] flex flex-col">
          <p>Start date</p>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
          />
        </div>
        <div className="w-[30%] flex flex-col">
          <p>Start date</p>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
          />
        </div>
        <div className="w-[30%] flex items-center justify-between">
          <button className="h-[50px] mt-[10px] bg-[#057856] px-[20px] text-white w-[45%]">
            Filter
          </button>
          <button className="h-[50px] mt-[10px] bg-[#E6E7EB] px-[20px] text-[#000] w-[45%]">
            Reset
          </button>
        </div>
      </div>
      <div className="border bg-white p-[10px]">
        <div className="flex font-bold border-b-2 h-[55px] items-center">
          <p className="w-[5%]">Id</p>
          <p className="w-[20%]">Order Date</p>
          <p className="w-[17%]">Customer</p>
          <p className="w-[10%]">Merchant</p>
          <p className="w-[10%]">Method</p>
          <p className="w-[15%]">Amount</p>
          <p className="w-[10%]">Status</p>
          <p className="w-[13%]">Action</p>
        </div>
        {allOrders?.map((order) => (
          <div className="flex text-[14px] border-b h-[55px] items-center">
            <p className="w-[5%]">{order?.orderId}</p>
            <p className="w-[20%]">{order.createdAt}</p>
            <p className="w-[17%]">{order.customer?.firstName} {order?.customer?.lastName}</p>
            <p className="w-[10%]">{order?.merchant?.businessName}</p>
            <p className="w-[10%]">{order.paymentMethod}</p>
            <p className="w-[15%]">{order.charge}</p>
            <p className="w-[10%]">{order.orderStatus}</p>
            <div className="w-[13%] flex items-center gap-[10px] truncate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="cursor-pointer"
                onClick={() => navigate(`/dashboard/orders/${order.orderId}`)}
              >
                <g fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M20.188 10.934c.388.472.582.707.582 1.066c0 .359-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066c0-.359.194-.594.582-1.066C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934Z" />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="m18.412 6.5l-.801 13.617A2 2 0 0 1 15.614 22H8.386a2 2 0 0 1-1.997-1.883L5.59 6.5H3.5v-1A.5.5 0 0 1 4 5h16a.5.5 0 0 1 .5.5v1zM10 2.5h4a.5.5 0 0 1 .5.5v1h-5V3a.5.5 0 0 1 .5-.5M9 9l.5 9H11l-.4-9zm4.5 0l-.5 9h1.5l.5-9z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
