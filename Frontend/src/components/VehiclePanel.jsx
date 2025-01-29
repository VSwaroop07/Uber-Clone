import React, { useRef } from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanal(false);
        }}
        className="absolute top-2 right-3 text-xl cursor-pointer"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-3">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRide(true);
          props.setVehiclePanal(false);
        }}
        className="flex w-full border-2 active:border-black mb-2 rounded-xl items-center justify-between p-2"
      >
        <img className="h-20" src="car-white.svg" alt="" />
        <div className=" w-1/2">
          <h4 className="font-medium">
            UberGo{" "}
            <span>
              <i className="ri-user-line">4</i>
            </span>
          </h4>
          <h5 className="text-sm">2 mins away</h5>
          <p className="text-xs text-gray-600">Affordable, compact rides</p>
        </div>
        <h2 className="text-xl font-semibold">₹193.50</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRide(true);
          props.setVehiclePanal(false);
        }}
        className="flex w-full border-2 active:border-black mb-2 rounded-xl items-center justify-between p-2"
      >
        <img className="h-12" src="uberXL.png" alt="" />
        <div className=" w-1/2">
          <h4 className="font-medium">
            UberGo{" "}
            <span>
              <i className="ri-user-line">6</i>
            </span>
          </h4>
          <h5 className="text-sm">2 mins away</h5>
          <p className="text-xs text-gray-600">Premium, Rides</p>
        </div>
        <h2 className="text-xl font-semibold">₹423.50</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRide(true);
          props.setVehiclePanal(false);
        }}
        className="flex w-full border-2 active:border-black mb-2 rounded-xl items-center justify-between p-2"
      >
        <img className="h-12 ml-3" src="bike.png" alt="" />
        <div className=" w-1/2">
          <h4 className="font-medium">
            Moto{" "}
            <span>
              <i className="ri-user-line">1</i>
            </span>
          </h4>
          <h5 className="text-sm">2 mins away</h5>
          <p className="text-xs text-gray-600">Affordable, compact rides</p>
        </div>
        <h2 className="text-xl font-semibold">₹63.50</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRide(true);
          props.setVehiclePanal(false);
        }}
        className="flex w-full border-2 active:border-black mb-2 rounded-xl items-center justify-between p-2"
      >
        <img className="h-12" src="auto.png" alt="" />
        <div className=" w-1/2">
          <h4 className="font-medium">
            Auto{" "}
            <span>
              <i className="ri-user-line">3</i>
            </span>
          </h4>
          <h5 className="text-sm">2 mins away</h5>
          <p className="text-xs text-gray-600">Affordable, Auto rides</p>
        </div>
        <h2 className="text-xl font-semibold">₹50.99</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
