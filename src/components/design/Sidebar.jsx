import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col h-full py-[20px]">
      <div className="h-full flex flex-col justify-between">
        <div
          onClick={() => navigate("/dashboard")}
          className="w-full h-[10%] flex cursor-pointer items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="70"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#12B981"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2l.917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8z"
            />
          </svg>
          <span className="text-[20px]">E-Store</span>
        </div>
        <div className="h-[60%] flex flex-col gap-[20px]">
          <NavLink
            exact
            to="/dashboard"
            className="flex items-center gap-[10px] text-[#6B7280]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M8.557 2.75H4.682A1.932 1.932 0 0 0 2.75 4.682v3.875a1.942 1.942 0 0 0 1.932 1.942h3.875a1.942 1.942 0 0 0 1.942-1.942V4.682A1.942 1.942 0 0 0 8.557 2.75m10.761 0h-3.875a1.942 1.942 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.942 1.942 0 0 0 1.932-1.942V4.682a1.932 1.932 0 0 0-1.932-1.932m0 10.75h-3.875a1.942 1.942 0 0 0-1.942 1.933v3.875a1.942 1.942 0 0 0 1.942 1.942h3.875a1.942 1.942 0 0 0 1.932-1.942v-3.875a1.932 1.932 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.932 1.932 0 0 0 1.932 1.932h3.875a1.942 1.942 0 0 0 1.942-1.932v-3.875a1.942 1.942 0 0 0-1.942-1.942"
              />
            </svg>
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/products"
            className="flex items-center gap-[10px] text-[#6B7280]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 2048 2048"
            >
              <path
                fill="currentColor"
                d="M128 1792q0 27 10 50t27 40t41 28t50 10h640l257 128H256q-53 0-99-20t-82-55t-55-81t-20-100V256q0-49 21-95t57-82t82-57t96-22h1408v681l-128-64V128H256q-23 0-46 11t-41 30t-29 41t-12 46v1316q29-17 61-26t67-10h512v128H256q-27 0-50 10t-40 27t-28 41t-10 50m1920-777v762l-576 287l-576-287v-762l576-287zm-576-144l-369 184l369 184l369-184zm-448 827l384 191v-539l-384-192zm896 0v-540l-384 192v539z"
              />
            </svg>
            <span>Products</span>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/orders"
            className="flex items-center gap-[10px] text-[#6B7280]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m-4-4v-3.075l5.525-5.5q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.5 5.5zm6.575-5.6l.925-.975l-.925-.925l-.95.95z"
              />
            </svg>
            <span>Orders</span>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/categories"
            className="flex items-center gap-[10px] text-[#6B7280]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M27 22.141V18a2 2 0 0 0-2-2h-8v-4h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4H7a2 2 0 0 0-2 2v4.142a4 4 0 1 0 2 0V18h8v4.142a4 4 0 1 0 2 0V18h8v4.141a4 4 0 1 0 2 0M13 4h6l.001 6H13ZM8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2m10 0a2 2 0 1 1-2-2a2.003 2.003 0 0 1 2 2m8 2a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
              />
            </svg>
            <span>Product Categories</span>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/customers"
            className="flex items-center gap-[10px] text-[#6B7280]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 12.25a3.75 3.75 0 1 1 3.75-3.75A3.75 3.75 0 0 1 14 12.25m0-6a2.25 2.25 0 1 0 2.25 2.25A2.25 2.25 0 0 0 14 6.25m7 13a.76.76 0 0 1-.75-.75c0-1.95-1.06-3.25-6.25-3.25s-6.25 1.3-6.25 3.25a.75.75 0 0 1-1.5 0c0-4.75 5.43-4.75 7.75-4.75s7.75 0 7.75 4.75a.76.76 0 0 1-.75.75M8.32 13.06H8a3 3 0 1 1 .58-6a.75.75 0 1 1-.15 1.49a1.46 1.46 0 0 0-1.09.34a1.47 1.47 0 0 0-.54 1a1.49 1.49 0 0 0 1.35 1.64a1.53 1.53 0 0 0 .93-.22a.75.75 0 0 1 .79 1.28a3 3 0 0 1-1.55.47M3 18.5a.76.76 0 0 1-.75-.75c0-2.7.72-4.5 4.25-4.5a.75.75 0 0 1 0 1.5c-2.35 0-2.75.75-2.75 3a.76.76 0 0 1-.75.75"
              />
            </svg>
            <span>Merchants</span>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/users"
            className="flex items-center gap-[10px] text-[#6B7280]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20c0-1.657-2.239-3-5-3s-5 1.343-5 3m14-3c0-1.23-1.234-2.287-3-2.75M3 17c0-1.23 1.234-2.287 3-2.75m12-4.014a3 3 0 1 0-4-4.472m-8 4.472a3 3 0 0 1 4-4.472M12 14a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
              />
            </svg>
            <span>Users</span>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/services"
            className="flex items-center gap-[10px] text-[#6B7280]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 2048 2048"
            >
              <path
                fill="currentColor"
                d="M1185 1179q-88-75-195-115t-222-40q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H0q0-120 35-231t101-205t156-167t204-115q-113-74-176-186t-64-248q0-106 40-199t109-163T568 40T768 0t199 40t163 109t110 163t40 200q0 66-16 129t-48 119t-75 103t-101 83q65 25 124 61t111 81zM384 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149m1344 256q66 0 124 25t101 69t69 102t26 124t-25 124t-69 102t-102 69t-124 25q-23 0-45-3l-587 587q-27 27-62 41t-74 15q-40 0-75-15t-61-41t-41-61t-15-75q0-38 14-73t42-63l587-587q-3-22-3-45q0-66 25-124t68-101t102-69t125-26m0 512q40 0 75-15t61-41t41-61t15-75q0-41-19-82l-146 146h-91v-91l146-146q-41-19-82-19q-40 0-75 15t-61 41t-41 61t-15 75q0 41 19 82l-640 641q-19 19-19 45t19 45t45 19t45-19l641-640q41 19 82 19"
              />
            </svg>
            <span>Special services</span>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/deliveries"
            className="flex items-center gap-[10px] text-[#6B7280]"
          >
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
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
                <path d="M5 17.972c-1.097-.054-1.78-.217-2.268-.704s-.65-1.171-.704-2.268M9 18h6m4-.028c1.097-.054 1.78-.217 2.268-.704C22 16.535 22 15.357 22 13v-2h-4.7c-.745 0-1.117 0-1.418-.098a2 2 0 0 1-1.284-1.284C14.5 9.317 14.5 8.945 14.5 8.2c0-1.117 0-1.675-.147-2.127a3 3 0 0 0-1.926-1.926C11.975 4 11.417 4 10.3 4H2m0 4h6m-6 3h4" />
                <path d="M14.5 6h1.821c1.456 0 2.183 0 2.775.354c.593.353.938.994 1.628 2.276L22 11" />
              </g>
            </svg>
            <span>Deliveries</span>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/stores"
            className="flex items-center gap-[10px] text-[#6B7280]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
                <path d="M17.94 12.431c-.233.952-1.474 1.636-3.955 3.003c-2.7 1.488-4.049 2.231-5.142 1.945a2.7 2.7 0 0 1-.998-.5C7 16.197 7 14.778 7 11.94S7 7.683 7.845 7c.287-.231.628-.402.998-.499c1.093-.287 2.443.457 5.142 1.944c2.482 1.368 3.722 2.052 3.956 3.004c.079.324.079.66 0 .983M8 17l8-7.386M8 7l8 7.386" />
                <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
              </g>
            </svg>
            <span>Online store</span>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/settings"
            className="flex items-center gap-[10px] text-[#6B7280]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0" />
              </g>
            </svg>
            <span>Settings</span>
          </NavLink>
        </div>
        <div className="h-[20%] w-full flex items-end">
          <button
            onClick={logout}
            className="h-[50px] text-white w-[85%] flex items-center justify-center gap-[10px] bg-[#12B981] rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 17.625c-.074 1.852-1.617 3.424-3.684 3.374c-.481-.012-1.076-.18-2.265-.515c-2.861-.807-5.345-2.164-5.941-5.203C3 14.724 3 14.095 3 12.837v-1.674c0-1.257 0-1.886.11-2.445c.596-3.038 3.08-4.395 5.941-5.202c1.19-.335 1.784-.503 2.265-.515c2.067-.05 3.61 1.522 3.684 3.374M21 12H10m11 0c0-.7-1.994-2.008-2.5-2.5M21 12c0 .7-1.994 2.008-2.5 2.5"
                color="currentColor"
              />
            </svg>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
