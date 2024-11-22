// import { Select } from "antd";

// import Chart from "../Chart";
// const { Option } = Select;
// function Dashboard() {
// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };
//   return (
//     <div className="min-h-screen">
//       <div className="p-6 border bg-primary text-secondary rounded-2xl">
// <div className="flex flex-row items-center justify-between">
//   <div>
//     <h1 className="text-gray100 text-lg font-semibold font-work">
//       Overview
//     </h1>
//     <p className="text-gray100 text-sm font-work mt-1 font-normal">
//       Activities summary at a glance
//     </p>
//   </div>
//   <Select
//     className="" // Use the custom class
//     defaultValue="weekly"
//     style={{
//       width: 120,
//     }}
//     onChange={handleChange}
//   >
//     <Option value="weekly">Weekly</Option>
//     <Option value="monthly">Monthly</Option>
//     <Option value="yearly">Yearly</Option>
//   </Select>
// </div>
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
//           <div className="flex-1 border   rounded-2xl p-4">
//             <svg
//               width="47"
//               height="47"
//               viewBox="0 0 47 47"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <rect width="47" height="47" rx="16" fill="#FF0048" />
//               <path
//                 d="M21.5 16C19.5672 16 18 17.5657 18 19.498C18 21.4304 19.5672 22.9961 21.5 22.9961C23.4328 22.9961 25 21.4304 25 19.498C25 17.5657 23.4328 16 21.5 16Z"
//                 fill="#FFFCFD"
//               />
//               <path
//                 d="M19.5 24.9941C17.5671 24.9941 16 26.5605 16 28.4936V30.9909H27V28.4936C27 26.5605 25.4329 24.9941 23.5 24.9941H19.5Z"
//                 fill="#FFFCFD"
//               />
//               <path
//                 d="M28.5 26H28V31H31V28.5C31 27.1193 29.8807 26 28.5 26Z"
//                 fill="#FFFCFD"
//               />
//               <path
//                 d="M27.5 20C26.1193 20 25 21.1193 25 22.5C25 23.8807 26.1193 25 27.5 25C28.8807 25 30 23.8807 30 22.5C30 21.1193 28.8807 20 27.5 20Z"
//                 fill="#FFFCFD"
//               />
//             </svg>
//             <div className="flex flex-row items-end gap-2 mt-2">
//               <h1 className="text-title text-4xl font-work font-bold">37k</h1>
//               <svg
//                 width="15"
//                 height="15"
//                 viewBox="0 0 15 15"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M8.00004 3H15V10H14V4.70711L8.00004 10.7071L5.00004 7.70711L0.853591 11.8536L0.146484 11.1464L5.00004 6.29289L8.00004 9.29289L13.2929 4H8.00004V3Z"
//                   fill="#28A745"
//                 />
//               </svg>
//             </div>
//             <div className="my-2">
//               <h3 className="text-gray300 text-base font-work font-medium]">
//                 Active Users
//               </h3>
//               <p className="text-gray100 text-sm font-work font-normal">
//                 0.5k Increased than last 7 days
//               </p>
//             </div>
//           </div>

//           <div className="flex-1 border   rounded-2xl p-4">
//             <svg
//               width="47"
//               height="47"
//               viewBox="0 0 47 47"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <rect width="47" height="47" rx="16" fill="#FF0048" />
//               <path
//                 d="M21.5 16C19.5672 16 18 17.5657 18 19.498C18 21.4304 19.5672 22.9961 21.5 22.9961C23.4328 22.9961 25 21.4304 25 19.498C25 17.5657 23.4328 16 21.5 16Z"
//                 fill="#FFFCFD"
//               />
//               <path
//                 d="M19.5 24.9941C17.5671 24.9941 16 26.5605 16 28.4936V30.9909H27V28.4936C27 26.5605 25.4329 24.9941 23.5 24.9941H19.5Z"
//                 fill="#FFFCFD"
//               />
//               <path
//                 d="M28.5 26H28V31H31V28.5C31 27.1193 29.8807 26 28.5 26Z"
//                 fill="#FFFCFD"
//               />
//               <path
//                 d="M27.5 20C26.1193 20 25 21.1193 25 22.5C25 23.8807 26.1193 25 27.5 25C28.8807 25 30 23.8807 30 22.5C30 21.1193 28.8807 20 27.5 20Z"
//                 fill="#FFFCFD"
//               />
//             </svg>
//             <div className="flex flex-row items-end gap-2 mt-2">
//               <h1 className="text-title text-4xl font-work font-bold">148k</h1>
//               <svg
//                 width="15"
//                 height="15"
//                 viewBox="0 0 15 15"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M8.00004 3H15V10H14V4.70711L8.00004 10.7071L5.00004 7.70711L0.853591 11.8536L0.146484 11.1464L5.00004 6.29289L8.00004 9.29289L13.2929 4H8.00004V3Z"
//                   fill="#28A745"
//                 />
//               </svg>
//             </div>
//             <div className="my-2">
//               <h3 className="text-gray300 text-base font-work font-medium]">
//               Transactions
//               </h3>
//               <p className="text-gray100 text-sm font-work font-normal">
//               39k Increased that last 7 days
//               </p>
//             </div>
//           </div>

