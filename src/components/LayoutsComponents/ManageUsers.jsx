import { Button, Form, Input, Modal, Select, Table, message } from "antd";
import React, { useState } from "react";
import {
  useAllUserQuery,
  useCreateAdminMutation,
} from "../../../redux/apiSlices/userApis";

import { PlusOutlined } from "@ant-design/icons";

const ManageUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterUsers, setFilterUsers] = useState("");
  const [form] = Form.useForm();
  const { data: users } = useAllUserQuery({ role: filterUsers });

  const [makeAdmin] = useCreateAdminMutation();

  console.log(users);

  // Show the modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Handle adding a new admin
  const handleOk = async () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form Values:", values);
        makeAdmin(values)
          .unwrap()
          .then((res) => {
            message.success(res.message);
            form.resetFields(); // Reset form fields
            setIsModalOpen(false); // Close the modal
          })
          .catch((error) => {
            console.log(error);
            message.error(error.data.message);
          });
      })
      .catch((info) => console.log("Validation Failed:", info));
  };

  // Handle modal cancel
  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  // Handle delete
  const handleDelete = (key) => {
    console.log(key);
  };

  // Table columns
  const columns = [
    {
      title: "S.no",
      dataIndex: "key",
      key: "key",
      render: (text, record, index) => index + 1, // Recalculate index dynamically
    },
    {
      title: "Admin Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Admin Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Admin Type",
      dataIndex: "role",
      key: "role",
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Button
    //       type="text"
    //       danger
    //       icon={<DeleteOutlined />}
    //       onClick={() => handleDelete(record.key)} // Call delete function
    //     />
    //   ),
    // },
  ];

  const handleChange = (value) => {
    setFilterUsers(value);
  };

  return (
    <div className="p-6 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Make Admin</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={showModal}
          className="flex items-center bg-[#FF0048] text-white font-semibold"
        >
          Create Admin Profile
        </Button>
      </div>
      <div className="mb-4 flex justify-end">
        <Select
          defaultValue="Filter"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "", label: "Users" },
            { value: "admin", label: "Admin" },
            { value: "superadmin", label: "Super Admin" },
          ]}
        />
      </div>
      <Table
        columns={columns}
        dataSource={users?.data?.result} // Use the updated admin list
        pagination={{
          pageSize: 10, // Number of rows per page
          //   showSizeChanger: true, // Allow users to change page size
        }}
        className="border rounded-md shadow-md"
      />

      <Modal
        title="Create Admin Profile"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Create"
        cancelText="Cancel"
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please enter the admin name!" },
            ]}
          >
            <Input placeholder="Enter admin name" />
          </Form.Item>
          <Form.Item
            label="Admin Type"
            name="role"
            rules={[
              { required: true, message: "Please select the admin type!" },
            ]}
          >
            <Select placeholder="Select admin type">
              <Select.Option value="superadmin">Super Admin</Select.Option>
              <Select.Option value="admin">Simple Admin</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter the email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter admin email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter the password!" }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm the password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm password" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageUsers;
