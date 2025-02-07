import React from "react";

const CaptainDetails = () => {
  return (
    <div>
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
          <p className="text-sm text-gray-600">Km Driven</p>
        </div>
        <div className="text-center">
          <i className="text-2xl font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Accessed System</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
