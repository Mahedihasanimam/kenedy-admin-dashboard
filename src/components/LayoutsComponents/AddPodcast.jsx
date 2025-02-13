import {
  DeleteOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Pagination, Upload } from "antd";
import React, { useState } from "react";
import {
  useAddPodCastMutation,
  useDeletePodCastMutation,
  useGetAllPodCastQuery,
  useUpdatePodCastMutation,
} from "../../../redux/apiSlices/podcastApiSlice";

import Swal from "sweetalert2";
import { imageUrl } from "../../../redux/api/baseApi";

const AddPodcast = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingPodcast, setEditingPodcast] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [page, setPage] = useState(1);

  const { data: allPodCasts } = useGetAllPodCastQuery({
    limit: 8,
    page,
  });
  const [addPodCast] = useAddPodCastMutation();
  const [updatePodCast] = useUpdatePodCastMutation();
  const [deletePodcast] = useDeletePodCastMutation();

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await deletePodcast(id);
        Swal.fire({
          icon: "success",
          title: "Podcast Deleted Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error deleting Podcast",
        text: error.message || "Something went wrong!",
      });
    }
  };

  const showModal = (podcast = null) => {
    setEditingPodcast(podcast);
    if (podcast) {
      form.setFieldsValue({
        title: podcast.podcastTitle,
        description: podcast.description,
        author: podcast.authorName,
      });
      setFileList([
        {
          uid: "-1", // Unique identifier for the file
          name: podcast.podcastVideo?.split("/").pop(),
          status: "done",
          url: imageUrl + podcast.podcastVideo,
        },
      ]);
    } else {
      form.resetFields();
      setFileList([]);
    }
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const formData = new FormData();

    form
      .validateFields()
      .then((values) => {
        formData.append("podcastTitle", values.title);
        formData.append("description", values.description);
        formData.append("authorName", values.author);

        if (fileList.length > 0) {
          formData.append(
            "videoFile",
            fileList[0].originFileObj || fileList[0].url
          );
        }

        if (editingPodcast) {
          formData.append("id", editingPodcast._id);
          updatePodCast({ data: formData, id: editingPodcast._id }).then(() => {
            Swal.fire({
              icon: "success",
              title: "Podcast Updated Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        } else {
          addPodCast(formData).then(() => {
            Swal.fire({
              icon: "success",
              title: "Podcast Added Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        }

        form.resetFields();
        setEditingPodcast(null);
        setFileList([]);
        setIsModalOpen(false);
      })
      .catch((info) => console.log("Validation Failed:", info));
  };

  const handleCancel = () => {
    form.resetFields();
    setEditingPodcast(null);
    setFileList([]);
    setIsModalOpen(false);
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Podcast Collection</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => showModal()}
          style={{ backgroundColor: "#FF0048", color: "white" }}
          className="flex items-center"
        >
          Add Podcast
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allPodCasts?.data?.result?.map((podcast) => (
          <div
            key={podcast.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg bg-[#C7C7C740]"
          >
            <video
              src={imageUrl + podcast.podcastVideo}
              controls
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-secondary max-w-[250px]">
              {podcast.podcastTitle}
            </h2>
            <p className="text-tertiary">{podcast.description}</p>
            <p className="text-sm text-gray-500">By {podcast.authorName}</p>
            <div className="mt-2 flex gap-2">
              <Button
                type="primary"
                style={{
                  backgroundColor: "#FF0048",
                  color: "white",
                  width: "35px",
                  height: "35px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                className="w-full border-none text-white px-6 py-2 rounded-lg"
                onClick={() => handleDelete(podcast?._id)}
              >
                <DeleteOutlined />
              </Button>
              <Button
                type="primary"
                style={{
                  backgroundColor: "#FF0048",
                  color: "white",
                  height: "35px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                className="w-full border-none text-white px-6 py-2 rounded-lg"
                onClick={() => showModal(podcast)}
              >
                Edit
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        current={page}
        total={allPodCasts?.data?.count || 0}
        pageSize={8}
        onChange={(page) => setPage(page)}
        className="mt-6"
      />

      <Modal
        title={editingPodcast ? "Edit Podcast" : "Add a New Podcast"}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={editingPodcast ? "Update Podcast" : "Add Podcast"}
        cancelText="Cancel"
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Podcast Title"
            name="title"
            rules={[
              { required: true, message: "Please enter the podcast title!" },
            ]}
          >
            <Input placeholder="Enter podcast title" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter a description!" }]}
          >
            <Input.TextArea placeholder="Enter podcast description" />
          </Form.Item>
          <Form.Item
            label="Author Name"
            name="author"
            rules={[
              { required: true, message: "Please enter the author's name!" },
            ]}
          >
            <Input placeholder="Enter author name" />
          </Form.Item>
          <Form.Item label="Podcast Video" name="video" valuePropName="file">
            <Upload
              listType="picture"
              maxCount={1}
              fileList={fileList}
              onChange={handleFileChange}
              beforeUpload={() => false} // Prevent automatic upload
            >
              <Button icon={<UploadOutlined />}>Upload Video</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddPodcast;
