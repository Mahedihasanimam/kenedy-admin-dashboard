import { Button, Dropdown, Menu, Modal, Table } from "antd";
import React, { useState } from "react";
import {
  useApproveAffiliateMutation,
  useCancelAffiliateMutation,
  useGetAffiliateUsersQuery,
} from "../../../redux/apiSlices/userApis";

import Swal from "sweetalert2";

const ApprovedAffiliate = () => {
  const { data: affiliates } = useGetAffiliateUsersQuery({});
  const [approveAffiliate] = useApproveAffiliateMutation();
  const [cancelAffiliate] = useCancelAffiliateMutation();

  // State for modal
  const [selectedAffiliate, setSelectedAffiliate] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Modal handlers
  const showModal = (affiliate) => {
    setSelectedAffiliate(affiliate);
    setIsModalVisible(true);
  };

  const onCancel = () => {
    setIsModalVisible(false);
    setSelectedAffiliate(null);
  };

  const handleCancel = async () => {
    if (selectedAffiliate?._id) {
      try {
        const res = await cancelAffiliate({
          affiliateId: selectedAffiliate._id,
        }).unwrap();
        if (res.success) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Affiliate Rejected Successfully",
          });
          setIsModalVisible(false);
          setSelectedAffiliate(null);
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.data.message,
        });
      }
    }
  };

  const handleApprove = async () => {
    if (selectedAffiliate?._id) {
      try {
        const res = await approveAffiliate({
          affiliateId: selectedAffiliate._id,
        }).unwrap();
        if (res.success) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Affiliate Approved Successfully",
          });
          setIsModalVisible(false);
          setSelectedAffiliate(null);
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.data.message,
        });
      }
    }
  };

  // Table columns
  const columns = [
    {
      title: "S.no",
      dataIndex: "key",
      key: "key",
      render: (text, record, index) => index + 1,
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
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => {
        const menu = (
          <Menu>
            <Menu.Item onClick={() => showModal(record)}>View</Menu.Item>
          </Menu>
        );
        return (
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button>Actions</Button>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <div className="p-6 min-h-screen">
      <Table
        columns={columns}
        dataSource={affiliates?.data?.result}
        pagination={{
          pageSize: 10, // Number of rows per page
          //   showSizeChanger: true, // Allow users to change page size
        }}
        className="border rounded-md shadow-md"
        rowKey="id"
      />

      {/* Modal for approving affiliate */}
      {selectedAffiliate && (
        <Modal
          title="Approve Affiliate"
          visible={isModalVisible}
          onCancel={onCancel}
          footer={null}
        >
          <p>
            <strong>Name:</strong> {selectedAffiliate.name}
          </p>
          <p>
            <strong>Email:</strong> {selectedAffiliate.email}
          </p>
          <p>
            <strong>Role:</strong> {selectedAffiliate.role}
          </p>
          <div className="flex justify-end gap-2">
            <Button onClick={handleCancel}>Reject</Button>
            <Button
              style={{ backgroundColor: "#FF6691" }}
              type="primary"
              onClick={handleApprove}
            >
              Approve
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ApprovedAffiliate;
