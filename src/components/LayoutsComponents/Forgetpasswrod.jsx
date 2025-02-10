import { Button, Form, Input, message } from "antd";

import { MailOutlined } from "@ant-design/icons";
import React from "react";
import logo from "../../../public/logo.png";
import { useForgotPasswordMutation } from "../../../redux/apiSlices/userApis";
import { useNavigate } from "react-router-dom";

const Forgetpasswrod = () => {
  // State to hold email and password
  const navigate = useNavigate();
  const [forgotPassword] = useForgotPasswordMutation();

  const onFinish = async (values) => {
    console.log("Success:", values);
    if (values) {
      try {
        const res = await forgotPassword(values).unwrap();

        if (res?.success) {
          message.open({
            type: "success",
            content: "Send 4 digit code to your email, please check your email",
          });
          navigate("/otpverification?email=" + values.email);
        }
      } catch (error) {
        message.error(error.data.message);
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="text-secondary min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-[64px]">
        <img src={logo} alt="logo" className="mx-auto mb-4" />
        <h1 className="text- font-bold text-2xl mb-2">Forget Password?</h1>
        <p className="text-secondary mb-6">
          Don’t worry we are here to help you
        </p>
        <p className="text-sm font-normal text-secondary pb-1">
          Submit your mail
        </p>

        <Form
          name="signin"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
            required={false}
          >
            <Input
              placeholder="Email"
              prefix={<MailOutlined className="text-secondary" />}
              className="mb-4 text-secondary"
              style={{
                backgroundColor: "#38383817",
                height: "44px",
                color: "black",
              }}
            />
          </Form.Item>

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
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Forgetpasswrod;
