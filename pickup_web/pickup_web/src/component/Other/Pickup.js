import React from "react";
import { useState,useNavigate } from "react";
import axios from "axios";
import cross from "../Images/cross.png";
import Location from "./Location";
import { Link } from "react-router-dom";
const Pickup = () =>{
    const[pickupaddress,setpickupaddress]=useState({
        pickupcontactname:"",
        pickupcontactno:"",
        pickupemail:"",
        pickuphouse:"",
        pickuparea:"",
        pickuppin:"",
        pickupcity:"",
        pickupstate:"",

      })
      
      const handleChange = (e)=>{
        setpickupaddress(prev=>({...prev,[e.target.name]:e.target.value}))
      };
      //const navigate= useNavigate();
      const handleClick = async e =>{
        e.preventDefault()
        try{
          //await axios.post("https://pickupkart.in/api/books",pickupaddress)
          //const id=book.id;
          var pickupDetail={pickupcontactname:pickupaddress.pickupcontactname,pickupcontactno:pickupaddress.pickupcontactno,
            pickupemail:pickupaddress.pickupemail,pickuphouse:pickupaddress.pickuphouse,pickuparea:pickupaddress.pickuparea,pickuppin:pickupaddress.pickuppin,pickupcity:pickupaddress.pickupcity,pickupstate:pickupaddress.pickupstate}
          window.sessionStorage.setItem("pickupDetail",JSON.stringify(pickupDetail));
          window.location="/Location";
          //navigate("../")
          alert("data updated ")
          
          
        }catch(err){
          console.log(err)
        }
    
      }
    return(
        // <!-- Pickup address -->
        <section className="w-full h-full">
            <div className="max-w-[650px] mx-auto h-full border rounded-lg pb-8">
                <div className="h-[45px] flex flex-row justify-between pl-5 pr-5 items-center rounded-t-md bg-[#EAB54F]">
                    <p className="text-white ">Add Pickup Address</p>
                    <img src={cross} alt="" onClick={()=>{
                        //navigate("../");
                        window.location="/Location";
                    }}/>
                </div>
    
                <div className="grid grid-rows-4 grid-cols-2 mb-[-15px]">
                    <div className="pl-6 pt-4">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">Contact Name</label>
    
                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                            
                            <input type="text" onChange={handleChange} placeholder="Ajay Namdev"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                                 transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                                  lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="pickupcontactname"/>
    
                        </form>
                    </div>
                    
                    <div className="pl-6 pt-4">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">Mobile Number</label>
    
                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                            
                            <input type="text" onChange={handleChange} placeholder="8823005847"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                                 transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                                  lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="pickupcontactno"/>
    
                        </form>
                    </div>
    
                    <div className="pl-6">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">Email Address</label>
    
                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                            
                            <input type="text" onChange={handleChange} placeholder="test@example.com"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                                 transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                                  lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="pickupemail"/>
    
                        </form>
                    </div>
    
                    <div className="pl-6">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">Flat , House no. , Apartment</label>
    
                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                            
                            <input type="text" onChange={handleChange} placeholder="201 karmakhedi"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                                 transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                                  lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="pickuphouse"/>
    
                        </form>
                    </div>
    
                    <div className="pl-6">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">Area Street</label>
    
                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                            
                            <input type="text" onChange={handleChange} placeholder="Ruthiyai Near Bridge"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                                 transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                                  lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="pickuparea"/>
    
                        </form>
                    </div>
    
                    <div className="pl-6">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">Pincode</label>
    
                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                            
                            <input type="text" onChange={handleChange} placeholder="473110"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                                 transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                                  lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="pickuppin"/>
    
                        </form>
                    </div>
    
                    <div className="pl-6">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">City</label>
    
                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                            
                            <input type="text" onChange={handleChange} placeholder="Guna"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0
                                 transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                                  lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="pickupcity"/>
    
                        </form>
                    </div>
    
                    <div className="pl-6">
                        <label className="text-xl font-ROBOTO max-[680px]:text-base" for="">State</label>
    
                        <form className="  pl-0 max-[475px]:pl-0 px-1 pt-2 mb-4">
                            
                            <input type="text" onChange={handleChange} placeholder="Madhya Pradesh"
                                className="pl-6 pr-14  py-3 max-[475px]:pr-0 max-[475px]:pl-2 max-[1024px]:pr-12 max-[680px]:pr-0 
                                 transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline- 
                                  lightBlue placeholder:text-base max-[680px]:placeholder:text-xs " name="pickupstate"/>
    
                        </form>
                    </div>
                  
                </div>
    
                <Link className="pl-20 mb-24 max-[1024px]:pl-44  max-[475px]:pl-40" to="/Location">
                    <button onClick={handleClick}
                    className="w-[460px]  max-[475px]:text-[13px] max-[475px]:w-[150px] max-[1024px]:w-[255px] max-[475px]:h-[40px] h-[49px] bg- 
                        [#FFFFFF] text-black text-[16px] font-semibold font-ROBOTO rounded-lg mt-5 bg-[#EDEDED]" >Add pickup address</button>
                
            </Link>
            </div>
        </section>
    );

};

export default Pickup;