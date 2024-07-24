import React from "react";
import { Link } from "react-router-dom";

import twitterlogo from "./Images/twitter-logo.png";
import pickupkart1 from "./Images/pick.png";
import fblogo from "./Images/fb-logo.png";
import instalogo from "./Images/insta-logo.png";
import icons8hamburger from "./Images/icons8-hamburger-menu-24.png";
import { Menu } from "@mui/material";
import {IconButton} from "@mui/material";

const Nav = () => {
    return (
        <>
            {/* <!-- navbar --> */}
            <section className="w-full h-full bg-[#FFFBE6]">
                <div className="h-[91px] w-[93%] mx-auto flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-6 items-center max-[640px]:gap-2">
                        <Link to={'/'}> <img src={pickupkart1} className="max-[640px]:-ml-5 -ml-3 max-[768px]:w-[160px]" width="200" alt="" /></Link>

                        <div className="flex flex-row gap-4 items-center max-[640px]:gap-2">
                            {/* <div className="w-[30px] max-[640px]:w-[24px] max-[640px]:h-[24px] h-[28px] justify-center rounded-full bg-[#0260AA] flex items-center">
                                <a className="text-white" href=""> <i className="fa-brands fa-facebook-f  "></i></a>
                            </div> */}
                            
                            <IconButton 
                                variant="contained" disableRipple
                                sx={{ borderRadius: '50%', backgroundColor:"#0260AA",width:"30px",height:"30px" }}
                            >
                                <i className="text-[white] text-[16px] fa-brands fa-facebook-f  "></i>
                            </IconButton>
                            <IconButton 
                                variant="contained" disableRipple
                                sx={{ borderRadius: '50%', backgroundColor:"#0260AA",width:"30px",height:"30px" }}
                            >
                                <i className="text-[white] text-[16px] fa-brands fa-instagram  "></i>
                            </IconButton>
                            <IconButton 
                                variant="contained" disableRipple
                                sx={{ borderRadius: '50%', backgroundColor:"#0260AA",width:"30px",height:"30px" }}
                            >
                                <i className="text-[white] text-[16px] fa-brands fa-twitter  "></i>
                            </IconButton>







                            {/* <div className="w-[30px] h-[28px] max-[640px]:w-[24px] max-[640px]:h-[24px]  rounded-full bg-[#0260AA] flex items-center justify-center">
                                <a className="text-white" href=""> <i className="fa-brands fa-instagram  "></i></a>
                            </div>
                            <div className="w-[30px] h-[28px] max-[640px]:w-[24px] max-[640px]:h-[24px]  rounded-full bg-[#0260AA] flex items-center justify-center">
                                <a className="text-white" href=""> <i className="fa-brands fa-twitter "></i></a>
                            </div> */}
                        </div>
                    </div>

                    <div className="flex flex-row gap-[4.5rem] ml-4 mr-8">
                        <Link className="text-[16px] text-[#0260AA] font-semibold  font-ROBOTO max-lg:hidden" to="/">HOME</Link>
                        <Link className="text-[16px] text-[#0260AA] font-semibold font-ROBOTO max-lg:hidden" to="/About">ABOUT US</Link>
                        <Link className="text-[16px] text-[#0260AA] font-semibold font-ROBOTO max-lg:hidden" to="/Services">SERVICES</Link>
                        <Link className="text-[16px] text-[#0260AA] font-semibold font-ROBOTO max-lg:hidden pr-8" to="/Contact">CONTACT US</Link>
                        <span id="hamgurgerBtn" src={icons8hamburger} height="50px" className="lg:hidden" alt="" onClick={() => {
                            let hiddenSection = document.querySelector("#hamburger");
                            let hamburgerButton = document.querySelector("#hamburgerBtn");
                            hiddenSection.classList.toggle("active");
                        }} ><i className="fa-solid fa-bars text-[#0260AA]"></i></span>
                    </div>
                </div>

                {/* <!-- Hamburger section --> */}
                <div className="hidden " id="hamburger" >
                    <div className="w-full h-full bg-transparent flex flex-col pl-12 pb-5 gap-10">
                        <Link className="text-[16px] mt-5 text-[#0260AA] font-semibold font-ROBOTO" to="/">HOME</Link>
                        <Link className="text-[16px] text-[#0260AA] font-semibold font-ROBOTO" to="/About">ABOUT US</Link>
                        <Link className="text-[16px] text-[#0260AA] font-semibold font-ROBOTO" to="/Services">SERVICES</Link>
                        <Link className="text-[16px] text-[#0260AA] font-semibold font-ROBOTO pr-8" to="/Contact">CONTACT US</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nav;