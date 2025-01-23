import React from "react";

const LocationPanel = () => {
  return (
    <>
      <div className="flex items-center my-4 justify-start gap-3">
        <h2 className="bg-[#eee] flex items-center justify-center rounded-full h-8 w-8">
          <i class="ri-map-pin-2-fill"></i>
        </h2>
        <h4 className="font-medium">Canada Corner, Nashik</h4>
      </div>
      <div className="flex items-center my-4 justify-start gap-3">
        <h2 className="bg-[#eee] flex items-center justify-center rounded-full h-8 w-8">
          <i class="ri-map-pin-2-fill"></i>
        </h2>
        <h4 className="font-medium">Canada Corner, Nashik</h4>
      </div>
    </>
  );
};

export default LocationPanel;
