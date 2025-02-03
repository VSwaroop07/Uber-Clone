import React from "react";
import { Link } from "react-router-dom";

const CaptainHome = () => {
  return (
    <div>
      <div className="h-screen">
        <div className="fixed p-2 top-0 flex items-center justify-between w-screen">
          <img className="w-16" src="/uber-logo-png.png" alt="" />
          <Link
            to={"/home"}
            className="h-8 w-8 bg-white flex items-center justify-center rounded-full text-lg font-medium"
          >
            <i className="ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className="h-[70vh]">
          <img className="h-full w-full object-cover" src="Map.png" alt="Map" />
        </div>
        <div className="h-[30vh] p-3 ">
          <div className="flex gap-5 items-center">
            <div className="">
              <img className="h-10 rounded-full" src="Public PP.jpg" alt="" />
            </div>
            <div className="">
              <h2 className="text-lg font-medium">Swaroop Vyawahare</h2>
              <h5>₹26,300</h5>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4 gap-5">
            <div className="text-center">
              <i className="text-2xl font-thin ri-time-line"></i>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Online Hours</p>
            </div>
            <div className="text-center">
              <i className="text-2xl font-thin ri-speed-up-line"></i>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Online Hours</p>
            </div>
            <div className="text-center">
              <i className="text-2xl font-thin ri-speed-up-line"></i>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Online Hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
