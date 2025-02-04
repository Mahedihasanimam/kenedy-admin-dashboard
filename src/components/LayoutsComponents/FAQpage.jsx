import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import {
  useAddNewFAQMutation,
  useDeleteFAQMutation,
  useGetAllFAQsQuery,
  useUpdateFAQMutation,
} from "../../../redux/apiSlices/settingApiSlice";

import { PlusOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";

const FAQpage = () => {
  const { data: FAQs } = useGetAllFAQsQuery({});
  const [addNewFaq] = useAddNewFAQMutation();
  const [deleteFaq] = useDeleteFAQMutation();
  const [updateFaq] = useUpdateFAQMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentFaq, setCurrentFaq] = useState(null);
  const [form] = Form.useForm();

  const showModal = (faq = null) => {
    if (faq) {
      setCurrentFaq(faq);
      form.setFieldsValue({
        question: faq.question,
        answer: faq.answer,
      });
      setIsEditMode(true);
    } else {
      form.resetFields();
      setIsEditMode(false);
    }
    setIsModalOpen(true);
  };

  const handleSave = (values) => {
    if (isEditMode && currentFaq) {
      // Update FAQ
      values.faqId = currentFaq._id;
      updateFaq({ id: currentFaq._id, data: values })
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "FAQ Updated Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsModalOpen(false);
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Failed to Update FAQ!",
          });
        });
    } else {
      // Add new FAQ
      addNewFaq(values)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "FAQ Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsModalOpen(false);
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Failed to Add FAQ!",
          });
        });
    }
    form.resetFields();
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFaq(id)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "FAQ Deleted Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Failed to Delete FAQ!",
            });
          });
      }
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">FAQ Management</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => showModal()}
          style={{ backgroundColor: "#FF0048", color: "white" }}
          className="flex items-center"
        >
          Add FAQ
        </Button>
      </div>
      <div className="space-y-4">
        {FAQs?.data?.map((faq) => (
          <div
            key={faq.id}
            className="bg-white border rounded-lg p-4 shadow-md flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
            <div className="flex space-x-2">
              <Button
                type="primary"
                onClick={() => showModal(faq)}
                style={{
                  backgroundColor: "#FF0048",
                  borderColor: "#FF0048",
                }}
              >
                Edit
              </Button>
              <Button type="danger" onClick={() => handleDelete(faq._id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        title={isEditMode ? "Edit FAQ" : "Add FAQ"}
        visible={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleSave}>
          <Form.Item
            label="Question"
            name="question"
            rules={[{ required: true, message: "Please enter the question!" }]}
          >
            <Input placeholder="Enter the question" />
          </Form.Item>
          <Form.Item
            label="Answer"
            name="answer"
            rules={[{ required: true, message: "Please enter the answer!" }]}
          >
            <Input.TextArea rows={4} placeholder="Enter the answer" />
          </Form.Item>
          <div className="flex justify-end space-x-4">
            <Button onClick={handleCancel}>Cancel</Button>
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#FF0048", borderColor: "#FF0048" }}
            >
              {isEditMode ? "Update" : "Save"}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default FAQpage;
