import { Button, Image, Input } from "antd";
import React, { useState } from "react";
import profilimg from '../assets/images/576626.jpg'
import { TiUserOutline } from "react-icons/ti";

const Personalinfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState(null);

  const handleSave = () => {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    if (image) {
      console.log("Uploaded Image:", image.name);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="text-secondary min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl mx-auto rounded-lg p-6 ">
        <div className="border border-[#E7E7E7] rounded-md p-4">
          <div className="mx-auto w-fit py-6">
            <input
              type="file"
              onChange={handleImageChange}
              style={{ display: 'none' }}
              id="upload-input"
            />
            <label htmlFor="upload-input" className="cursor-pointer relative">
             <Image height={150} width={150} preview={false} src={image ? URL.createObjectURL(image) : profilimg} className="rounded-full w-8 h-8 object-cover" />

             <div className="absolute bottom-0 right-4 text-black">
             <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34" height="34" rx="17" fill="#FFE6ED"/>
<mask id="mask0_57_114"  maskUnits="userSpaceOnUse" x="5" y="5" width="24" height="24">
<rect x="5" y="5" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_57_114)">
<path d="M7 29V25H27V29H7ZM11 21H12.4L20.2 13.225L18.775 11.8L11 19.6V21ZM9 23V18.75L20.2 7.575C20.3833 7.39167 20.5958 7.25 20.8375 7.15C21.0792 7.05 21.3333 7 21.6 7C21.8667 7 22.125 7.05 22.375 7.15C22.625 7.25 22.85 7.4 23.05 7.6L24.425 9C24.625 9.18333 24.7708 9.4 24.8625 9.65C24.9542 9.9 25 10.1583 25 10.425C25 10.675 24.9542 10.9208 24.8625 11.1625C24.7708 11.4042 24.625 11.625 24.425 11.825L13.25 23H9Z" fill="#FF4D7F"/>
</g>
</svg>

             </div>
            </label>
            <h3 className="text-xl font-bold mt-4 text-secondary">
              Upload your photo
            </h3>
          </div>
          <div className="space-y-6">
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{ backgroundColor: "#38383817", height: "44px" ,color: "black"}}
              className="p-2 custom-input text-secondary"
              prefix={<TiUserOutline className="text-xl text-secondary" />}
              placeholder="First Name"
            />
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ backgroundColor: "#38383817", height: "44px" }}
              className="p-2 custom-input text-secondary"
              prefix={<TiUserOutline className="text-xl text-secondary" />}
              placeholder="Last Name"
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
