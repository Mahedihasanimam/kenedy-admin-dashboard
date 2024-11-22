import React, { useState } from "react";
import { Modal, Button, Form, Input, Upload, Select } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import booksimage from '../../assets/images/book.png'
const BooksCollection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [books, setBooks] = useState([
    {
      id: 1,
      image: booksimage,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      language: "English",
    },
    {
      id: 2,
      image: booksimage,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      language: "English",
    },
    {
      id: 3,
      image: booksimage,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      language: "English",
    },
    {
      id: 4,
      image: booksimage,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      language: "English",
    },
    {
      id: 5,
      image: booksimage,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      language: "English",
    },
    {
      id: 6,
      image: booksimage,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      language: "English",
    },
    {
      id: 7,
      image: booksimage,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      language: "English",
    },
    {
      id: 8,
      image: booksimage,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      language: "English",
    },
    // Add more books if needed
  ]);
  const [editingBook, setEditingBook] = useState(null); // Track which book is being edited

  // Open modal for adding/editing books
  const showModal = (book = null) => {
    setEditingBook(book); // Set the book to edit (or null for adding)
    if (book) {
      // If editing, populate form fields
      form.setFieldsValue({
        title: book.title,
        author: book.author,
        description: book.description,
        language: book.language,
      });
    }
    setIsModalOpen(true);
  };

  // Handle adding or updating a book
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (editingBook) {
          // Update existing book
          setBooks((prevBooks) =>
            prevBooks.map((book) =>
              book.id === editingBook.id
                ? { ...book, ...values, image: book.image } // Preserve the image URL for now
                : book
            )
          );
        } else {
          // Add a new book
          const newBook = {
            id: books.length + 1,
            image:
              values.cover?.file?.response?.url || booksimage,
            ...values,
          };
          setBooks([...books, newBook]);
        }
        form.resetFields();
        setEditingBook(null);
        setIsModalOpen(false);
      })
      .catch((info) => console.log("Validation Failed:", info));
  };

  // Close the modal
  const handleCancel = () => {
    form.resetFields();
    setEditingBook(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Books Collection</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => showModal()}
          className="flex items-center"
          style={{backgroundColor: "#FF0048", color: "white"}}
        >
          Add Book
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.slice(0, 8).map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg bg-[#C7C7C740]"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-secondary max-w-[250px]">
              {book.title}
            </h2>
            <p className="text-tertiary">{book.author}</p>
            <div className="mt-2">
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
                onClick={() => showModal(book)}
              >
                Edit
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        title={editingBook ? "Edit Book" : "Add a New Book"}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={editingBook ? "Update Book" : "Add Book"}
        cancelText="Cancel"
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Book Name"
            name="title"
            rules={[{ required: true, message: "Please enter the book name!" }]}
          >
            <Input placeholder="Enter book name" />
          </Form.Item>
          <Form.Item
            label="Author Name"
            name="author"
            rules={[{ required: true, message: "Please enter the author's name!" }]}
          >
            <Input placeholder="Enter author name" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter a description!" }]}
          >
            <Input.TextArea placeholder="Enter book description" />
          </Form.Item>
          <Form.Item
            label="Book Cover"
            name="cover"
            valuePropName="file"
          >
            <Upload
              action="/upload" // Placeholder action for uploading images
              listType="picture"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload Book Cover</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="Language"
            name="language"
            rules={[{ required: true, message: "Please select a language!" }]}
          >
            <Select placeholder="Select language">
              <Select.Option value="English">English</Select.Option>
              <Select.Option value="Bengali">Bengali</Select.Option>
              <Select.Option value="Spanish">Spanish</Select.Option>
              <Select.Option value="French">French</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BooksCollection;
