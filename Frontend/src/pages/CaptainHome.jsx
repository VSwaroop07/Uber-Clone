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
        <div className="h-1/2">
          <img className="h-full w-full object-cover" src="Map.png" alt="Map" />
        </div>
        <div className="h-1/2 p-3">
          <div className="flex items-center justify-between">
            <div className="">
              <img className="h-20" src="car-white.svg" alt="" />
              <h2 className="text-lg font-medium">Swaroop Vyawahare</h2>
            </div>
            <div className="">
              <h5>₹26,300</h5>
            </div>
          </div>
          <div className="text-center">
            <i className="ri-time-line"></i>
            <h5>10.2</h5>
            <p>Online Hours</p>
          </div>
          <div>
            <i className="ri-speed-up-line"></i>
            <h5>10.2</h5>
            <p>Online Hours</p>
          </div>
          <div>
            <i className="ri-speed-up-line"></i>
            <h5>10.2</h5>
            <p>Online Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
