import React, { useState } from 'react';
import { Button, Tag, Modal, Input } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';

const initialCategories = [
  'Rooms', 'Apartment', 'Tiny room', 'Hotel', 'Beach front',
  'Rooms', 'Tiny room', 'Beach front', 'Hotel', 'Rooms',
  'Apartment', 'Beach front', 'Tiny room', 'Beach front',
  'Apartment', 'Tiny room', 'Beach front',
];

const CategoryManagement = () => {
  const [visible, setVisible] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [categoryList, setCategoryList] = useState(initialCategories);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    if (newCategory.trim()) {
      setCategoryList([...categoryList, newCategory.trim()]);
      setNewCategory('');
      setVisible(false);
    }
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = (categoryToDelete) => {
    setCategoryList(categoryList.filter(category => category !== categoryToDelete));
  };

  return (
    <div className="p-6 bg-[#242424] rounded-md min-h-screen">
        <h1 className='text-[34px] text-white font-bold my-12'>Manage Category</h1>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Available Categories</h2>
        <Button
        style={{height: '48px',marginRight: '10px',width: '193px',backgroundColor:"#EBCA7E"}}
          type="primary"
          icon={<PlusOutlined />}
          className="bg-yellow-500 hover:bg-yellow-600 text-black"
          onClick={showModal}
        >
          Add New Category
        </Button>
      </div>
      <div className="flex flex-wrap gap-4 max-w-2xl">
        {categoryList.map((category, index) => (
          <Tag
            key={index}
            className="bg-[#424242] border-none text-sm font-semibold text-gray-300  rounded-full p-4 flex items-center"
            icon={<CloseOutlined onClick={() => handleDelete(category)} className="text-yellow-400" />}
          >
            {category}
          </Tag>
        ))}
      </div>
      <Modal
        title="Add New Category"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add"
        cancelText="Cancel"
      >
        <Input
        style={{height: '48px',}}
          placeholder="Enter category name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default CategoryManagement;
