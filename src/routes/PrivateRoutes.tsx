import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

const PrivateRoutes = ({ children }: { children: JSX.Element }) => {
  const [params] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const token = params.get("token");

  useEffect(() => {
    const referrer = document.referrer; // আগের পেজের URL
    const location = document.location.href; // বর্তমান পেজের URL
    console.log("Referrer:", referrer);
    console.log("Current Location:", location);

    // টোকেন সেট করা এবং লোকালস্টোরেজ আপডেট
    if (token) {
      localStorage.setItem("token", token);
    }

    // লোকালস্টোরেজ থেকে টোকেন চেক করা
    const savedToken = localStorage.getItem("token");
    setIsAuthenticated(!!savedToken);
    setLoading(false); // লোডিং স্টেট বন্ধ
  }, [token]);

  if (loading) {
    // লোডিং দেখানোর জন্য
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-4xl font-bold">Loading...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    // যদি ইউজার অথেন্টিকেটেড না হয়
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Unauthorized Access</h1>
        <button
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
          onClick={() => window.history?.back()}
        >
          Go Back
        </button>
      </div>
    );
  }

  // অথেন্টিকেটেড হলে প্রাইভেট রাউট দেখানো
  return children;
};

export default PrivateRoutes;
