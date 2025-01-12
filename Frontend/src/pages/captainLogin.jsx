import React, { useState } from "react";
import { Link } from "react-router-dom";

const captainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({ email, password });
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <img className="w-16 m-4" src="/uber-driver.svg" alt="Uber Logo" />
      <div className="p-7 flex flex-col justify-between h-[85vh]">
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
            <Link to="/captain-signup" className="text-[#111] text-sm block mt-1">
              Register as Captain
              <span className="text-blue-500"> Sign Up</span>
            </Link>
          </form>
        </div>
        <div>
          <Link
            to="/login"
            className="bg-[#111] font-semibold text-white rounded px-4 py-2 w-full text-lg placeholder:text-base block text-center"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </>
  );
};

export default captainLogin;
