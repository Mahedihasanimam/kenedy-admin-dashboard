import {
  DeleteOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Select, Upload } from "antd";
import React, { useState } from "react";
import {
  useAddBookMutation,
  useDeleteBookMutation,
  useGetAllBooksQuery,
  useUpdateBookMutation,
} from "../../../redux/apiSlices/bookApiSlice";

import Swal from "sweetalert2";
import { imageUrl } from "../../../redux/api/baseApi";

const BooksCollection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [books, setBooks] = useState(null);

  const { data } = useGetAllBooksQuery({});
  const [addBook] = useAddBookMutation();
  const [updateBook] = useUpdateBookMutation();
  const [deleteBook] = useDeleteBookMutation();

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
        await deleteBook(id); // Assuming deleteBook is a function that deletes the book
        Swal.fire({
          icon: "success",
          title: "Book Deleted Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      Swal.fire({
        icon: "error",
        title: "Error deleting book",
        text: error.message || "Something went wrong!",
      });
    }
  };

  React.useEffect(() => {
    if (data) {
      setBooks(data?.data?.result);
    }
  }, [data]);

  const [editingBook, setEditingBook] = useState(null);
  const [imageFileList, setImageFileList] = useState([]);
  const [pdfFileList, setPdfFileList] = useState([]);

  const showModal = (book = null) => {
    if (book) {
      console.log(book?.language);
      // Populate form fields
      form.setFieldsValue({
        bookName: book.bookName,
        authorName: book.authorName,
        description: book.description,
        language: book.language,
      });

      book?.bookCoverImage &&
        setImageFileList([
          {
            uid: "-1",
            name: book.bookCoverImage.split("/").pop(),
            url: imageUrl + book.bookCoverImage,
          },
        ]);

      book?.pdfUrls &&
        setPdfFileList(
          book.pdfUrls.map((pdfUrl, index) => ({
            uid: `${index}`,
            name: pdfUrl.split("/").pop(),
            url: pdfUrl,
          }))
        );

      setEditingBook(book);
    } else {
      // Reset form
      form.resetFields();
      setImageFileList([]);
      setPdfFileList([]);
      setEditingBook(null);
    }
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    form
      .validateFields()
      .then((values) => {
        const formData = new FormData();
        formData.append("bookName", values.bookName);
        formData.append("authorName", values.authorName);
        formData.append("description", values.description);
        formData.append("language", values.language);

        // Add image file
        if (imageFileList.length && imageFileList[0]?.originFileObj) {
          formData.append("image", imageFileList[0].originFileObj);
        }

        // Add PDF files
        pdfFileList.forEach((file) => {
          if (file.originFileObj) {
            formData.append("pdfFiles", file.originFileObj);
          }
        });

        console.log(editingBook);

        if (editingBook) {
          formData.append("id", editingBook._id);
          updateBook({ data: formData, id: editingBook._id }).then(() => {
            Swal.fire({
              icon: "success",
              title: "Book Updated Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        } else {
          addBook(formData).then(() => {
            Swal.fire({
              icon: "success",
              title: "Book Added Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        }

        form.resetFields();
        setImageFileList([]);
        setPdfFileList([]);
        setEditingBook(null);
        setIsModalOpen(false);
      })
      .catch((info) => {
        console.error("Validation Failed:", info);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    setImageFileList([]);
    setPdfFileList([]);
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
          style={{ backgroundColor: "#FF0048", color: "white" }}
        >
          Add Book
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books?.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg bg-[#C7C7C740]"
          >
            <img
              src={imageUrl + book.bookCoverImage}
              alt={book.bookName}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-secondary max-w-[250px]">
              {book.bookName}
            </h2>
            <p className="text-tertiary">{book.authorName}</p>
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
                onClick={() => handleDelete(book?._id)}
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
            name="bookName"
            rules={[{ required: true, message: "Please enter the book name!" }]}
          >
            <Input placeholder="Enter book name" />
          </Form.Item>
          <Form.Item
            label="Author Name"
            name="authorName"
            rules={[
              { required: true, message: "Please enter the author's name!" },
            ]}
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
          <Form.Item label="Book Cover" name="image">
            <Upload
              listType="picture"
              maxCount={1}
              fileList={imageFileList}
              beforeUpload={() => false}
              onChange={({ fileList }) => setImageFileList(fileList)}
            >
              <Button icon={<UploadOutlined />}>Upload Book Cover</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="PDF File" name="pdfFiles">
            <Upload
              listType="text"
              multiple
              fileList={pdfFileList}
              beforeUpload={() => false}
              onChange={({ fileList }) => setPdfFileList(fileList)}
            >
              <Button icon={<UploadOutlined />}>Upload PDF Files</Button>
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
