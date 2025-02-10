import { Navigate, useSearchParams } from "react-router-dom";

import React from "react";

const PrivateRoutes = ({ children }: { children: JSX.Element }) => {
  const [params] = useSearchParams();

  const token = params.get("token");

  const localToken = localStorage.getItem("token");

  if (token) {
    localStorage.setItem("token", token);
  }

  if (!token && !localToken) {
    return <Navigate to="/login" replace />;
  }

  return children;

  // অথেন্টিকেটেড হলে প্রাইভেট রাউট দেখানো
};

export default PrivateRoutes;
