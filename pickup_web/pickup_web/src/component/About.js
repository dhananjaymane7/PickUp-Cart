import React from "react";
import { Link } from "react-router-dom";
import venuslogoremovebg from "./Images/venus-logo-removebg-preview.png";
import fblogo from "./Images/fb-logo.png";
import instalogo from "./Images/insta-logo.png";
import twitterlogo from "./Images/twitter-logo.png";
import rightannimation from "./Images/right-annimation.png";
import icons8hamburger from "./Images/icons8-hamburger-menu-24.png";
import messagediv from "./Images/message-div.png";
import forwardarrow from "./Images/forward-arrow.png";
import aboutcourier from "./Images/about courier.jpg";
import protectionright from "./Images/protection_right.png";
import leftannimation from "./Images/left_annimation.png";
import missiontruck from "./Images/mission_truck.png";
import missionsurprise from "./Images/mission_surprise.png";
import missionfront from "./Images/mission_front.jpg";
import missionback from "./Images/mission_back.png";
import femaleprofile from "./Images/female_profile.jpg";
import pickupkart1 from "./Images/pick.png";
import Nav from "./Nav";
import AOS from 'aos';
import 'aos/dist/aos.css'; 



 

const About = () => {
    AOS.init({
        duration: 600,
        delay: 390,
      });
    return (
        <><Nav/>
      
        <section className="w-full h-full overflow-x-hidden">

           
            {/* <!-- Hero-1 --> */}
            <section
                className="w-full min-h-[380px] scale-x-110 bg-[url('')]  bg-cover bg-no-repeat relative img8">
                <div className="bg-[rgba(0,0,0,0.5)] z-50 w-full min-h-[380px] "></div>
                <div
                    className="flex flex-col gap-24 w-[60%] absolute top-32 left-[22%] max-[900px]:top-20 max-[900px]:left-[15%] max-[768px]:top-16 max-[768px]:left-[15%]">
                    <div className=" flex flex-col gap-1 max-[900px]:gap-8 max-[768px]:gap-5  ">
                        <p
                            className="font-ROBOTO text-[44px] font-bold text-white max-[900px]:text-[32px] max-[768px]:text-[20px] ">
                            About Us</p>
                        <p className="font-ROBOTO text-[18px] font-semibold text-white"><span className="text-[#EF8038]">Home
                        </span>About us</p>
                    </div>
                </div>
            </section>

            {/* <!-- Hero-2 --> */}
            <section  data-aos="fade-up"
                className="w-full h-full pt-52 max-[900px]:pt-8 max-[1280px]:pt-24 max-[768px]:mt-[50px] flex flex-col mx-auto justify-center items-center relative">

                <img data-aos="fade-up" src={rightannimation} className="absolute right-0 top-36 max-[1024px]:hidden" alt="" />
                <div className="w-[140px] min-h-[55px] bg-[#EF8038] absolute left-[35.5%]  top-[15%] rotate-12 z-[500] skew-x-[20deg] max-[1440px]:hidden"></div>
                <div className="w-[140px] min-h-[125px] bg-white absolute left-[36.5%]  top-[19%] shadow-md rotate-12 z-[500] skew-x-[20deg] max-[1440px]:hidden">
                    <div className="items-center pt-6 ">
                        <span data-aos="fade-up" className="text-[#EF8038]  pl-10 font-bold text-3xl -rotate-[8deg] -skew-x-[20deg]">10</span>
                        <p data-aos="fade-up" className="text[16px] font-ROBOTO  pl-3 font-medium -rotate-[8deg] -skew-x-[20deg]">Year Experience</p>
                    </div>

                </div>




                {/* <!-- Upper part --> */}
                <div data-aos="fade-up" className="mx-auto pr-28 w-full flex flex-row items-start justify-between xl:gap-25 max-[1280px]:gap-20 gap-48 
               max-[1024px]:w-full max-[1024px]:pl-[3%] pl-[7%] pt-16 relative">

                    <img data-aos="fade-up" src={aboutcourier} className="z-50 xl:w-[40%]  max-[1280px]:w-[35%] max-[1024px]:hidden"
                        alt="" />
                    <div className="mt-[-85px]">

                        <button data-aos="fade-up"
                            className="text-[#EF8038] font-semibold text-[18px] font-ROBOTO px-9 rounded-md py-2 border shadow-[#EF8038] shadow-sm">About
                            Us</button>
                        <div data-aos="fade-up"
                            className="w-[100%] border-b mb-10 pt-8 pr-12 relative max-[768px]:pl-0 max-[768px]:w-[120%] max-[640px]:w-[140%]">
                            <p className="text-[38px] font-ROBOTO pb-4 font-extrabold max-[640px]:text-[24px] tracking-wider ">
                                WELCOME WORLD WIDE BEST TRANSPORT COMPANY</p>
                            <div className="flex flex-row gap-5 items-center">
                                <div className="w-[7px] h-[63px] bg-[#EF8038]"></div>
                                <p data-aos="fade-up" className="text-[15px] text-[grey] font-ROBOTO font-medium opacity-50 max-[640px]:text-[13px]">We are who
                                    you think of when you want something delivered and On-time delivery guaranteed.</p>
                            </div>

                            <div className="flex flex-col gap-6 pt-6 pb-5">

                                <div data-aos="fade-up" className="w-[78%] h-full flex flex-row items-center">
                                    <img src={protectionright} className="mr-8 h-full" alt="" />
                                    <p className="text-[20px] font-ROBOTO font-semibold max-[640px]:text-[14px] ">Fast
                                        Transportion Service</p>
                                </div>
                                <div data-aos="fade-up" className="w-[78%] flex flex-row items-center">
                                    <img src={protectionright} className="mr-8 h-full" alt="" />
                                    <p className="text-[20px] font-ROBOTO font-semibold max-[640px]:text-[14px] ">Fast
                                        Transportion Service</p>
                                </div>
                                <div data-aos="fade-up" className="w-[78%] flex flex-row items-center">
                                    <img src={protectionright} className="mr-8 h-full" alt="" />
                                    <p className="text-[20px] font-ROBOTO font-semibold max-[640px]:text-[14px] ">Fast
                                        Transportion Service</p>
                                </div>
                                <div data-aos="fade-up" className="w-[78%] flex flex-row items-center">
                                    <img src={protectionright} className="mr-8 h-full" alt="" />
                                    <p className="text-[20px] font-ROBOTO font-semibold max-[640px]:text-[14px] ">Fast
                                        Transportion Service</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>



                {/* <!-- Middle Part --> */}
                <div  className="flex flex-row pl-[7%] max-[768px]:ml-[-5px] max-[640px]:pr-32 mt-32 pr-28 gap-48 max-[1024px]:w-full max-[768px]:w-[85%]  max-[1280px]:gap-10 max-[1024px]:pl-[4%] justify-between items-start mx-auto w-full relative">

                    <img src={leftannimation} className="absolute left-0 top-[45%] max-[768px]:hidden" alt="" />

                    <div data-aos="fade-up" className="mt-[-85px]">

                        <button
                            className="text-[#EF8038] font-semibold text-[18px] font-ROBOTO px-9 rounded-md py-2 border shadow-[#EF8038] shadow-sm">Mission</button>
                        <div
                            className="w-[100%] mb-10 pt-8 relative max-[768px]:pl-0 max-[768px]:w-[140%] max-[640px]:w-[140%  max-[425px]:w-[200%]">
                            <p data-aos="fade-up" className="text-[38px] font-ROBOTO pb-4 font-extrabold max-[640px]:text-[24px] tracking-wider ">
                                Our Mission</p>


                            <p data-aos="fade-up" className="text-[18px] text-[grey] font-ROBOTO font-medium opacity-70 max-[640px]:text-[13px]">Our mission is
                                to enable customers to operate flexible, reliable and resilient supply chains at the lowest
                                costs. We provided supply chain solutions to a diverse base of over 28000 active customers
                                such as e-commerce marketplaces.</p>


                            <div className="flex flex-col gap-6 pt-6 pb-5">

                                <div className="flex flex-row gap-6 pt-4  items-start">

                                    <img data-aos="fade-up" src={missiontruck} className="pl-[0.62rem]" alt="" />

                                    <div
                                        className="w-[70%] max-[1280px]:w-[70%] max-[425px]:w-full max-[1024px]:w-[80%] flex flex-col gap-10 max-[1024px]:gap-6">
                                        <p data-aos="fade-up" className="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[18px]">Fast
                                            Delivery</p>

                                        <p data-aos="fade-up" className="text-[17px] text-[grey] font-ROBOTO font-medium opacity-70 max-[640px]:text-[15px]">
                                            Fast delivery and a great platform aren't enough. A very fast delivery arm gave
                                            his variations of speed and length added potency.</p>
                                    </div>
                                </div>


                                <div className="flex flex-row gap-6 pt-4  items-start">

                                    <img data-aos="fade-up" src={missionsurprise} className="pl-[0.62rem]" alt="" />

                                    <div data-aos="fade-up"
                                        className="w-[70%] max-[1280px]:w-[70%] max-[1024px]:w-[80%] flex flex-col gap-10 max-[1024px]:gap-6">
                                        <p className="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[18px]">Secured
                                            Services</p>

                                        <p data-aos="fade-up" className="text-[17px] text-[grey] font-ROBOTO font-medium opacity-70 max-[640px]:text-[15px]">
                                            Secure delivery consists in vesnus delivery procedures within each and every
                                            link of the supply chain. A whole range of services exist to ensure secure
                                            delivery</p>


                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>
                    <img src={missionfront} className="absolute right-[28%] top-[22%] max-[1280px]:hidden" alt="" />
                    <img src={missionback} className="xl:w-[40%]  max-[1280px]:w-[35%] max-[1024px]:hidden" alt="" />
                </div>



                {/* <!-- Bottom Part --> */}
                <div  className="flex flex-col pl-[7%] max-[1024px]:pl-[4%] max-[768px]:ml-[-5px] max-[768px]:pr-[20px]  mt-32 pr-16 gap-16   justify-between items-start mx-auto w-full relative">

                    <div className="mt-[-85px]">

                        <button
                            className="text-[#EF8038] font-semibold text-[18px] font-ROBOTO px-9 rounded-md py-2 border shadow-[#EF8038] shadow-sm">Team</button>
                        <div
                            className="w-[100%] pt-8 relative max-[768px]:pl-0 max-[768px]:w-[120%] max-[640px]:w-[140%]">
                            <p className="text-[38px] font-ROBOTO font-extrabold max-[640px]:text-[24px] tracking-wider ">
                                Our Team</p>

                        </div>
                    </div>

                    <div className="flex flex-row gap-16 mx-auto w-[90%] max-[1280px]:w-[110%] max-[1280px]:pr-10 max-[1280px]:gap-10 max-[768px]:flex-col max-[768px]:w-[80%] max-[768px]:pr-0 items-center pb-36 max-[640px]:pb-14">
                        <div className="flex flex-col gap-6 border w-full items-center  shadow-xl">
                            <img src={femaleprofile} className="pt-4" alt="" />

                            <p className="text-[20px] font-ROBOTO font-extrabold -mb-4 max-[640px]:text-[16px]">Adan Gillwarms</p>
                            <span className="text-[#EF8038] font-semibold -mb-3">CEO</span>

                            <p className="text-[17px] font-ROBOTO font-medium opacity-70 max-[640px]:text-[15px] px-6 text-center">
                                Secure delivery consists in reinforcing delivery procedures within each and every link.</p>

                            <div className="flex flex-row gap-4 items-center max-[640px]:gap-2 pb-5">
                                <div
                                    className="w-[40px] max-[640px]:w-[24px] max-[640px]:h-[24px] h-[40px] drop-shadow-lg shadow-black  rounded-full bg-white flex items-center">
                                    <img src={fblogo} className="ml-[0.9rem] max-[640px]:ml-[0.48rem]" width="10px" alt="" />
                                </div>
                                <div
                                    className="w-[40px] h-[40px] max-[640px]:w-[32px] max-[640px]:h-[24px] drop-shadow-lg shadow-black   rounded-full bg-white flex items-center">
                                    <img src={instalogo} className="ml-[0.65rem] max-[640px]:ml-[0.4rem]" width="18px" alt="" />
                                </div>
                                <div
                                    className="w-[40px] h-[40px] max-[640px]:w-[32px] max-[640px]:h-[24px] drop-shadow-lg shadow-black   rounded-full bg-white flex items-center">
                                    <img src={twitterlogo} className="ml-[0.7rem] max-[640px]:ml-[0.4rem]" width="18px" alt="" />
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col gap-6 border w-full items-center  shadow-xl">
                            <img src={femaleprofile} className="pt-4" alt="" />

                            <p className="text-[20px] font-ROBOTO font-extrabold -mb-4 max-[640px]:text-[16px]">Adan Gillwarms</p>
                            <span className="text-[#EF8038] font-semibold -mb-3">CEO</span>

                            <p className="text-[17px] font-ROBOTO font-medium opacity-70 max-[640px]:text-[15px] px-6 text-center">
                                Secure delivery consists in reinforcing delivery procedures within each and every link.</p>

                            <div className="flex flex-row gap-4 items-center max-[640px]:gap-2 pb-5">
                                <div
                                    className="w-[40px] max-[640px]:w-[24px] max-[640px]:h-[24px] h-[40px] drop-shadow-lg shadow-black  rounded-full bg-white flex items-center">
                                    <img src={fblogo} className="ml-[0.9rem] max-[640px]:ml-[0.48rem]" width="10px" alt="" />
                                </div>
                                <div
                                    className="w-[40px] h-[40px] max-[640px]:w-[32px] max-[640px]:h-[24px] drop-shadow-lg shadow-black   rounded-full bg-white flex items-center">
                                    <img src={instalogo} className="ml-[0.65rem] max-[640px]:ml-[0.4rem]" width="18px" alt="" />
                                </div>
                                <div
                                    className="w-[40px] h-[40px] max-[640px]:w-[32px] max-[640px]:h-[24px] drop-shadow-lg shadow-black   rounded-full bg-white flex items-center">
                                    <img src={twitterlogo} className="ml-[0.7rem] max-[640px]:ml-[0.4rem]" width="18px" alt="" />
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col gap-6 border w-full  items-center  shadow-xl">
                            <img src={femaleprofile} className="pt-4" alt="" />

                            <p className="text-[20px] font-ROBOTO font-extrabold -mb-4 max-[640px]:text-[16px]">Adan Gillwarms</p>
                            <span className="text-[#EF8038] font-semibold -mb-3">CEO</span>

                            <p className="text-[17px] font-ROBOTO font-medium opacity-70 max-[640px]:text-[15px] px-6 text-center">
                                Secure delivery consists in reinforcing delivery procedures within each and every link.</p>

                            <div className="flex flex-row gap-4 items-center max-[640px]:gap-2 pb-5">
                                <div
                                    className="w-[40px] max-[640px]:w-[24px] max-[640px]:h-[24px] h-[40px] drop-shadow-lg shadow-black  rounded-full bg-white flex items-center">
                                    <img src={fblogo} className="ml-[0.9rem] max-[640px]:ml-[0.48rem]" width="10px" alt="" />
                                </div>
                                <div
                                    className="w-[40px] h-[40px] max-[640px]:w-[32px] max-[640px]:h-[24px] drop-shadow-lg shadow-black   rounded-full bg-white flex items-center">
                                    <img src={instalogo} className="ml-[0.65rem] max-[640px]:ml-[0.4rem]" width="18px" alt="" />
                                </div>
                                <div
                                    className="w-[40px] h-[40px] max-[640px]:w-[32px] max-[640px]:h-[24px] drop-shadow-lg shadow-black   rounded-full bg-white flex items-center">
                                    <img src={twitterlogo} className="ml-[0.7rem] max-[640px]:ml-[0.4rem]" width="18px" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



          


        </section>
        </>);
};


export default About;