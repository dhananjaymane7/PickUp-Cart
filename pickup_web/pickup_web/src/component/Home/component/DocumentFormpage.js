import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const DocumentFormpage = () => {
    // const [submitting, setDisplayedRate] = useState("rate");
    const [showSpinner, setShowSpinner] = useState(false); // New state for spinner

    const location = useLocation();
    const { pickupDetails, deliveryDetails, packageDetails, rate , airRate ,expectedDeliveryTime} = location.state || {};

    const [formData, setFormData] = useState({
        pname: "",
        pnumber: "",
        pemail: "",
        paddress: "",
        ppin: pickupDetails?.pickupPincode || "",
        pcity: pickupDetails?.pickupPincodeSuggestions || "",
        pstate: pickupDetails?.pickupSateSuggestions || "",
        dname: "",
        dnumber: "",
        demail: "",
        daddress: "",
        dpin: deliveryDetails?.deliveryPincode || "",
        dcity: deliveryDetails?.deliveryPincodeSuggestions || "",
        dstate: deliveryDetails?.deliverySateSuggestions || "",
        packageType: "documet",
        shiptype: rate > 0 ? " Pickup Express" : " Pickup Air" || "",
        weight: packageDetails?.parcelWeight + " "+ "g" || "",
        // length: "",
        // width:"",
        // height:  "",
        ChargableWeight:"" ,

        price: rate > 0 ? rate : airRate || "",
        orderDate: new Date().toISOString().slice(0, 10),
        trackingNo:"",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setShowSpinner(true);
            const response = await axios.post("http://localhost:7000/order/postBooking", formData);
               setShowSpinner(false);
            window.alert("order create successfull")

            console.log(response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setShowSpinner(false);
        }
    };

    return (
        <div className="container  bg-slate-100 ">
            <div className="  bg-white  w-full ">  <img src="./pick.png" alt="" class=" w-52 py-1 pl-6" /></div>
            <h2 className="text-2xl   text-center pt-8 font-bold text-blue-900 mb-4">Proceed Order</h2>

            <form className="lg:grid  pt-6 pb-10 lg:mx-20 gap-8 lg:grid-cols-3" onSubmit={handleSubmit}>

                <div class="max-w-xl rounded-lg shadow-lg bg-white p-8 mx-auto">
                    <div className="">
                        <h2 className="text-2xl font-bold mb-4"> Pickup details</h2>
                        <div className="md:grid md:grid-cols-2 gap-x-4">

                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" value={formData.pname}
                                    onChange={(e) => setFormData({ ...formData, pname: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">pickup person name</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" value={formData.pemail}
                                    onChange={(e) => setFormData({ ...formData, pemail: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email </label>
                            </div>

                            <div class="relative z-0 w-full mb-5 group">
                                <input type="tel"
                                    value={formData.pnumber}
                                    onChange={(e) => setFormData({ ...formData, pnumber: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">mobile number</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" value={formData.ppin} disabled
                                    onChange={(e) => setFormData({ ...formData, ppin: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pickup pincode</label>
                            </div>

                            <div class="relative z-0 w-full mb-5 group">
                                <textarea type="text" value={formData.paddress}
                                    onChange={(e) => setFormData({ ...formData, paddress: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">full address</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" value={formData.pstate} disabled
                                    onChange={(e) => setFormData({ ...formData, pstate: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">state</label>
                            </div>

                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" value={formData.pcity} disabled
                                    onChange={(e) => setFormData({ ...formData, pcity: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">city</label>
                            </div>

                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4"> Delivery details</h2>
                        <div className="md:grid md:grid-cols-2 gap-x-4">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" value={formData.dname}
                                    onChange={(e) => setFormData({ ...formData, dname: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">delivery person name</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" value={formData.demail}
                                    onChange={(e) => setFormData({ ...formData, demail: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email </label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="tel" value={formData.dnumber}
                                    onChange={(e) => setFormData({ ...formData, dnumber: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">mobile number</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" value={formData.dpin} disabled
                                    onChange={(e) => setFormData({ ...formData, dpin: e.target.value })} id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">delivery pincode</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <textarea type="text" value={formData.daddress}
                                    onChange={(e) => setFormData({ ...formData, daddress: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">full address</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" value={formData.dstate} disabled
                                    onChange={(e) => setFormData({ ...formData, dstate: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">state</label>
                            </div>

                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="text" value={formData.dcity} disabled
                                        onChange={(e) => setFormData({ ...formData, dcity: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">city</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full px-8 sm:mt-6 lg:mt-0 pt-8 max-w-xl rounded-lg shadow-lg p-8 mx-auto" >
                    <h2 className="text-2xl  font-bold mb-4"> Parcel details</h2>
                    <div className=" ">

                        <div class="relative z-0 w-full mb-5 group">
                            <input type="text" value={formData.packageType}
                                onChange={(e) => setFormData({ ...formData, packageType: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Package type</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="text" value={formData.shiptype}
                                onChange={(e) => setFormData({ ...formData, shiptype: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Shipping type</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input value={formData.weight}
                                onChange={(e) => setFormData({ ...formData, weight: e.target.value })} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Weight (in kg) </label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No. of package</label>
                        </div>
                        {/* <div class="relative z-0 w-full mb-5 group">
                            <input type="text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Length (in cm)</label>
                        </div> */}
                        <div class="grid md:grid-cols-2 md:gap-6">
                            {/* <div class="relative z-0 w-full mb-5 group">
                                <input type="text"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">height (in cm)</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text"   class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">width (in cm)</label>
                            </div> */}
                        </div>
                    </div>
                    {showSpinner ?
                        <div className="flex justify-center items-center mt-4">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500 border-r-2 border-b-2 "></div>
                        </div>
                        : <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>}

                </div>
                <div className="max-w-xl  sm:mt-6 lg:mt-0  mx-auto">
                    <div class="  shadow-md border lg:mt-0  bg-white rounded-xl  ">
                        <div class=" pb-10 ">
                            <img src="./pick.png" alt="" class="w-40 pt-3 pl-6" />
                            <h2 class="pl-10  text-gray-800 text-2xl font-bold pt-2">Order Summary</h2>
                            <div class="  px-10">
                                <p class=" text-gray-500 pt-5"><strong>Pickup Address : </strong> {pickupDetails?.pickupPincode} , {pickupDetails?.pickupPincodeSuggestions} ,{pickupDetails?.pickupSateSuggestions} </p>
                                <p class=" text-gray-500 pt-1">  <strong>Delivery Address :</strong> {deliveryDetails?.deliveryPincode} , {deliveryDetails?.deliveryPincodeSuggestions} , {deliveryDetails?.deliverySateSuggestions} </p>
                                <p class=" text-gray-500 pt-1">  <strong>Package Type :</strong> Documet</p>
                                <p class=" text-gray-500 pt-1">  <strong>Delivery Time :</strong> {expectedDeliveryTime} </p>
                            </div>
                            <div class=" w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
                                <div class="  pt-1">
                                    <p class="text-gray-800 text-center font-bold lg:text-xl"> Amount :
                                        ₹   {rate > 0 ? rate : airRate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default DocumentFormpage;


