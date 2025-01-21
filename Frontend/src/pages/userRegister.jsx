import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userDataContext } from "../context/userContext";

const userRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(userDataContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const responce = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (responce.status === 201) {
      const data = responce.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setEmail("");
    setFirstName("");
    setLastName("");
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
            <h3 className="mb-2 font-medium">Name</h3>
            <div className="flex gap-3 mb-3">
              <input
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm"
                type="text"
                name="firstName"
                id=""
                required
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm"
                type="text"
                name="lastName"
                id=""
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <h3 className=" mb-2 font-medium">Email </h3>
            <input
              className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-sm placeholder:text-sm"
              type="email"
              name="email"
              id=""
              required
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className=" mb-2 font-medium">Password</h3>
            <input
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-sm placeholder:text-sm "
              type="password"
              name="password"
              id=""
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#111] font-semibold text-white rounded px-4 py-2 w-full text-sm placeholder:text-sm"
            >
              Create Account
            </button>
            <Link to="/login" className="text-[#111] text-sm block mt-1">
              Already have an account?
              <span className="text-blue-500"> Login</span>
            </Link>
          </form>
        </div>
        <div>
          <p className="text-[10px] leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default userRegister;
