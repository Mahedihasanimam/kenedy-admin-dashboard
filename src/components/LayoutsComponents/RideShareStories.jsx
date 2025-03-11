import { Button, Modal, Pagination, Select, Table } from "antd";
import React, { useState } from "react";
import {
  useApproveStoriesMutation,
  useCancelStoriesMutation,
  useGetAllStoriesQuery,
} from "../../../redux/apiSlices/stroeisApiSlices";

import { EyeOutlined } from "@ant-design/icons";
import moment from "moment";
import Swal from "sweetalert2";
import { imageUrl } from "../../../redux/api/baseApi";

const StoriesApproval = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [selectedConfession, setSelectedConfession] = useState(null); // Track the selected confession for approval/cancellation
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [statusFilter, setStatusFilter] = useState("pending"); // Filter state for status
  const commentsPerPage = 10; // Number of confessions per page

  // Fetching confessions with pagination and status filter
  const { data: confessionData, isLoading } = useGetAllStoriesQuery({
    status: statusFilter, // Filter by selected status
    page: currentPage,
    limit: commentsPerPage,
  });

  const [approvedConfession, approvedResults] = useApproveStoriesMutation();
  const [cancelConfession, cancelResults] = useCancelStoriesMutation();

  // Handle Approve Confession
  const handleApprove = async (id) => {
    try {
      await approvedConfession(id).unwrap();
      setVisibleModal(false);
      setSelectedConfession(null);
      Swal.fire({
        icon: "success",
        title: "Story Approved Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: error?.message || "Failed to approve confession",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  // Handle Cancel Confession
  const handleCancel = async (id) => {
    try {
      await cancelConfession(id).unwrap();
      setVisibleModal(false);
      setSelectedConfession(null);
      Swal.fire({
        icon: "success",
        title: "Confession Rejected Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error?.message || "Failed to reject confession",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  // Handle Viewing Confession (Modal)
  const handleViewConfession = (confession) => {
    console.log(confession);
    setSelectedConfession(confession);
    setVisibleModal(true);
  };

  // Handle Pagination
  const handlePageChange = (page) => {
    setCurrentPage(page); // Update page number
  };

  // Define the action menu for the dropdown

  // Define columns for Ant Design Table
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "authorName",
      key: "authorName",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Total Ratings",
      dataIndex: "totalRatings",
      key: "totalRatings",
    },
    {
      title: "Average Rating",
      dataIndex: "averageRating",
      key: "averageRating",
    },
    {
      title: "Comments",
      dataIndex: "comments",
      key: "comments",
      render: (comments) => <span>{comments?.length || 0} comments</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={`${
            status === "pending"
              ? "text-yellow-500"
              : status === "approved"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, confession) => (
        <Button
          type="primary"
          style={{ marginRight: "10px", background: "#FF0048" }}
          onClick={() => handleViewConfession(confession)}
        >
          <EyeOutlined /> View
        </Button>
      ),
    },
  ];

  // Data for Table
  const tableData = confessionData?.data?.result?.map((confession) => ({
    key: confession._id,
    _id: confession._id,
    title: confession.title,
    authorName: confession.authorName,
    description: confession.description,
    rating: confession.rating,
    totalRatings: confession.totalRatings,
    averageRating: confession.averageRating,
    comments: confession.comments,
    status: confession.status,
    storyAudioUrl: confession.storyAudioUrl,
    storyVideoUrl: confession.storyVideoUrl,
    createdAt: confession.createdAt,
    updatedAt: confession.updatedAt,
  }));

  // Handle Modal Cancel
  const onCancel = () => {
    setVisibleModal(false);
    setSelectedConfession(null);
  };

  return (
    <div className="p-4">
      {/* Table View */}
      {/* Filter Dropdown for Status */}
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-[#FF0048] mb-4">
          Ride Share Stories
        </h1>
        <Select
          defaultValue={statusFilter}
          style={{ width: 200 }}
          onChange={(value) => {
            setStatusFilter(value); // Update filter when the user selects a status
            setCurrentPage(1); // Reset to first page when filter changes
          }}
        >
          <Select.Option value="">All</Select.Option>
          <Select.Option value="pending">Pending</Select.Option>
          <Select.Option value="approved">Approved</Select.Option>
          <Select.Option value="cancelled">Cancelled</Select.Option>
        </Select>
      </div>

      {/* add filter here for pending, approved, rejected */}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Table
            columns={columns}
            dataSource={tableData}
            pagination={false} // Disable pagination here, will use our own pagination
            loading={isLoading}
            rowKey="_id"
          />

          {/* Pagination */}
          <Pagination
            current={currentPage} // Set current page dynamically
            pageSize={commentsPerPage}
            total={confessionData?.data?.count || 0}
            onChange={handlePageChange}
            showSizeChanger={false}
            className="mt-4"
          />
        </div>
      )}

      {/* View Modal */}
      <Modal
        title={selectedConfession?.title}
        visible={visibleModal}
        onCancel={() => onCancel()}
        footer={null}
        centered
        className="max-w-3xl mx-auto"
      >
        <div className="space-y-6">
          {/* Author and Description */}
          <div className="flex flex-col">
            <h2 className="font-semibold text-xl text-[#FF0048]">
              {selectedConfession?.authorName}
            </h2>
            <p className="text-gray-700">{selectedConfession?.description}</p>
          </div>

          {/* Confession Audio and Video */}
          <div className="mt-4">
            {selectedConfession?.storyAudioUrl && (
              <div className="mb-4">
                <h3 className="font-semibold text-lg text-[#FF0048]">Audio</h3>
                <audio controls className="w-full">
                  <source src={imageUrl + selectedConfession?.storyAudioUrl} />
                </audio>
              </div>
            )}
            {selectedConfession?.storyVideoUrl && (
              <div className="mb-4">
                <h3 className="font-semibold text-lg text-[#FF0048]">Video</h3>
                <video controls className="w-full rounded-md">
                  <source src={imageUrl + selectedConfession?.storyVideoUrl} />
                </video>
              </div>
            )}
          </div>

          {/* Date Information */}
          <div className="flex justify-between text-sm text-gray-600">
            <div>
              <span className="font-semibold text-gray-400 text-xs">
                Created:
              </span>{" "}
              <i className="text-gray-600 font-bold text-xs">
                {selectedConfession?.createdAt &&
                  moment(selectedConfession?.createdAt).format("MMMM Do YYYY")}
              </i>
            </div>
            {/* <div>
              <span className="font-semibold">Updated At:</span>{" "}
              {selectedConfession?.updatedAt &&
                moment(selectedConfession?.updatedAt).format("MMMM Do YYYY")}
            </div> */}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex w-full justify-between gap-4">
            <div className="flex gap-4">
              <Button
                loading={approvedResults.isLoading}
                type="primary"
                style={{
                  backgroundColor: "#FF0048",
                  borderColor: "#FF0048",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={() => handleApprove(selectedConfession?._id)}
              >
                Approve
              </Button>
              <Button
                loading={cancelResults.isLoading}
                type="default"
                danger
                style={{
                  fontWeight: "bold",
                }}
                onClick={() => handleCancel(selectedConfession?._id)}
              >
                Reject
              </Button>
            </div>
            <div>
              <Button type="default" onClick={() => onCancel()}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StoriesApproval;
