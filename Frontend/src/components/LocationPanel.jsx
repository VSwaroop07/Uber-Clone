import React from "react";

const LocationPanel = (props) => {
  //Sample Arrya of Locations
  const Locations = ["Canada Corner, Nashik", "Canada Corner, Nashik"];
  return (
    <>
      {Locations.map(function (elem,idx) {
        return (
          <div key={idx} onClick={() => {
            props.setVehiclePanal(true);
            props.setPanal(false);
          } } className="flex items-center my-4 justify-start gap-3 active:border-2 p-3 rounded-xl">
            <h2 className="bg-[#eee] flex items-center justify-center rounded-full h-8 w-8">
              <i class="ri-map-pin-2-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}

    </>
  );
};

export default LocationPanel;
