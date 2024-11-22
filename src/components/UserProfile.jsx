import { Avatar, Card, Image, Tooltip } from 'antd';
import React from 'react';
import { CiGlobe } from 'react-icons/ci';
import { FaLanguage } from 'react-icons/fa';
import { MdOutlineChevronLeft, MdOutlineWorkOutline } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import userimg from '../assets/images/Ellipse 9.png'
import { MobileOutlined } from '@ant-design/icons';

const UserProfile = () => {
   
  const { userId } = useParams();
  const navigate=useNavigate()
  console.log(userId)

  // Fetch user data using userId, or retrieve it from state if already available.
  // This is just a placeholder example.
  return (
    <div className='text-white min-h-screen'>
      <div>
   {/* Header */}
 <div className='bg-[#242424] rounded-2xl px-4 py-2 my-6'>
 <h2 className="text-xl flex space-x-2 items-center font-semibold mb-6 text-white">
        <button  onClick={() => navigate(-1)} className="focus:outline-none">
          <MdOutlineChevronLeft className="text-4xl cursor-pointer" />
        </button>
        Investor Profile
      </h2>
      <p className='text-[16px] text-white opacity-70 font-normal '>Investor details at a glance</p>
 </div>
      <div className="lg:flex md:flex flex-row gap-8 bg-[#242424] rounded-lg ">
        {/* Left Section: Host Info */}
        <div className="bg-[#242424] h-fit rounded-lg p-6 w-full max-w-md ">
          <div className="flex items-center pb-4">
            {/* Avatar and Name */}
            <Avatar size={80} className="">
              <Image className='' src={userimg} alt="Avatar" />
            </Avatar>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-white">
                Jenifer Lopez
              </h2>
              <Tooltip title="Superhost">
                <span className="text-[#FFFFFFCC] text-sm font-semibold">
                  Superhost
                </span>
              </Tooltip>
            </div>
          </div>
          <div className="flex items-center justify-around pb-4">
            <div className="mt-2">
              <div className="text-sm text-gray-400 mt-2">
                {" "}
                <p className="text-[#FFFFFF] text-2xl pb-1 font-bold">
                  939
                </p>{" "}
                Reviews
              </div>
            </div>
            <div className="flex items-center mt-1">
              <div className="text-sm text-gray-400 mt-2">
                <p className="text-[#FFFFFF] text-2xl pb-1 font-bold">939 *</p>{" "}
                Ratings
              </div>
            </div>
            <div className="text-sm text-gray-400 mt-2">
              <p className="text-[#FFFFFF] text-2xl pb-1 font-bold">7 years</p>{" "}
              Hosting
            </div>
          </div>
        </div>

        {/* Right Section: Host Details */}
        <Card className="bg-[#242424] lg:w-2/3 w-full p-4 border-none h-fit text-[#FFFFFF]">
          <h3 className="text-[28px] font-bold text-[#FFFFFF] mb-4">
            Welcome, Jenifer Lopez!
          </h3>
          <div className="space-y-4 lg:flex flex-row items-center justify-between">
            <div className="space-y-3">
              <p className="flex gap-3  text-[16px] text-white font-medium">
                {" "}
                <MdOutlineWorkOutline className="text-[24px]" /> My work:{" "}
                <span className="text-white opacity-70">F&B Business</span>
              </p>
              <p className="flex gap-3 text-[16px] text-white font-medium">
                {" "}
                <FaLanguage className="text-[24px]" /> Language:{" "}
                <span className="text-white opacity-70">English & Spanish</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex gap-3  text-[16px] text-white font-medium">
                {" "}
                <MobileOutlined className="text-[24px]" /> Contact number:{" "}
                <span className="text-white opacity-70"> +8801-5659545</span>
              </p>
              <p className="flex gap-3 text-[16px] text-white font-medium">
                {" "}
                <CiGlobe className="text-[24px]" /> Lives in:{" "}
                <span className="text-white opacity-70">
                  {" "}
                  Times Square, USA
                </span>
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="my-8 lg:space-y-0 space-y-4 lg:flex gap-8 flex-row items-center justify-between">
        <div className="flex items-center justify-between bg-[#242424] rounded-lg p-6 w-full ">
          <div>
            <h1 className="text-2xl font-bold text-white pb-4">
              Satisfied Guest
            </h1>
            <h3 className="text-2xl font-bold text-white pb-2">89</h3>
            <p className="text-white flex items-center space-x-2">
              {" "}
              <svg
                width="15"
                height="10"
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 1.35164L0.707107 0.644531L4.85355 4.79098L7.85355 1.79098L13.8536 7.79098V2.49808H14.8536V9.49809H7.85355V8.49808H13.1464L7.85355 3.20519L4.85355 6.20519L0 1.35164Z"
                  fill="#B73838"
                />
              </svg>
              <span>0.5% increase than last 7 days</span>
            </p>
          </div>
          <div>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6667 0.0722656C9.51244 0.0722656 5.33333 4.2474 5.33333 9.40038C5.33333 14.5534 9.51244 18.7285 14.6667 18.7285C19.8209 18.7285 24 14.5534 24 9.40038C24 4.2474 19.8209 0.0722656 14.6667 0.0722656Z"
                fill="white"
              />
              <path
                d="M9.33333 24.0566C4.17897 24.0566 0 28.2337 0 33.3886V40.048H29.3333V33.3886C29.3333 28.2337 25.1544 24.0566 20 24.0566H9.33333Z"
                fill="white"
              />
              <path
                d="M33.3333 26.7389H32V40.0723H40V33.4056C40 29.7237 37.0152 26.7389 33.3333 26.7389Z"
                fill="white"
              />
              <path
                d="M30.6667 10.7389C26.9848 10.7389 24 13.7237 24 17.4056C24 21.0875 26.9848 24.0723 30.6667 24.0723C34.3486 24.0723 37.3333 21.0875 37.3333 17.4056C37.3333 13.7237 34.3486 10.7389 30.6667 10.7389Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between bg-[#242424] rounded-lg p-6 w-full ">
          <div>
            <h1 className="text-2xl font-bold text-white pb-4">Revenue</h1>
            <h3 className="text-2xl font-bold text-white pb-2">$124.00k</h3>
            <p className="text-white flex items-center space-x-2">
              {" "}
              <svg
                width="208"
                height="19"
                viewBox="0 0 208 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.85355 4.64453H14.8536V11.6445H13.8536V6.35164L7.85355 12.3516L4.85355 9.35164L0.707107 13.4981L0 12.791L4.85355 7.93742L7.85355 10.9374L13.1464 5.64453H7.85355V4.64453Z"
                  fill="#28A745"
                />
                <path
                  d="M27.4735 14.2123C26.7455 14.2123 26.0782 14.0069 25.4715 13.5963C24.8742 13.1856 24.3982 12.6069 24.0435 11.8603C23.6888 11.1043 23.5115 10.2176 23.5115 9.20027C23.5115 8.18293 23.6842 7.30093 24.0295 6.55427C24.3842 5.8076 24.8602 5.2336 25.4575 4.83227C26.0548 4.4216 26.7128 4.21626 27.4315 4.21626C28.1688 4.21626 28.8362 4.4216 29.4335 4.83227C30.0308 5.2336 30.5022 5.8076 30.8475 6.55427C31.2022 7.30093 31.3795 8.1876 31.3795 9.21427C31.3795 10.2316 31.2022 11.1183 30.8475 11.8743C30.5022 12.6209 30.0308 13.1996 29.4335 13.6103C28.8455 14.0116 28.1922 14.2123 27.4735 14.2123ZM27.4455 12.9663C27.9588 12.9663 28.4068 12.8263 28.7895 12.5463C29.1815 12.2569 29.4895 11.8323 29.7135 11.2723C29.9375 10.7123 30.0495 10.0216 30.0495 9.20027C30.0495 8.37893 29.9375 7.69293 29.7135 7.14227C29.4895 6.58227 29.1815 6.16227 28.7895 5.88227C28.3975 5.59293 27.9448 5.44826 27.4315 5.44826C26.9275 5.44826 26.4795 5.59293 26.0875 5.88227C25.6955 6.16227 25.3875 6.58227 25.1635 7.14227C24.9488 7.69293 24.8415 8.37893 24.8415 9.20027C24.8415 10.0216 24.9488 10.7123 25.1635 11.2723C25.3875 11.8323 25.6955 12.2569 26.0875 12.5463C26.4795 12.8263 26.9322 12.9663 27.4455 12.9663ZM33.6882 14.2123C33.4269 14.2123 33.2075 14.1236 33.0302 13.9463C32.8622 13.7596 32.7782 13.5403 32.7782 13.2883C32.7782 13.0269 32.8622 12.8123 33.0302 12.6443C33.2075 12.4669 33.4269 12.3783 33.6882 12.3783C33.9495 12.3783 34.1642 12.4669 34.3322 12.6443C34.5095 12.8123 34.5982 13.0269 34.5982 13.2883C34.5982 13.5403 34.5095 13.7596 34.3322 13.9463C34.1642 14.1236 33.9495 14.2123 33.6882 14.2123ZM39.1908 14.2123C38.5281 14.2123 37.9354 14.0956 37.4128 13.8623C36.8994 13.6196 36.4654 13.2696 36.1108 12.8123L37.0068 11.9163C37.2214 12.2429 37.5154 12.5043 37.8888 12.7003C38.2714 12.8869 38.6961 12.9803 39.1628 12.9803C39.6014 12.9803 39.9841 12.8963 40.3108 12.7283C40.6468 12.5603 40.9081 12.3269 41.0948 12.0283C41.2908 11.7203 41.3888 11.3563 41.3888 10.9363C41.3888 10.5069 41.2954 10.1429 41.1088 9.84427C40.9221 9.5456 40.6701 9.3216 40.3528 9.17227C40.0448 9.0136 39.7041 8.93427 39.3308 8.93427C38.9481 8.93427 38.5981 8.98093 38.2808 9.07427C37.9728 9.1676 37.6788 9.32627 37.3988 9.55027L37.4128 8.71027C37.5714 8.51427 37.7534 8.3556 37.9588 8.23427C38.1641 8.11293 38.3974 8.0196 38.6588 7.95427C38.9201 7.88893 39.2234 7.85627 39.5688 7.85627C40.2408 7.85627 40.8101 7.99627 41.2768 8.27627C41.7434 8.55627 42.0981 8.93427 42.3408 9.41027C42.5928 9.88627 42.7188 10.4183 42.7188 11.0063C42.7188 11.6223 42.5648 12.1729 42.2568 12.6583C41.9581 13.1436 41.5428 13.5263 41.0108 13.8063C40.4788 14.0769 39.8721 14.2123 39.1908 14.2123ZM37.3988 9.55027L36.6848 8.83627L37.1188 4.35627H38.3228L37.8328 8.96227L37.3988 9.55027ZM37.3848 5.53227L37.1188 4.35627H42.2288V5.53227H37.3848ZM44.161 14.0723L50.391 4.35627H51.665L45.435 14.0723H44.161ZM49.859 14.2123C49.495 14.2123 49.1636 14.1236 48.865 13.9463C48.5663 13.7689 48.3283 13.5356 48.151 13.2463C47.9736 12.9476 47.885 12.6116 47.885 12.2383C47.885 11.8743 47.9736 11.5476 48.151 11.2583C48.3283 10.9596 48.5663 10.7216 48.865 10.5443C49.1636 10.3669 49.495 10.2783 49.859 10.2783C50.223 10.2783 50.5543 10.3669 50.853 10.5443C51.161 10.7216 51.4036 10.9596 51.581 11.2583C51.7583 11.5476 51.847 11.8743 51.847 12.2383C51.847 12.6116 51.7583 12.9476 51.581 13.2463C51.4036 13.5356 51.1656 13.7689 50.867 13.9463C50.5683 14.1236 50.2323 14.2123 49.859 14.2123ZM49.859 13.2183C50.139 13.2183 50.3676 13.1296 50.545 12.9523C50.7223 12.7656 50.811 12.5276 50.811 12.2383C50.811 11.9583 50.7176 11.7296 50.531 11.5523C50.3536 11.3656 50.1296 11.2723 49.859 11.2723C49.5883 11.2723 49.3643 11.3656 49.187 11.5523C49.0096 11.7296 48.921 11.9583 48.921 12.2383C48.921 12.5276 49.0096 12.7656 49.187 12.9523C49.3643 13.1296 49.5883 13.2183 49.859 13.2183ZM45.953 8.15027C45.5983 8.15027 45.2716 8.0616 44.973 7.88427C44.6743 7.70693 44.4363 7.46893 44.259 7.17027C44.0816 6.8716 43.993 6.54027 43.993 6.17627C43.993 5.80293 44.077 5.4716 44.245 5.18226C44.4223 4.89293 44.6603 4.6596 44.959 4.48226C45.2576 4.30493 45.589 4.21626 45.953 4.21626C46.3263 4.21626 46.6623 4.30493 46.961 4.48226C47.2596 4.6596 47.4976 4.89293 47.675 5.18226C47.8523 5.4716 47.941 5.80293 47.941 6.17627C47.941 6.54027 47.8523 6.8716 47.675 7.17027C47.4976 7.46893 47.2596 7.70693 46.961 7.88427C46.6716 8.0616 46.3356 8.15027 45.953 8.15027ZM45.953 7.15627C46.233 7.15627 46.4616 7.0676 46.639 6.89027C46.8163 6.7036 46.905 6.4656 46.905 6.17627C46.905 5.88693 46.8116 5.6536 46.625 5.47627C46.4476 5.29893 46.2236 5.21027 45.953 5.21027C45.6823 5.21027 45.4583 5.29893 45.281 5.47627C45.113 5.6536 45.029 5.88693 45.029 6.17627C45.029 6.4656 45.113 6.7036 45.281 6.89027C45.4583 7.0676 45.6823 7.15627 45.953 7.15627ZM56.3853 14.0723V7.42227H57.6453V14.0723H56.3853ZM57.0153 6.09226C56.7819 6.09226 56.5906 6.0176 56.4413 5.86827C56.2919 5.7096 56.2173 5.5136 56.2173 5.28027C56.2173 5.05627 56.2919 4.8696 56.4413 4.72027C56.5906 4.5616 56.7819 4.48226 57.0153 4.48226C57.2486 4.48226 57.4399 4.5616 57.5893 4.72027C57.7386 4.8696 57.8133 5.05627 57.8133 5.28027C57.8133 5.5136 57.7386 5.7096 57.5893 5.86827C57.4399 6.0176 57.2486 6.09226 57.0153 6.09226ZM64.2061 14.0723V10.1943C64.2061 9.69027 64.0475 9.27493 63.7301 8.94827C63.4128 8.6216 63.0021 8.45827 62.4981 8.45827C62.1621 8.45827 61.8635 8.53293 61.6021 8.68227C61.3408 8.8316 61.1355 9.03693 60.9861 9.29827C60.8368 9.5596 60.7621 9.85827 60.7621 10.1943L60.2441 9.90027C60.2441 9.39627 60.3561 8.94827 60.5801 8.55627C60.8041 8.16427 61.1168 7.85627 61.5181 7.63227C61.9195 7.39893 62.3721 7.28227 62.8761 7.28227C63.3801 7.28227 63.8235 7.40827 64.2061 7.66027C64.5981 7.91227 64.9061 8.2436 65.1301 8.65427C65.3541 9.0556 65.4661 9.48493 65.4661 9.94227V14.0723H64.2061ZM59.5021 14.0723V7.42227H60.7621V14.0723H59.5021ZM70.21 14.2123C69.5567 14.2123 68.964 14.0583 68.432 13.7503C67.9094 13.4423 67.494 13.0269 67.186 12.5043C66.8874 11.9723 66.738 11.3843 66.738 10.7403C66.738 10.0869 66.8874 9.49893 67.186 8.97627C67.494 8.4536 67.9094 8.04293 68.432 7.74427C68.964 7.43627 69.5567 7.28227 70.21 7.28227C70.7234 7.28227 71.1994 7.38027 71.638 7.57627C72.0767 7.76293 72.4547 8.03827 72.772 8.40227L71.932 9.24227C71.7267 8.9996 71.4747 8.8176 71.176 8.69627C70.8867 8.5656 70.5647 8.50027 70.21 8.50027C69.79 8.50027 69.4167 8.59827 69.09 8.79427C68.7634 8.98093 68.5067 9.24227 68.32 9.57827C68.1334 9.91427 68.04 10.3016 68.04 10.7403C68.04 11.1789 68.1334 11.5663 68.32 11.9023C68.5067 12.2383 68.7634 12.5043 69.09 12.7003C69.4167 12.8963 69.79 12.9943 70.21 12.9943C70.5647 12.9943 70.8867 12.9336 71.176 12.8123C71.4747 12.6816 71.7314 12.4949 71.946 12.2523L72.772 13.0923C72.464 13.4469 72.086 13.7223 71.638 13.9183C71.1994 14.1143 70.7234 14.2123 70.21 14.2123ZM74.0217 14.0723V7.42227H75.2817V14.0723H74.0217ZM75.2817 10.2783L74.8057 10.0683C74.8057 9.21893 75.0017 8.54227 75.3937 8.03827C75.7857 7.53427 76.3503 7.28227 77.0877 7.28227C77.4237 7.28227 77.727 7.34293 77.9977 7.46427C78.2683 7.57627 78.5203 7.7676 78.7537 8.03827L77.9277 8.89227C77.7877 8.74293 77.6337 8.6356 77.4657 8.57027C77.2977 8.50493 77.1017 8.47227 76.8777 8.47227C76.411 8.47227 76.0283 8.6216 75.7297 8.92027C75.431 9.21893 75.2817 9.6716 75.2817 10.2783ZM82.502 14.2123C81.8394 14.2123 81.242 14.0629 80.71 13.7643C80.178 13.4563 79.758 13.0409 79.45 12.5183C79.142 11.9956 78.988 11.4029 78.988 10.7403C78.988 10.0869 79.1374 9.49893 79.436 8.97627C79.744 8.4536 80.1547 8.04293 80.668 7.74427C81.1907 7.43627 81.774 7.28227 82.418 7.28227C83.034 7.28227 83.5754 7.42227 84.042 7.70227C84.518 7.98227 84.8867 8.3696 85.148 8.86427C85.4187 9.35893 85.554 9.91893 85.554 10.5443C85.554 10.6376 85.5494 10.7403 85.54 10.8523C85.5307 10.9549 85.512 11.0763 85.484 11.2163H79.87V10.1663H84.812L84.35 10.5723C84.35 10.1243 84.2707 9.74627 84.112 9.43827C83.9534 9.12093 83.7294 8.87827 83.44 8.71027C83.1507 8.53293 82.8007 8.44427 82.39 8.44427C81.9607 8.44427 81.5827 8.5376 81.256 8.72427C80.9294 8.91093 80.6774 9.17227 80.5 9.50827C80.3227 9.84427 80.234 10.2409 80.234 10.6983C80.234 11.1649 80.3274 11.5756 80.514 11.9303C80.7007 12.2756 80.9667 12.5463 81.312 12.7423C81.6574 12.9289 82.054 13.0223 82.502 13.0223C82.8754 13.0223 83.216 12.9569 83.524 12.8263C83.8414 12.6956 84.112 12.4996 84.336 12.2383L85.148 13.0643C84.8307 13.4376 84.4387 13.7223 83.972 13.9183C83.5147 14.1143 83.0247 14.2123 82.502 14.2123ZM89.7559 14.2123C89.1492 14.2123 88.5986 14.0629 88.1039 13.7643C87.6092 13.4563 87.2172 13.0409 86.9279 12.5183C86.6479 11.9956 86.5079 11.4076 86.5079 10.7543C86.5079 10.1009 86.6479 9.51293 86.9279 8.99027C87.2172 8.4676 87.6046 8.05227 88.0899 7.74427C88.5846 7.43627 89.1399 7.28227 89.7559 7.28227C90.2599 7.28227 90.7079 7.3896 91.0999 7.60427C91.5012 7.8096 91.8232 8.09893 92.0659 8.47227C92.3086 8.83627 92.4439 9.26093 92.4719 9.74627V11.7483C92.4439 12.2243 92.3086 12.6489 92.0659 13.0223C91.8326 13.3956 91.5152 13.6896 91.1139 13.9043C90.7219 14.1096 90.2692 14.2123 89.7559 14.2123ZM89.9659 13.0223C90.5912 13.0223 91.0952 12.8123 91.4779 12.3923C91.8606 11.9629 92.0519 11.4169 92.0519 10.7543C92.0519 10.2969 91.9632 9.90027 91.7859 9.56427C91.6179 9.21893 91.3752 8.95293 91.0579 8.76627C90.7406 8.57027 90.3719 8.47227 89.9519 8.47227C89.5319 8.47227 89.1586 8.57027 88.8319 8.76627C88.5146 8.96227 88.2626 9.23293 88.0759 9.57827C87.8986 9.91427 87.8099 10.3016 87.8099 10.7403C87.8099 11.1883 87.8986 11.5849 88.0759 11.9303C88.2626 12.2663 88.5192 12.5323 88.8459 12.7283C89.1726 12.9243 89.5459 13.0223 89.9659 13.0223ZM91.9679 14.0723V12.2803L92.2059 10.6563L91.9679 9.04627V7.42227H93.2419V14.0723H91.9679ZM97.1903 14.2123C96.817 14.2123 96.4623 14.1656 96.1263 14.0723C95.7997 13.9696 95.4963 13.8296 95.2163 13.6523C94.9363 13.4656 94.6937 13.2463 94.4883 12.9943L95.3003 12.1823C95.543 12.4809 95.823 12.7049 96.1403 12.8543C96.4577 12.9943 96.8123 13.0643 97.2043 13.0643C97.5963 13.0643 97.8997 12.9989 98.1143 12.8683C98.329 12.7283 98.4363 12.5369 98.4363 12.2943C98.4363 12.0516 98.3477 11.8649 98.1703 11.7343C98.0023 11.5943 97.783 11.4823 97.5123 11.3983C97.2417 11.3049 96.9523 11.2163 96.6443 11.1323C96.3457 11.0389 96.061 10.9223 95.7903 10.7823C95.5197 10.6423 95.2957 10.4509 95.1183 10.2083C94.9503 9.9656 94.8663 9.6436 94.8663 9.24227C94.8663 8.84093 94.9643 8.4956 95.1603 8.20627C95.3563 7.9076 95.627 7.67893 95.9723 7.52027C96.327 7.3616 96.7517 7.28227 97.2463 7.28227C97.769 7.28227 98.231 7.3756 98.6323 7.56227C99.043 7.7396 99.379 8.01027 99.6403 8.37427L98.8283 9.18627C98.6417 8.9436 98.4083 8.75693 98.1283 8.62627C97.8577 8.4956 97.5497 8.43027 97.2043 8.43027C96.8403 8.43027 96.5603 8.4956 96.3643 8.62627C96.1777 8.7476 96.0843 8.92027 96.0843 9.14427C96.0843 9.36827 96.1683 9.54093 96.3363 9.66227C96.5043 9.7836 96.7237 9.88627 96.9943 9.97027C97.2743 10.0543 97.5637 10.1429 97.8623 10.2363C98.161 10.3203 98.4457 10.4369 98.7163 10.5863C98.987 10.7356 99.2063 10.9363 99.3743 11.1883C99.5517 11.4403 99.6403 11.7716 99.6403 12.1823C99.6403 12.8076 99.4163 13.3023 98.9683 13.6663C98.5297 14.0303 97.937 14.2123 97.1903 14.2123ZM104.131 14.2123C103.468 14.2123 102.871 14.0629 102.339 13.7643C101.807 13.4563 101.387 13.0409 101.079 12.5183C100.771 11.9956 100.617 11.4029 100.617 10.7403C100.617 10.0869 100.766 9.49893 101.065 8.97627C101.373 8.4536 101.784 8.04293 102.297 7.74427C102.82 7.43627 103.403 7.28227 104.047 7.28227C104.663 7.28227 105.204 7.42227 105.671 7.70227C106.147 7.98227 106.516 8.3696 106.777 8.86427C107.048 9.35893 107.183 9.91893 107.183 10.5443C107.183 10.6376 107.178 10.7403 107.169 10.8523C107.16 10.9549 107.141 11.0763 107.113 11.2163H101.499V10.1663H106.441L105.979 10.5723C105.979 10.1243 105.9 9.74627 105.741 9.43827C105.582 9.12093 105.358 8.87827 105.069 8.71027C104.78 8.53293 104.43 8.44427 104.019 8.44427C103.59 8.44427 103.212 8.5376 102.885 8.72427C102.558 8.91093 102.306 9.17227 102.129 9.50827C101.952 9.84427 101.863 10.2409 101.863 10.6983C101.863 11.1649 101.956 11.5756 102.143 11.9303C102.33 12.2756 102.596 12.5463 102.941 12.7423C103.286 12.9289 103.683 13.0223 104.131 13.0223C104.504 13.0223 104.845 12.9569 105.153 12.8263C105.47 12.6956 105.741 12.4996 105.965 12.2383L106.777 13.0643C106.46 13.4376 106.068 13.7223 105.601 13.9183C105.144 14.1143 104.654 14.2123 104.131 14.2123ZM112.491 14.0723V4.63627H113.751V14.0723H112.491ZM110.853 8.57027V7.42227H115.389V8.57027H110.853ZM121.327 14.0723V10.1943C121.327 9.69027 121.169 9.27493 120.851 8.94827C120.534 8.6216 120.123 8.45827 119.619 8.45827C119.283 8.45827 118.985 8.53293 118.723 8.68227C118.462 8.8316 118.257 9.03693 118.107 9.29827C117.958 9.5596 117.883 9.85827 117.883 10.1943L117.365 9.90027C117.365 9.39627 117.477 8.94827 117.701 8.55627C117.925 8.16427 118.238 7.85627 118.639 7.63227C119.041 7.39893 119.493 7.28227 119.997 7.28227C120.501 7.28227 120.945 7.39427 121.327 7.61827C121.719 7.84227 122.027 8.15493 122.251 8.55627C122.475 8.9576 122.587 9.4196 122.587 9.94227V14.0723H121.327ZM116.623 14.0723V4.07626H117.883V14.0723H116.623ZM127.121 14.2123C126.514 14.2123 125.964 14.0629 125.469 13.7643C124.974 13.4563 124.582 13.0409 124.293 12.5183C124.013 11.9956 123.873 11.4076 123.873 10.7543C123.873 10.1009 124.013 9.51293 124.293 8.99027C124.582 8.4676 124.97 8.05227 125.455 7.74427C125.95 7.43627 126.505 7.28227 127.121 7.28227C127.625 7.28227 128.073 7.3896 128.465 7.60427C128.866 7.8096 129.188 8.09893 129.431 8.47227C129.674 8.83627 129.809 9.26093 129.837 9.74627V11.7483C129.809 12.2243 129.674 12.6489 129.431 13.0223C129.198 13.3956 128.88 13.6896 128.479 13.9043C128.087 14.1096 127.634 14.2123 127.121 14.2123ZM127.331 13.0223C127.956 13.0223 128.46 12.8123 128.843 12.3923C129.226 11.9629 129.417 11.4169 129.417 10.7543C129.417 10.2969 129.328 9.90027 129.151 9.56427C128.983 9.21893 128.74 8.95293 128.423 8.76627C128.106 8.57027 127.737 8.47227 127.317 8.47227C126.897 8.47227 126.524 8.57027 126.197 8.76627C125.88 8.96227 125.628 9.23293 125.441 9.57827C125.264 9.91427 125.175 10.3016 125.175 10.7403C125.175 11.1883 125.264 11.5849 125.441 11.9303C125.628 12.2663 125.884 12.5323 126.211 12.7283C126.538 12.9243 126.911 13.0223 127.331 13.0223ZM129.333 14.0723V12.2803L129.571 10.6563L129.333 9.04627V7.42227H130.607V14.0723H129.333ZM137.146 14.0723V10.1943C137.146 9.69027 136.987 9.27493 136.67 8.94827C136.352 8.6216 135.942 8.45827 135.438 8.45827C135.102 8.45827 134.803 8.53293 134.542 8.68227C134.28 8.8316 134.075 9.03693 133.926 9.29827C133.776 9.5596 133.702 9.85827 133.702 10.1943L133.184 9.90027C133.184 9.39627 133.296 8.94827 133.52 8.55627C133.744 8.16427 134.056 7.85627 134.458 7.63227C134.859 7.39893 135.312 7.28227 135.816 7.28227C136.32 7.28227 136.763 7.40827 137.146 7.66027C137.538 7.91227 137.846 8.2436 138.07 8.65427C138.294 9.0556 138.406 9.48493 138.406 9.94227V14.0723H137.146ZM132.442 14.0723V7.42227H133.702V14.0723H132.442ZM143.024 14.0723V4.07626H144.284V14.0723H143.024ZM148.955 14.2123C148.348 14.2123 147.798 14.0629 147.303 13.7643C146.808 13.4563 146.416 13.0409 146.127 12.5183C145.847 11.9956 145.707 11.4076 145.707 10.7543C145.707 10.1009 145.847 9.51293 146.127 8.99027C146.416 8.4676 146.804 8.05227 147.289 7.74427C147.784 7.43627 148.339 7.28227 148.955 7.28227C149.459 7.28227 149.907 7.3896 150.299 7.60427C150.7 7.8096 151.022 8.09893 151.265 8.47227C151.508 8.83627 151.643 9.26093 151.671 9.74627V11.7483C151.643 12.2243 151.508 12.6489 151.265 13.0223C151.032 13.3956 150.714 13.6896 150.313 13.9043C149.921 14.1096 149.468 14.2123 148.955 14.2123ZM149.165 13.0223C149.79 13.0223 150.294 12.8123 150.677 12.3923C151.06 11.9629 151.251 11.4169 151.251 10.7543C151.251 10.2969 151.162 9.90027 150.985 9.56427C150.817 9.21893 150.574 8.95293 150.257 8.76627C149.94 8.57027 149.571 8.47227 149.151 8.47227C148.731 8.47227 148.358 8.57027 148.031 8.76627C147.714 8.96227 147.462 9.23293 147.275 9.57827C147.098 9.91427 147.009 10.3016 147.009 10.7403C147.009 11.1883 147.098 11.5849 147.275 11.9303C147.462 12.2663 147.718 12.5323 148.045 12.7283C148.372 12.9243 148.745 13.0223 149.165 13.0223ZM151.167 14.0723V12.2803L151.405 10.6563L151.167 9.04627V7.42227H152.441V14.0723H151.167ZM156.39 14.2123C156.016 14.2123 155.662 14.1656 155.326 14.0723C154.999 13.9696 154.696 13.8296 154.416 13.6523C154.136 13.4656 153.893 13.2463 153.688 12.9943L154.5 12.1823C154.742 12.4809 155.022 12.7049 155.34 12.8543C155.657 12.9943 156.012 13.0643 156.404 13.0643C156.796 13.0643 157.099 12.9989 157.314 12.8683C157.528 12.7283 157.636 12.5369 157.636 12.2943C157.636 12.0516 157.547 11.8649 157.37 11.7343C157.202 11.5943 156.982 11.4823 156.712 11.3983C156.441 11.3049 156.152 11.2163 155.844 11.1323C155.545 11.0389 155.26 10.9223 154.99 10.7823C154.719 10.6423 154.495 10.4509 154.318 10.2083C154.15 9.9656 154.066 9.6436 154.066 9.24227C154.066 8.84093 154.164 8.4956 154.36 8.20627C154.556 7.9076 154.826 7.67893 155.172 7.52027C155.526 7.3616 155.951 7.28227 156.446 7.28227C156.968 7.28227 157.43 7.3756 157.832 7.56227C158.242 7.7396 158.578 8.01027 158.84 8.37427L158.028 9.18627C157.841 8.9436 157.608 8.75693 157.328 8.62627C157.057 8.4956 156.749 8.43027 156.404 8.43027C156.04 8.43027 155.76 8.4956 155.564 8.62627C155.377 8.7476 155.284 8.92027 155.284 9.14427C155.284 9.36827 155.368 9.54093 155.536 9.66227C155.704 9.7836 155.923 9.88627 156.194 9.97027C156.474 10.0543 156.763 10.1429 157.062 10.2363C157.36 10.3203 157.645 10.4369 157.916 10.5863C158.186 10.7356 158.406 10.9363 158.574 11.1883C158.751 11.4403 158.84 11.7716 158.84 12.1823C158.84 12.8076 158.616 13.3023 158.168 13.6663C157.729 14.0303 157.136 14.2123 156.39 14.2123ZM161.272 14.0723V4.63627H162.532V14.0723H161.272ZM159.634 8.57027V7.42227H164.17V8.57027H159.634ZM169.353 14.0723L172.993 5.12626L174.295 5.16827L170.739 14.0723H169.353ZM167.827 5.53227V4.35627H174.295V5.16827L173.721 5.53227H167.827ZM181.398 14.2123C180.782 14.2123 180.231 14.0629 179.746 13.7643C179.261 13.4563 178.873 13.0409 178.584 12.5183C178.304 11.9956 178.164 11.4076 178.164 10.7543C178.164 10.1009 178.304 9.51293 178.584 8.99027C178.873 8.4676 179.261 8.05227 179.746 7.74427C180.231 7.43627 180.782 7.28227 181.398 7.28227C181.893 7.28227 182.341 7.3896 182.742 7.60427C183.143 7.8096 183.465 8.09893 183.708 8.47227C183.96 8.83627 184.1 9.26093 184.128 9.74627V11.7483C184.1 12.2243 183.965 12.6489 183.722 13.0223C183.479 13.3956 183.157 13.6896 182.756 13.9043C182.355 14.1096 181.902 14.2123 181.398 14.2123ZM181.608 13.0223C182.028 13.0223 182.392 12.9243 182.7 12.7283C183.017 12.5323 183.265 12.2663 183.442 11.9303C183.619 11.5849 183.708 11.1929 183.708 10.7543C183.708 10.2969 183.615 9.90027 183.428 9.56427C183.251 9.22827 183.003 8.96227 182.686 8.76627C182.378 8.57027 182.014 8.47227 181.594 8.47227C181.174 8.47227 180.805 8.57027 180.488 8.76627C180.171 8.96227 179.919 9.23293 179.732 9.57827C179.555 9.91427 179.466 10.3016 179.466 10.7403C179.466 11.1883 179.555 11.5849 179.732 11.9303C179.919 12.2663 180.171 12.5323 180.488 12.7283C180.815 12.9243 181.188 13.0223 181.608 13.0223ZM184.898 14.0723H183.624V12.2803L183.862 10.6563L183.624 9.04627V4.07626H184.898V14.0723ZM189.561 14.2123C188.954 14.2123 188.403 14.0629 187.909 13.7643C187.414 13.4563 187.022 13.0409 186.733 12.5183C186.453 11.9956 186.313 11.4076 186.313 10.7543C186.313 10.1009 186.453 9.51293 186.733 8.99027C187.022 8.4676 187.409 8.05227 187.895 7.74427C188.389 7.43627 188.945 7.28227 189.561 7.28227C190.065 7.28227 190.513 7.3896 190.905 7.60427C191.306 7.8096 191.628 8.09893 191.871 8.47227C192.113 8.83627 192.249 9.26093 192.277 9.74627V11.7483C192.249 12.2243 192.113 12.6489 191.871 13.0223C191.637 13.3956 191.32 13.6896 190.919 13.9043C190.527 14.1096 190.074 14.2123 189.561 14.2123ZM189.771 13.0223C190.396 13.0223 190.9 12.8123 191.283 12.3923C191.665 11.9629 191.857 11.4169 191.857 10.7543C191.857 10.2969 191.768 9.90027 191.591 9.56427C191.423 9.21893 191.18 8.95293 190.863 8.76627C190.545 8.57027 190.177 8.47227 189.757 8.47227C189.337 8.47227 188.963 8.57027 188.637 8.76627C188.319 8.96227 188.067 9.23293 187.881 9.57827C187.703 9.91427 187.615 10.3016 187.615 10.7403C187.615 11.1883 187.703 11.5849 187.881 11.9303C188.067 12.2663 188.324 12.5323 188.651 12.7283C188.977 12.9243 189.351 13.0223 189.771 13.0223ZM191.773 14.0723V12.2803L192.011 10.6563L191.773 9.04627V7.42227H193.047V14.0723H191.773ZM197.065 14.1283L194.181 7.42227H195.581L197.723 12.6723H197.275L199.529 7.42227H200.929L197.821 14.1283H197.065ZM195.161 16.8583L197.121 12.8403L197.821 14.1283L196.561 16.8583H195.161ZM203.94 14.2123C203.567 14.2123 203.212 14.1656 202.876 14.0723C202.55 13.9696 202.246 13.8296 201.966 13.6523C201.686 13.4656 201.444 13.2463 201.238 12.9943L202.05 12.1823C202.293 12.4809 202.573 12.7049 202.89 12.8543C203.208 12.9943 203.562 13.0643 203.954 13.0643C204.346 13.0643 204.65 12.9989 204.864 12.8683C205.079 12.7283 205.186 12.5369 205.186 12.2943C205.186 12.0516 205.098 11.8649 204.92 11.7343C204.752 11.5943 204.533 11.4823 204.262 11.3983C203.992 11.3049 203.702 11.2163 203.394 11.1323C203.096 11.0389 202.811 10.9223 202.54 10.7823C202.27 10.6423 202.046 10.4509 201.868 10.2083C201.7 9.9656 201.616 9.6436 201.616 9.24227C201.616 8.84093 201.714 8.4956 201.91 8.20627C202.106 7.9076 202.377 7.67893 202.722 7.52027C203.077 7.3616 203.502 7.28227 203.996 7.28227C204.519 7.28227 204.981 7.3756 205.382 7.56227C205.793 7.7396 206.129 8.01027 206.39 8.37427L205.578 9.18627C205.392 8.9436 205.158 8.75693 204.878 8.62627C204.608 8.4956 204.3 8.43027 203.954 8.43027C203.59 8.43027 203.31 8.4956 203.114 8.62627C202.928 8.7476 202.834 8.92027 202.834 9.14427C202.834 9.36827 202.918 9.54093 203.086 9.66227C203.254 9.7836 203.474 9.88627 203.744 9.97027C204.024 10.0543 204.314 10.1429 204.612 10.2363C204.911 10.3203 205.196 10.4369 205.466 10.5863C205.737 10.7356 205.956 10.9363 206.124 11.1883C206.302 11.4403 206.39 11.7716 206.39 12.1823C206.39 12.8076 206.166 13.3023 205.718 13.6663C205.28 14.0303 204.687 14.2123 203.94 14.2123Z"
                  fill="white"
                />
              </svg>
              <span>0.5% increase than last 7 days</span>
            </p>
          </div>
          <div>
            <svg
              width="28"
              height="34"
              viewBox="0 0 28 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2498 27.0729L21.6665 17.6562L19.2498 15.2396L12.2082 22.2812L8.70817 18.7812L6.33317 21.1562L12.2498 27.0729ZM3.99984 33.7396C3.08317 33.7396 2.29873 33.4135 1.6465 32.7612C0.994281 32.109 0.667615 31.324 0.666504 30.4062V3.73958C0.666504 2.82292 0.99317 2.03847 1.6465 1.38625C2.29984 0.734028 3.08428 0.407361 3.99984 0.40625H17.3332L27.3332 10.4062V30.4062C27.3332 31.3229 27.0071 32.1079 26.3548 32.7612C25.7026 33.4146 24.9176 33.7407 23.9998 33.7396H3.99984ZM15.6665 12.0729H23.9998L15.6665 3.73958V12.0729Z"
                fill="white"
              />
            </svg>
          </div> 
        </div>
      </div>






      </div>
    </div>
  );
};

export default UserProfile;