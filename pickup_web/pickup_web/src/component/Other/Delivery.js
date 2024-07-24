import React from "react";
import cross from "../Images/cross.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Delivery = () => {
    const [dropaddress, setdropaddress] = useState({
        dropcontactname: "",
        dropcontactno: "",
        dropemail: "",
        drophouse: "",
        droparea: "",
        droppin: "",
        dropcity: "",
        dropstate: "",

    })

    const handleChange = (e) => {
        setdropaddress(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const navigate = useNavigate();
    const handleClick = async e => {
        e.preventDefault()
        try {
            //await axios.post("https://pickupkart.in/api/books",dropaddress)
            //const id=book.id;
            var deliveryDetail = { dropcontactname: dropaddress.dropcontactname, dropcontactno: dropaddress.dropcontactno, dropemail: dropaddress.dropemail, drophouse: dropaddress.drophouse, droparea: dropaddress.droparea, droppin: dropaddress.droppin, dropcity: dropaddress.dropcity, dropstate: dropaddress.dropstate }
            window.sessionStorage.setItem("deliveryDetail", JSON.stringify(deliveryDetail));
            //window.location="/Location";
            navigate("/Location")
            alert("data updated ")


        } catch (err) {
            console.log(err)
        }

    }

    return (
        <section className="w-full h-full">
            <div className="max-w-[650px] mx-auto h-full border rounded-lg pb-8">
                <div className="h-[45px] flex flex-row justify-between pl-5 pr-5 items-center rounded-t-md bg-[#EAB54F]">
                    <p className="text-white ">Add delivery Address</p>
                    <img src={cross} alt="" onClick={() => {
                        navigate("/Location");
                        //window.location="./Location";
                    }} />
                </div>

                <div className="grid grid-rows-4 grid-cols-2 mb-[-15px]">
                    <div className="pl-6 pt-4">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">Contact Name</label>

                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">

                            <input type="text" onChange={handleChange} placeholder="Ajay Namdev"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="dropcontactname" />

                        </form>
                    </div>

                    <div className="pl-6 pt-4">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">Mobile Number</label>

                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">

                            <input type="text" onChange={handleChange} placeholder="8823005847"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="dropcontactno" />

                        </form>
                    </div>

                    <div className="pl-6">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">Email Address</label>

                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">

                            <input type="text" onChange={handleChange} placeholder="test@example.com"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="dropemail" />

                        </form>
                    </div>

                    <div className="pl-6">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">Flat , House no. , Apartment</label>

                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">

                            <input type="text" onChange={handleChange} placeholder="201 karmakhedi"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="drophouse" />

                        </form>
                    </div>

                    <div className="pl-6">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">Area Street</label>

                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">

                            <input type="text" onChange={handleChange} placeholder="Ruthiyai Near Bridge"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="droparea" />

                        </form>
                    </div>

                    <div className="pl-6">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">Pincode</label>

                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">

                            <input type="text" onChange={handleChange} placeholder="473110"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="droppin" />

                        </form>
                    </div>

                    <div className="pl-6">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">City</label>

                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">

                            <input type="text" onChange={handleChange} placeholder="Guna"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="dropcity" />

                        </form>
                    </div>

                    <div className="pl-6">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">State</label>

                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">

                            <input type="text" onChange={handleChange} placeholder="Madhya Pradesh"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0 
                             transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                              lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="dropstate" />

                        </form>
                    </div>

                </div>

                <Link className="pl-20 mb-24 max-[1024px]:pl-44  max-[475px]:pl-40" to="/Location">
                    <button onClick={handleClick}
                        className="w-[460px]  max-[475px]:text-[13px] max-[475px]:w-[150px] max-[1024px]:w-[255px] max-[475px]:h-[40px] h-[49px] bg- 
                                     [#FFFFFF] text-black text-[16px] font-semibold font-ROBOTO rounded-lg mt-5 bg-[#EDEDED]">Add delivery address</button>

                </Link>
            </div>
        </section>
    );

};

export default Delivery;