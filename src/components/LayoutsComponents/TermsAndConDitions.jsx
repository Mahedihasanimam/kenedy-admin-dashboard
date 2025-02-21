import "primeicons/primeicons.css"; // PrimeIcons CSS
import "primereact/resources/primereact.min.css"; // PrimeReact CSS
import "primereact/resources/themes/saga-blue/theme.css"; // Theme CSS

import React, { useEffect, useRef, useState } from "react";
import {
  useCreateTermsAndConditionMutation,
  useGetTermsAndConditionQuery,
} from "../../../redux/apiSlices/settingApiSlice";

import { Button } from "antd";
import Editor from "jodit-react";
import Swal from "sweetalert2";

const TermsAndConDitions = () => {
  const [text, setText] = useState("");
  const editor = useRef(null);
  const { data: terms } = useGetTermsAndConditionQuery({});
  const [termsAndCondition] = useCreateTermsAndConditionMutation();

  // Initialize the editor content when fetching data
  useEffect(() => {
    if (terms?.data?.content) {
      setText(terms?.data?.content);
    }
  }, [terms?.data?.content]);

  // Optimized editor content change handler
  const handleEditorChange = (newText) => {
    setText(newText);
  };

  // Handle the update of terms and conditions
  const handleUpdate = async () => {
    try {
      const res = await termsAndCondition({ content: text }).unwrap();
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

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-xl font-semibold mb-4">Terms & Conditions</h1>
      <div className="mb-4">
        <Editor
          ref={editor}
          value={text} // Controlled value
          config={{
            readonly: false,
            height: "70vh",
          }}
          onBlur={(newText) => handleEditorChange(newText)} // Update state on blur
        />
      </div>

      <Button
        type="primary"
        className="w-full mb-2 mt-4 bg-[#EBCA7E] hover:bg-[#EBCA7E] h-[44px] text-black font-bold"
        style={{ backgroundColor: "#FF0048", height: "44px", color: "white" }}
        onClick={handleUpdate} // Update when clicking the button
      >
        Update
      </Button>
    </div>
  );
};

export default TermsAndConDitions;
