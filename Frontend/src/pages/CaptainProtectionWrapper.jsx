import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptianContext";
import { useNavigate } from "react-router-dom";
import { use } from "react";
import axios from "axios";

const CaptainProtectionWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [ isLoading, setIsLoading ] = useState(true);
  
  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token]);

  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        setIsLoading(false);
      }
    })
    .catch((error) => {
      console.log(error);
      localStorage.removeItem("token");
      navigate("/captain-login");
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectionWrapper;
