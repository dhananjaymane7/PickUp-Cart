import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import maharastraData from '../../../pincodes/maharastra.json';
import goa_gujratData from '../../../pincodes/goa&gujrat.json';
import north_east from '../../../pincodes/north_east.json';
import allIndia from '../../../pincodes/pincode.json';
import odaPin from '../../../pincodes/odaPin.json';


const PickupCargo = () => {
    const [pickupPincode, setPickupPincode] = useState("");
    const [deliveryPincode, setDeliveryPincode] = useState("");
    const [parcelWeight, setParcelWeight] = useState("");
    const [rate, setRate] = useState(0);
    const [pickupPincodeSuggestions, setPickupPincodeSuggestions] = useState("");
    const [pickupSateSuggestions, setPickupSateSuggestions] = useState("");
    const [deliverySateSuggestions, setDeliverySateSuggestions] = useState("");
    const [deliveryPincodeSuggestions, setDeliveryPincodeSuggestions] = useState("");
    const [pincodeData, setPincodeData] = useState([]);
    const [isValidPin, setIsValidPin] = useState(true); // New state for pin code validation
    const [showSpinner, setShowSpinner] = useState(false); // New state for spinner
    const [cardsVisible, setCardsVisible] = useState(true);


    const handleCardClose = () => {
        setCardsVisible(false);
        setShowSpinner(false)
    };

    const isallIndia = (pincode) => {
        return allIndia.some((item) => item.roi_pin === pincode);
    };

    const isMaharastraPincode = (pincode) => {
        return maharastraData.some(
            (item) => item.roi_pin === pincode);
    };


    const isgoa_gujratPincode = (pincode) => {
        return goa_gujratData.some((item) => item.roi_pin === pincode);
    };

    const isnoth_epin = (pincode) => {
        return north_east.some((item) => item.roi_pin === pincode);
    };
    const isodaPin = (pincode) => {
        return odaPin.some((item) => item.roi_pin === pincode);
    };


    useEffect(() => {
        const fetchData = (inputValue) => {
            try {
                const data = require("../../../pincodes/pincode.json").concat(maharastraData, goa_gujratData, north_east, odaPin);
                setPincodeData(data);


                const [suggestions] = data
                    .filter((item) => item.roi_pin && item.roi_pin.includes(inputValue))
                    .map((item) => item.roi_city);

                console.log(suggestions);

                const [suggestionsState] = data
                    .filter((item) => item.roi_pin && item.roi_pin.includes(inputValue))
                    .map((item) => item.roi_state);
                console.log(suggestionsState);

                if (suggestions.length === 0) {
                    setIsValidPin(false);
                } else {
                    setIsValidPin(true);
                }
                setPickupPincodeSuggestions(suggestions);
                setPickupSateSuggestions(suggestionsState);

            } catch (error) {
                console.error("Error fetching pickup pincode suggestions:", error);
            }
        };

        if (pickupPincode.length > 2) {
            fetchData(pickupPincode);
        } else {
            setPickupPincodeSuggestions("");
            setPickupSateSuggestions("");

            setIsValidPin(true);
        }
    }, [pickupPincode]);

    useEffect(() => {
        const fetchData = (inputValue) => {
            try {
                const data = require("../../../pincodes/pincode.json").concat(maharastraData, goa_gujratData, north_east, odaPin);
                setPincodeData(data);


                const [suggestions] = data
                    .filter((item) => item.roi_pin && item.roi_pin.includes(inputValue))
                    .map((item) => item.roi_city);

                console.log(suggestions);

                const [suggestionsState] = data
                    .filter((item) => item.roi_pin && item.roi_pin.includes(inputValue))
                    .map((item) => item.roi_state);
                console.log(suggestionsState);

                if (suggestions.length === 0) {
                    setIsValidPin(false);
                } else {
                    setIsValidPin(true);
                }
                setDeliveryPincodeSuggestions(suggestions);
                setDeliverySateSuggestions(suggestionsState)

            } catch (error) {
                console.error("Error fetching delivery pincode suggestions:", error);
            }
        };

        if (deliveryPincode.length > 2) {
            fetchData(deliveryPincode);
        } else {
            setDeliveryPincodeSuggestions("");
            setDeliverySateSuggestions("");
            setIsValidPin(true);
        }
    }, [deliveryPincode]);


    const getExpectedDeliveryTime = (deliveryPincode, pickupType) => {
        const deliveryTimeMap = {
            maharashtra: {
                cargo: "3 - 5 days",
            },

            AllIndia: {
                cargo: "6 - 8 days",
            },
            goa_gujrat: {
                cargo: "3 - 5 days",
            },

            noth_east: {
                cargo: "8 - 10 days",
            },
            oda: {
                cargo: "8 - 10 days",
            },
        };

        // let region = isMaharastraPincode(deliveryPincode) ? "maharashtra" : "default"
        //     && isgoa_gujratPincode(deliveryPincode) ? "goa_gujrat" : "default"
        //         && isallIndia(deliveryPincode) ? "AllIndia" : "default"
        //             && isnoth_epin(deliveryPincode) ? "noth_east" : "default"
        //             && isodaPin(deliveryPincode) ? "oda" : "default";

        // let region =
        //     (isMaharastraPincode(deliveryPincode) ? "maharashtra" : "default") ||
        //     (isgoa_gujratPincode(deliveryPincode) ? "goa_gujrat" : "default") ||
        //     (isallIndia(deliveryPincode) ? "AllIndia" : "default") ||
        //     (isnoth_epin(deliveryPincode) ? "noth_east" : "default") ||
        //     (isodaPin(deliveryPincode) ? "oda" : "default");

        // let region = "default";

        // if (isMaharastraPincode(deliveryPincode)) {
        //     region = "maharashtra";
        // } else if (isgoa_gujratPincode(deliveryPincode)) {
        //     region = "goa_gujrat";
        // } else if (isallIndia(deliveryPincode)) {
        //     region = "AllIndia";
        // } else if (isnoth_epin(deliveryPincode)) {
        //     region = "noth_east";
        // } else if (isodaPin(deliveryPincode)) {
        //     region = "oda";
        // }


        // const expectedDeliveryTime = deliveryTimeMap[region]?.[pickupType] || "default delivery time";


        let region;

        if (isMaharastraPincode(deliveryPincode)) {
            region = "maharashtra";
        } else if (isgoa_gujratPincode(deliveryPincode)) {
            region = "goa_gujrat";
        } else if (isallIndia(deliveryPincode)) {
            region = "AllIndia";
        } else if (isnoth_epin(deliveryPincode)) {
            region = "noth_east";
        } else if (isodaPin(deliveryPincode)) {
            region = "oda";
        } else {
            region = "default";
        }

        const expectedDeliveryTime = deliveryTimeMap[region]?.[pickupType] || "default delivery time";

        return expectedDeliveryTime;
    };

    const calculateRate1 = () => {
        setShowSpinner(true);

        setTimeout(() => {
            setShowSpinner(false);
        }, 1000);

        if (pickupPincode && deliveryPincode && parcelWeight) {
            const weight = parseFloat(parcelWeight);
            if (!isNaN(weight) && weight > 0) {
                let calculatedRate;
                let odaPinAdditionalCharge = 500;

                let secweight = weight - 20
                let reginal21 = 22 * secweight
                let reginal50 = 20 * secweight
                let reginal100 = 18 * secweight

                let allIndia21 = 30 * secweight
                let allIndai50 = 28 * secweight
                let allIndai100 = 25 * secweight

                let northeast21 = 45 * secweight
                let northeast50 = 42 * secweight
                let northeast100 = 40 * secweight

                if (!isMaharastraPincode(pickupPincode)) {
                    window.alert("Invalid pickup pin code. Pickup pin code must be from Maharastra.");
                    return;
                }


                if (isMaharastraPincode(deliveryPincode)) {
                    if (weight <= 20) {

                        calculatedRate = 550;
                    } else if (weight <= 50) {
                        calculatedRate = 550 + reginal21;
                    } else if (weight <= 100) {
                        calculatedRate = 550 + reginal50;
                    }
                    else {

                        window.alert("please enter weight up to 100kg  only")

                    }
                }
                if (isgoa_gujratPincode(deliveryPincode)) {
                    if (weight <= 20) {
                        calculatedRate = 550;
                    } else if (weight <= 50) {
                        calculatedRate = 550 + reginal21;
                    } else if (weight <= 100) {
                        calculatedRate = 550 + reginal50;
                    }
                    else {

                        window.alert("please enter weight up to 100kg  only")

                    }
                }

                if (isallIndia(deliveryPincode)) {
                    if (weight <= 20) {
                        calculatedRate = 600;
                    } else if (weight <= 50) {
                        calculatedRate = 600 + allIndia21;
                    } else if (weight <= 100) {
                        calculatedRate = 600 + allIndai50;
                    }
                    else {

                        window.alert("please enter weight up to 100kg  only")

                    }
                }
                if (isnoth_epin(deliveryPincode)) {
                    if (weight <= 20) {
                        calculatedRate = 850;
                    } else if (weight <= 50) {
                        calculatedRate = 850 + northeast21;
                    } else if (weight <= 100) {
                        calculatedRate = 850 + northeast50;
                    }
                    else {

                        window.alert("please enter weight up to 100kg  only")

                    }
                }


                if (isodaPin(deliveryPincode)) {
                    calculatedRate += odaPinAdditionalCharge;
                }

                setRate(calculatedRate.toFixed(0));
            } else {
                setRate(0);
            }
        } else {
            setRate(0);
        }
    };


    const navigate = useNavigate();

    const handleProceed = () => {
        const pickupDetails = { pickupPincode, pickupPincodeSuggestions, pickupSateSuggestions };
        const deliveryDetails = { deliveryPincode, deliveryPincodeSuggestions, deliverySateSuggestions };
        const packageDetails = { parcelWeight };
        const price = { rate }

        navigate("/cargo-order", { state: { pickupDetails, deliveryDetails, packageDetails, price } });
    };

    return (
        <div className=' bg-white     shadow-md  border-2 p-10 rounded-xl'>
            <p className="text-red-500 text-center"> {isValidPin ? "" : "invalid pin code "}</p>

            <div className='lg:grid lg:grid-cols-2 gap-4'>
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Pickup Pincode</label>

                    <input
                        className="shadow appearance-none  border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                        type="text"
                        value={pickupPincode}
                        onChange={(e) => setPickupPincode(e.target.value)}
                    />
                    {pickupPincode.length === 6 ? <p className="text-green-500 font-medium"> {pickupPincodeSuggestions} , {pickupSateSuggestions}</p> : ""}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Delivery Pincode</label>
                    <input
                        type="text"
                        className="shadow appearance-none  border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                        value={deliveryPincode}
                        onChange={(e) => setDeliveryPincode(e.target.value)}
                    />
                    {deliveryPincode.length === 6 ? <p className="text-green-500 font-medium"> {deliveryPincodeSuggestions} , {deliverySateSuggestions}</p> : ""}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Document Weight ( up to 100 kg)</label>
                    <input
                        type="number"
                        step="0.01"
                        className="shadow appearance-none  border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                        value={parcelWeight}
                        onChange={(e) => setParcelWeight(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-800 hover:bg-blue-900 hover:shadow-md text-white font-bold  px-10 py-4  mx-10 my-4 rounded"
                    onClick={calculateRate1}
                >
                    Calculate Rate
                </button>
            </div>
            <div className="mt-4">
                <div className=" justify-between mr-2 flex ">

                    <p className="font-bold text-gray-500">Shipping Rate:</p>
                    <div>
                        <Link to='/Restricted-Item' className="font-bold text-red-600">Restricted Item*</Link>

                    </div>

                </div>

                {/* Spinner */}
                {showSpinner && (
                    <div className="flex justify-center items-center mt-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500 border-r-2 border-b-2 "></div>
                    </div>
                )}
                {!showSpinner && cardsVisible && rate > 0 && (
                    <div>
                        <div>
                            <div className="mt-6 ">
                                <button className="lg:text-sm px-6 py-2 border rounded-lg bg-red-500 text-white text-lg font-bold" onClick={handleCardClose}>
                                    Close
                                </button>
                            </div>
                            <div className='lg:grid lg:grid-cols-2'>
                                {/* pickup cargo card */}


                                <div class="w-80  mt-24 m-auto lg:mt-16 max-w-sm">
                                    <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-36 object-cover" />
                                    <div class="bg-white pb-10 shadow-md border rounded-xl">
                                        <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">PickupKart Cargo</h2>
                                        <div class=" m-auto">
                                            <p class="text-center text-gray-500 pt-5">  {pickupPincode} {pickupPincodeSuggestions} -  {deliveryPincode} {deliveryPincodeSuggestions} </p>
                                            <p class=" text-gray-500 text-center pt-1"> Weight : {parcelWeight} kg</p>
                                            <p class=" text-gray-500 text-center pt-1"> Expected delivery : {getExpectedDeliveryTime(deliveryPincode, "cargo")}</p>

                                        </div>
                                        <div class=" w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
                                            <div class="  pt-1">
                                                <p class="text-gray-800 text-center font-bold lg:text-xl">₹ {rate}  </p>
                                            </div>
                                        </div>
                                        <p class=" text-gray-500 pl-6 pt-1"> Note : this rate is without 12 % gst </p>

                                        <div class="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
                                            <button classs="lg:text-sm text-lg font-bold" onClick={handleProceed} >Proceed Now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div><p className=" text-[14px] mt-2"><strong>Note :</strong> package will pickup till 4pm only  <br></br> also pickup is not acceptable in sunday  but it will picked-up next working days</p></div>

                    </div>

                )}

            </div>
        </div>
    );
};

export default PickupCargo;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import cargoPinData from '../../../pincodes/cargo/cargoPin.json';

// const PickupCargo = () => {
//     const [pickupPincode, setPickupPincode] = useState("");
//     const [deliveryPincode, setDeliveryPincode] = useState("");
//     const [parcelWeight, setParcelWeight] = useState("");
//     const [rate, setRate] = useState(0);
//     const [pickupPincodeSuggestions, setPickupPincodeSuggestions] = useState("");
//     const [pickupSateSuggestions, setPickupSateSuggestions] = useState("");
//     const [deliverySateSuggestions, setDeliverySateSuggestions] = useState("");
//     const [deliveryPincodeSuggestions, setDeliveryPincodeSuggestions] = useState("");
//     const [pincodeData, setPincodeData] = useState([]);
//     const [isValidPin, setIsValidPin] = useState(true);
//     const [showSpinner, setShowSpinner] = useState(false);
//     const [cardsVisible, setCardsVisible] = useState(true);

//     const handleCardClose = () => {
//         setCardsVisible(false);
//         setShowSpinner(false)
//     };

//     const isRestOfIndiaPincode = (pincode) => {
//         return cargoPinData.some(item => item.Pincode === pincode && item["Facility State"] === "All India");
//     };
    
//     const isRegionalPincode = (pincode) => {
//         return cargoPinData.some(item => item.Pincode === pincode && (item["Facility State"] === "Maharashtra" || item["Facility State"] === "Goa" || item["Facility State"] === "Gujarat"));
//     };
    
//     const isNorthEastPincode = (pincode) => {
//         return cargoPinData.some(item => item.Pincode === pincode && item["Facility State"] === "North East");
//     };
//     const isOdaPin = (pincode) => {
//         const pinData = cargoPinData.find(item => item.Pincode === pincode);
//         return pinData ? pinData.Oda === true : false;
//     };
    

//     useEffect(() => {
//         const fetchData = (inputValue) => {
//             try {
//                 const suggestions = cargoPinData
//                     .filter((item) => item.Pincode && item.Pincode.includes(inputValue))
//                     .map((item) => item["Facility City"]);
    
//                 const suggestionsState = cargoPinData
//                     .filter((item) => item.Pincode && item.Pincode.includes(inputValue))
//                     .map((item) => item["Facility State"]);
    
//                 if (suggestions.length === 0) {
//                     setIsValidPin(false);
//                 } else {
//                     setIsValidPin(true);
//                 }
//                 setPickupPincodeSuggestions(suggestions);
//                 setPickupSateSuggestions(suggestionsState);
//             } catch (error) {
//                 console.error("Error fetching pincode suggestions:", error);
//             }
//         };
    
//         if (pickupPincode.length > 2) {
//             fetchData(pickupPincode);
//         } else {
//             setPickupPincodeSuggestions("");
//             setPickupSateSuggestions("");
    
//             setIsValidPin(true);
//         }
//     }, [pickupPincode]);
    
//     useEffect(() => {
//         const fetchData = (inputValue) => {
//             try {
//                 const suggestions = cargoPinData
//                     .filter((item) => item.Pincode && item.Pincode.includes(inputValue))
//                     .map((item) => item["Facility City"]);
    
//                 const suggestionsState = cargoPinData
//                     .filter((item) => item.Pincode && item.Pincode.includes(inputValue))
//                     .map((item) => item["Facility State"]);
    
//                 if (suggestions.length === 0) {
//                     setIsValidPin(false);
//                 } else {
//                     setIsValidPin(true);
//                 }
//                 setDeliveryPincodeSuggestions(suggestions);
//                 setDeliverySateSuggestions(suggestionsState);
//             } catch (error) {
//                 console.error("Error fetching delivery pincode suggestions:", error);
//             }
//         };
    
//         if (deliveryPincode.length > 2) {
//             fetchData(deliveryPincode);
//         } else {
//             setDeliveryPincodeSuggestions("");
//             setDeliverySateSuggestions("");
//             setIsValidPin(true);
//         }
//     }, [deliveryPincode]);
    
//     const getExpectedDeliveryTime = (deliveryPincode, pickupType) => {
//         const region = cargoPinData.find(item => item.Pincode === deliveryPincode)?.Type;
//         const deliveryTimeMap = {
//             regional: {
//                 cargo: "3 - 5 days",
//             },
//             rest_of_india: {
//                 cargo: "6 - 8 days",
//             },
//             north_east: {
//                 cargo: "8 - 10 days",
//             },
//         };
//         const expectedDeliveryTime = deliveryTimeMap[region]?.[pickupType] || "Default delivery time";
//         return expectedDeliveryTime;
//     };
    
//     const calculateRate1 = () => {
//         setShowSpinner(true);
//         setTimeout(() => {
//             setShowSpinner(false);
//         }, 1000);
//         if (pickupPincode && deliveryPincode && parcelWeight) {
//             const weight = parseFloat(parcelWeight);
//             if (!isNaN(weight) && weight > 0) {
//                 let calculatedRate;
//                 let odaPinAdditionalCharge = 500;
//                 const secweight = weight - 20;
//                 const reginal21 = 22 * secweight;
//                 const reginal50 = 20 * secweight;
//                 const reginal100 = 18 * secweight;
//                 const allIndia21 = 30 * secweight;
//                 const allIndai50 = 28 * secweight;
//                 const allIndai100 = 25 * secweight;
//                 const northeast21 = 45 * secweight;
//                 const northeast50 = 42 * secweight;
//                 const northeast100 = 40 * secweight;
//                 let region;
//                 const deliveryFacilityState = cargoPinData.find(item => item.Pincode === deliveryPincode)?.["Facility State"];
//                 const pickupFacilityState = cargoPinData.find(item => item.Pincode === pickupPincode)?.["Facility State"];
//                 if (deliveryFacilityState === "Maharashtra" || deliveryFacilityState === "Goa" || deliveryFacilityState === "Gujarat") {
//                     region = "regional";
//                 } else if (deliveryFacilityState === "All India") {
//                     region = "rest_of_india";
//                 } else if (deliveryFacilityState === "North East") {
//                     region = "north_east";
//                 } else {
//                     region = "default";
//                 }
//                 if (pickupFacilityState !== "Maharashtra") {
//                     odaPinAdditionalCharge += 500;
//                 }
//                 if (deliveryFacilityState !== "Maharashtra") {
//                     odaPinAdditionalCharge += 500;
//                 }
//                 if (region === "regional") {
//                     if (weight <= 20) {
//                         calculatedRate = 550;
//                     } else if (weight <= 50) {
//                         calculatedRate = 550 + reginal21;
//                     } else if (weight <= 100) {
//                         calculatedRate = 550 + reginal50;
//                     } else {
//                         window.alert("Please enter weight up to 100kg only");
//                         return;
//                     }
//                 } else if (region === "rest_of_india") {
//                     if (weight <= 20) {
//                         calculatedRate = 600;
//                     } else if (weight <= 50) {
//                         calculatedRate = 600 + allIndia21;
//                     } else if (weight <= 100) {
//                         calculatedRate = 600 + allIndai50;
//                     } else {
//                         window.alert("Please enter weight up to 100kg only");
//                         return;
//                     }
//                 } else if (region === "north_east") {
//                     if (weight <= 20) {
//                         calculatedRate = 850;
//                     } else if (weight <= 50) {
//                         calculatedRate = 850 + northeast21;
//                     } else if (weight <= 100) {
//                         calculatedRate = 850 + northeast50;
//                     } else {
//                         window.alert("Please enter weight up to 100kg only");
//                         return;
//                     }
//                 }
//                 if (isOdaPin(deliveryPincode)) {
//                     calculatedRate += odaPinAdditionalCharge;
//                 }
//                 setRate(calculatedRate.toFixed(0));
//             } else {
//                 setRate(0);
//             }
//         } else {
//             setRate(0);
//         }
//     };
    

//     const navigate = useNavigate();

//     const handleProceed = () => {
//         const pickupDetails = { pickupPincode, pickupPincodeSuggestions, pickupSateSuggestions };
//         const deliveryDetails = { deliveryPincode, deliveryPincodeSuggestions, deliverySateSuggestions };
//         const packageDetails = { parcelWeight };
//         const price = { rate }

//         navigate("/cargo-order", { state: { pickupDetails, deliveryDetails, packageDetails, price } });
//     };

//     return (
//         <div className=' bg-white     shadow-md  border-2 p-10 rounded-xl'>
//             <p className="text-red-500 text-center"> {isValidPin ? "" : "invalid pin code "}</p>

//             <div className='lg:grid lg:grid-cols-2 gap-4'>
//                 <div className="mb-4">
//                     <label className="block text-gray-500 text-sm font-bold mb-2">Pickup Pincode</label>

//                     <input
//                         className="shadow appearance-none  border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
//                         type="text"
//                         value={pickupPincode}
//                         onChange={(e) => setPickupPincode(e.target.value)}
//                     />
//                     {pickupPincode.length === 6 ? <p className="text-green-500 font-medium"> {pickupPincodeSuggestions} , {pickupSateSuggestions}</p> : ""}
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-500 text-sm font-bold mb-2">Delivery Pincode</label>
//                     <input
//                         type="text"
//                         className="shadow appearance-none  border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
//                         value={deliveryPincode}
//                         onChange={(e) => setDeliveryPincode(e.target.value)}
//                     />
//                     {deliveryPincode.length === 6 ? <p className="text-green-500 font-medium"> {deliveryPincodeSuggestions} , {deliverySateSuggestions}</p> : ""}
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-500 text-sm font-bold mb-2">Document Weight ( up to 100 kg)</label>
//                     <input
//                         type="number"
//                         step="0.01"
//                         className="shadow appearance-none  border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
//                         value={parcelWeight}
//                         onChange={(e) => setParcelWeight(e.target.value)}
//                     />
//                 </div>
//                 <button
//                     className="bg-blue-800 hover:bg-blue-900 hover:shadow-md text-white font-bold  px-10 py-4  mx-10 my-4 rounded"
//                     onClick={calculateRate1}
//                 >
//                     Calculate Rate
//                 </button>
//             </div>
//             <div className="mt-4">
//                 <div className=" justify-between mr-2 flex ">

//                     <p className="font-bold text-gray-500">Shipping Rate:</p>
//                     <div>
//                         <Link to='/Restricted-Item' className="font-bold text-red-600">Restricted Item*</Link>

//                     </div>

//                 </div>

//                 {showSpinner && (
//                     <div className="flex justify-center items-center mt-4">
//                         <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500 border-r-2 border-b-2 "></div>
//                     </div>
//                 )}
//                 {!showSpinner && cardsVisible && rate > 0 && (
//                     <div>
//                         <div>
//                             <div className="mt-6 ">
//                                 <button className="lg:text-sm px-6 py-2 border rounded-lg bg-red-500 text-white text-lg font-bold" onClick={handleCardClose}>
//                                     Close
//                                 </button>
//                             </div>
//                             <div className='lg:grid lg:grid-cols-2'>

//                                 <div class="w-80  mt-24 m-auto lg:mt-16 max-w-sm">
//                                     <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-36 object-cover" />
//                                     <div class="bg-white pb-10 shadow-md border rounded-xl">
//                                         <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">PickupKart Cargo</h2>
//                                         <div class=" m-auto">
//                                             <p class="text-center text-gray-500 pt-5">  {pickupPincode} {pickupPincodeSuggestions} -  {deliveryPincode} {deliveryPincodeSuggestions} </p>
//                                             <p class=" text-gray-500 text-center pt-1"> Weight : {parcelWeight} kg</p>
//                                             <p class=" text-gray-500 text-center pt-1"> Expected delivery : {getExpectedDeliveryTime(deliveryPincode, "cargo")}</p>

//                                         </div>
//                                         <div class=" w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
//                                             <div class="  pt-1">
//                                                 <p class="text-gray-800 text-center font-bold lg:text-xl">₹ {rate}  </p>
//                                             </div>
//                                         </div>
//                                         <p class=" text-gray-500 pl-6 pt-1"> Note : this rate is without 12 % gst </p>

//                                         <div class="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
//                                             <button classs="lg:text-sm text-lg font-bold" onClick={handleProceed} >Proceed Now</button>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                         <div><p className=" text-[14px] mt-2"><strong>Note :</strong> package will pickup till 4pm only  <br></br> also pickup is not acceptable in sunday  but it will picked-up next working days</p></div>

//                     </div>

//                 )}

//             </div>
//         </div>
//     );
// };

// export default PickupCargo;