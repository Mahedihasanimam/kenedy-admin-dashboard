import React, { useState } from "react";
import { Button, Table, Pagination, Modal, Image, Input, Radio } from "antd";
import { EditOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Add this if using React Router
import imageone from "../../public/user.png"; // Ensure the image path is correct

const ManageUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userData, setUserData] = useState([
    {
      key: "1",
      name: "David Via",
      email: "david@example.com",
      image: imageone,
      role: "Investor",
    },
    {
      key: "2",
      name: "Lionel Messi",
      email: "messi@example.com",
      image: imageone,
      role: "User",
    },
    {
      key: "3",
      name: "Paul Pogba",
      email: "pogba@example.com",
      image: imageone,
      role: "Investor",
    },
    {
      key: "4",
      name: "Kante",
      email: "kante@example.com",
      image: imageone,
      role: "User",
    },
    {
      key: "5",
      name: "Neymar Junior",
      email: "neymar@example.com",
      image: imageone,
      role: "User",
    },
    {
      key: "6",
      name: "Cristiano Ronaldo",
      email: "ronaldo@example.com",
      image: imageone,
      role: "Investor",
    },
    {
      key: "7",
      name: "Lukaku",
      email: "lukaku@example.com",
      image: imageone,
      role: "User",
    },
  ]);

  const navigate = useNavigate(); // For navigating to user profile pages

  const openModal = (record) => {
    setSelectedUser(record);
    setSelectedRole(record.role);
    setShowModal(true);
  };

  const handleSaveChanges = () => {
    if (selectedUser) {
      const updatedData = userData.map((user) =>
        user.key === selectedUser.key ? { ...user, role: selectedRole } : user
      );
      setUserData(updatedData);

      Swal.fire({
        title: "Success",
        text: `Role updated to: ${selectedRole}`,
        icon: "success",
      });

      setShowModal(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (record) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedData = userData.filter((user) => user.key !== record.key);
        setUserData(updatedData);

        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const columns = [
    {
      title: "User",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div  onClick={() => navigate(`/user/${record.key}`)}  className="flex items-center space-x-2 cursor-pointer">
          <Image
            src={record.image}
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
          <p className="text-white">{text}</p>
          <p className="text-white">{record.email}</p>
          </div>
        </div>
      ),
    },
   
    {
      title: "Role",
      dataIndex: "role",
      render: (role) => (
        <Button style={{ backgroundColor: role === "Investor" ? "#FFFFEA" : "#ffff", borderRadius: "30px", padding: "5px 10px", color: "black" }}>
          {role}
        </Button>
      ),
      className: "text-white",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button icon={<EditOutlined />} onClick={() => openModal(record)} />
          <Button icon={<DeleteOutlined className="text-red-500" />} onClick={() => handleDelete(record)} />
        </div>
      ),
    },
  ];

  const paginatedData = userData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container mx-auto my-12 bg-[#1E1E1E] min-h-screen p-4 rounded-lg">
      <div className="py-6">
      <h1 className="text-[34px] text-[#FFFFFF] font-bold py-[8px]">Manage Users</h1>
      <p className="text-white">Admin with access to this workspace can promote or demote user maintain business insights</p>
      </div>
      <Input
        prefix={<SearchOutlined />}
        style={{ border: "none", backgroundColor: "#2B2B2B", color: "white", height: "40px" }}
      />

      <Table
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
        className="custom-table text-white"
        scroll={{ x: "max-content" }}
       
      />

      <div className="flex justify-center items-center gap-4 mt-8 border-t-2 border-[#424242] p-6 w-full">
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="text-center text-white mt-2">
            Page {currentPage} of {Math.ceil(userData.length / pageSize)}
          </div>
          <Pagination
            current={currentPage}
            total={userData.length}
            pageSize={pageSize}
            onChange={handlePageChange}
            showSizeChanger={false}
            className="text-center"
          />
        </div>
        <div className="flex justify-end items-center gap-4 w-full">
          <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
            Previous
          </Button>
          <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(userData.length / pageSize)))}>
            Next
          </Button>
        </div>
      </div>

      <Modal
        title={<span className="text-2xl font-extrabold" style={{ color: "#FFFFFF" }}>Change User Role</span>}
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={[
          <Button
            key="cancel"
            onClick={() => setShowModal(false)}
            style={{ backgroundColor: "transparent", border: "white 1px solid", color: "red" }}
          >
            Cancel
          </Button>,
          <Button
            key="save"
            type="primary"
            onClick={handleSaveChanges}
            style={{ backgroundColor: "#EBCA7E", color: "black" }}
          >
            Save Changes
          </Button>,
        ]}
        className="custom-modal"
      >
        <Radio.Group
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="mt-4"
        >
          <div className="mb-4">
            <Radio value="Investor">Investor</Radio>
          </div>
          <div>
            <Radio value="User">User</Radio>
          </div>
        </Radio.Group>
      </Modal>
    </div>
  );
};

export default ManageUsers;
