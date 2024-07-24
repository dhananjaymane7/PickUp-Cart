import React from "react";
import { Link } from "react-router-dom";
import location from "./Images/location.png";
import venuslogoremovebg from "./Images/venus-logo-removebg-preview.png";
import fblogo from "./Images/fb-logo.png";
import instalogo from "./Images/insta-logo.png";
import twitterlogo from "./Images/twitter-logo.png";
import rightannimation from "./Images/right-annimation.png";
import icons8hamburger from "./Images/icons8-hamburger-menu-24.png";
import messagediv from "./Images/message-div.png";
import forwardarrow from "./Images/forward-arrow.png";
import contactcall from "./Images/contact_call.png";
import message from "./Images/message.png";
import contactdeliveryboy from "./Images/contact _delivery_boy.png";
import pickupkart1 from "./Images/pick.png";
import Nav from "./Nav";
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Contact = () => {
    
  AOS.init({
    duration: 600,
    delay: 390,
  });
    return (

        <><Nav/>

        <section className="w-full h-full overflow-x-hidden">


            {/* <!-- Hero-1 --> */}
            <section
                className="w-full min-h-[380px] scale-x-110 bg-[url('')]  bg-cover bg-no-repeat relative img9">
                <div className="bg-[rgba(0,0,0,0.8)] z-50 w-full min-h-[380px] "></div>
                <div
                    className="flex flex-col gap-24 w-[60%] absolute top-32 left-[22%] max-[900px]:top-20 max-[900px]:left-[15%] max-[768px]:top-16 max-[768px]:left-[15%]">
                    <div className=" flex flex-col gap-1 max-[900px]:gap-8 max-[768px]:gap-5  ">
                        <p
                            className="font-ROBOTO text-[44px] font-bold text-white max-[900px]:text-[32px] max-[768px]:text-[20px] ">
                            Contact Us</p>
                        <p className="font-ROBOTO text-[18px] font-semibold text-white"><span className="text-[#EF8038]">Home
                        </span>Contact us</p>
                    </div>
                </div>
            </section>


            {/* <!-- Hero-2 --> */}
            <section className="w-full h-full relative mb-32">
                <img src={rightannimation} className="absolute right-0 top-10 max-[1450px]:hidden" alt="" />
                <div className="w-[90%] h-full items-center mx-auto flex flex-col gap-20">
                    <div className="flex flex-row gap-3 w-full pt-16  max-[600px]:flex-col items-center">
                        <div className="w-[30%] flex flex-col items-center gap-5 border-r-2 max-[768px]:w-[40%] max-[600px]:border-none pb-16 max-[600px]:pb-10">
                            <div className="w-[50px] h-[50px] rounded-full bg-[#EF8038] flex items-center pl-1 drop-shadow-lg shadow-black">
                                <img src={contactcall} className="ml-[0.52rem]" width="20px" alt="" />
                            </div>
                            <p data-aos="fade-up"  className="text-[16px] font-ROBOTO font-bold  max-[640px]:text-[13px]">Call Us</p>
                            <p data-aos="fade-up"  className="text-[16px] font-ROBOTO -mb-4 max-[640px]:text-[13px]">+ 91 7249174747 </p>
                            <p data-aos="fade-up"  className="text-[16px] font-ROBOTO -mb-4 max-[640px]:text-[13px]">+ 91 7249174747 </p>
                        </div>
                        <div className="w-[30%] flex flex-col items-center gap-5 border-r-2 max-[768px]:w-[40%] max-[600px]:border-none pb-24 max-[600px]:pb-10">
                            <div className="w-[50px] h-[50px] rounded-full bg-[#EF8038] flex items-center pl-1 drop-shadow-lg shadow-black">
                                <img src={message} className="ml-[0.62rem]" alt="" />
                            </div>
                            <p data-aos="fade-up"  className="text-[16px] font-ROBOTO font-bold  max-[640px]:text-[13px]">Mail Us</p>
                            <p data-aos="fade-up"  className="text-[16px] font-ROBOTO -mb-4 max-[640px]:text-[13px]">contact@pickupkart.in</p>
                        </div>
                        <div className="w-[30%] flex flex-col items-center gap-5 border-r-2 max-[768px]:w-[60%] max-[600px]:border-none  pb-8">
                            <div className="w-[50px] h-[50px] rounded-full bg-[#EF8038] flex items-center pl-1 drop-shadow-lg shadow-black">
                                <img src={location} className="ml-[0.82rem]" alt="" />
                            </div>
                            <p data-aos="fade-up"  className="text-[16px] font-ROBOTO font-bold  max-[640px]:text-[13px]">Location</p>
                            <p data-aos="fade-up"  className="text-[16px] font-ROBOTO -mb-4 max-[640px]:text-[13px] text-center pr-3 pb-4 pl-4">Venus Express: Office address -<br /> 479, shaniwar peth,
                                <br />  kolhapur naka, karad</p>
                        </div>
                    </div>



                    <div className="w-full h-full flex flex-row items-center mt-20 justify-between max-[1280px]:mt-80">
                        <img src={contactdeliveryboy} className="pl-20 max-[1280px]:hidden" alt="" />
                        <div className="relative w-full h-full -ml-28 max-[525px]:-ml-20">
                            <div className="bg-white  rounded-md border -mt-20 pt-9 pl-10 mr-[-500px] pb-7 lg:mx-auto w-[75%] absolute left-[20%] top-[-200px] max-[768px]:w-full  max-[600px]:-mt-[80px] max-[600px]:pl-2 max-[475px]:-mt-[120px]">
                                <div className="flex flex-row items-center gap-4 pl-4">
                                    <div>
                                        <div className="w-[11px] h-[40px] bg-[#082161] max-[475px]:w-[10px] max-[475px]:h-[30px]"></div>
                                        <div className="w-[11px] h-[40px] bg-[#EF8038] max-[475px]:w-[10px] max-[475px]:h-[30px]"></div>
                                    </div>
                                    <p data-aos="fade-up"  className="text-[50px] font-ROBOTO font-semibold max-[475px]:text-[30px]">Get in Touch</p>
                                </div>


                                <div className="grid grid-rows-2 grid-cols-2 pt-3 gap-y-3 max-[475px]:gap-0 max-[475px]:pl-4 max-[525px]:flex max-[525px]:flex-col">
                                    <form className=" bg-white pl-3 max-[475px]:pl-0 px-1 mt-2 mb-2">
                                        <input data-aos="fade-up"  placeholder="First Name"
                                            className="pl-6 pr-3 py-2 max-[525px]:pr-10 max-[475px]:pl-2 max-[1024px]:pr-0 max-[1280px]:pr-0 transition-all duration-200 border border-slate-400 shadow-md rounded-lg font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs" />
                                    </form>
                                    <form className=" bg-white pl-3 max-[475px]:pl-0 px-1 mt-2 mb-2">
                                        <input data-aos="fade-up"  placeholder="Last Name"
                                            className="pl-6 pr-3 py-2 max-[525px]:pr-10 max-[475px]:pl-2 max-[1024px]:pr-0 max-[1280px]:pr-0 transition-all duration-200 border border-slate-400 shadow-md rounded-lg font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs" />
                                    </form>
                                    <form className=" bg-white pl-3 max-[475px]:pl-0 px-1 mt-2 mb-2">
                                        <input data-aos="fade-up"  placeholder="Mobile Number"
                                            className="pl-6 pr-3 py-2 max-[525px]:pr-10 max-[475px]:pl-2 max-[1024px]:pr-0 max-[1280px]:pr-0 transition-all duration-200 border border-slate-400 shadow-md rounded-lg font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs" />
                                    </form>
                                    <form className=" bg-white pl-3 max-[475px]:pl-0 px-1 mt-2 mb-2">
                                        <input data-aos="fade-up"  placeholder="Email"
                                            className="pl-6 pr-3 py-2 max-[525px]:pr-10 max-[475px]:pl-2 max-[1024px]:pr-0 max-[1280px]:pr-0 transition-all duration-200 border border-slate-400 shadow-md rounded-lg font-mullish outline-lightBlue placeholder:text-sm max-[475px]:placeholder:text-xs" />
                                    </form>

                                    <form className=" bg-white px-1 max-[475px]:pl-0 pl-2 mt-2 mb-4">
                                        <input data-aos="fade-up"  placeholder="Enter Your Message"
                                            className="pl-6 pt-4 pb-20 pr-60 py-10 max-[475px]:pr-16 max-[475px]:pl-2  max-[1280px]:pr-32 transition-all duration-200 border border-slate-400 shadow-md rounded-lg font-mullish outline-lightBlue placeholder:text-sm  max-[475px]:placeholder:text-xs " />
                                    </form>
                                </div>


                                <button data-aos="fade-up"  className="w-[155px] ml-5 mt-4 rounded-3xl h-[44px] bg-[#EF8038] text-white text-[20px] max-[900px]:text-[16px] max-[900px]:w-[130px] max-[900px]:h-[40px] max-[768px]:text-[13px] max-[768px]:w-[100px] max-[768px]:h-[35px]">Send</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- Map section --> */}
            {/* <iframe className="border-white max-[1280px]:mt-72" src=
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                                    width="100%"
                                    height="500"
                                    frameborder="0"
                                    style="border:0;"
                                    allowfullscreen=""
                                    aria-hidden="false"
                                    tabindex="0">
                            </iframe> */}


        </section>
        </> );

};

export default Contact;