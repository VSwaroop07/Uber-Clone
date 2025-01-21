import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const userLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const { user, setUser } = React.useContext(userDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    const responce = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (responce.status === 200) {
      const data = responce.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    // console.log(userData);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <img className="w-20" src="/uber-logo-png.png" alt="Uber Logo" />
      <div className="p-7 flex flex-col justify-between h-[90vh]">
        <div>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h3 className="mb-2 font-medium">Enter your email</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              name="email"
              id=""
              required
              placeholder="email@example.com"
              //RealTime value Update
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className=" mb-2 font-medium">Enter your password</h3>
            <input
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
              type="password"
              name="password"
              id=""
              required
              placeholder="Password"
              //RealTime value Update
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#111] font-semibold text-white rounded px-4 py-2 w-full text-lg placeholder:text-base"
            >
              Login
            </button>
            <Link to="/signup" className="text-[#111] text-sm block mt-1">
              Don't have an account?
              <span className="text-blue-500"> Sign up</span>
            </Link>
          </form>
        </div>
        <div>
          <Link
            to="/captain-login"
            className="bg-[#111] font-semibold text-white rounded px-4 py-2 w-full text-lg placeholder:text-base block text-center"
          >
            Sign in as Captian
          </Link>
        </div>
      </div>
    </>
  );
};

export default userLogin;
