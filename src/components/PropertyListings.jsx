import React, { useState } from "react";
import { Button, Table, Pagination, Modal, Image, Input } from "antd";
import { EditOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import imageone from "../../public/user.png"; // Ensure the image path is correct

const PropertyListings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [data, setData] = useState([
    { key: "1", investor: "David Via", roomId: "458565", contact: "+880-12345687", perNightCost: "$560.00", status: "Approved" },
    { key: "2", investor: "Lionel Messi", roomId: "458565", contact: "+880-12345687", perNightCost: "$560.00", status: "Pending" },
    { key: "3", investor: "Paul Pogba", roomId: "458565", contact: "+880-12345687", perNightCost: "$560.00", status: "Canceled" },
    { key: "4", investor: "Kante", roomId: "458565", contact: "+880-12345687", perNightCost: "$560.00", status: "Pending" },
    { key: "5", investor: "Neymar Junior", roomId: "458565", contact: "+880-12345687", perNightCost: "$560.00", status: "Pending" },
    { key: "6", investor: "Cristiano Ronaldo", roomId: "458565", contact: "+880-12345687", perNightCost: "$560.00", status: "Pending" },
    { key: "7", investor: "Lucacu", roomId: "458565", contact: "+880-12345687", perNightCost: "$560.00", status: "Pending" },
  ]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEdit = (record) => {
    setSelectedRecord(record);
    setShowModal(true);
  };

  const handleApprove = () => {
    if (selectedRecord) {
      // Update the status of the selected record to "Approved"
      const updatedData = data.map((item) =>
        item.key === selectedRecord.key ? { ...item, status: "Approved" } : item
      );
      setData(updatedData);
    }
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const columns = [
    {
      title: "Investor",
      dataIndex: "investor",
      key: "investor",
      render: (text) => (
        <div className="flex items-center space-x-2">
          <Image src={imageone} alt="Investor" width={40} height={40} className="rounded-full" />
          <span className="text-white">{text}</span>
        </div>
      ),
    },
    { title: "Room Id", dataIndex: "roomId", key: "roomId", className: "text-white" },
    { title: "Contact", dataIndex: "contact", key: "contact", className: "text-white" },
    { title: "Per Night Cost", dataIndex: "perNightCost", key: "perNightCost", className: "text-white" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Button
          className={`text-white capitalize ${
            status === "Approved" ? "bg-green-500" : status === "Canceled" ? "bg-red-500" : "bg-gray-500"
          } hover:bg-opacity-80 border-none`}
        >
          {status}
        </Button>
      ),
    },
    {
      title: "Actions",
      key: "action",
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button icon={<EditOutlined size={20} />} onClick={() => handleEdit(record)} />
          <Button className="bg-red-500 hover:bg-red-700 text-white border-none" icon={<DeleteOutlined />} type="danger" />
        </div>
      ),
    },
  ];

  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="container mx-auto my-12 bg-[#1E1E1E] p-4 rounded-lg">
     <div className="pb-6">
     <h1 className="text-[34px] text-[#FFFFFF] font-bold">Manage Listing</h1>
      <p className="text-sm font-normal text-[#FFFFFFB2] opacity-70 pt-2">
        Admin with access to this workspace can approve, cancel, and delete sellers' listings
      </p>
     </div>

      <Input
        prefix={<SearchOutlined />}
        style={{ border: "none", backgroundColor: "#2B2B2B", color: "white", height: "40px" }}
      />

      <div className="overflow-x-auto mt-6">
        <Table
          columns={columns}
          dataSource={paginatedData}
          pagination={false}
          className="custom-table text-white"
          scroll={{ x: "max-content" }}
        />
      </div>

      <div className="flex justify-center items-center gap-4 mt-8 border-t-2 border-[#424242] p-6 w-full">
        <div className="text-center text-white mt-2">
          Page {currentPage} of {Math.ceil(data.length / pageSize)}
        </div>
        <Pagination
          current={currentPage}
          total={data.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
          className="text-center"
        />
      </div>

      <Modal
        
        title={<h2 className="text-xl font-semibold  text-center">Approve Investor Property</h2>}
        open={showModal}
        onCancel={handleCancel}
        footer={null}
        className="text-black"
      >
        <div className=" rounded-md">
          <p className=" text-base mb-6 text-center">Are you sure you want to approve the property?</p>
          <div className="flex justify-end gap-4">
            <Button
              key="cancel"
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-700  text-white border-none rounded-lg"
            >
              Cancel
            </Button>
            <Button
              key="approve"
              type="primary"
              onClick={handleApprove}
              className="bg-green-500 hover:bg-green-700 text-white border-none rounded-lg"
            >
              Approve
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PropertyListings;
