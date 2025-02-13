import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Select } from "antd";
import { useState } from "react";
import { useGetAllTransactionsStatisticsQuery } from "../../../redux/apiSlices/paymentApisSlice";
import { useAllUserQuery } from "../../../redux/apiSlices/userApis";

const { Option } = Select;

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState();
  // const [selectedValue, setSelectedValue] = useState<string | undefined>();

  const { data: activeUser } = useAllUserQuery({
    page: "",
    limit: "",
    role: "",
    search: "",
    isActive: true,
  });
  const { data: allUser } = useAllUserQuery({
    page: "",
    limit: "",
    role: "",
    search: "",
  });

  const [searchStatistics, setSearchStatistics] = useState();

  const { data: statisticsData } = useGetAllTransactionsStatisticsQuery({
    monthly: "monthly",
  });

  // console.log("Active User", activeUser);
  // console.log("All User", allUser);

  // revinew chart ----------------
  const formatYAxis = (tickItem) => `${tickItem / 1000}k`;

  const handleCardClick = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSearchStatistics(value);
  };

  const cardData = [
    {
      id: 2,
      icon: (
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="47" height="47" rx="16" fill="#FF0048" />
          <path
            d="M21.5 16C19.5672 16 18 17.5657 18 19.498C18 21.4304 19.5672 22.9961 21.5 22.9961C23.4328 22.9961 25 21.4304 25 19.498C25 17.5657 23.4328 16 21.5 16Z"
            fill="#ffff"
          />
          <path
            d="M19.5 24.9941C17.5671 24.9941 16 26.5605 16 28.4936V30.9909H27V28.4936C27 26.5605 25.4329 24.9941 23.5 24.9941H19.5Z"
            fill="#ffff"
          />
          <path
            d="M28.5 26H28V31H31V28.5C31 27.1193 29.8807 26 28.5 26Z"
            fill="#ffff"
          />
          <path
            d="M27.5 20C26.1193 20 25 21.1193 25 22.5C25 23.8807 26.1193 25 27.5 25C28.8807 25 30 23.8807 30 22.5C30 21.1193 28.8807 20 27.5 20Z"
            fill="#ffff"
          />
        </svg>
      ),
      title: allUser?.data?.count,
      description: "All Users",
    },
    {
      id: 1,
      icon: (
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="47" height="47" rx="16" fill="#FF0048" />
          <path
            d="M21.5 16C19.5672 16 18 17.5657 18 19.498C18 21.4304 19.5672 22.9961 21.5 22.9961C23.4328 22.9961 25 21.4304 25 19.498C25 17.5657 23.4328 16 21.5 16Z"
            fill="#ffff"
          />
          <path
            d="M19.5 24.9941C17.5671 24.9941 16 26.5605 16 28.4936V30.9909H27V28.4936C27 26.5605 25.4329 24.9941 23.5 24.9941H19.5Z"
            fill="#ffff"
          />
          <path
            d="M28.5 26H28V31H31V28.5C31 27.1193 29.8807 26 28.5 26Z"
            fill="#ffff"
          />
          <path
            d="M27.5 20C26.1193 20 25 21.1193 25 22.5C25 23.8807 26.1193 25 27.5 25C28.8807 25 30 23.8807 30 22.5C30 21.1193 28.8807 20 27.5 20Z"
            fill="#ffff"
          />
        </svg>
      ),
      title: activeUser?.data?.count,
      description: "Active Users",
    },

    {
      id: 3,
      icon: (
        <svg
          width="48"
          height="47"
          viewBox="0 0 48 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.666504" width="47" height="47" rx="16" fill="#FF0048" />
          <rect
            x="16.6665"
            y="26"
            width="3"
            height="5"
            rx="1.5"
            fill="#ffffff"
          />
          <rect
            x="22.6665"
            y="24"
            width="3"
            height="7"
            rx="1.5"
            fill="#ffffff"
          />
          <rect
            x="28.6665"
            y="22"
            width="3"
            height="9"
            rx="1.5"
            fill="#ffffff"
          />
          <path
            d="M17.5905 23.5058C17.3175 23.5478 17.1303 23.8031 17.1723 24.076C17.2143 24.349 17.4696 24.5362 17.7425 24.4942L17.5905 23.5058ZM28.0776 15.7154C27.9204 15.4884 27.6089 15.4317 27.3819 15.5889L23.682 18.1503C23.455 18.3075 23.3984 18.619 23.5555 18.846C23.7127 19.0731 24.0242 19.1297 24.2512 18.9725L27.54 16.6957L29.8169 19.9845C29.974 20.2115 30.2855 20.2681 30.5126 20.111C30.7396 19.9538 30.7962 19.6423 30.639 19.4153L28.0776 15.7154ZM17.7425 24.4942C20.9976 23.9934 23.3603 23.3558 25.0315 22.0856C26.7328 20.7926 27.6469 18.9031 28.1584 16.0894L27.1746 15.9106C26.6861 18.5969 25.8502 20.2074 24.4265 21.2894C22.9727 22.3942 20.8354 23.0066 17.5905 23.5058L17.7425 24.4942Z"
            fill="#ffffff"
          />
        </svg>
      ),
      title: "$" + statisticsData?.data?.total,
      description: "Revenues",
    },
  ];

  return (
    <div>
      <div className="bg-[#FFFFFF] p-2 rounded-xl min-h-screen ">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4  mt-[12px]">
          {cardData.map((card, index) => {
            const bgColors = ["bg-[#ECFDF3]", "bg-[#F9F5FF]", "bg-[#FEF3F2]"]; // Define your background colors here
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
                    className={`bg-[#F6F6F6] px-6 py-6 rounded-xl flex items-center justify-center ${
                      selectedCard === index
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

        {/* <div>
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
              defaultValue="monthly"
              style={{
                width: 120,
              }}
              onChange={handleChange}
            >
              <Option value="monthly">Monthly</Option>
              <Option value="yearly">Yearly</Option>
            </Select>
          </div>
        </div> */}

        <div className="mt-20">
          {/* revinew chart ----------------- */}
          <ResponsiveContainer width="100%" height={480}>
            <AreaChart data={statisticsData?.data?.transactions} syncId="anyId">
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

{
  /* <div>
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
</div> */
}
