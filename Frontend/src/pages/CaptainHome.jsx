import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const RidePopUpPanelRef = useRef(null);
  const ConfirmRidePopUpPanelRef = useRef(null);
  const [RidePopUpPanel, setRidePopUpPanel] = useState(true);
  const [ConfirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);

  useGSAP(() => {
    if (RidePopUpPanel) {
      gsap.to(RidePopUpPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(RidePopUpPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [RidePopUpPanel]);
  
  useGSAP(() => {
    if (ConfirmRidePopUpPanel) {
      gsap.to(ConfirmRidePopUpPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ConfirmRidePopUpPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ConfirmRidePopUpPanel]);
  return (
    <div>
      <div className="h-screen">
        <div className="fixed p-2 top-0 flex items-center justify-between w-screen">
          <img className="w-16" src="/uber-logo-png.png" alt="" />
          <Link
            to={"/captain-login"}
            className="h-8 w-8 bg-white flex items-center justify-center rounded-full text-lg font-medium"
          >
            <i className="ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className="h-[70vh]">
          <img className="h-full w-full object-cover" src="Map.png" alt="Map" />
        </div>
        <div className="h-[30vh] p-3 ">
          <CaptainDetails />
        </div>
        <div
          ref={RidePopUpPanelRef}
          className="fixed translate-y-full w-full z-10 bottom-0  bg-white px-3 py-10 pt-12"
        >
          <RidePopUp
            setRidePopUpPanel={setRidePopUpPanel}
            setConfiremRidePopUpPanel={setConfirmRidePopUpPanel}
          />
        </div>
        <div
          ref={ConfirmRidePopUpPanelRef}
          className="fixed translate-y-full w-full z-10 bottom-0 h-full  bg-white px-3 py-10 pt-12"
        >
          <ConfirmRidePopUp
            setRidePopUpPanel={setRidePopUpPanel}
            setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          />
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
