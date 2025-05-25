import React from "react";
import ActivityFeed from "./ActivityFeed";
import Main from "./Main";

function DashboardOverview() {
  return (
    <div className="bg-[#FFFFFF] h-full w-full flex flex-col items-center justify-evenly p-4">
      <div className="flex items-center p-2 border border-gray-300 rounded-lg w-full gap-3 mt-4">
        <i className="ri-search-line text-gray-600 text-[16px]"></i>
        <input
          type="text"
          placeholder="Search"
          className="w-full px-2 py-1 placeholder-opacity-90 placeholder-gray-500 focus:outline-none"
        />
        <i className="ri-notification-4-fill text-[#362CA7]"></i>
      </div>

      <div className="header flex items-center justify-between w-full ">
        <h4 className="text-[#362CA7] text-2xl font-bold">Dashboard</h4>
        <span className="flex gap-1 text-[#362CA7]">
          <h3 className="text-sm">This Week</h3>
          <i class="ri-arrow-down-s-line"></i>
        </span>
      </div>
      <Main/>
      <ActivityFeed/>

      
    </div>
  );
}

export default DashboardOverview;
