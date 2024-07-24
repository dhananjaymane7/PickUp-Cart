import React, { useState } from "react";
import Toggle from "./Toggle";
// import Document from './Document';
import PickupParcel from "./PickupParcel";
import PickupCargo from "./PickupCargo";
import Documents from "./Documents";
import BookNow from "./BookNow";
import { Link } from "react-router-dom";

const PickupMode = () => {
  const [activeButton, setActiveButton] = useState("Document");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "Call Now") {
      window.open("tel:+917249174747");
    }
  };

  return (
    <div className="  w-full  ">
      <div className="relative">
        <img src="image/banner5.jpg" className="w-full" alt="Banner" />

        <div className="absolute top-0 right-0 flex flex-col justify-center mt-4 mr-4">
          <button
            className={`mb-2 px-4 py-2 bg-blue-500 text-white rounded focus:outline-none ${
              activeButton === "Quick Book" && "bg-blue-700"
            }`}
            onClick={() => handleButtonClick("Quick Book")}
          >
            <Link to="/BookNow">Quick Book</Link>
          </button>

          <button
            className={`px-4 py-2 bg-red-500 text-white rounded focus:outline-none ${
              activeButton === "Call Now" && "bg-red-700"
            }`}
            onClick={() => handleButtonClick("Call Now")}
          >
            Call Now +917249174747
          </button>
        </div>
      </div>

      <div className=" justify-center top-40 absolute z-10 md:mx-40 lg:mx-80   ">
        <div className="flex">
          <Toggle
            label="Document"
            active={activeButton === "Document"}
            onClick={() => handleButtonClick("Document")}
          />
          <Toggle
            label="Parcel"
            active={activeButton === "Parcel"}
            onClick={() => handleButtonClick("Parcel")}
          />
          <Toggle
            label="Cargo"
            active={activeButton === "Cargo"}
            onClick={() => handleButtonClick("Cargo")}
          />
        </div>
        <div className="mt-2">
          {activeButton === "Document" && (
            <div>
              <Documents />
            </div>
          )}
          {activeButton === "Parcel" && (
            <div>
              {" "}
              <PickupParcel />{" "}
            </div>
          )}
          {activeButton === "Cargo" && (
            <div>
              {" "}
              <PickupCargo />
            </div>
          )}
          <p className="text-black mb-20 text-sm mt-2 ">
            Note : Please enter the correct parcel weight and dimensions.
            Failure to do so may result in delivery delays and additional
            charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PickupMode;
