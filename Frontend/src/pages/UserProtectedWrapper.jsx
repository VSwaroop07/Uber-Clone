import React, { useContext, useEffect } from "react";
import { userDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { use } from "react";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  },[token]);
  return <>{children}</>;
};

export default UserProtectedWrapper;
