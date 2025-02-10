import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useVerifyEmailMutation } from "../../redux/apiSlices/userApis";

const OTPverification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [form] = Form.useForm();
  const params = new URLSearchParams(window.location.search);
  const emailParam = params.get("email");

  const [emailVerified] = useVerifyEmailMutation();

  const navigate = useNavigate();
  const handleFinish = async () => {
    const otpValue = otp.join("");
    console.log("Success:", { otp: otpValue });
    // Call the onFinish prop if provided
    try {
      const res = await emailVerified({
        email: emailParam,
        emailVerifyCode: otpValue,
      }).unwrap();
      if (res?.success) {
        Swal.fire({
          title: "Success",
          text: "OTP Verification Successfull",
          icon: "success",
          confirmButtonText: "OK",
        });
        form.resetFields();
        navigate("/create-newPassword?email=" + emailParam);
      }
    } catch (error) {
      message.error(error.data.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (value, index) => {
    const otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);

    // Move focus to the next input if the current input is filled
    if (value.length === 1 && index < 3) {
      document.getElementById(`otpInput-${index + 1}`).focus();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFFFFF1A]">
      <div className="bg-white p-[40px] w-fit max-w-xl rounded-lg space-y-4">
        <h2 className="text-2xl font-bold  text-secondary pt-12">
          OTP Verification
        </h2>
        <p className="text-secondary   opacity-70 text-sm">
          We’ve sent you a verification code to {emailParam}
        </p>

        <Form
          layout="vertical"
          onFinish={handleFinish}
          onFinishFailed={onFinishFailed}
          form={form}
          style={{ maxWidth: "400px", width: "100%" }}
          className=""
        >
          {/* OTP Input */}
          <div className="flex justify-between my-6">
            {otp.map((digit, index) => (
              <Input
                key={index}
                id={`otpInput-${index}`}
                placeholder="0"
                maxLength={1}
                value={digit}
                className="text-secondary border border-[#FF0048] focus:border-[#FF0048] border-opacity-50 rounded-[5px] w-16 h-16 flex justify-center items-center"
                onChange={(e) => handleChange(e.target.value, index)}
                style={{
                  width: "80px",
                  height: "80px",
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#fffff ",

                  backgroundColor: "white",
                }}
              />
            ))}
          </div>

          <Form.Item className="pt-6">
            <Button
              className="text-[#FFFFFF] text-[16px] font-semibold p-6"
              size="large"
              type="primary"
              style={{
                backgroundColor: "#FF0048",
                height: "44px",
                color: "white",
              }}
              htmlType="submit"
              block
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default OTPverification;
