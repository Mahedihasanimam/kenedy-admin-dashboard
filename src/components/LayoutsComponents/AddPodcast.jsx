import React, { useState } from "react";
import { Modal, Button, Form, Input, Upload } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import podcastVideo from '../../assets/video/podcast.mp4'
const AddPodcast = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const [podcasts, setPodcasts] = useState([
        {
            id: 1,
            video:
                podcastVideo, // Sample video
            title: "Learning React",
            description: "A beginner's guide to React development.",
            author: "John Doe",
        },
        {
            id: 2,
            video:
                podcastVideo,
            title: "Next.js Deep Dive",
            description: "Understanding the core concepts of Next.js.",
            author: "Jane Smith",
        },
        {
            id: 3,
            video:
                podcastVideo, // Sample video
            title: "Learning React",
            description: "A beginner's guide to React development.",
            author: "John Doe",
        },
        {
            id: 4,
            video:
                podcastVideo,
            title: "Next.js Deep Dive",
            description: "Understanding the core concepts of Next.js.",
            author: "Jane Smith",
        },
        {
            id: 5,
            video:
                podcastVideo, // Sample video
            title: "Learning React",
            description: "A beginner's guide to React development.",
            author: "John Doe",
        },
        {
            id: 6,
            video:
                podcastVideo,
            title: "Next.js Deep Dive",
            description: "Understanding the core concepts of Next.js.",
            author: "Jane Smith",
        },
        {
            id: 7,
            video:
                podcastVideo, // Sample video
            title: "Learning React",
            description: "A beginner's guide to React development.",
            author: "John Doe",
        },
        {
            id: 8,
            video:
                podcastVideo,
            title: "Next.js Deep Dive",
            description: "Understanding the core concepts of Next.js.",
            author: "Jane Smith",
        },
    ]);
    const [editingPodcast, setEditingPodcast] = useState(null); // Track which podcast is being edited

    // Open modal for adding/editing podcasts
    const showModal = (podcast = null) => {
        setEditingPodcast(podcast); // Set the podcast to edit (or null for adding)
        if (podcast) {
            // If editing, populate form fields
            form.setFieldsValue({
                title: podcast.title,
                description: podcast.description,
                author: podcast.author,
            });
        }
        setIsModalOpen(true);
    };

    // Handle adding or updating a podcast
    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                if (editingPodcast) {
                    // Update existing podcast
                    setPodcasts((prevPodcasts) =>
                        prevPodcasts.map((podcast) =>
                            podcast.id === editingPodcast.id
                                ? { ...podcast, ...values, video: podcast.video } // Preserve the video URL for now
                                : podcast
                        )
                    );
                } else {
                    // Add a new podcast
                    const newPodcast = {
                        id: podcasts.length + 1,
                        video:
                            values.video?.file?.response?.url ||
                            podcastVideo, // Placeholder URL
                        ...values,
                    };
                    setPodcasts([...podcasts, newPodcast]);
                }
                form.resetFields();
                setEditingPodcast(null);
                setIsModalOpen(false);
            })
            .catch((info) => console.log("Validation Failed:", info));
    };

    // Close the modal
    const handleCancel = () => {
        form.resetFields();
        setEditingPodcast(null);
        setIsModalOpen(false);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-semibold">Podcast Collection</h1>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => showModal()}
                    style={{backgroundColor: "#FF0048", color: "white"}}
                    className="flex items-center"
                >
                    Add Podcast
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {podcasts.map((podcast) => (
                    <div
                        key={podcast.id}
                        className="border rounded-lg p-4 shadow-md hover:shadow-lg bg-[#C7C7C740]"
                    >
                        <video
                            src={podcast.video}
                            controls
                            className="w-full h-56 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-lg font-semibold text-secondary max-w-[250px]">
                            {podcast.title}
                        </h2>
                        <p className="text-tertiary">{podcast.description}</p>
                        <p className="text-sm text-gray-500">By {podcast.author}</p>
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
                                onClick={() => showModal(podcast)}
                            >
                                Edit
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

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
                        rules={[{ required: true, message: "Please enter the podcast title!" }]}
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
                        rules={[{ required: true, message: "Please enter the author's name!" }]}
                    >
                        <Input placeholder="Enter author name" />
                    </Form.Item>
                    <Form.Item
                        label="Podcast Video"
                        name="video"
                        valuePropName="file"
                    >
                        <Upload
                            action="/upload" // Placeholder action for uploading videos
                            listType="picture"
                            maxCount={1}
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
