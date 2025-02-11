import React from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePopUpPanel(false);
        }}
        className="absolute top-2 right-3 text-xl cursor-pointer"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Ride Confiremation</h3>
      <div className="flex items-center justify-between p-4 bg-yellow-200 rounded-lg">
        <div className="flex items-center gap-3">
          <img className="h-12 rounded-full" src="Public PP.jpg" alt="" />
          <h2 className="text-lg font-medium">Swaroop Dada</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2KM</h5>
      </div>
      <div className="flex gap-5 justify-between flex-col items-center mt-3">
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
      <Link
          onClick={() => {
            props.setConfirmRidePopUpPanel(true);
            props.setRidePopUpPanel(false);
          }}
          className="w-full flex justify-center bg-green-500 mt-3 rounded-md text-white font-semibold p-2"
        >
          Confirm
        </Link>
        <button
          onClick={() => {
            props.setRidePopUpPanel(false);
            props.setConfirmRidePopUpPanel(false);
          }}
          className="w-full mt-2 bg-red-500 rounded-md text-white font-semibold p-2"
        >
          Cancle
        </button>
    </div>
  );
};

export default ConfirmRidePopUp;
