import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RateDisplay = () => {


    // states
    const navigate = useNavigate();

    const [address, setaddress] = useState({
        pickuplocation: "",
        dropedlocation: "",
        name: "",
        address: "",
        mobile: "",
        dileverypin: ""

    })

    const [rateCal, setrateCal] = useState({
        origin: "",
        destination: "",
        shiptype: "",
        weight: "",
        unit: ""
    })

    const [longData, setlongData] = useState({
        pickuplocation: "",
        dropedlocation: "",
        youremail: "",
        yourphone: ""
    })

    // state end

    const postalUrl = "https://api.postalpincode.in/pincode/"
    const pincodeUrl = `${postalUrl}${address.pickuplocation}`
    const [locate, setLocate] = useState();
    const [City, setCity] = useState();

    useEffect(() => {
        axios.get(pincodeUrl)
            .then((res) => {
                const { data } = res;
                setLocate(data[0].PostOffice[0].Division)

            })
            .catch((error) => {
                console.error(error);
            })
    }, [pincodeUrl])



    // stateUpdate

    const handleChange = (e) => {
        setaddress(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleChange1 = (e) => {
        setrateCal(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };
    // stateUpdate end



    // rate calculator
    if (rateCal.destination == 1) {
        if (rateCal.shiptype == 1) {
            if (rateCal.unit == 1) {
                if (rateCal.weight < 10) {
                    var price = 40 * rateCal.weight;
                } else if (rateCal.weight >= 10) {
                    var price = 35 * rateCal.weight;
                } else {
                    var price = "Invalid Data"
                }
            } else if (rateCal.unit == 2) {
                if (rateCal.weight < 250) {
                    var price = 40;
                } else if (rateCal.weight >= 250) {
                    var price = 40 * (rateCal.weight / 1000);
                } else {
                    var price = "Invalid Data"
                }
            }
        } else if (rateCal.shiptype == 2) {
            if (rateCal.unit == 1) {
                if (rateCal.weight < 1) {
                    var price = 50;
                } else if (rateCal.weight >= 1) {
                    var price = 70;
                } else {
                    var price = "Invalid Data"
                }
            } else if (rateCal.unit == 2) {
                if (rateCal.weight < 250) {
                    var price = 50;
                } else if (rateCal.weight >= 250) {
                    var price = 70;
                } else {
                    var price = "Invalid Data"
                }
            }
        } else {
            var price = "Invalid Data"
        }
    } else if (rateCal.destination == 2) {
        if (rateCal.shiptype == 1) {
            if (rateCal.unit == 1) {
                if (rateCal.weight < 10) {
                    var price = 70 * rateCal.weight;
                } else if (rateCal.weight >= 10) {
                    var price = 60 * rateCal.weight;
                } else {
                    var price = "Invalid Data"
                }
            } else if (rateCal.unit == 2) {
                if (rateCal.weight < 250) {
                    var price = 70;
                } else if (rateCal.weight >= 250) {
                    var price = 60 * (rateCal.weight / 1000);
                } else {
                    var price = "Invalid Data"
                }
            }
        } else if (rateCal.shiptype == 2) {
            if (rateCal.unit == 1) {
                if (rateCal.weight < 1) {
                    var price = 60;
                } else if (rateCal.weight >= 1) {
                    var price = 80;
                } else {
                    var price = "Invalid Data"
                }
            } else if (rateCal.unit == 2) {
                if (rateCal.weight < 250) {
                    var price = 60;
                } else if (rateCal.weight >= 250) {
                    var price = 80;
                } else {
                    var price = "Invalid Data"
                }
            }
        } else {
            var price = "Invalid Data"
        }
    } else if (rateCal.destination == 3) {
        if (rateCal.shiptype == 1) {
            if (rateCal.unit == 1) {
                if (rateCal.weight < 10) {
                    var price = 80 * rateCal.weight;
                } else if (rateCal.weight >= 10) {
                    var price = 75 * rateCal.weight;
                } else {
                    var price = "Invalid Data"
                }
            } else if (rateCal.unit == 2) {
                if (rateCal.weight < 250) {
                    rateCal.price = 80;
                } else if (rateCal.weight >= 250) {
                    var price = 70 * (rateCal.weight / 1000);
                } else {
                    var price = "Invalid Data"
                }
            }
        } else if (rateCal.shiptype == 2) {
            if (rateCal.unit == 1) {
                if (rateCal.weight < 1) {
                    var price = 80;
                } else if (rateCal.weight >= 1) {
                    var price = 100;
                } else {
                    var price = "Invalid Data"
                }
            } else if (rateCal.unit == 2) {
                if (rateCal.weight < 250) {
                    var price = 80;
                } else if (rateCal.weight >= 250) {
                    var price = 100;
                } else {
                    var price = "Invalid Data"
                }
            }
        } else {
            var price = "Invalid Data"
        }
    } else {
        var price = "Invalid Data"
    }
    // rate calculator end

    var p1 = price; //check where it is used



    // trial
    const servicePin = []
    for (let i = 400001; i <= 442906; i++) {
        servicePin.push(i);
    }

    // trial end
// post request API
    const postUrl="https://pickupkart.in/api/postBooking";
    
    const handleClick =() => {
    
            const detail = {
                pickuplocation: address.pickuplocation,
                dropedlocation: address.dropedlocation,
                name: address.name,
                address: address.address,
                mobile: Number(address.mobile),
                dileverypin: Number(address.dropedlocation)
            };

            const index = servicePin.findIndex(num => num === Number(address.dropedlocation));
            if(index!==-1){
            axios.post(postUrl,detail)
            .then(response => {
            //   console.log('Response:', response.data);
              alert("Data Submitted Successfully.");
            })
            .catch(error => {
              console.error('Error:', error);
            });
        }
        else{
            alert("Our service is not available at the pickup and drop location.");
        }
        
    };
// post request API end





   




    //calculator

    const [dataa, setdata] = useState([]);

    const rate = (e) => {
        setdata(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }
    const clickRate = () => {
        var state = dataa.state;
        var cate = dataa.cate;
        var weight = dataa.weight;

    }


    // rate and pickup mouseover
    const handleMouseover = () => {

        let mailForm = document.querySelector(".yourEmail");
        let rateCalculator = document.querySelector(".rateCalculator");

        rateCalculator.classList.add("active");
    }

    const handleHide = () => {
        let rateCalculator = document.querySelector(".rateCalculator");

        rateCalculator.classList.remove("active");
        let createPickupBtn = document.querySelector(".createPickupBtn");
        createPickupBtn.classList.remove("active");
    }



    return (
        <>
            {/* <!-- Hero-1 section --> */}
            <section onClick={handleHide} className="w-full min-h-[650px] scale-x-110 bg-[url('')] bg-contain bg-no-repeat relative img3">
                <div className="flex flex-col gap-24 w-[60%] absolute top-32 left-[22%] max-[900px]:top-13 max-[900px]:left-[15%] max-[768px]:top-10 max-[768px]:left-[15%]">
                    <div className=" flex flex-col gap-16 max-[900px]:gap-8 max-[768px]:gap-5  ">
                        <p className="font-ROBOTO text-[48px] font-bold text-white max-[900px]:text-[32px] max-[768px]:text-[20px] ">
                            We Provide Best Mover <br /> Packer Services
                        </p>
                        <div className="flex flex-row gap-6">
                            <button className="w-[155px] h-[44px] bg-[#EAB54F] text-white text-[16px] rounded-md max-[900px]:text-[13px] max-[900px]:w-[130px] max-[900px]:h-[40px] max-[768px]:text-[9px] max-[768px]:w-[80px] max-[768px]:h-[30px]">Know
                                More</button>
                            <button className="w-[155px] h-[44px] bg-white text-black text-[16px] rounded-md max-[900px]:text-[13px] max-[900px]:w-[130px] max-[900px]:h-[40px] max-[768px]:text-[9px] max-[768px]:w-[80px] max-[768px]:h-[30px]">Contact
                                Us</button>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- form section --> */}
            <section className="relative w-full h-full ">
                <div className="rateCalculator shadow-xl ml-0 absolute -top-[30rem] left-[20%] hidden px-3 z-50 w-[400px] max-[900px]:top-[-38rem] max-[900px]:left-[16%] max-[768px]:left-[6%] max-[475px]:left-[0%] flex-col content-center gap-2 h-[415px] pb-36 rounded-lg bg-white">

                    <p className="bg-[#EAB54F] text-xl font-ROBOTO pl-5 rounded-xl">Rate Calculator</p>


                    <div className="grid grid-rows-1 grid-cols-2 pt-1 gap-y-3 max-[475px]:gap-0 max-[475px]:pl-0  pl-1">
                        <form className=" bg-white pl-2 max-[475px]:pl-0 px-1  mb-4">
                            <label htmlFor="Origin" className="text-lg font-ROBOTO">Origin</label>
                            <input placeholder="Pickup Location" name="origin" onChange={handleChange1} defaultValue={locate}
                                className="pl-2 mt-1 pr-0 py-2 transition-all duration-200 border border-gray-200 shadow-md rounded-sm font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs " />
                        </form>
                        <form className=" bg-white pl-1 max-[475px]:pl-0  mb-4">
                            <label htmlFor="Origin" className="text-lg font-ROBOTO">Destination</label>
                            <select name="destination" onChange={handleChange1}
                                className="pl-2 mt-1 pr-0 py-2 w-44 max-[475px]:pl-2 max-[1024px]:pr-0 transition-all duration-200 border border-gray-200 shadow-md rounded-sm font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs "

                            // className="mt-2 border border-black w-44">
                            >
                                <option value="1">Select Droped Location</option>
                                <option value="2">Maharashtra</option>
                                <option value="3">Goa/Gujrat/Vidharbha/Daman</option>
                                <option value="4">Rest Of India</option>
                            </select>
                        </form>

                    </div>

                    <div className="grid grid-rows-1 grid-cols-3 pt-1 gap-y-3 max-[475px]:gap-0 max-[475px]:pl-0  pl-3">
                        <div>
                            <label htmlFor="" className="text-lg font-ROBOTO">Shipment Type</label>
                            <select name="shiptype" id="" onChange={handleChange1} className="mt-2 border border-black w-[120px]">
                                <option className="" value="0">Select Type</option>
                                <option value="1">Parcel</option>
                                <option value="2">Document</option>

                            </select>
                        </div>


                        <div>
                            <label htmlFor="" className="text-lg font-ROBOTO">Weight</label><br />
                            <input type="text" name="weight" onChange={handleChange1} id="" placeholder="Enter Weight" className="mt-2 border border-black w-[120px]" />

                        </div>

                        <div>
                            <label htmlFor="" className="text-lg font-ROBOTO">Unit</label><br />
                            <select name="unit" onChange={handleChange1} id="" className="mt-2 border border-black w-[50px]">
                                <option className="" value="0">unit</option>
                                <option value="1">Kg</option>
                                <option value="2">Gram</option>

                            </select>
                        </div>


                    </div>

                    <button
                        className="w-[133px] max-[475px]:text-[13px] max-[475px]:w-[120px] max-[475px]:h-[40px] h-[40px] bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO ml-[32%] mt-5 rounded-lg mb-4">Calculated Rate</button>

                    <div className="w-[94%] h-8 border ml-3 pl-1 mb-3">Pickup standered by road:<>{p1}</></div>

                    <div className="w-[94%] h-8 border ml-3 pl-1">Pickup standered by road:<>{p1}</></div>

                    <button onClick={() => {

                        let createPickupBtn = document.querySelector(".createPickupBtn");
                        createPickupBtn.classList.toggle("active");
                    }}
                        className="w-[133px] createPickup1 max-[475px]:text-[13px] max-[475px]:w-[140px] max-[475px]:h-[40px] h-[30px] bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO ml-[32%] mt-5 rounded-lg mb-4">Create a Pickup</button>


                </div>

                <div className="createPickupBtn shadow-xl ml-0 absolute -top-[30rem] right-[22%] hidden px-3 z-50 w-[400px] max-[900px]:top-[-38rem] max-[900px]:left-[30%] max-[768px]:left-[24%] max-[475px]:left-[0%] flex-col content-center gap-1 h-[400px] pb-36 rounded-lg bg-white ">


                    <h1 className="text-[20px] font-ROBOTO font-semibold max-[475px]:text-[14px] mt-2">Create Pickup</h1>
                    <form className=" bg-white pl-2 max-[475px]:pl-0 px-1  mb-4">
                        <input placeholder="Name" onChange={handleChange} name="name"
                            className="pl-2 mt-1 pr-36 py-1 transition-all duration-200 border border-gray-200 shadow-md rounded-sm font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs " />
                    </form>
                    <form className=" bg-white pl-2 max-[475px]:pl-0 px-1  mb-4">
                        <input placeholder="Address" onChange={handleChange} name="address"
                            className="pl-2 mt-1 pr-36 py-1 transition-all duration-200 border border-gray-200 shadow-md rounded-sm font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs " />
                    </form>
                    <form className=" bg-white pl-2 max-[475px]:pl-0 px-1  mb-4">
                        <input placeholder="Mobile" onChange={handleChange} name="mobile"
                            className="pl-2 mt-1 pr-36 py-1 transition-all duration-200 border border-gray-200 shadow-md rounded-sm font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs " />
                    </form>
                    <form className=" bg-white pl-2 max-[475px]:pl-0 px-1  mb-4">
                        <input placeholder="Delivery Pincode" onChange={handleChange} name="dileverypin" defaultValue={address.dropedlocation}
                            className="pl-2 mt-1 pr-36 py-1 transition-all duration-200 border border-gray-200 shadow-md rounded-sm font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs " />
                    </form>


                    <button onClick={handleClick}
                        className="w-[133px] max-[475px]:text-[13px] mainDone max-[475px]:w-[140px] max-[475px]:h-[40px] py-2 bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO ml-[32%] mt-5 rounded-lg mb-4">Done</button>


                </div>

                <div className="bg-white  rounded-md shadow-lg pb-7 lg:mx-auto w-[60%] absolute left-[20%] top-[-200px] max-[900px]:top-[-320px] max-[768px]:w-full max-[768px]:relative  max-[768px]:left-[0%] max-[600px]:-mt-[80px] max-[475px]:-mt-[120px]">
                    <div className="flex flex-row items-center gap-4">
                        <div className="w-[45px] h-[7px] bg-[#EAB54F] max-[475px]:w-[30px] max-[475px]:h-[5px]"></div>
                        <p className="text-[20px] font-ROBOTO font-semibold max-[475px]:text-[14px]">Get quote</p>
                        <p className="pl-8 font-ROBOTO text-[15px] opacity-50 max-[475px]:text-[12px]">Send from your location, to anywhere in the
                            country</p>
                    </div>


                    <div className="grid grid-rows-2 grid-cols-2 pt-3 gap-y-3 max-[475px]:gap-0 max-[475px]:pl-0  pl-3">




                        <form className=" bg-white pl-2 max-[475px]:pl-0 px-1 mt-2 mb-4">
                            <input type="text" onChange={handleChange} placeholder="Pickup Location(Pincode)"
                                className="pl-6 pr-32 py-2 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-0 max-[1280px]:pr-20 transition-all duration-200 border border-gray-200 shadow-md rounded-sm font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs " name="pickuplocation" />
                        </form>
                        <form className=" bg-white pl-2 max-[475px]:pl-0 px-1 mt-2 mb-4">
                            <input type="text" onChange={handleChange} placeholder="Drop Location(Pincode)"
                                className="pl-6 pr-32 py-2 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-0 max-[1280px]:pr-20 transition-all duration-200 border border-gray-200 shadow-md rounded-sm font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs  " name="dropedlocation" />
                        </form>
                        <form className="rate bg-white px-1 pl-2 max-[475px]:pl-0 mt-2 mb-4" >
                            <input type="button" value="Rate Calculater"

                                onMouseOver={handleMouseover} onClick={handleHide}
                                className="pl-6 pr-[12.7rem] py-2 max-[475px]:pr-[6.3rem] max-[475px]:py-3 max-[475px]:pl-2 max-[1024px]:pr-[4.6rem] max-[1280px]:pr-[9.6rem] transition-all duration-200 border border-gray-200 shadow-md rounded-sm font-mullish outline-lightBlue placeholder:text-sm  max-[475px]:text-xs"

                            />
                        </form>

                        <form className=" bg-white px-1 pl-2 max-[475px]:pl-0 mt-2 mb-4">
                            <input type="button" value="Create a pickup" onMouseOver={handleMouseover} onClick={handleHide}
                                className="pl-6 pr-[12.7rem] py-2 max-[475px]:pr-[6.3rem] max-[475px]:py-3 max-[475px]:pl-2 max-[1024px]:pr-[4.6rem] max-[1280px]:pr-[9.6rem] transition-all duration-200 border border-gray-200 shadow-md rounded-sm font-mullish outline-lightBlue   max-[475px]:text-xs"
                                name="yourphone" />
                        </form>


                    </div>
                    <div className="max-[1024px]:ml-[-30px]" >

                        <button onClick={handleClick}
                            className="w-[223px] max-[475px]:text-[13px] max-[475px]:w-[150px] max-[475px]:h-[40px] h-[49px] bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO ml-[34%] mt-5">Get
                            quote</button>

                    </div>

                </div>

            </section>
        </>
    )


}
export default RateDisplay;