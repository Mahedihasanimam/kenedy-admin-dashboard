import React, { useState } from "react";
import { Table, Button, Select, Input } from "antd";
import {SearchOutlined } from "@ant-design/icons";
const { Option } = Select;

const AlltransactionTable = () => {
  const [transactionData] = useState([
    {
      key: "1",
      date: "2024-10-01",
      name: "David Via",
      purchasedProduct: "Product A",
      amount: "$100",
      status: "Completed",
    },
    {
      key: "2",
      date: "2024-10-02",
      name: "Lionel Messi",
      purchasedProduct: "Product B",
      amount: "$200",
      status: "Cancelled",
    },
    {
      key: "3",
      date: "2024-10-03",
      name: "Paul Pogba",
      purchasedProduct: "Product C",
      amount: "$150",
      status: "Completed",
    },
    {
      key: "4",
      date: "2024-10-04",
      name: "Kante",
      purchasedProduct: "Product D",
      amount: "$250",
      status: "Completed",
    },
    {
      key: "5",
      date: "2024-10-05",
      name: "Neymar Junior",
      purchasedProduct: "Product E",
      amount: "$180",
      status: "Cancelled",
    },
    {
      key: "6",
      date: "2024-10-06",
      name: "Cristiano Ronaldo",
      purchasedProduct: "Product F",
      amount: "$300",
      status: "Completed",
    },
    {
      key: "7",
      date: "2024-10-07",
      name: "Lukaku",
      purchasedProduct: "Product G",
      amount: "$220",
      status: "Cancelled",
    },
  ]);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Purchased Product",
      dataIndex: "purchasedProduct",
      key: "purchasedProduct",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Button
          style={{
            backgroundColor: status === "Completed" ? "#28a745" : "#dc3545",
            color: "white",
            borderRadius: "5px",
            padding: "5px 10px",
            border: "none",
          }}
        >
          {status}
        </Button>
      ),
    },
  ];
  const [selectedOption, setSelectedOption] = useState("weekly");

  const handleChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <div className=" my-12 bg-[#1E1E1E] p-4 rounded-lg">
      <Input
        placeholder="Search Transactions"
        prefix={<SearchOutlined />}
        style={{ border: "none", backgroundColor: "#2B2B2B", color: "white", height: "40px" }}
      />
      <div className="flex items-center justify-between mb-4 mt-4">
        <div>
          <h1 className="text-[34px] text-[#FFFFFF] font-bold">All Transactions</h1>
          <p className="text-sm text-[#FFFFFFB2]">Overall details of transactions</p>
        </div>
        <div>
        <Select
          className="custom-select" // Use the custom class
          defaultValue="weekly"
          style={{
            width: 120,
          }}
          onChange={handleChange}
        >
          <Option value="weekly">Weekly</Option>
          <Option value="monthly">Monthly</Option>
          <Option value="yearly">Yearly</Option>
        </Select>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={transactionData}
        pagination={false}
        className="custom-table text-white"
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default AlltransactionTable;
