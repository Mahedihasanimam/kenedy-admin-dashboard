import { Input, Select } from "antd";
import React from "react";
import AlltransactionTable from "./AlltransactionTable";


const Transactions = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="min-h-screen text-white">
      <div className="bg-[#242424] p-6 rounded-lg">
        <div className="flex flex-row items-center justify-between bg-[#242424]">
          <div>
            <h1 className="text-gray100 text-lg font-semibold font-work">
              Overview
            </h1>
            <p className="text-gray100 text-sm font-work mt-1 font-normal">
              Activities summary at a glance
            </p>
          </div>
          <Select
            className="custom-select" // Use the custom class
            defaultValue="weekly"
            style={{
              width: 120,
            }}
            onChange={handleChange}
          >
            <Option value="weekly">Weekly</Option>
            <Option value="monthly">Monthly</Option>
            <Option value="yearly">Yearly</Option>
          </Select>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <div className="flex-1 border bg-[#2F2F2F] border-none rounded-2xl p-4">
            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="47" height="47" rx="16" fill="#F6F6F6" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0149 16.3787C19.0706 16.1561 19.2706 16 19.5 16H24.161C26.5583 16 28.3523 17.9575 28.3647 20.1721C30.2927 20.7982 31.3862 23.0231 30.4695 25.0092C29.7687 26.5276 28.249 27.5 26.5767 27.5H25.3772L24.4808 30.6374C24.4194 30.852 24.2232 31 24 31H20C19.846 31 19.7007 30.9291 19.6059 30.8077C19.5111 30.6863 19.4776 30.5281 19.5149 30.3787L19.8596 29H16.5C16.346 29 16.2007 28.9291 16.1059 28.8077C16.0111 28.6863 15.9776 28.5281 16.0149 28.3787L19.0149 16.3787ZM24.161 17C25.9232 17 27.2575 18.3882 27.3578 20.0012C27.3268 20.0004 27.2957 20 27.2644 20H22.5C22.2706 20 22.0706 20.1561 22.0149 20.3787L20.1096 28H17.1404L19.8904 17H24.161ZM23.295 25H21.8904L20.6404 30H23.6229L24.5192 26.8626C24.5806 26.648 24.7768 26.5 25 26.5H26.5767C27.8589 26.5 29.0242 25.7544 29.5615 24.5902C30.1878 23.2332 29.5049 21.7208 28.2427 21.1936C28.2031 21.3542 28.1535 21.5147 28.0935 21.6746C27.3434 23.6748 25.4312 25 23.295 25Z" fill="#333333" />
            </svg>

            <div className="flex flex-row items-end gap-2 mt-2">
              <h1 className="text-title text-4xl font-work font-bold">37k</h1>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.00004 3H15V10H14V4.70711L8.00004 10.7071L5.00004 7.70711L0.853591 11.8536L0.146484 11.1464L5.00004 6.29289L8.00004 9.29289L13.2929 4H8.00004V3Z"
                  fill="#28A745"
                />
              </svg>
            </div>
            <div className="my-2">
              <h3 className="text-gray300 text-base font-work font-medium]">
                Transactions
              </h3>
              <p className="text-gray100 text-sm font-work font-normal">
                39k Increased that last 7 days
              </p>
            </div>
          </div>

          <div className="flex-1 border bg-[#2F2F2F] border-none rounded-2xl p-4">
            <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.333496" width="47" height="47" rx="16" fill="#F6F6F6" />
              <path d="M16.3794 30.2902C16.4035 30.2381 16.437 30.1894 16.4799 30.1464L25.9327 20.6936L23.2622 16.2427C23.1656 16.0817 22.987 15.9884 22.7996 16.0011C22.6123 16.0138 22.4479 16.1304 22.3739 16.303L16.3794 30.2902Z" fill="#333333" />
              <path d="M26.6398 21.4007L31.0907 24.0712C31.2517 24.1678 31.3451 24.3465 31.3323 24.5338C31.3196 24.7212 31.203 24.8856 31.0305 24.9596L17.0405 30.9553C17.0936 30.9311 17.1433 30.8972 17.187 30.8536L26.6398 21.4007Z" fill="#333333" />
            </svg>

            <div className="flex flex-row items-end gap-2 mt-2">
              <h1 className="text-title text-4xl font-work font-bold">26k</h1>
              <svg width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4805 23.8536L11.1876 23.1465L15.334 27.2929L18.334 24.2929L24.334 30.2929V25H25.334V32H18.334V31H23.6269L18.334 25.7071L15.334 28.7071L10.4805 23.8536Z" fill="#DC3545" />
              </svg>

            </div>
            <div className="my-2">
              <h3 className="text-gray300 text-base font-work font-medium]">
                Refund
              </h3>
              <p className="text-gray100 text-sm font-work font-normal">
                0.5k increased than last 7 days
              </p>
            </div>
          </div>

          <div className="flex-1 border bg-[#2F2F2F] border-none rounded-2xl p-4">
            <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.666992" width="47" height="47" rx="16" fill="#F6F6F6" />
              <rect x="16.667" y="26" width="3" height="5" rx="1.5" fill="#333333" />
              <rect x="22.667" y="24" width="3" height="7" rx="1.5" fill="#333333" />
              <rect x="28.667" y="22" width="3" height="9" rx="1.5" fill="#333333" />
              <path d="M17.591 23.5058C17.318 23.5478 17.1308 23.8031 17.1728 24.076C17.2148 24.349 17.4701 24.5362 17.743 24.4942L17.591 23.5058ZM28.0781 15.7154C27.9209 15.4884 27.6094 15.4317 27.3824 15.5889L23.6825 18.1503C23.4555 18.3075 23.3988 18.619 23.556 18.846C23.7132 19.0731 24.0247 19.1297 24.2517 18.9725L27.5405 16.6957L29.8173 19.9845C29.9745 20.2115 30.286 20.2681 30.513 20.111C30.7401 19.9538 30.7967 19.6423 30.6395 19.4153L28.0781 15.7154ZM17.743 24.4942C20.9981 23.9934 23.3608 23.3558 25.032 22.0856C26.7333 20.7926 27.6473 18.9031 28.1589 16.0894L27.1751 15.9106C26.6866 18.5969 25.8506 20.2074 24.427 21.2894C22.9732 22.3942 20.8358 23.0066 17.591 23.5058L17.743 24.4942Z" fill="#333333" />
            </svg>


            <div className="flex flex-row items-end gap-2 mt-2">
              <h1 className="text-title text-4xl font-work font-bold">24k</h1>
              <svg width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.667 23H25.667V30H24.667V24.7071L18.667 30.7071L15.667 27.7071L11.5206 31.8536L10.8135 31.1464L15.667 26.2929L18.667 29.2929L23.9599 24H18.667V23Z" fill="#28A745" />
              </svg>


            </div>
            <div className="my-2">
              <h3 className="text-gray300 text-base font-work font-medium]">
                Revenues
              </h3>
              <p className="text-gray100 text-sm font-work font-normal">
                1.5k Increased than last 7 days
              </p>
            </div>
          </div>
        </div>

      </div>
      
      <AlltransactionTable />
    </div>
  );
};

export default Transactions;
