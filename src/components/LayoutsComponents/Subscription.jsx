import { Button, Form, Input, Modal, Select, Table, Tabs } from "antd";
import React, { useState } from "react";
import {
  useCreateSubscriptionMutation,
  useDeleteSubscriptionPlanMutation,
  useGetAllSubscriptionsPlansQuery,
  useGetAllUserSubscriptionTimeLeftQuery,
  useUpdateSubscriptionMutation,
} from "../../../redux/apiSlices/subscription";

import Swal from "sweetalert2";
import { imageUrl } from "../../../redux/api/baseApi";

const Subscription = () => {
  const { data: subscriptions } = useGetAllSubscriptionsPlansQuery({});
  const [addNewSubscription] = useCreateSubscriptionMutation();
  const [deleteSubscription] = useDeleteSubscriptionPlanMutation();
  const [updateSubscription] = useUpdateSubscriptionMutation();
  const { data: allUserSubscriptions } = useGetAllUserSubscriptionTimeLeftQuery(
    {}
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSubscription, setEditingSubscription] = useState(null);
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState("userSubscriptions");

  const handleOpenModal = (subscription = null) => {
    setEditingSubscription(subscription);
    form.setFieldsValue(
      subscription || { name: "", price: "", duration: "", features: [""] }
    );
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingSubscription(null);
    form.resetFields();
  };

  const handleSubmit = async (values) => {
    try {
      if (editingSubscription) {
        await updateSubscription({
          id: editingSubscription._id,
          data: values,
        }).unwrap();
        Swal.fire({
          icon: "success",
          title: "Subscription Updated Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        await addNewSubscription(values).unwrap();
        Swal.fire({
          icon: "success",
          title: "Subscription Added Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      handleCloseModal();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error adding Subscription",
        text: error.message || "Something went wrong!",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteSubscription(id).unwrap();
          Swal.fire({
            icon: "success",
            title: "Subscription Deleted Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error deleting Subscription",
        text: error.message || "Something went wrong!",
      });
    }
  };

  // Columns for User Subscriptions table
  const userSubscriptionColumns = [
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={imageUrl + image}
          alt="user"
          width={50}
          className="rounded-full object-cover"
        />
      ),
    },
    {
      title: "Time Left (Months)",
      dataIndex: "monthsLeft",
      key: "monthsLeft",
      render: (monthsLeft) => (
        <span className=" text-center">{monthsLeft} Months</span>
      ),
    },
    {
      title: "Time Left (Days)",
      dataIndex: "daysLeft",
      key: "daysLeft",
      render: (daysLeft) => (
        <span className=" text-center">{daysLeft} Days</span>
      ),
    },
  ];

  return (
    <div className="container min-h-fit mx-auto p-6">
      {/* Tabs for Switching Between User Subscriptions and Created Plans */}
      <Tabs
        defaultActiveKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        className="mb-4"
      >
        <Tabs.TabPane tab="User Subscriptions" key="userSubscriptions">
          {/* Show User Subscriptions Table */}
          <Table
            columns={userSubscriptionColumns}
            dataSource={allUserSubscriptions?.subscriptions || []}
            rowKey="userId"
            pagination={false}
            className=""
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Subscription Plans" key="subscriptionPlans">
          {/* Show all subscriptions plan */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Subscriptions</h1>
            <Button
              style={{ backgroundColor: "#FF0048", color: "white" }}
              type="primary"
              onClick={() => handleOpenModal()}
            >
              Add New Subscription
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subscriptions?.data?.result?.map((item) => (
              <div
                key={item._id}
                className="border flex-1 flex flex-col justify-between rounded-lg px-10 py-12 bg-white w-full"
              >
                <div>
                  <h3 className="text-2xl font-bold text-center capitalize pb-5">
                    {item?.name} Plan
                  </h3>
                  <ul className="pl-5 text-[#262626] space-y-8">
                    {item?.features?.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.1 14.6L16.15 7.55L14.75 6.15L9.1 11.8L6.25 8.95L4.85 10.35L9.1 14.6ZM10.5 20C9.11667 20 7.81667 19.7375 6.6 19.2125C5.38333 18.6875 4.325 17.975 3.425 17.075C2.525 16.175 1.8125 15.1167 1.2875 13.9C0.7625 12.6833 0.5 11.3833 0.5 10C0.5 8.61667 0.7625 7.31667 1.2875 6.1C1.8125 4.88333 2.525 3.825 3.425 2.925C4.325 2.025 5.38333 1.3125 6.6 0.7875C7.81667 0.2625 9.11667 0 10.5 0C11.8833 0 13.1833 0.2625 14.4 0.7875C15.6167 1.3125 16.675 2.025 17.575 2.925C18.475 3.825 19.1875 4.88333 19.7125 6.1C20.2375 7.31667 20.5 8.61667 20.5 10C20.5 11.3833 20.2375 12.6833 19.7125 13.9C19.1875 15.1167 18.475 16.175 17.575 17.075C16.675 17.975 15.6167 18.6875 14.4 19.2125C13.1833 19.7375 11.8833 20 10.5 20Z"
                            fill="#FF0048"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="gap-4 space-y-5">
                  <div className="flex items-center justify-center pt-8">
                    <p className="text-5xl font-bold mt-4">${item?.price}</p>
                    <span className="text-xs font-bold text-[#262626]">
                      /
                      {item?.duration === 30
                        ? "Monthly"
                        : item?.duration === 365
                        ? "Yearly"
                        : ""}
                    </span>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <Button
                      type="default"
                      className="w-full border px-6 py-2 rounded-lg"
                      onClick={() => handleOpenModal(item)}
                    >
                      Edit
                    </Button>
                    <Button
                      type="default"
                      danger
                      className="w-full border px-6 py-2 rounded-lg"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tabs.TabPane>
      </Tabs>

      <Modal
        title={editingSubscription ? "Edit Subscription" : "Add Subscription"}
        visible={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Subscription Name"
            rules={[{ required: true, message: "Please enter the name" }]}
          >
            <Input placeholder="Enter subscription name" />
          </Form.Item>

          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "Please enter the price" }]}
          >
            <Input type="number" placeholder="Enter price" />
          </Form.Item>

          <Form.Item
            name="duration"
            label="Duration (months)"
            rules={[{ required: true, message: "Please select the duration" }]}
          >
            <Select placeholder="Select duration">
              <Select.Option value={30}>30 days (Monthly)</Select.Option>
              <Select.Option value={365}>365 days (Yearly)</Select.Option>
            </Select>
          </Form.Item>

          <Form.List name="features">
            {(fields, { add, remove }) => (
              <div>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <div key={key} className="flex items-center gap-2 mb-2">
                    <Form.Item
                      {...restField}
                      name={name}
                      fieldKey={fieldKey}
                      rules={[
                        { required: true, message: "Feature is required" },
                      ]}
                      className="flex-grow"
                    >
                      <Input placeholder="Enter feature" />
                    </Form.Item>
                    <Button type="link" danger onClick={() => remove(name)}>
                      Remove
                    </Button>
                  </div>
                ))}
                <Button type="dashed" onClick={() => add()} block>
                  Add Feature
                </Button>
              </div>
            )}
          </Form.List>

          <Form.Item style={{ paddingTop: 10 }}>
            <Button
              style={{ backgroundColor: "#FF0048", color: "white" }}
              type="primary"
              htmlType="submit"
              block
            >
              {editingSubscription ? "Update" : "Create"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Subscription;
