import React, { useState } from "react";
import { Modal, Button, Input, Form } from "antd";

const FAQpage = () => {
  const [faqList, setFaqList] = useState([
    { id: 1, question: "How to add an admin?", answer: "Go to the Admin panel and click on 'Add Admin'." },
    { id: 2, question: "How to delete a user?", answer: "Go to the Users tab and click the delete button for the user." },
    { id: 3, question: "How to reset a password?", answer: "Click 'Forgot Password' on the login page." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFaq, setCurrentFaq] = useState(null);
  const [form] = Form.useForm();

  // Open modal for editing
  const handleEdit = (faq) => {
    setCurrentFaq(faq);
    form.setFieldsValue(faq); // Set initial values in the form
    setIsModalOpen(true);
  };

  // Handle save after editing
  const handleSave = (values) => {
    setFaqList((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq.id === currentFaq.id
          ? { ...faq, question: values.question, answer: values.answer }
          : faq
      )
    );
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">FAQ Management</h1>
      <div className="space-y-4">
        {faqList.map((faq) => (
          <div
            key={faq.id}
            className="bg-white border rounded-lg p-4 shadow-md flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
            <Button
              type="primary"
              onClick={() => handleEdit(faq)}
              style={{
                backgroundColor: "#FF0048",
                borderColor: "#FF0048",
              }}
            >
              Edit
            </Button>
          </div>
        ))}
      </div>

      {/* Modal for Editing FAQ */}
      <Modal
        title="Edit FAQ"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
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
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: "#FF0048", borderColor: "#FF0048" }}>
              Save
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default FAQpage;
