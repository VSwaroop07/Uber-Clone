import React, { useContext, useEffect, useState } from "react";
import { userDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { use } from "react";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, setUser } = useContext(userDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  axios
    .get(`${import.meta.env.VITE_API_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        setIsLoading(false);
      }
    })
    .catch((error) => {
      console.log(error);
      localStorage.removeItem("token");
      navigate("/login");
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
};

export default UserProtectedWrapper;
