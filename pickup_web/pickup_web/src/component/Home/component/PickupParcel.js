import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import air from '../../Images/airdelivery.jpg'
import maharastraData from '../../../pincodes/maharastra.json';
import goa_gujratData from '../../../pincodes/goa&gujrat.json';
import jammu_kashmir from '../../../pincodes/j&k.json';
import north_east from '../../../pincodes/north_east.json';
import allIndia from '../../../pincodes/pincode.json';


const PickupParcel = () => {
    const [pickupPincode, setPickupPincode] = useState("");
    const [deliveryPincode, setDeliveryPincode] = useState("");
    const [parcelWeight, setParcelWeight] = useState("");
    const [parcelVolume, setParcelVolume] = useState(0);
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [rate, setRate] = useState(0);
    const [volume_Rate, setvolume_Rate] = useState(0);
    const [volume_RateAir, setvolume_RateAir] = useState(0);
    const [cahargablWeight, setCahargablWeight] = useState(0);
    const [airRate, setairRate] = useState(0);
    const [pickupPincodeSuggestions, setPickupPincodeSuggestions] = useState("");
    const [pickupSateSuggestions, setPickupSateSuggestions] = useState("");
    const [deliverySateSuggestions, setDeliverySateSuggestions] = useState("");
    const [deliveryPincodeSuggestions, setDeliveryPincodeSuggestions] = useState("");
    const [sharedExpressRate, setSharedExpressRate] = useState(0);
    const [sharedAirRate, setSharedAirRate] = useState(0);

    const [pincodeData, setPincodeData] = useState([]);
    const [isValidPin, setIsValidPin] = useState(true); // New state for pin code validation
    const [showSpinner, setShowSpinner] = useState(false); // New state for spinner
    const [cardsVisible, setCardsVisible] = useState(true);
    const [errorMessage, setErrormessage] = useState("")

    const handleCardClose = () => {
        setCardsVisible(false);
        setShowSpinner(false)
        // Additional logic if needed
    };


    const isallIndia = (pincode) => {
        return allIndia.some((item) => item.roi_pin === pincode);
    };

    const isMaharastraPincode = (pincode) => {
        return maharastraData.some((item) => item.roi_pin === pincode);
    };

    const isgoa_gujratPincode = (pincode) => {
        return goa_gujratData.some((item) => item.roi_pin === pincode);
    };
    const isj_kpin = (pincode) => {
        return jammu_kashmir.some((item) => item.roi_pin === pincode);
    };
    const isnoth_epin = (pincode) => {
        return north_east.some((item) => item.roi_pin === pincode);
    };

    useEffect(() => {
        const fetchData = (inputValue) => {
            try {
                const data = require("../../../pincodes/pincode.json").concat(maharastraData, goa_gujratData, jammu_kashmir, north_east);
                setPincodeData(data);

                if (!pincodeData.some((item) => item.roi_pin === pickupPincode)) {
                    setErrormessage("Invalid pin code.");
                    return;
                }


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
                const data = require("../../../pincodes/pincode.json").concat(maharastraData, goa_gujratData, jammu_kashmir, north_east);
                setPincodeData(data);

                if (!pincodeData.some((item) => item.roi_pin === deliveryPincode)) {
                    setErrormessage("Invalid pin code.");
                    return;
                }

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
        // Define delivery time for different regions and pickup types
        const deliveryTimeMap = {
            maharashtra: {
                express: "2 - 3 days",
            },
            goa_gujrat: {
                express: "2 - 3 days",
            },
            AllIndia: {
                express: "4 - 7 days",
                air: "3 - 5 days",
            },
            jammu_kash: {
                air: "4 - 6 days",
            },

            noth_east: {
                air: "1 - 2 days",
            },
        };

        // Determine the region based on the delivery pin code
        let region = isMaharastraPincode(deliveryPincode) ? "maharashtra" : "default"
            && isgoa_gujratPincode(deliveryPincode) ? "goa_gujrat" : "default"
                && isallIndia(deliveryPincode) ? "AllIndia" : "default"
                    && isj_kpin(deliveryPincode) ? "jammu_kash" : "default"
                        && isnoth_epin(deliveryPincode) ? "noth_east" : "default";

        // Determine the expected delivery time based on the pickup type and region
        const expectedDeliveryTime = deliveryTimeMap[region]?.[pickupType] || "default delivery time";

        return expectedDeliveryTime;
    };


    const calculateRate1 = () => {

        setShowSpinner(true);

        setTimeout(() => {
            setShowSpinner(false);
        }, 1000);

        if (pickupPincode && deliveryPincode && parcelWeight && length && width && height) {
            const weight = parseFloat(parcelWeight);
            const volume = parseFloat(length) * parseFloat(width) * parseFloat(height);
            const parcelVolume = volume / 4750;

            if (!isNaN(weight) && weight > 0 && !isNaN(parcelVolume) && parcelVolume > 0) {
                let exprssRate;
                let airRate;
                let volume_RateExpress
                let volume_RateAir




                let mhr_weight1kg = 40;
                let goa_guj1kg = 60;
                let roi1kg = 80;
                let roi_air1kg = 180;
                let jk_ne1kg = 200;


                if (!isMaharastraPincode(pickupPincode)) {
                    window.alert("Invalid pickup pin code. Pickup pin code must be from Maharastra.");
                    return;
                }

                if (isallIndia(deliveryPincode)) {
                    if (weight > 1) {
                        exprssRate = 40 + weight * roi1kg;
                        airRate = weight * roi_air1kg;
                        volume_RateExpress = 40 + parcelVolume * roi1kg;
                        volume_RateAir = parcelVolume * roi_air1kg;

                    } else {
                        const baseRate = 120;
                        const newbaseRate = 180
                        const rateMultiplier = 1;
                        exprssRate = baseRate * rateMultiplier;
                        airRate = newbaseRate * rateMultiplier

                    }
                }



                if (isMaharastraPincode(deliveryPincode)) {
                    if (weight > 1) {
                        exprssRate = 20 + weight * mhr_weight1kg;
                        airRate = 180 + weight * mhr_weight1kg;

                        volume_RateExpress = 20 + parcelVolume * mhr_weight1kg;
                        volume_RateAir = 180 + parcelVolume * mhr_weight1kg;
                    } else if (weight <= 1) {
                        exprssRate = 60;
                        airRate = 180 + weight * mhr_weight1kg;

                        volume_RateExpress = 20 + parcelVolume * mhr_weight1kg;
                        volume_RateAir = 180 + parcelVolume * mhr_weight1kg;
                    } else {
                        window.alert("please enter weight up to 100 kg only")

                        // const baseRate = 60;
                        // const newbaseRate = 1
                        // const rateMultiplier = 1;
                        // exprssRate = 60;
                        // airRate = newbaseRate * rateMultiplier


                    }
                }
                if (isgoa_gujratPincode(deliveryPincode)) {
                    if (weight > 1) {
                        exprssRate = 20 + weight * goa_guj1kg;
                        airRate = weight * goa_guj1kg;


                        volume_RateExpress = 20 + parcelVolume * goa_guj1kg;
                        volume_RateAir = parcelVolume * goa_guj1kg;
                    } else if (weight <= 1) {
                        exprssRate = 80;
                        airRate = weight * goa_guj1kg;


                        volume_RateExpress = 20 + parcelVolume * goa_guj1kg;
                        volume_RateAir = parcelVolume * goa_guj1kg;
                    } else {

                        // const baseRate = 80;
                        // const newbaseRate = 1
                        // const rateMultiplier = 1;
                        // exprssRate = baseRate * rateMultiplier;
                        // airRate = newbaseRate * rateMultiplier
                    }
                }

                if (isj_kpin(deliveryPincode)) {
                    if (weight > 1) {
                        exprssRate = weight * jk_ne1kg;
                        airRate = weight * jk_ne1kg;


                        volume_RateExpress = parcelVolume * jk_ne1kg;
                        volume_RateAir = parcelVolume * jk_ne1kg;
                    } else if (weight <= 1) {
                        exprssRate = 200;
                        airRate = 200;


                        volume_RateExpress = parcelVolume * jk_ne1kg;
                        volume_RateAir = parcelVolume * jk_ne1kg;
                    } else {

                        // const baseRate = 200;
                        // const newbaseRate = 200
                        // const rateMultiplier = 1;
                        // exprssRate = baseRate * rateMultiplier;
                        // airRate = newbaseRate * rateMultiplier
                    }
                }

                if (isnoth_epin(deliveryPincode)) {
                    if (weight > 1) {
                        exprssRate = weight * jk_ne1kg;
                        airRate = weight * jk_ne1kg;


                        volume_RateExpress = parcelVolume * jk_ne1kg;
                        volume_RateAir = parcelVolume * jk_ne1kg;

                    } else if (weight <= 1) {
                        exprssRate = 200;
                        airRate = 200;


                        volume_RateExpress = parcelVolume * jk_ne1kg;
                        volume_RateAir = parcelVolume * jk_ne1kg;

                    } else {

                        const baseRate = 200;
                        const newbaseRate = 200
                        const rateMultiplier = 1;
                        exprssRate = baseRate * rateMultiplier;
                        airRate = newbaseRate * rateMultiplier
                    }
                }
                setCahargablWeight(parseFloat(parcelVolume) > parseFloat(parcelWeight) ? parcelVolume.toFixed(0) : parcelWeight)
                setSharedExpressRate(parseFloat(volume_Rate) > parseFloat(rate) ? volume_Rate : rate);
                setSharedAirRate(parseFloat(volume_RateAir) > parseFloat(airRate) ? volume_RateAir : airRate)
                setParcelVolume(parcelVolume)
                setvolume_Rate(volume_RateExpress);
                setvolume_RateAir(volume_RateAir);
                setRate(exprssRate.toFixed(0));
                setairRate(airRate.toFixed(0));
                setCardsVisible(true);

            } else {
                setRate(0);
                setairRate(0);
            }
        } else {
            setRate(0);
            setairRate(0);
        }
    };


    useEffect(() => {
        // Update sharedExpressRate when rate or volume_Rate changes
        setSharedExpressRate(parseFloat(volume_Rate) > parseFloat(rate) ? volume_Rate : rate);
    }, [rate, volume_Rate]);


    const navigate = useNavigate();

    const handleAirProceed = () => {
        const pickupDetails = { pickupPincode, pickupPincodeSuggestions, pickupSateSuggestions };
        const deliveryDetails = { deliveryPincode, deliveryPincodeSuggestions, deliverySateSuggestions };
        const packageDetails = { parcelWeight, length, width, height, cahargablWeight, parcelWeight };


        navigate("/form", { state: { pickupDetails, deliveryDetails, packageDetails, sharedAirRate, cahargablWeight } });
    };
    const handleExpressProceed = () => {
        const pickupDetails = { pickupPincode, pickupPincodeSuggestions, pickupSateSuggestions };
        const deliveryDetails = { deliveryPincode, deliveryPincodeSuggestions, deliverySateSuggestions };
        const packageDetails = { parcelWeight, length, width, height, cahargablWeight, parcelWeight };


        navigate("/form", { state: { pickupDetails, deliveryDetails, packageDetails, sharedExpressRate, cahargablWeight } });
    };

    return (
        <div className=' bg-white   shadow-md border-2 p-10 rounded-xl'>
            <p className="text-red-500 text-center"> {isValidPin ? "" : "invalid pin code "}</p>

            <div className='grid grid-cols-2 gap-4'>
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Pickup Pincode</label>

                    <input
                        className="shadow  appearance-none  border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                        type="text"

                        value={pickupPincode}
                        onChange={(e) => setPickupPincode(e.target.value)}
                    />
                    {pickupPincode.length <= 6 ? <p className="text-green-500 font-medium"> {pickupPincodeSuggestions} , {pickupSateSuggestions}</p> : <p className="text-red-500">{errorMessage}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Delivery Pincode</label>
                    <input
                        type="text"
                        className="shadow appearance-none  border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                        value={deliveryPincode}
                        onChange={(e) => setDeliveryPincode(e.target.value)}
                    />
                    {deliveryPincode.length <= 6 ? <p className="text-green-500 font-medium"> {deliveryPincodeSuggestions} , {deliverySateSuggestions}</p> : <p className="text-red-500">{errorMessage}</p>}
                </div>


            </div>
            <div className="grid lg:grid-cols-4  gap-2">
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Parcel Weight ( above 1 kg)</label>
                    <input
                        type="number"
                        step="0.01"
                        className="shadow appearance-none  border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                        value={parcelWeight}
                        onChange={(e) => setParcelWeight(e.target.value)}
                    />

                </div>
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">length (in cm)</label>
                    <input
                        type="number"
                        step="0.01"
                        className="shadow appearance-none  border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                    />

                </div>
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">width (in cm)</label>
                    <input
                        type="number"
                        step="0.01"
                        className="shadow appearance-none  border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                    />

                </div>
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">height (in cm)</label>
                    <input
                        type="number"
                        step="0.01"
                        className="shadow appearance-none  border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />

                </div>
            </div>
            <button
                className="bg-blue-800 hover:bg-blue-900 hover:shadow-md text-white py-3 px-6 font-bold  my-4 rounded"
                onClick={calculateRate1}
            >
                Calculate Rate
            </button>
            <div className="mt-4">
                <div className=" justify-between mr-2 flex ">

                    <p className="font-bold text-gray-500">Shipping Rate:</p>
                    <Link to='/Restricted-Item' className="font-bold text-red-600">Restricted Item*</Link>

                </div>
                {showSpinner && (
                    <div className="flex justify-center items-center mt-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500 border-r-2 border-b-2 "></div>
                    </div>
                )}

                {!showSpinner && cardsVisible && rate > 0 && airRate > 0 && (
                    <div>
                        <div>
                            <div className="mt-6 ">
                                <button className="lg:text-sm px-6 py-2 border rounded-lg bg-red-500 text-white text-lg font-bold" onClick={handleCardClose}>
                                    Close
                                </button>
                            </div>
                            <div className='lg:grid lg:grid-cols-2'>
                                {/* pickup air card */}
                                {pincodeData.length > 0 && !isMaharastraPincode(deliveryPincode) && !isgoa_gujratPincode(deliveryPincode) && (
                                    <div class="w-80 mt-24 m-auto lg:mt-16 max-w-sm">
                                        <img src={air} alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-36 object-cover" />
                                        <div class="bg-white pb-10 shadow-md border rounded-xl">
                                            <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">PickupKart Air</h2>
                                            <div class=" m-auto">
                                                <p class="text-center text-gray-500 pt-5"> {pickupPincode} {pickupPincodeSuggestions} -  {deliveryPincode} {deliveryPincodeSuggestions} </p>
                                                <p class=" text-gray-500 text-center pt-1"> Expected delivery : {getExpectedDeliveryTime(deliveryPincode, "air")}</p>
                                            </div>

                                            <div className="pt-1 text-center text-gray-500">
                                                Actual Weight: {parcelWeight} kg
                                            </div>
                                            <div className="pt-1 ml-16 grid grid-cols-4 text-gray-500">
                                                <div className="col-span-3">
                                                    Chargable Weight: {parseFloat(parcelVolume) > parseFloat(parcelWeight) ? parcelVolume.toFixed(0) : parcelWeight} kg
                                                </div>

                                                <div className="col-span-1 mt-1 relative inline-block group">
                                                    <svg
                                                        className="cursor-pointer text-blue-600"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="18"
                                                        height="18"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="10" />
                                                        <line x1="12" y1="16" x2="12" y2="12" />
                                                        <line x1="12" y1="8" x2="12" y2="8" />
                                                    </svg>
                                                    <span className="tooltip-text text-[10px] absolute bg-red-800 text-white text-center p-2 rounded opacity-0 invisible transition-opacity duration-300 -bottom-10 left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:visible">
                                                        if the volumetric weight is greter then actual weight so this will become your chargable weight and volumetric weight is calucated by l*w*h/4750
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
                                                <div className="pt-1">
                                                    <p className="text-gray-800 text-center font-bold lg:text-xl">
                                                        ₹ {parseFloat(volume_RateAir) > parseFloat(airRate) ? volume_RateAir.toFixed(0) : airRate}

                                                    </p>
                                                </div>
                                            </div>




                                            <div class="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
                                                <button classs="lg:text-sm text-lg font-bold" onClick={handleAirProceed} >Proceed Now</button>
                                            </div>
                                        </div>
                                    </div>

                                )}
                                {/* pickup express card */}

                                {pincodeData.length > 0 && !isj_kpin(deliveryPincode) && !isnoth_epin(deliveryPincode) && (
                                    <div class="w-80 mt-24 m-auto lg:mt-16 max-w-sm">
                                        <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-36 object-cover" />
                                        <div class="bg-white pb-10 shadow-md border rounded-xl">
                                            <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">PickupKart Express</h2>
                                            <div class=" m-auto">
                                                <p class="text-center text-gray-500 pt-5">  {pickupPincode} {pickupPincodeSuggestions} -  {deliveryPincode} {deliveryPincodeSuggestions} </p>
                                                <p class=" text-gray-500 text-center pt-1"> Expected delivery : {getExpectedDeliveryTime(deliveryPincode, "express")}</p>
                                            </div>
                                            <div className="pt-1 text-center text-gray-500">
                                                Actual Weight: {parcelWeight} kg
                                            </div>
                                            <div className="pt-1 ml-16 grid grid-cols-4 text-gray-500">
                                                <div className="col-span-3">
                                                    Chargable Weight: {parseFloat(parcelVolume) > parseFloat(parcelWeight) ? parcelVolume.toFixed(0) : parcelWeight} kg
                                                </div>
                                                <div className="col-span-1 mt-1 relative inline-block group">
                                                    <svg
                                                        className="cursor-pointer text-blue-600"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="18"
                                                        height="18"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <circle cx="12" cy="12" r="10" />
                                                        <line x1="12" y1="16" x2="12" y2="12" />
                                                        <line x1="12" y1="8" x2="12" y2="8" />
                                                    </svg>
                                                    <span className="tooltip-text text-[10px] absolute bg-red-800 text-white text-center p-2 rounded opacity-0 invisible transition-opacity duration-300 -bottom-10 left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:visible">
                                                        if the volumetric weight is greter then actual weight so this will become your chargable weight and volumetric weight is calucated by l*w*h/4750
                                                    </span>
                                                </div>
                                            </div>


                                            <div className="w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
                                                <div className="pt-1">
                                                    <p className="text-gray-800 text-center font-bold lg:text-xl">
                                                        ₹ {parseFloat(volume_Rate) > parseFloat(rate) ? volume_Rate.toFixed(0) : rate}
                                                    </p>
                                                </div>
                                            </div>



                                            <div class="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
                                                <button classs="lg:text-sm text-lg font-bold" onClick={handleExpressProceed} >Proceed Now</button>
                                            </div>
                                        </div>
                                        <div><p className=" text-[14px] mt-2"><strong>Note :</strong> package will pickup till 4pm only  <br></br> also pickup is not acceptable in sunday  but it will picked-up next working days</p></div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default PickupParcel;
