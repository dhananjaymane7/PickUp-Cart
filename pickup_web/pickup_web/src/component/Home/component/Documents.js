import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import air from '../../Images/airdelivery.jpg'
import maharastraData from '../../../pincodes/maharastra.json';
import goa_gujratData from '../../../pincodes/goa&gujrat.json';
import jammu_kashmir from '../../../pincodes/j&k.json';
import north_east from '../../../pincodes/north_east.json';
import allIndia from '../../../pincodes/pincode.json';


const Documents = () => {
    const [pickupPincode, setPickupPincode] = useState("");
    const [deliveryPincode, setDeliveryPincode] = useState("");
    const [parcelWeight, setParcelWeight] = useState("");
    const [rate, setRate] = useState(0);
    const [airRate, setairRate] = useState(0);
    const [pickupPincodeSuggestions, setPickupPincodeSuggestions] = useState("");
    const [pickupSateSuggestions, setPickupSateSuggestions] = useState("");
    const [deliverySateSuggestions, setDeliverySateSuggestions] = useState("");
    const [deliveryPincodeSuggestions, setDeliveryPincodeSuggestions] = useState("");
    const [pincodeData, setPincodeData] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);
    const [cardsVisible, setCardsVisible] = useState(true);
    const [errorMessage, setErrormessage] = useState("")


    const handleCardClose = () => {
        setCardsVisible(false);
        setShowSpinner(false)
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
        }
    }, [deliveryPincode]);

    const getExpectedDeliveryTime = (deliveryPincode, pickupType) => {
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

        let region = isMaharastraPincode(deliveryPincode) ? "maharashtra" : "default"
            && isgoa_gujratPincode(deliveryPincode) ? "goa_gujrat" : "default"
                && isallIndia(deliveryPincode) ? "AllIndia" : "default"
                    && isj_kpin(deliveryPincode) ? "jammu_kash" : "default"
                        && isnoth_epin(deliveryPincode) ? "noth_east" : "default";

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

                let exprssRate;
                let airRate;


                let mhr_weight250g = 50;
                let mhr_weight1kg = 60;
                let goa_guj250g = 60;
                let goa_guj1kg = 80;
                let roi250g = 100;
                let roi1kg = 120;
                let roi_air250g = 120;
                let roi_air1kg = 180;
                let jk_ne250g = 150;
                let jk_ne1kg = 200;

                if (!isMaharastraPincode(pickupPincode)) {
                    window.alert("Invalid pickup pin code. Pickup pin code must be from Maharastra.");
                    return;
                }

                if (!pincodeData.some((item) => item.roi_pin === deliveryPincode)) {

                    window.confirm(" invalid pin code please enter valid pin code" + handleCardClose());

                    return;
                }


                if (isallIndia(deliveryPincode)) {
                    if (weight <= 250) {
                        exprssRate = roi250g;
                        airRate = roi_air250g;
                    } else if (weight <= 1000) {
                        exprssRate = roi1kg;
                        airRate = roi_air1kg;
                    } else {
                        window.alert("please enter weight up to 1000 g only")

                        // const baseRate = 60;
                        // const newbaseRate = 180
                        // const rateMultiplier = 1;
                        // exprssRate = baseRate * rateMultiplier;
                        // airRate = newbaseRate * rateMultiplier
                    }
                }



                if (isMaharastraPincode(deliveryPincode)) {
                    if (weight <= 250) {
                        exprssRate = mhr_weight250g;
                        airRate = 120;
                    } else if (weight <= 1000) {
                        exprssRate = mhr_weight1kg;
                        airRate = 180;
                    }

                    else {
                        window.alert("please enter weight up to 1000 g only")

                        // const baseRate = 60;
                        // const newbaseRate = 180
                        // const rateMultiplier = 1;
                        // exprssRate = baseRate * rateMultiplier;
                        // airRate = newbaseRate * rateMultiplier
                    }
                }


                if (isgoa_gujratPincode(deliveryPincode)) {
                    if (weight <= 250) {
                        exprssRate = goa_guj250g;
                        airRate = 120;
                    } else if (weight <= 1000) {
                        exprssRate = goa_guj1kg;
                        airRate = 180;
                    } else {
                        window.alert("please enter weight up to 1000 g only")
                        // const baseRate = 60;
                        // const newbaseRate = 180
                        // const rateMultiplier = 1;
                        // exprssRate = baseRate * rateMultiplier;
                        // airRate = newbaseRate * rateMultiplier
                    }
                }

                if (isj_kpin(deliveryPincode)) {
                    if (weight <= 250) {
                        exprssRate = 50;
                        airRate = jk_ne250g;
                    } else if (weight <= 1000) {
                        exprssRate = 50;
                        airRate = jk_ne1kg;
                    } else {
                        window.alert("please enter weight up to 1000 g only")

                        // const baseRate = 60;
                        // const newbaseRate = 180
                        // const rateMultiplier = 1;
                        // exprssRate = baseRate * rateMultiplier;
                        // airRate = newbaseRate * rateMultiplier
                    }
                }
                if (isnoth_epin(deliveryPincode)) {
                    if (weight <= 250) {
                        exprssRate = 50;
                        airRate = jk_ne250g;
                    } else if (weight <= 1000) {
                        exprssRate = 50;
                        airRate = jk_ne1kg;
                    } else {
                        window.alert("please enter weight up to 1000 g only")

                        // const baseRate = 60;
                        // const newbaseRate = 180
                        // const rateMultiplier = 1;
                        // exprssRate = baseRate * rateMultiplier;
                        // airRate = newbaseRate * rateMultiplier
                    }
                }


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



    const navigate = useNavigate();



    const handleAirProceed = () => {
        const pickupDetails = { pickupPincode, pickupPincodeSuggestions, pickupSateSuggestions };
        const deliveryDetails = { deliveryPincode, deliveryPincodeSuggestions, deliverySateSuggestions };
        const packageDetails = { parcelWeight };
        const expectedDeliveryTime = getExpectedDeliveryTime(deliveryPincode, "air");


        navigate("/DocumentForm", { state: { pickupDetails, deliveryDetails, packageDetails, airRate, expectedDeliveryTime } });
    };
    const handleExpressProceed = () => {
        const pickupDetails = { pickupPincode, pickupPincodeSuggestions, pickupSateSuggestions };
        const deliveryDetails = { deliveryPincode, deliveryPincodeSuggestions, deliverySateSuggestions };
        const packageDetails = { parcelWeight };
        const expectedDeliveryTime = getExpectedDeliveryTime(deliveryPincode, "express");

        navigate("/DocumentForm", { state: { pickupDetails, deliveryDetails, packageDetails, rate, expectedDeliveryTime } });
    };


    return (
        <div className=' bg-white  shadow-md border-2 p-10 rounded-xl'>

            <div className='lg:grid lg:grid-cols-2 gap-4'>
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Pickup Pincode</label>
                    <input required
                        className="shadow appearance-none border-2 border-gray-300 text-gray-700 rounded w-full py-2 px-3 leading-tight focus:outline-blue-500 focus:shadow-outline"
                        type="text"
                        value={pickupPincode}
                        onChange={(e) => setPickupPincode(e.target.value)}
                    />

                    {pickupPincode.length <= 6 ? <p className="text-green-500 text-[13px] font-medium"> {pickupPincodeSuggestions} , {pickupSateSuggestions}</p> : <p className="text-red-500">{errorMessage}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Delivery Pincode</label>
                    <input required
                        type="text"
                        className="shadow appearance-none  border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                        value={deliveryPincode}
                        onChange={(e) => setDeliveryPincode(e.target.value)}
                    />
                    { }
                    {deliveryPincode.length <= 6 ? <p className="text-green-500 text-[13px] font-medium"> {deliveryPincodeSuggestions} , {deliverySateSuggestions}</p> : <p className="text-red-500">{errorMessage}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Document Weight ( up to 1000g)</label>
                    <input required
                        type="number"
                        step="0.01"
                        className="shadow appearance-none  border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                        value={parcelWeight}
                        onChange={(e) => setParcelWeight(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-800  hover:bg-blue-900 hover:shadow-md text-white font-bold px-10 py-4  mx-10 my-4 rounded"
                    onClick={calculateRate1}
                >
                    Calculate Rate
                </button>
            </div>
            <div className="mt-4   ">
                <div className=" justify-between mr-2 flex ">

                    <p className="font-bold text-gray-500">Shipping Rate:</p>
                    <Link to='/Restricted-Item' className="font-bold text-red-600">Restricted Item*</Link>

                </div>
                {/* Spinner */}
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
                                    <div class="w-80 mt-10 m-auto lg:mt-16 max-w-sm">
                                        <img src={air} alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-36 object-cover" />
                                        <div class="bg-white pb-10 shadow-md border rounded-xl">
                                            <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">PickupKart Air</h2>
                                            <div class=" m-auto">
                                                <p class="text-center text-gray-500 pt-5"> {pickupPincode} {pickupPincodeSuggestions} -  {deliveryPincode} {deliveryPincodeSuggestions} </p>
                                                <p class=" text-gray-500 text-center pt-1"> Weight : {parcelWeight} g</p>
                                                <p class=" text-gray-500 text-center pt-1"> Expected delivery : {getExpectedDeliveryTime(deliveryPincode, "air")}</p>
                                            </div>
                                            <div class=" w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
                                                <div class="  pt-1">
                                                    <p class="text-gray-800 text-center font-bold lg:text-xl">Amount : ₹ {airRate} </p>
                                                </div>
                                            </div>
                                            <div class="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
                                                <button classs="lg:text-sm text-lg font-bold" onClick={() => handleAirProceed(airRate)} >Proceed Now</button>
                                            </div>
                                        </div>
                                    </div>

                                )}
                                {/* pickup express card */}

                                {pincodeData.length > 0 && !isj_kpin(deliveryPincode) && !isnoth_epin(deliveryPincode) && (

                                    <div class="w-80 mt-10 m-auto lg:mt-10 max-w-sm">

                                        <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt="" class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-36 object-cover" />
                                        <div class="bg-white pb-10 shadow-md border rounded-xl">
                                            <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">PickupKart Express</h2>
                                            <div class=" m-auto">
                                                <p class="text-center text-gray-500 pt-5">  {pickupPincode} {pickupPincodeSuggestions} -  {deliveryPincode} {deliveryPincodeSuggestions} </p>
                                                <p class=" text-gray-500 text-center pt-1"> Weight : {parcelWeight} g</p>
                                                <p class=" text-gray-500 text-center pt-1"> Expected delivery : {getExpectedDeliveryTime(deliveryPincode, "express")}</p>
                                            </div>
                                            <div class=" w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
                                                <div class="  pt-1">
                                                    <p class="text-gray-800 text-center font-bold lg:text-xl">Amount : ₹ {rate} </p>
                                                </div>
                                            </div>
                                            <div class="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
                                                <button classs="lg:text-sm text-lg font-bold" onClick={() => handleExpressProceed(rate)} >Proceed Now</button>
                                            </div>
                                        </div>
                                        <div><p className=" text-[14px] mt-2"><strong>Note :</strong> package will pickup till 4pm After that it will go for  next day   also pickup is not acceptable in sunday  but it will picked-up next working days</p></div>
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

export default Documents;
