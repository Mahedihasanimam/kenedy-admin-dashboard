import React, { useState } from "react";
import { Editor } from "primereact/editor";
import "primereact/resources/themes/saga-blue/theme.css"; // Theme CSS
import "primereact/resources/primereact.min.css"; // PrimeReact CSS
import "primeicons/primeicons.css"; // PrimeIcons CSS
import { Button } from "antd";

const TermsAndConDitions = () => {
  const [text, setText] = useState(" What makes a good About page?A good About page shares your unique story and gives people a glimpse into what it’d be like working with you (as an individual or company).It should be equally fun and meaningful to resonate with the intended audience. You can document your journey of starting a business with visuals to make the page more appealing.There’s no one-fits-all structure for About pages because they’re personal to you and your company. However, I’ve curated seven best practices after reviewing some of the best About pages.Let’s break down the step-by-step process to design a stellar About page. ");

const handleupdate=()=>{
  console.log(text)
}
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-xl font-semibold mb-4">Terms & Conditions</h1>
      <Editor
        value={text}
        onTextChange={(e) => setText(e.htmlValue)}
        style={{ height: "320px" }}
      />

<Button
               
               type="primary" 
               className="w-full mb-2 mt-4 bg-[#EBCA7E] hover:bg-[#EBCA7E] h-[44px] text-black font-bold" 
               style={{backgroundColor: "#FF0048", height: "44px",color:'white'}}
               onClick={handleupdate} // Call handleLogin on click
           >
              update
           </Button>
    
    </div>
  );
};

export default TermsAndConDitions;
