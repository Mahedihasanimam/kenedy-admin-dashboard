import React from "react";
import { IoHandLeftOutline } from "react-icons/io5";
import Notificationitem from "./Notificationitem";

const Notification = () => {
  return (
    <div className=" rounded-lg p-6 text-secondary bg-white  h-full">

      <div className="flex items-start justify-between pl-6  text-secondary">
      <h1
        onClick={() => window.history.back()}
        className="cursor-pointer text-[16px] font-normal flex items-center space-x-4 text-secondary"
      >
        {" "}
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 14.5L1 8L8 1.5"
            fill="white"
          />
          <path
            d="M8 14.5L1 8L8 1.5"
            stroke="#5D5D5D"
            stroke-linecap="square"
          />
        </svg>
        back
      </h1>
       

        <p className="font-bold text-sm text-[#EBCA7E]">Read all</p>
      </div>
      <div>
        <Notificationitem/>
      </div>
    </div>
  );
};

export default Notification;
