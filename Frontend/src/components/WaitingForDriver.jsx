import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
        className="absolute top-2 right-3 text-xl cursor-pointer"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <div className="flex items-center justify-between">
      <img className="h-20" src="car-white.svg" alt="" />
      <div className="text-right">
        <h2 className="text-lg font-medium">Swaroop Vyawahare</h2>
        <h4 className="text-xl font-semibold -mt-1 -mb-1">MH20CC0997</h4>
        <p className="text-sm text-gray-600">Fortuner</p>
      </div>
      </div>
      <div className="flex gap-5 justify-between flex-col items-center">
        <div className="w-full">
          <div className="flex gap-5 items-center p-2 border-b-2">
            <i className="ri-user-location-line text-lg"></i>
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-base -mt-1 text-gray-600">Nashik</p>
            </div>
          </div>
          <div className="flex gap-5 items-center p-2 border-b-2">
            <i className="ri-map-pin-fill text-lg"></i>
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-base -mt-1 text-gray-600">Nashik</p>
            </div>
          </div>
          <div className="flex gap-5 items-center p-2">
            <i class="ri-money-rupee-circle-line"></i>
            <div className="">
              <h3 className="text-lg font-medium">₹1126.53</h3>
              <p className="text-base -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
