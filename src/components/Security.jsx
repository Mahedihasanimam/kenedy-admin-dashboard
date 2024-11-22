import { Button, Input } from "antd";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { TiUserOutline } from "react-icons/ti";

const Personalinfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSave = () => {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  };

  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      <div className="bg-white max-w-4xl w-full rounded-lg p-6 ">
        <div className="border border-[#E7E7E7] rounded-md p-4">
         
          <div className="space-y-6">
         
            {/* Other inputs for password can remain the same */}
            <Input.Password
              name="password"
               style={{ backgroundColor: "#38383817", height: "44px" ,color: "black"}}
              className="p-2 custom-input text-white font-medium"
              prefix={<MdLockOutline className="text-xl text-secondary" />}
              placeholder="Current Password"
            />
            <Input.Password
              name="newpassword"
               style={{ backgroundColor: "#38383817", height: "44px" ,color: "black"}}
              className="p-2 custom-input text-white font-medium"
              prefix={<MdLockOutline className="text-xl text-secondary" />}
              placeholder="New Password"
            />
            <Input.Password
              name="confirmnewpassword"
               style={{ backgroundColor: "#38383817", height: "44px" ,color: "black"}}
              className="p-2 custom-input text-white font-medium"
              prefix={<MdLockOutline className="text-xl text-secondary" />}
              placeholder="Confirm New Password"
            />
             <Button
              shape="square"
              onClick={handleSave}
              style={{
                backgroundColor: "#FF0048",
                color: "white",
                fontWeight: "600",
                fontSize: "18px",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
              size="large"
              type="primary"
              className="w-full"
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalinfo;
