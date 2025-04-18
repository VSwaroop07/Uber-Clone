import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationPanel from "../components/LocationPanel";
import "remixicon/fonts/remixicon.css";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const home = () => {
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [panal, setPanal] = useState(false);
  const [vehiclePanel, setVehiclePanal] = useState(false);
  const [confirmRide, setConfirmRide] = useState(false);
  const [lookingForDriver, setLookingForDriver] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const panalRef = useRef(null);
  const panalClose = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRideRef = useRef(null);
  const lookingForDriverRef = useRef(null);
  const WaitingForDriverRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    // gsap.to(panalRef.current, { height: '70%' });
    if (panal) {
      gsap.to(panalRef.current, {
        height: "70%",
        duration: 1,
        padding: 20,
        opacity: 1,
      });
      gsap.to(panalClose.current, { opacity: 1 });
    } else {
      gsap.to(panalClose.current, { opacity: 0 });
      gsap.to(panalRef.current, {
        height: "0%",
        duration: 1,
        padding: 0,
        opacity: 0,
      });
    }
  }, [panal]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRide) {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRide]);
  useGSAP(() => {
    if (lookingForDriver) {
      gsap.to(lookingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(lookingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [lookingForDriver]);
  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(WaitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(WaitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);
  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <img
          className="w-20 absolute left-1 top-2"
          src="/uber-logo-png.png"
          alt="Uber Logo"
        />
        {/* Image for Temp Use */}
        <div className="h-screen w-screen">
          <img className="h-full w-full object-cover" src="Map.png" alt="Map" />
        </div>
        <div className=" h-screen absolute top-0 w-full flex flex-col justify-end">
          <div className="h-[30%] p-6 bg-white relative ">
            <h5
              ref={panalClose}
              onClick={() => {
                setPanal(false);
              }}
              className="absolute top-2 right-3 text-xl cursor-pointer"
            >
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className="text-2xl font-semibold">Find a trip</h4>
            <form onSubmit={(e) => submitHandler(e)}>
              <div className="line absolute h-16 w-1 top-[41%] left-8 bg-gray-500 rounded-full"></div>
              <input
                onClick={() => setPanal(true)}
                value={pickUpLocation}
                onChange={(e) => setPickUpLocation(e.target.value)}
                className="bg-[#eee] px-8 py-2 text-base rounded-lg mt-3 w-full"
                type="text"
                placeholder="Add a pick-up location"
              />
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3"
                type="text"
                placeholder="Enter you destination"
              />
            </form>
          </div>
          <div ref={panalRef} className="h-[0] bg-white">
            <LocationPanel
              setPanal={setPanal}
              setVehiclePanal={setVehiclePanal}
            />
          </div>
        </div>
        <div
          ref={vehiclePanelRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-2 py-6"
        >
          <VehiclePanel
            setConfirmRide={setConfirmRide}
            setVehiclePanal={setVehiclePanal}
          />
        </div>
        <div
          ref={confirmRideRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-2 py-6"
        >
          <ConfirmRide setConfirmRide={setConfirmRide} setLookingForDriver={setLookingForDriver} />
        </div>
        <div
          ref={lookingForDriverRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-2 py-6"
        >
          <LookingForDriver
            setConfirmRide={setConfirmRide}
            setLookingForDriver={setLookingForDriver}
          />
        </div>
        <div
          ref={WaitingForDriverRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-2 py-6"
        >
          <WaitingForDriver
            setWaitingForDriver={setWaitingForDriver}
            setLookingForDriver={setLookingForDriver}
          />
        </div>
      </div>
    </>
  );
};

export default home;
