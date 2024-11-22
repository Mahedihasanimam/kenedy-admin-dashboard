import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, Select } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const MakeAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [admins, setAdmins] = useState([
    {
      key: "1",
      name: "Asad",
      email: "asad@gmail.com",
      adminType: "Super admin",
    },
    {
      key: "2",
      name: "Jaman",
      email: "jaman@gmail.com",
      adminType: "Simple admin",
    },
    {
      key: "3",
      name: "Mahfuz",
      email: "mahfuz@gmail",
      adminType: "Simple admin",
    },
  ]);

  // Show the modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Handle adding a new admin
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const newAdmin = {
          key: `${admins.length + 1}`, // Dynamically add key
          ...values,
        };
        setAdmins([...admins, newAdmin]); // Add the new admin to the list
        form.resetFields(); // Reset form fields
        setIsModalOpen(false); // Close the modal
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
    const updatedAdmins = admins.filter((admin) => admin.key !== key);
    setAdmins(updatedAdmins); // Update the admin list
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
      dataIndex: "adminType",
      key: "adminType",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(record.key)} // Call delete function
        />
      ),
    },
  ];

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
      <Table
        columns={columns}
        dataSource={admins} // Use the updated admin list
        pagination={false}
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
            rules={[{ required: true, message: "Please enter the admin name!" }]}
          >
            <Input placeholder="Enter admin name" />
          </Form.Item>
          <Form.Item
            label="Admin Type"
            name="adminType"
            rules={[
              { required: true, message: "Please select the admin type!" },
            ]}
          >
            <Select placeholder="Select admin type">
              <Select.Option value="Super admin">Super Admin</Select.Option>
              <Select.Option value="Simple admin">Simple Admin</Select.Option>
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
            rules={[
              { required: true, message: "Please enter the password!" },
            ]}
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

export default MakeAdmin;
