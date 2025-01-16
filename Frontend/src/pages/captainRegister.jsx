import React, { useState } from "react";
import { Link } from "react-router-dom";

const captainRegister = () => {
   const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captainData, setCaptainData] = useState({});
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setCaptainData({
        fullName: {
          firstName: firstName,
          lastName: lastName,
        },
        email: email,
        password: password,
      });
      // console.log(userData);
      setEmail("");
      setFirstName("");
      setLastName("");
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
            <Link to="/captain-login" className="text-[#111] text-sm block mt-1">
              Already have an account?
              <span className="text-blue-500"> Login</span>
            </Link>
          </form>
        </div>
        <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
        Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
      </div>
    </>
  );
};

export default captainRegister;