//           <div className="flex-1 border   rounded-2xl p-4">
//             <svg
//               width="48"
//               height="47"
//               viewBox="0 0 48 47"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <rect
//                 x="0.666504"
//                 width="47"
//                 height="47"
//                 rx="16"
//                 fill="#FF0048"
//               />
//               <g clip-path="url(#clip0_125_8526)">
//                 <path
//                   d="M27.2427 26.4951H31.6665V28.2529H27.2427V26.4951ZM27.2427 29.1319H31.6665V30.8897H27.2427V29.1319ZM27.2427 23.8584H31.6665V25.6162H27.2427V23.8584ZM19.1269 24.7828L18.5171 24.7764L18.4789 23.8996C21.7413 23.5816 24.6721 21.7693 26.4097 19.0197L25.3531 18.5266L29.3249 16.1113L30.0279 20.7071L28.8048 20.1368C27.9701 21.3886 26.6234 22.9224 24.6854 23.752C22.6945 24.6038 20.5638 24.7828 19.1269 24.7828ZM21.0903 30.8897H16.6665V29.1319H21.0903V30.8897ZM21.9692 26.4951H26.3638V28.2529H21.9692V26.4951ZM21.9692 29.1319H26.3638V30.8897H21.9692V29.1319Z"
//                   fill="#FFFCFD"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_125_8526">
//                   <rect
//                     width="15"
//                     height="15"
//                     fill="white"
//                     transform="translate(16.6665 16)"
//                   />
//                 </clipPath>
//               </defs>
//             </svg>

//             <div className="flex flex-row items-end gap-2 mt-2">
//               <h1 className="text-title text-4xl font-work font-bold">24k</h1>
//               <svg
//                 width="15"
//                 height="15"
//                 viewBox="0 0 15 15"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M8.00004 3H15V10H14V4.70711L8.00004 10.7071L5.00004 7.70711L0.853591 11.8536L0.146484 11.1464L5.00004 6.29289L8.00004 9.29289L13.2929 4H8.00004V3Z"
//                   fill="#28A745"
//                 />
//               </svg>
//             </div>
//             <div className="my-2">
//               <h3 className="text-gray300 text-base font-work font-medium]">
//                 Revenue
//               </h3>
//               <p className="text-gray100 text-sm font-work font-normal">
//                 39k Increased that last 7 days
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//       <div className="mt-4 p-6 bg-[#242424] text-white rounded-2xl">
//         <div className="flex flex-row items-center justify-between">
//           <div>
//             <h1 className="text-gray100 text-lg font-semibold font-work">
//               Statics Analytics
//             </h1>
//           </div>
//           <Select
//       className="custom-select" // Use the custom class
//       defaultValue="weekly"
//       style={{
//         width: 120,
//       }}
//       onChange={handleChange}
//     >
//       <Option value="weekly">Weekly</Option>
//       <Option value="monthly">Monthly</Option>
//       <Option value="yearly">Yearly</Option>
//     </Select>
//         </div>
//         <div className="mt-4">
//           <Chart />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


import { useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", amt: 12000 },
  { name: "Feb", amt: 12000 },
  { name: "Mar", amt: 7000 },
  { name: "Apr", amt: 15000 },
  { name: "May", amt: 8000 },
  { name: "Jun", amt: 16000 },
  { name: "Jul", amt: 9000 },
  { name: "Aug", amt: 14000 },
  { name: "Sep", amt: 8500 },
  { name: "Oct", amt: 13000 },
  { name: "Nov", amt: 7500 },
  { name: "Dec", amt: 6000 },
];
import { GrDocumentVerified } from "react-icons/gr";
import { Select } from "antd";
const { Option } = Select;




