import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/design/Sidebar";
import Footer from "../components/design/Footer";
import Topbar from "../components/design/Topbar";

const HomeLayout = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="w-[95%] mx-auto h-full">
        <div className="flex items-center h-full w-full">
          <div className="w-[15%] h-full border-r-2">
            <Sidebar />
          </div>
          <div className="w-[85%] relative h-full flex flex-col">
            <div className="h-[70px] w-[80%] fixed top-0 left-[16.8%] bg-white">
              <Topbar />
            </div>
            <div
              style={{ height: "calc(100% - 130px)" }}
              className="bg-[#F9FAFB] w-full mt-[70px] mb-[60px] overflow-y-auto"
            >
              <Outlet />
            </div>
            <div className="h-[60px] w-[80%] fixed bottom-0">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
