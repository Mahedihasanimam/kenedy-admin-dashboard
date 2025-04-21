import {
  DeleteOutlined,
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Pagination, Select, Upload } from "antd";
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
  const [addLoader, setAddLoader] = useState(false);
  const [form] = Form.useForm();

  const [page, setPage] = useState(1);
  const { data } = useGetAllBooksQuery({
    limit: 8,
    page,
  });

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
        await deleteBook(id);
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

  const [editingBook, setEditingBook] = useState(null);
  const [imageFileList, setImageFileList] = useState([]);
  const [pdfFileList, setPdfFileList] = useState([]);
  const [previewPdfFileList, setPreviewPdfFileList] = useState([]);

  const showModal = (book = null) => {
    if (book) {
      form.setFieldsValue({
        bookName: book.bookName,
        authorName: book.authorName,
        description: book.description,
        languages: book?.languages,
        price: book?.price,
      });

      // Set existing files for editing
      if (book.bookCoverImage) {
        setImageFileList([
          {
            uid: "-1",
            name: "existingImage",
            status: "done",
            url: book.bookCoverImage,
          },
        ]);
      }

      if (book.pdfUrls && book.pdfUrls.length > 0) {
        setPdfFileList(
          book.pdfUrls.map((url, index) => ({
            uid: `-${index + 1}`,
            name: `pdf-${index + 1}`,
            status: "done",
            url: url,
          }))
        );
      }

      if (book.previewPdfUrls && book.previewPdfUrls.length > 0) {
        setPreviewPdfFileList(
          book.previewPdfUrls.map((url, index) => ({
            uid: `-${index + 100}`,
            name: `preview-pdf-${index + 1}`,
            status: "done",
            url: url,
          }))
        );
      }

      setEditingBook(book);
    } else {
      form.resetFields();
      setImageFileList([]);
      setPdfFileList([]);
      setPreviewPdfFileList([]);
      setEditingBook(null);
    }
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setAddLoader(true);
    form
      .validateFields()
      .then(async (values) => {
        setIsModalOpen(false);
        const formData = new FormData();
        formData.append("bookName", values.bookName);
        formData.append("authorName", values.authorName);
        formData.append("description", values.description);
        formData.append("languages", values.languages);
        formData.append("price", values.price);

        // Handle image file
        if (imageFileList.length > 0) {
          if (imageFileList[0]?.originFileObj) {
            // New file uploaded
            formData.append("image", imageFileList[0].originFileObj);
          } else if (imageFileList[0]?.url) {
            // Existing file (when editing)
            formData.append("existingImage", imageFileList[0].url);
          }
        }

        // Handle PDF files
        if (pdfFileList.length > 0) {
          if (pdfFileList[0]?.originFileObj) {
            // New file uploaded
            formData.append("pdfFiles", pdfFileList[0].originFileObj);
          } else if (pdfFileList[0]?.url) {
            // Existing file (when editing)
            formData.append("existingPdfFiles", pdfFileList[0].url);
          }
        }

        // Handle Preview PDF files
        if (previewPdfFileList.length > 0) {
          if (previewPdfFileList[0]?.originFileObj) {
            // New file uploaded
            formData.append(
              "previewPdfFiles",
              previewPdfFileList[0].originFileObj
            );
          } else if (previewPdfFileList[0]?.url) {
            // Existing file (when editing)
            formData.append(
              "existingPreviewPdfFiles",
              previewPdfFileList[0].url
            );
          }
        }

        if (editingBook) {
          await updateBook({ data: formData, id: editingBook._id });
        } else {
          await addBook(formData);
        }

        setAddLoader(false);
        Swal.fire({
          icon: "success",
          title: editingBook
            ? "Book Updated Successfully!"
            : "Book Added Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        form.resetFields();
        setImageFileList([]);
        setPdfFileList([]);
        setPreviewPdfFileList([]);
        setEditingBook(null);
      })
      .catch((info) => {
        setAddLoader(false);
        console.error("Validation Failed:", info);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    setImageFileList([]);
    setPdfFileList([]);
    setPreviewPdfFileList([]);
    setEditingBook(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <>
        {addLoader && (
          <div>
            <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center">
                  <LoadingOutlined className="text-primary mr-2" />
                  <span>Loading...</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
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
        {data?.data?.result?.map((book) => (
          <div
            key={book.id}
            className="border  rounded-lg p-4 shadow-md hover:shadow-lg bg-[#C7C7C740]"
          >
            <img
              src={imageUrl + book.bookCoverImage}
              alt={book.bookName}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-[#FF0048] max-w-[250px]">
              {book.price ? "$" + book.price : ""}
            </h2>
            <h2 className="text-lg font-semibold text-secondary max-w-[250px]">
              {book.bookName}
            </h2>
            <p className="text-tertiary">{book.authorName}</p>
            <p className="text-sm mt-2">
              {(book?.languages?.length > 0 &&
                book?.languages?.map((language) => {
                  if (language === "english") {
                    return (
                      <div
                        key={language}
                        className="flex items-center gap-2 pb-2"
                      >
                        <img src={"/public/english.svg"} className="w-4 h-4" />
                        <span className="text-xs text-gray-500 ">English</span>
                      </div>
                    );
                  }
                  if (language === "simplified_chinese") {
                    return (
                      <div
                        key={language}
                        className="flex items-center gap-2 pb-2"
                      >
                        <img src={"/public/chinaa.svg"} className="w-4 h-4" />
                        <span className="text-xs text-gray-500 ">
                          SIMPLIFIED CHINESE
                        </span>
                      </div>
                    );
                  }
                  if (language === "traditional_chinese") {
                    return (
                      <div
                        key={language}
                        className="flex items-center gap-2 pb-2"
                      >
                        <img src={"/public/chinaa.svg"} className="w-4 h-4" />
                        <span className="text-xs text-gray-500 ">
                          TRADITIONAL CHINESE
                        </span>
                      </div>
                    );
                  }
                  if (language === "spanish") {
                    return (
                      <div
                        key={language}
                        className="flex items-center gap-2 pb-2"
                      >
                        <img src={"/public/spania.svg"} className="w-4 h-4" />
                        <span className="text-xs text-gray-500 ">Spanish</span>
                      </div>
                    );
                  }
                  if (language === "french") {
                    return (
                      <div
                        key={language}
                        className="flex items-center gap-2 pb-2"
                      >
                        <img src={"/public/france.svg"} className="w-4 h-4" />
                        <span className="text-xs text-gray-500 ">France</span>
                      </div>
                    );
                  }
                })) ||
                "Not specified"}
            </p>
            {book.pdfUrls && book.pdfUrls.length > 0 && (
              <div className="mt-2">
                <a
                  href={imageUrl + book.pdfUrls[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm"
                >
                  View Full PDF
                </a>
              </div>
            )}
            {book.previewPdfUrls && book.previewPdfUrls.length > 0 && (
              <div className="mt-2">
                <a
                  href={imageUrl + book.previewPdfUrls[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm"
                >
                  View sample PDF
                </a>
              </div>
            )}
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
      <Pagination
        current={page}
        total={data?.data?.count || 0}
        pageSize={8}
        onChange={(page) => setPage(page)}
        className="mt-6"
      />

      <Modal
        title={editingBook ? "Edit Book" : "Add a New Book"}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={editingBook ? "Update Book" : "Add Book"}
        cancelText="Cancel"
        centered
        okButtonProps={{
          style: { backgroundColor: "#ff4d4f", borderColor: "#ff4d4f" },
        }}
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
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please enter the price!" }]}
          >
            <Input placeholder="Enter book price" />
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
          <Form.Item label="Full PDF File" name="pdfFiles">
            <Upload
              listType="text"
              maxCount={1}
              fileList={pdfFileList}
              beforeUpload={() => false}
              onChange={({ fileList }) => setPdfFileList(fileList)}
            >
              <Button icon={<UploadOutlined />}>Upload Full PDF</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Preview PDF File" name="previewPdfFiles">
            <Upload
              listType="text"
              maxCount={1}
              fileList={previewPdfFileList}
              beforeUpload={() => false}
              onChange={({ fileList }) => setPreviewPdfFileList(fileList)}
            >
              <Button icon={<UploadOutlined />}>Upload Preview PDF</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="Languages"
            name="languages"
            rules={[
              {
                required: true,
                message: "Please select a language!",
              },
            ]}
          >
            <Select mode="single" placeholder="Select language" allowClear>
              <Select.Option value="english">English</Select.Option>
              <Select.Option value="spanish">Spanish</Select.Option>
              <Select.Option value="french">French</Select.Option>
              <Select.Option value="simplified_chinese">
                SIMPLIFIED CHINESE
              </Select.Option>
              <Select.Option value="traditional_chinese">
                TRADITIONAL CHINESE
              </Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BooksCollection;
