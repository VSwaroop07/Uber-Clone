import React, { useState } from "react";
import { Link } from "react-router-dom";

const userRegister = () => {
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
              />
              <input
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm"
                type="text"
                name="lastName"
                id=""
                placeholder="Last Name"
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
            />
            <h3 className=" mb-2 font-medium">Password</h3>
            <input
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-sm placeholder:text-sm "
              type="password"
              name="password"
              id=""
              required
              placeholder="Password"
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
          {/* <Link
            to="/captain-login"
            className="bg-[#111] font-semibold text-white rounded px-4 py-2 w-full text-sm placeholder:text-sm block text-center"
          >
            Sign Up as Captian
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default userRegister;
