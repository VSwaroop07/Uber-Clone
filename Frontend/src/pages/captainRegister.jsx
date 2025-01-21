import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptianContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const captainRegister = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <>
      <img
        className="w-16 m-4"
        src="https://www.svgrepo.com/show/505031/uber-driver.svg"
        alt="Uber Logo"
      />
      <div className="pl-7 pr-7 pb-7 flex flex-col justify-between h-full">
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
            <h3 className="mb-2 font-medium">Vehicle Information</h3>
            <div className="flex gap-3 mb-3">
              <input
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm"
                type="text"
                name="vehicleColor"
                required
                placeholder="Vehicle Color"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
              />
              <input
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm"
                type="text"
                name="vehiclePlate"
                required
                placeholder="Vehicle Plate"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
              />
            </div>
            <div className="flex gap-4 mb-7">
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                type="number"
                placeholder="Vehicle Capacity"
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value);
                }}
              />
              <select
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm"
                name="vehicleType"
                required
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="bus">Bus</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#111] font-semibold text-white rounded px-4 py-2 w-full text-sm placeholder:text-sm"
            >
              Create Captain Account
            </button>
            <Link
              to="/captain-login"
              className="text-[#111] text-sm block mt-1"
            >
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

export default captainRegister;
