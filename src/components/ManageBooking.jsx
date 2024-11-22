import  { useState } from 'react';
import { Button, Table, Pagination, DatePicker, Tabs } from "antd";
import { MdOutlineChevronLeft } from "react-icons/md";
import dayjs from "dayjs";
import imageone from "../assets/images/user.png"; // Adjust the path as necessary for a non-Next.js project

const ManageBooking = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [activeTab, setActiveTab] = useState("completed");

  const handleTabChange = (key) => {
    setActiveTab(key);
    setCurrentPage(1); // Reset to the first page when changing tabs
  };
    
      const completedData = [
        {
          "key": "1",
          "name": "Md. Mehedi Hasan",
          "email": "example@gmail.com",
          "phone": "+8801825455",
          "checkIn": "24 Aug, 2024",
          "checkOut": "---",
          "owner": "Mahedi",
          "status": "completed"
        },
        {
          "key": "2",
          "name": "John Doe",
          "email": "john@example.com",
          "phone": "+8801825455",
          "checkIn": "20 Aug, 2024",
          "checkOut": "25 Aug, 2024",
          "owner": "Mahedi",
          "status": "upcoming"
        },
        {
          "key": "3",
          "name": "Jane Smith",
          "email": "jane@example.com",
          "phone": "+8801825455",
          "checkIn": "18 Aug, 2024",
          "checkOut": "22 Aug, 2024",
          "owner": "Mahedi",
          "status": "canceled"
        },
        {
          "key": "4",
          "name": "Alice Johnson",
          "email": "alice@example.com",
          "phone": "+8801825455",
          "checkIn": "15 Aug, 2024",
          "checkOut": "20 Aug, 2024",
            "owner": "Mahedi",
          "status": "completed"
        },
        {
          "key": "5",
          "name": "Bob Brown",
          "email": "bob@example.com",
          "phone": "+8801825455",
          "checkIn": "10 Aug, 2024",
          "checkOut": "15 Aug, 2024",
            "owner": "Mahedi",
          "status": "upcoming"
        },
        {
          "key": "6",
          "name": "Charlie Green",
          "email": "charlie@example.com",
          "phone": "+8801825455",
          "checkIn": "05 Aug, 2024",
          "checkOut": "10 Aug, 2024",
          "owner": "Mahedi",
          "status": "completed"
        },
        {
          "key": "7",
          "name": "Daisy White",
          "email": "daisy@example.com",
          "phone": "+8801825455",
          "checkIn": "01 Aug, 2024",
          "checkOut": "05 Aug, 2024",
          "owner": "Mahedi",
          "status": "canceled"
        },
        {
          "key": "8",
          "name": "Ethan Blue",
          "email": "ethan@example.com",
          "phone": "+8801825455",
          "checkIn": "24 Aug, 2024",
          "checkOut": "---",
            "owner": "Mahedi",
          "status": "upcoming"
        },
        {
          "key": "9",
          "name": "Fiona Yellow",
          "email": "fiona@example.com",
          "phone": "+8801825455",
          "checkIn": "10 Sep, 2024",
          "checkOut": "15 Sep, 2024",
            "owner": "Mahedi",
          "status": "upcoming"
        },
        {
          "key": "10",
          "name": "George Black",
          "email": "george@example.com",
          "phone": "+8801825455",
          "checkIn": "30 Jul, 2024",
          "checkOut": "05 Aug, 2024",
            "owner": "Mahedi",
          "status": "completed"
        },
        {
          "key": "11",
          "name": "Hannah Purple",
          "email": "hannah@example.com",
          "phone": "+8801825455",
          "checkIn": "20 Jul, 2024",
          "checkOut": "25 Jul, 2024",
          "owner": "Mahedi",
          "status": "canceled"
        },
        {
          "key": "12",
          "name": "Ivy Red",
          "email": "ivy@example.com",
          "phone": "+8801825455",
          "checkIn": "15 Jul, 2024",
          "checkOut": "20 Jul, 2024",
          "owner": "Mahedi",
          "status": "completed"
        },
        {
          "key": "13",
          "roomId": "125658",
          "checkIn": "24 Aug, 2024",
          "checkOut": "---",
            "owner": "Mahedi",
          "status": "upcoming"
        },
        {
          "key": "14",
          "roomId": "125658",
          "checkIn": "24 Aug, 2024",
          "checkOut": "29 Aug, 2024",
            "owner": "Mahedi",
          "status": "upcoming"
        },
        {
          "key": "15",
          "roomId": "125658",
          "checkIn": "24 Aug, 2024",
          "checkOut": "29 Aug, 2024",
            "owner": "Mahedi",
          "status": "completed"
        },
        {
          "key": "16",
          "roomId": "125658",
          "checkIn": "24 Aug, 2024",
          "checkOut": "29 Aug, 2024",
            "owner": "Mahedi",
          "status": "completed"
        },
        {
          "key": "17",
          "roomId": "125658",
          "checkIn": "24 Aug, 2024",
          "checkOut": "29 Aug, 2024",
            "owner": "Mahedi",
          "status": "upcoming"
        },
        {
          "key": "18",
          "roomId": "125658",
          "checkIn": "24 Aug, 2024",
          "checkOut": "---",
            "owner": "Mahedi",
          "status": "completed"
        },
        {
          "key": "19",
          "roomId": "125658",
          "checkIn": "24 Aug, 2024",
          "checkOut": "29 Aug, 2024",
            "owner": "Mahedi",
          "status": "completed"
        },
        {
          "key": "20",
          "roomId": "125658",
          "checkIn": "24 Aug, 2024",
          "checkOut": "29 Aug, 2024",
            "owner": "Mahedi",
          "status": "completed"
        },
        {
          "key": "21",
          "roomId": "125658",
          "checkIn": "24 Aug, 2024",
          "checkOut": "29 Aug, 2024",
            "owner": "Mahedi",
          "status": "completed"
        }
      ];
      
    
      const canceledData = [
        {
            "key": "1",
            "name": "Md. Mehedi Hasan",
            "email": "example@gmail.com",
            "phone": "+8801825455",
            "checkIn": "24 Aug, 2024",
            "checkOut": "---",
            "refund": "Cash back",
            "investor": "Investor A"
        },
        {
            "key": "2",
            "name": "John Doe",
            "email": "john@example.com",
            "phone": "+8801825455",
            "checkIn": "20 Aug, 2024",
            "checkOut": "25 Aug, 2024",
            "refund": "Cash back",
            "investor": "Investor B"
        },
        {
            "key": "3",
            "name": "Jane Smith",
            "email": "jane@example.com",
            "phone": "+8801825455",
            "checkIn": "18 Aug, 2024",
            "checkOut": "22 Aug, 2024",
            "refund": "Cash back",
            "investor": "Investor C"
        },
        {
            "key": "4",
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "phone": "+8801825455",
            "checkIn": "15 Aug, 2024",
            "checkOut": "20 Aug, 2024",
            "refund": "Cash back",
            "investor": "Investor D"
        },
        {
            "key": "5",
            "name": "Bob Brown",
            "email": "bob@example.com",
            "phone": "+8801825455",
            "checkIn": "10 Aug, 2024",
            "checkOut": "15 Aug, 2024",
            "refund": "Cash back",
            "investor": "Investor E"
        },
        {
            "key": "6",
            "name": "Charlie Green",
            "email": "charlie@example.com",
            "phone": "+8801825455",
            "checkIn": "05 Aug, 2024",
            "checkOut": "10 Aug, 2024",
            "refund": "Cash back",
            "investor": "Investor F"
        },
        {
            "key": "7",
            "name": "Daisy White",
            "email": "daisy@example.com",
            "phone": "+8801825455",
            "checkIn": "01 Aug, 2024",
            "checkOut": "05 Aug, 2024",
            "refund": "Cash back",
            "investor": "Investor G"
        },
        {
            "key": "8",
            "name": "Ethan Blue",
            "email": "ethan@example.com",
            "phone": "+8801825455",
            "checkIn": "24 Aug, 2024",
            "checkOut": "---",
            "refund": "Cash back",
            "investor": "Investor H"
        },
        {
            "key": "9",
            "name": "Fiona Yellow",
            "email": "fiona@example.com",
            "phone": "+8801825455",
            "checkIn": "10 Sep, 2024",
            "checkOut": "15 Sep, 2024",
            "refund": "Cash back",
            "investor": "Investor I"
        },
        {
            "key": "10",
            "name": "George Black",
            "email": "george@example.com",
            "phone": "+8801825455",
            "checkIn": "30 Jul, 2024",
            "checkOut": "05 Aug, 2024",
            "refund": "Cash back",
            "investor": "Investor J"
        },
        {
            "key": "11",
            "name": "Hannah Purple",
            "email": "hannah@example.com",
            "phone": "+8801825455",
            "checkIn": "20 Jul, 2024",
            "checkOut": "25 Jul, 2024",
            "refund": "Cash back",
            "investor": "Investor K"
        },
        {
            "key": "12",
            "name": "Ivy Red",
            "email": "ivy@example.com",
            "phone": "+8801825455",
            "checkIn": "15 Jul, 2024",
            "checkOut": "20 Jul, 2024",
            "refund": "Cash back",
            "investor": "Investor L"
        },
        {
            "key": "13",
            "roomId": "125658",
            "checkIn": "24 Aug, 2024",
            "checkOut": "---",
            "refund": "Cash back",
            "investor": "Investor M"
        },
        {
            "key": "14",
            "roomId": "125658",
            "checkIn": "24 Aug, 2024",
            "checkOut": "29 Aug, 2024",
            "refund": "Cash back",
            "investor": "Investor N"
        },
        {
            "key": "15",
            "roomId": "125658",
            "checkIn": "24 Aug, 2024",
            "checkOut": "29 Aug, 2024",
            "refund": "Cash back",
            "investor": "Investor O"
        },
        {
            "key": "16",
            "roomId": "125658",
            "checkIn": "24 Aug, 2024",
            "checkOut": "29 Aug, 2024",
            "refund": "Cash back",
            "investor": "Investor P"
        },
        {
            "key": "17",
            "roomId": "125658",
            "checkIn": "24 Aug, 2024",
            "checkOut": "29 Aug, 2024",
            "refund": "Cash back",
            "investor": "Investor Q"
        },
        {
            "key": "18",
            "roomId": "125658",
            "checkIn": "24 Aug, 2024",
            "checkOut": "---",
            "refund": "Cash back",
            "investor": "Investor R"
        },
        {
            "key": "19",
            "roomId": "125658",
            "checkIn": "24 Aug, 2024",
            "checkOut": "29 Aug, 2024",
            "refund": "Cash back",
            "investor": "Investor S"
        },
        {
            "key": "20",
            "roomId": "125658",
            "checkIn": "24 Aug, 2024",
            "checkOut": "29 Aug, 2024",
            "refund": "Cash back",
            "investor": "Investor T"
        },
        {
            "key": "21",
            "roomId": "125658",
            "checkIn": "24 Aug, 2024",
            "checkOut": "29 Aug, 2024",
            "refund": "Cash back",
            "investor": "Investor U"
        }
    ];
    
    
   
  // Select data based on the active tab
  const dataToDisplay = () => {
    switch (activeTab) {
        case "completed":
            return completedData;
        case "canceled":
            return canceledData;
        default:
            return []; // Return an empty array or some default value
    }
};



  const completedColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center space-x-2">
          <img src={imageone} alt="User" width={40} height={40} className="rounded-full" />
          <div>
            <span>{text}</span>
            <div className="text-sm text-gray-400">{record.phone}</div>
          </div>
        </div>
      ),
    },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Check in", dataIndex: "checkIn", key: "checkIn" },
    { title: "Check out", dataIndex: "checkOut", key: "checkOut" },
    { title: "Owner", dataIndex: "owner", key: "owner" },
  ];

  const canceledColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center space-x-2">
          <img src={imageone} alt="User" width={40} height={40} className="rounded-full" />
          <div>
            <span>{text}</span>
            <div className="text-sm text-gray-400">{record.phone}</div>
          </div>
        </div>
      ),
    },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Check in", dataIndex: "checkIn", key: "checkIn" },
    { title: "Check out", dataIndex: "checkOut", key: "checkOut" },
    { title: "Investor", dataIndex: "investor", key: "investor" },
    // { title: "Refund", dataIndex: "refund", key: "refund" },
  ];


  const getColumnsByTab = (activeTab) => {
    switch (activeTab) {
        case "completed":
            return completedColumns;
        case "canceled":
            return canceledColumns;
        default:
            return []; // Handle default case
    }
};

  const columns = getColumnsByTab(activeTab);
  const paginatedData = dataToDisplay().slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="container mx-auto my-12">
      <div className="flex items-center justify-between mb-2 bg-[#242424] p-4 rounded-lg">
      <div className=' px-6  w-full'>
      <h2 className="text-[28px] flex text-white space-x-2 items-center font-bold mb-6">
          <button onClick={() => window.history.back()} className="focus:outline-none">
            <MdOutlineChevronLeft className="text-4xl cursor-pointer" />
          </button>
          Booking management
        </h2>
        <p className='text-sm font-normal text-gray-400'>Investor can see booking information</p>
      </div>
        <DatePicker
          onChange={(date) => setSelectedDate(date)}
          format="DD MMM YYYY"
          value={selectedDate}
          style={{
            border: '1px solid #EBCA7E',
            backgroundColor: 'transparent',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        />
      </div>

      {/* Customized Tabs Component */}
      <Tabs
        activeKey={activeTab}
        onChange={handleTabChange}
        tabBarStyle={{ border: 'none' }} // Remove border
        tabBarGutter={20} // Space between tabs
      >

        <Tabs.TabPane
          tab={<span style={{ color: activeTab === "completed" ? "#EBCA7E" : "#ffff" }}>Completed</span>}
          key="completed"
        />
        <Tabs.TabPane
          tab={<span style={{ color: activeTab === "canceled" ? "#EBCA7E" : "#ffff" }}>Canceled</span>}
          key="canceled"
        />
 
      </Tabs>

      <div className="overflow-x-auto">
        <Table
          columns={columns}
          dataSource={paginatedData} // Make sure to filter your data accordingly
          pagination={false}
          className="custom-table text-red-500"
          scroll={{ x: "max-content" }}
        />
      </div>

      {/* Pagination Component */}
      <div className="flex justify-center items-center gap-4 mt-8 border-t-2 border-[#424242] p-6 w-full">
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="text-center text-black mt-2">
            Page {currentPage} of {Math.ceil(dataToDisplay().length / pageSize)}
          </div>
          <Pagination
            current={currentPage}
            total={dataToDisplay().length}
            pageSize={pageSize}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
            className="text-center"
          />
        </div>
        <div className="flex justify-end items-center gap-4 w-full">
          <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>Previous</Button>
          <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(dataToDisplay().length / pageSize)))}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default ManageBooking;
