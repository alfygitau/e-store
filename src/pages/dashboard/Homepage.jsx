import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { orders } from "../../static/orders";
import { toast } from "react-toastify";
import { getOrders, getOrdersStatistics } from "../../sdk/orders/orders";

const Homepage = () => {
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalPendingOrders, setTotalPendingOrders] = useState(0);
  const [totalProcessingOrders, setTotalProcessingOrders] = useState(0);
  const [totalDeliveredOrders, setTotalDeliveredOrders] = useState(0);

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

  const data = [
    {
      name: "Jan",
      sales: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      sales: 1398,
      amt: 2210,
    },
    {
      name: "March",
      sales: 9800,
      amt: 2290,
    },
    {
      name: "April",
      sales: 3908,
      amt: 2000,
    },
    {
      name: "May",
      sales: 4800,
      amt: 2181,
    },
    {
      name: "June",
      sales: 3800,
      amt: 2500,
    },
    {
      name: "July",
      sales: 4300,
      amt: 2100,
    },
  ];

  const data1 = [
    { name: "Mower", value: 400 },
    { name: "Fertilizer", value: 300 },
    { name: "Green house", value: 300 },
    { name: "Jembe", value: 200 },
    { name: "Sand Spade", value: 70 },
    { name: "Fork", value: 400 },
    { name: "Coil", value: 20 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#0591B2",
    "#04966A",
    "#E53E3E",
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        className="text-[12px] font-bold"
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const LabelBar = () => (
    <div
      className=" flex-wrap w-[80%] mx-auto"
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      {data1.map((entry, index) => (
        <div
          key={`label-bar-${index}`}
          style={{ marginRight: "20px", display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: COLORS[index % COLORS.length],
              marginRight: "5px",
            }}
            key={`color-box-${index}`}
          />
          <span className="text-[12px]" key={`label-text-${index}`}>
            {entry.name}
          </span>
        </div>
      ))}
    </div>
  );

  const fetchOrderStats = async () => {
    try {
      const response = await getOrdersStatistics();
      setTotalOrders(response.data.message.totalOrders);
      setTotalPendingOrders(response.data.message.totalPending);
      setTotalProcessingOrders(response.data.message.totalProcessing);
      setTotalDeliveredOrders(response.data.message.totalDelivered);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchOrderStats();
  }, []);
  return (
    <div className="h-full overflow-y-auto p-[20px] w-full">
      <p className="text-[18px] font-bold mb-[10px]">Dashboard Overview</p>
      <div className="flex items-center mb-[40px] gap-[10px] overflow-x-auto scrollbar-hide">
        <div className="h-[200px] min-w-[320px] rounded bg-[#0B9488] text-white p-[10px] flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M13.039 3.582c-.6-.313-1.423-.318-2.027-.006c-2.578 1.332-4.915 2.858-6.96 4.548c-.274.226-.454.541-.451.902c.003.36.188.671.46.894c2.029 1.66 4.368 3.187 6.9 4.508c.6.313 1.423.318 2.027.006c2.578-1.332 4.915-2.858 6.96-4.548c.274-.226.454-.541.451-.902c-.003-.36-.188-.671-.46-.894c-2.029-1.66-4.368-3.187-6.9-4.508"
            />
            <path
              fill="#fff"
              d="M20.958 13.731a.75.75 0 1 0-.794-1.272l-6.108 3.813c-.544.34-1.283.529-2.056.529c-.774 0-1.513-.19-2.057-.529l-6.04-3.77a.75.75 0 0 0-.794 1.273l6.04 3.77c.829.517 1.857.756 2.85.756c.995 0 2.023-.24 2.852-.757z"
            />
            <path
              fill="#fff"
              d="M20.958 17.486a.75.75 0 1 0-.794-1.272l-5.29 3.303c-.772.482-1.806.743-2.874.743s-2.102-.26-2.875-.743l-5.222-3.26a.75.75 0 1 0-.795 1.273l5.222 3.26c1.058.66 2.381.97 3.67.97c1.289 0 2.611-.31 3.67-.971z"
            />
          </svg>
          <div className="mb-[10px]">
            <p className="text-center">Today's orders</p>
            <p className="text-[20px] text-center font-bold">KSH. 0.00</p>
          </div>
          <div className="flex w-[90%] mx-auto justify-between">
            <div className="flex flex-col">
              <p className="text-[14px]">Cash</p>
              <p className="text-[12px] text-center font-bold">KSH. 0.00</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[14px]">Card</p>
              <p className="text-[12px] text-center font-bold">KSH. 0.00</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[14px]">Credit</p>
              <p className="text-[12px] text-center font-bold">KSH. 0.00</p>
            </div>
          </div>
        </div>
        <div className="h-[200px] min-w-[320px] rounded bg-[#FC923C] text-white p-[10px] flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M13.039 3.582c-.6-.313-1.423-.318-2.027-.006c-2.578 1.332-4.915 2.858-6.96 4.548c-.274.226-.454.541-.451.902c.003.36.188.671.46.894c2.029 1.66 4.368 3.187 6.9 4.508c.6.313 1.423.318 2.027.006c2.578-1.332 4.915-2.858 6.96-4.548c.274-.226.454-.541.451-.902c-.003-.36-.188-.671-.46-.894c-2.029-1.66-4.368-3.187-6.9-4.508"
            />
            <path
              fill="#fff"
              d="M20.958 13.731a.75.75 0 1 0-.794-1.272l-6.108 3.813c-.544.34-1.283.529-2.056.529c-.774 0-1.513-.19-2.057-.529l-6.04-3.77a.75.75 0 0 0-.794 1.273l6.04 3.77c.829.517 1.857.756 2.85.756c.995 0 2.023-.24 2.852-.757z"
            />
            <path
              fill="#fff"
              d="M20.958 17.486a.75.75 0 1 0-.794-1.272l-5.29 3.303c-.772.482-1.806.743-2.874.743s-2.102-.26-2.875-.743l-5.222-3.26a.75.75 0 1 0-.795 1.273l5.222 3.26c1.058.66 2.381.97 3.67.97c1.289 0 2.611-.31 3.67-.971z"
            />
          </svg>
          <div className="mb-[10px]">
            <p className="text-center">Yesterday's orders</p>
            <p className="text-[20px] text-center font-bold">KSH. 0.00</p>
          </div>
          <div className="flex w-[90%] mx-auto justify-between">
            <div className="flex flex-col">
              <p className="text-[14px]">Cash</p>
              <p className="text-[12px] text-center font-bold">KSH. 0.00</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[14px]">Card</p>
              <p className="text-[12px] text-center font-bold">KSH. 0.00</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[14px]">Credit</p>
              <p className="text-[12px] text-center font-bold">KSH. 0.00</p>
            </div>
          </div>
        </div>
        <div className="h-[200px] min-w-[320px] rounded bg-[#3B81F6] text-white p-[10px] flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M13.039 3.582c-.6-.313-1.423-.318-2.027-.006c-2.578 1.332-4.915 2.858-6.96 4.548c-.274.226-.454.541-.451.902c.003.36.188.671.46.894c2.029 1.66 4.368 3.187 6.9 4.508c.6.313 1.423.318 2.027.006c2.578-1.332 4.915-2.858 6.96-4.548c.274-.226.454-.541.451-.902c-.003-.36-.188-.671-.46-.894c-2.029-1.66-4.368-3.187-6.9-4.508"
            />
            <path
              fill="#fff"
              d="M20.958 13.731a.75.75 0 1 0-.794-1.272l-6.108 3.813c-.544.34-1.283.529-2.056.529c-.774 0-1.513-.19-2.057-.529l-6.04-3.77a.75.75 0 0 0-.794 1.273l6.04 3.77c.829.517 1.857.756 2.85.756c.995 0 2.023-.24 2.852-.757z"
            />
            <path
              fill="#fff"
              d="M20.958 17.486a.75.75 0 1 0-.794-1.272l-5.29 3.303c-.772.482-1.806.743-2.874.743s-2.102-.26-2.875-.743l-5.222-3.26a.75.75 0 1 0-.795 1.273l5.222 3.26c1.058.66 2.381.97 3.67.97c1.289 0 2.611-.31 3.67-.971z"
            />
          </svg>
          <div className="mb-[10px]">
            <p className="text-center">This month's orders</p>
            <p className="text-[20px] text-center font-bold">KSH. 0.00</p>
          </div>
          <div className="flex w-[90%] mx-auto justify-between">
            <div className="flex flex-col">
              <p className="text-[14px]">Cash</p>
              <p className="text-[12px] text-center font-bold">KSH. 0.00</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[14px]">Card</p>
              <p className="text-[12px] text-center font-bold">KSH. 0.00</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[14px]">Credit</p>
              <p className="text-[12px] text-center font-bold">KSH. 0.00</p>
            </div>
          </div>
        </div>
        <div className="h-[200px] min-w-[320px] rounded bg-[#0591B2] text-white p-[10px] flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M13.039 3.582c-.6-.313-1.423-.318-2.027-.006c-2.578 1.332-4.915 2.858-6.96 4.548c-.274.226-.454.541-.451.902c.003.36.188.671.46.894c2.029 1.66 4.368 3.187 6.9 4.508c.6.313 1.423.318 2.027.006c2.578-1.332 4.915-2.858 6.96-4.548c.274-.226.454-.541.451-.902c-.003-.36-.188-.671-.46-.894c-2.029-1.66-4.368-3.187-6.9-4.508"
            />
            <path
              fill="#fff"
              d="M20.958 13.731a.75.75 0 1 0-.794-1.272l-6.108 3.813c-.544.34-1.283.529-2.056.529c-.774 0-1.513-.19-2.057-.529l-6.04-3.77a.75.75 0 0 0-.794 1.273l6.04 3.77c.829.517 1.857.756 2.85.756c.995 0 2.023-.24 2.852-.757z"
            />
            <path
              fill="#fff"
              d="M20.958 17.486a.75.75 0 1 0-.794-1.272l-5.29 3.303c-.772.482-1.806.743-2.874.743s-2.102-.26-2.875-.743l-5.222-3.26a.75.75 0 1 0-.795 1.273l5.222 3.26c1.058.66 2.381.97 3.67.97c1.289 0 2.611-.31 3.67-.971z"
            />
          </svg>
          <div className="mb-[10px]">
            <p className="text-center">Last month's orders</p>
            <p className="text-[20px] text-center font-bold">KSH. 0.00</p>
          </div>
          <div className="flex w-[90%] mx-auto justify-between">
            <div className="flex flex-col">
              <p className="text-[14px]">Cash</p>
              <p className="text-[12px] text-center font-bold">KSH. 0.00</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[14px]">Card</p>
              <p className="text-[12px] text-center font-bold">KSH. 0.00</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[14px]">Credit</p>
              <p className="text-[12px] text-center font-bold">KSH. 0.00</p>
            </div>
          </div>
        </div>
        <div className="h-[200px] min-w-[320px] rounded bg-[#04966A] text-white p-[10px] flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M13.039 3.582c-.6-.313-1.423-.318-2.027-.006c-2.578 1.332-4.915 2.858-6.96 4.548c-.274.226-.454.541-.451.902c.003.36.188.671.46.894c2.029 1.66 4.368 3.187 6.9 4.508c.6.313 1.423.318 2.027.006c2.578-1.332 4.915-2.858 6.96-4.548c.274-.226.454-.541.451-.902c-.003-.36-.188-.671-.46-.894c-2.029-1.66-4.368-3.187-6.9-4.508"
            />
            <path
              fill="#fff"
              d="M20.958 13.731a.75.75 0 1 0-.794-1.272l-6.108 3.813c-.544.34-1.283.529-2.056.529c-.774 0-1.513-.19-2.057-.529l-6.04-3.77a.75.75 0 0 0-.794 1.273l6.04 3.77c.829.517 1.857.756 2.85.756c.995 0 2.023-.24 2.852-.757z"
            />
            <path
              fill="#fff"
              d="M20.958 17.486a.75.75 0 1 0-.794-1.272l-5.29 3.303c-.772.482-1.806.743-2.874.743s-2.102-.26-2.875-.743l-5.222-3.26a.75.75 0 1 0-.795 1.273l5.222 3.26c1.058.66 2.381.97 3.67.97c1.289 0 2.611-.31 3.67-.971z"
            />
          </svg>
          <div className="mb-[10px]">
            <p className="text-center">Total sales</p>
            <p className="text-[20px] text-center font-bold">KSH. 0.00</p>
          </div>
          <div className="flex w-[90%] mx-auto justify-between">
            <div className="flex flex-col">
              <p className="text-[14px]">Cash</p>
              <p className="text-[12px] text-center font-bold">KSH. 0.00</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[14px]">Card</p>
              <p className="text-[12px] text-center font-bold">KSH. 0.00</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[14px]">Credit</p>
              <p className="text-[12px] text-center font-bold">KSH. 0.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full mt-[20px] justify-between">
        <div className="h-[90px] bg-white px-[20px] w-[24%] border rounded flex items-center gap-[15px]">
          <div className="h-[60px] w-[60px] rounded-full bg-[#FFECD5] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-8.5-3h9.25L19 7H7.312"
              />
            </svg>
          </div>
          <div>
            <p className="text-[15px]">Total Orders</p>
            <p className="text-[26px] font-bold">{totalOrders}</p>
          </div>
        </div>
        <div className="h-[90px] bg-white px-[20px] w-[24%] border rounded flex items-center gap-[15px]">
          <div className="h-[60px] w-[60px] rounded-full bg-[#FFECD5] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M12.894 5.238a4 4 0 0 1-2.694 6.757L10 12l-3.293-.001l1.148 1.149a.5.5 0 0 1 .058.638l-.058.069a.5.5 0 0 1-.638.058l-.069-.058l-2.002-2.002a.5.5 0 0 1-.057-.638l.057-.069l2.002-2.002a.5.5 0 0 1 .765.638l-.058.07l-1.148 1.147H10a3 3 0 0 0 2.995-2.823L13 8a3 3 0 0 0-.866-2.109a.5.5 0 0 1 .688-.725zm-4.11-3.151l.07.057l2.001 2.002l.058.07a.5.5 0 0 1 0 .568l-.058.07l-2.001 2.001l-.07.058a.5.5 0 0 1-.568 0l-.07-.058l-.057-.07a.5.5 0 0 1 0-.568l.057-.07L9.294 5H6a3 3 0 0 0-2.995 2.824L3 8c0 .82.329 1.562.861 2.104a.5.5 0 0 1-.714.698A4 4 0 0 1 5.8 4.005L6 4l3.294-.001l-1.148-1.147l-.057-.07a.5.5 0 0 1 .695-.695"
              />
            </svg>
          </div>
          <div>
            <p className="text-[15px]">Orders Pending</p>
            <p className="text-[26px] font-bold">{totalPendingOrders}</p>
          </div>
        </div>
        <div className="h-[90px] bg-white px-[20px] w-[24%] border rounded flex items-center gap-[15px]">
          <div className="h-[60px] w-[60px] rounded-full bg-[#FFECD5] flex items-center justify-center">
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
                  d="M15 4a2 2 0 0 1 2 2v1h1.52a2 2 0 0 1 1.561.75l1.48 1.851a2 2 0 0 1 .439 1.25V15a2 2 0 0 1-2 2h-1a3 3 0 1 1-6 0h-3a3 3 0 1 1-6 0a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM7 16a1 1 0 1 0 0 2a1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m2.52-7H17v4h3v-2.15z"
                />
              </g>
            </svg>
          </div>
          <div>
            <p className="text-[15px]">Orders Processing</p>
            <p className="text-[26px] font-bold">{totalProcessingOrders}</p>
          </div>
        </div>
        <div className="h-[90px] bg-white px-[20px] w-[24%] border rounded flex items-center gap-[15px]">
          <div className="h-[60px] w-[60px] rounded-full bg-[#FFECD5] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                color="currentColor"
              >
                <circle cx="17" cy="19" r="2" />
                <circle cx="7" cy="19" r="2" />
                <path d="M2 9v4.947c0 2.382 0 3.573.732 4.313c.487.492 1.171.657 2.268.712M12.427 5c.913.3 1.63 1.024 1.926 1.947c.147.456.147 1.02.147 2.15c0 .752 0 1.128.098 1.432a2.01 2.01 0 0 0 1.284 1.298c.301.099.673.099 1.418.099H22v2.021c0 2.382 0 3.573-.732 4.313c-.487.492-1.171.657-2.268.712M9 19h6" />
                <path d="M14.5 7h1.821c1.456 0 2.183 0 2.775.354c.593.353.938.994 1.628 2.276L22 12M7.327 8l1.486-1.174C9.604 6.2 10 5.888 10 5.5M7.327 3l1.486 1.174C9.604 4.8 10 5.112 10 5.5m0 0H2" />
              </g>
            </svg>
          </div>
          <div>
            <p className="text-[15px]">Orders Delivered</p>
            <p className="text-[26px] font-bold">{totalDeliveredOrders}</p>
          </div>
        </div>
      </div>
      <div className="flex h-[600px] justify-between my-[20px]">
        <div className="flex w-[49%] flex-col bg-white h-[100%] justify-center border">
          <p className="text-[15px] mb-[10px] text-center">Total Sales</p>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex w-[49%] bg-white flex-col h-[100%] items-center justify-center border">
          <p className="text-[15px] font-semibold mb-[10px] text-center">
            Best selling products
          </p>
          <LabelBar />
          <ResponsiveContainer width="100%" height="80%">
            <PieChart width={400} height={400}>
              <Pie
                data={data1}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={200}
                fill="#8884d8"
                dataKey="value"
              >
                {data1.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
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
            <p className="w-[17%]">
              {order.customer?.firstName} {order?.customer?.lastName}
            </p>
            <p className="w-[10%] truncate">{order?.merchant?.businessName}</p>
            <p className="w-[10%] truncate">{order.paymentMethod}</p>
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

export default Homepage;
