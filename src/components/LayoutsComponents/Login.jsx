import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import React, { useCallback } from "react";

import logo from "../../../public/logo.png";
import { useLoginMutation } from "../../../redux/apiSlices/userApis";

const Login = () => {
  const navigate = useNavigate();

  const [loginUser] = useLoginMutation();

  const onFinish = useCallback(
    async (values) => {
      try {
        const response = await loginUser(values).unwrap();
        message.success("Login successful!");
        localStorage.setItem("token", response?.data?.token);

        console.log(response?.data?.user?.role);

        if (
          response?.data?.user?.role == "admin" ||
          response?.data?.user?.role == "superadmin"
        ) {
          navigate("/");
        } else {
          message.error("You are not allowed to login as a user");
        }
      } catch (error) {
        console.log("Error logging in:", error);
        message.error(error.data.message);
      }
    },
    [loginUser, navigate]
  );

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const emailIcon = (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V14V4Z"
        fill="#FF4D7F"
      />
    </svg>
  );

  const passwordIcon = (
    <svg
      width="22"
      height="12"
      viewBox="0 0 22 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9C6.83333 9 7.54167 8.70833 8.125 8.125C8.70833 7.54167 9 6.83333 9 6C9 5.16667 8.70833 4.45833 8.125 3.875C7.54167 3.29167 6.83333 3 6 3C5.16667 3 4.45833 3.29167 3.875 3.875C3.29167 4.45833 3 5.16667 3 6C3 6.83333 3.29167 7.54167 3.875 8.125C4.45833 8.70833 5.16667 9 6 9ZM6 12C4.33333 12 2.91667 11.4167 1.75 10.25C0.583333 9.08333 0 7.66667 0 6C0 4.33333 0.583333 2.91667 1.75 1.75C2.91667 0.583333 4.33333 0 6 0C7.35 0 8.52917 0.383333 9.5375 1.15C10.5458 1.91667 11.25 2.86667 11.65 4H20.025L22 5.975L18.5 9.975L16 8L14 10L12 8H11.65C11.2333 9.2 10.5083 10.1667 9.475 10.9C8.44167 11.6333 7.28333 12 6 12Z"
        fill="#FF4D7F"
      />
    </svg>
  );

  return (
    <div className="text-secondary min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-[64px]">
        <img src={logo} alt="logo" className="mx-auto mb-4" />
        <h1 className="text-center font-bold text-3xl mb-6">Welcome!</h1>

        <div className="flex justify-center items-center">
          <Form
            name="signin"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
            >
              <Input
                prefix={emailIcon}
                placeholder="Enter your email"
                className="border h-[44px] bg-[#FFE5ED4D] p-2 text-[16px] text-[#667085] focus:border-[#dde2eb]"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={passwordIcon}
                placeholder="Enter your password"
                className="border h-[44px] bg-[#FFE5ED4D] p-2 text-[16px] text-[#667085] focus:border-[#dde2eb]"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#FF0048",
                  color: "white",
                  height: "44px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                className="w-full border-none text-white px-6 py-2 rounded-lg"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>

        {/* Forgot Password Button */}
        <div className="text-end ">
          <Link
            to={"/forgot-password"}
            type="link"
            className="text-[#FF0048] hover:text-[#FF0048]"
            style={{ padding: 0 }}
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