const cardData = [
  {
    id: 1,
    icon: <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="47" height="47" rx="16" fill="#FF0048" />
      <path d="M21.5 16C19.5672 16 18 17.5657 18 19.498C18 21.4304 19.5672 22.9961 21.5 22.9961C23.4328 22.9961 25 21.4304 25 19.498C25 17.5657 23.4328 16 21.5 16Z" fill="#ffff" />
      <path d="M19.5 24.9941C17.5671 24.9941 16 26.5605 16 28.4936V30.9909H27V28.4936C27 26.5605 25.4329 24.9941 23.5 24.9941H19.5Z" fill="#ffff" />
      <path d="M28.5 26H28V31H31V28.5C31 27.1193 29.8807 26 28.5 26Z" fill="#ffff" />
      <path d="M27.5 20C26.1193 20 25 21.1193 25 22.5C25 23.8807 26.1193 25 27.5 25C28.8807 25 30 23.8807 30 22.5C30 21.1193 28.8807 20 27.5 20Z" fill="#ffff" />
    </svg>
    ,
    title: '25k',
    description: 'Active Users',
  },
  {
    id: 2,
    icon: <GrDocumentVerified style={{ fontSize: '30px', color: '#7F56D9' }} />,
    title: '€33,350.00',
    description: 'Current Balance',
  },
  {
    id: 3,
    icon: <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.666504" width="47" height="47" rx="16" fill="#FF0048" />
      <rect x="16.6665" y="26" width="3" height="5" rx="1.5" fill="#ffffff" />
      <rect x="22.6665" y="24" width="3" height="7" rx="1.5" fill="#ffffff" />
      <rect x="28.6665" y="22" width="3" height="9" rx="1.5" fill="#ffffff" />
      <path d="M17.5905 23.5058C17.3175 23.5478 17.1303 23.8031 17.1723 24.076C17.2143 24.349 17.4696 24.5362 17.7425 24.4942L17.5905 23.5058ZM28.0776 15.7154C27.9204 15.4884 27.6089 15.4317 27.3819 15.5889L23.682 18.1503C23.455 18.3075 23.3984 18.619 23.5555 18.846C23.7127 19.0731 24.0242 19.1297 24.2512 18.9725L27.54 16.6957L29.8169 19.9845C29.974 20.2115 30.2855 20.2681 30.5126 20.111C30.7396 19.9538 30.7962 19.6423 30.639 19.4153L28.0776 15.7154ZM17.7425 24.4942C20.9976 23.9934 23.3603 23.3558 25.0315 22.0856C26.7328 20.7926 27.6469 18.9031 28.1584 16.0894L27.1746 15.9106C26.6861 18.5969 25.8502 20.2074 24.4265 21.2894C22.9727 22.3942 20.8354 23.0066 17.5905 23.5058L17.7425 24.4942Z" fill="#ffffff" />
    </svg>
    ,
    title: '486k',
    description: 'Revenues',
  },


];


const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState();
  // const [selectedValue, setSelectedValue] = useState<string | undefined>();


  // revinew chart ----------------
  const formatYAxis = (tickItem) => `${tickItem / 1000}k`;

  const handleCardClick = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const selectOptions = [
    { value: "1", label: "week" },
    { value: "2", label: "Month" },
    { value: "3", label: "Year" },
  ];
  return (
    <div>
      <div className="bg-[#FFFFFF] p-2 rounded-xl min-h-screen ">

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4  mt-[12px]">
          {cardData.map((card, index) => {
            const bgColors = [
              "bg-[#ECFDF3]",
              "bg-[#F9F5FF]",
              "bg-[#FEF3F2]",

            ]; // Define your background colors here
            const selectedBgColor =
              selectedCard === index
                ? "bg-[#D8F0FF]"
                : bgColors[index % bgColors.length]; // Use different bg color for each index

            return (
              <div
                key={card.id}
                className={`flex justify-between items-center rounded-2xl cursor-pointer ${selectedBgColor}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="flex gap-4 p-6 w-fit">
                  <div
                    className={`bg-[#F6F6F6] px-6 py-6 rounded-xl flex items-center justify-center ${selectedCard === index
                        ? "bg-white text-[#0E68E7]"
                        : "px-4 bg-[#FFFFFF]"
                      }`}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h1 className="text-[24px] font-semibold">{card.title}</h1>
                    <p className="text-sm text-[#4E5566] font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>



        <div className="mt-20">
          <div>
            <div className="flex flex-row items-center justify-between px-2 ">
              <div>
                <h1 className="text-secondary text-xl font-semibold font-work">
                  Overview
                </h1>
                <p className="text-secondary opacity-70 text-sm font-work mt-1 font-normal">
                  Activities summary at a glance
                </p>
              </div>
              <Select
                className="" // Use the custom class
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
          </div>
          {/* revinew chart ----------------- */}
          <ResponsiveContainer width="100%" height={480}>
            <AreaChart data={data} syncId="anyId">
              <defs>
                <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF0048" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF0048" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis axisLine={false} dataKey="name" />
              <YAxis
                axisLine={false}
                tickFormatter={formatYAxis}
                ticks={[0, 2000, 4000, 6000, 8000, 10000, 12000, 14000]}
                interval={0}
              />
              <Tooltip />
              <Area
                isAnimationActive={false}
                strokeWidth={2}
                stroke="#FF0048"
                type="monotone"
                dataKey="amt"
                fill="url(#colorAmt)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;