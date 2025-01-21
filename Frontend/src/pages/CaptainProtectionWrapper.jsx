import React, { useContext, useEffect } from "react";
import {CaptainDataContext} from "../context/captainContext";
import { useNavigate } from "react-router-dom";
import { use } from "react";

const CaptainProtectionWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  },[token]);
  return <>{children}</>;
};

export default CaptainProtectionWrapper;
