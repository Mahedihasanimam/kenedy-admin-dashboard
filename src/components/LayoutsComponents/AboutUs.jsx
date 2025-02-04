import "primeicons/primeicons.css"; // PrimeIcons CSS
import "primereact/resources/primereact.min.css"; // PrimeReact CSS
import "primereact/resources/themes/saga-blue/theme.css"; // Theme CSS

import React, { useEffect, useState } from "react";
import {
  useCreateTermsAndConditionMutation,
  useGetTermsAndConditionQuery,
} from "../../../redux/apiSlices/settingApiSlice";

import { Button } from "antd";
import Editor from "jodit-react";
import Swal from "sweetalert2";

const AboutUs = () => {
  const [text, setText] = useState();
  const { data: terms } = useGetTermsAndConditionQuery({});
  const [termsAndCondition] = useCreateTermsAndConditionMutation();

  const handleupdate = async () => {
    try {
      const res = await termsAndCondition({ content: text }).unwrap();
      console.log(res);
      if (res?.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Terms updated successfully",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  // console.log(terms?.data?.content);

  useEffect(() => {
    if (terms?.data?.content) {
      setText(terms?.data?.content);
    }
  }, [terms?.data?.content]);

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-xl font-semibold mb-4">About Us</h1>
      <div className="mb-4 ">
        <Editor
          config={{
            readonly: false,
            height: "70vh",
          }}
          value={text}
          onChange={(value) => setText(value)}
        />
      </div>

      <Button
        type="primary"
        className="w-full mb-2 mt-4 bg-[#EBCA7E] hover:bg-[#EBCA7E] h-[44px] text-black font-bold"
        style={{ backgroundColor: "#FF0048", height: "44px", color: "white" }}
        onClick={handleupdate} // Call handleLogin on click
      >
        update
      </Button>
    </div>
  );
};

export default AboutUs;
