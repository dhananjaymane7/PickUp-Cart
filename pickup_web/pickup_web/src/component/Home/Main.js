import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import RateDisplay from "./RateDisplay";
// trial
import wtsp from '../Images/wtsp.png'
import RateDisplay01 from "./RateDisplay01";
// trail


// images
import bottompersonbg from "../Images/bgbottom.png";
import call from "../Images/call.png";
import clock from "../Images/clock.png";
import corner from "../Images/corner.png";

import courier from "../Images/courier.png";
import delivarygoodsimg from "../Images/delivary-goods-img.png";
import delivarytruck from "../Images/delivary-truck.png";
import fblogo from "../Images/fb-logo.png";
import footerimg from "../Images/footer-img.png";
import forwardarrow from "../Images/forward-arrow.png";
import homedelivery1 from "../Images/home delivery 1.png";
import homedelivery2 from "../Images/home delivery2.png";
import homeservice1 from "../Images/home service 1.jpg";
import homeservice2 from "../Images/home service 2.png";
import homeservice3 from "../Images/home service 3.png";
import homebanner from "../Images/home-banner.jpg";
import home from "../Images/home.png";
import instalogo from "../Images/insta-logo.png";
import leftarrow from "../Images/left-arrow.png";
import locationdiv from "../Images/location-div.png";
import location from "../Images/location.png";
import messagediv from "../Images/message-div.png";
import message from "../Images/message.png";
import parcel from "../Images/parcel.png";
import personimgbottom from "../Images/person-img-bottom.png";
import personimg from "../Images/person-img.png";
import phonediv from "../Images/phone-div.png";
import report from "../Images/report.png";
import rightannimation from "../Images/right-annimation.png";
import rightarrow from "../Images/right-arrow.png";
import rod1 from "../Images/rod-1.png";
import rod2 from "../Images/rod-2.png";
import rod3 from "../Images/rod-3.png";
import rod5 from "../Images/rod-5.png";
import rod6 from "../Images/rod-6.png";
import rod7 from "../Images/rod-7.png";
import rod8 from "../Images/rod-8.png";
import rod9 from "../Images/rod-9.png";
import rod10 from "../Images/rod-10.png";
import rod11 from "../Images/rod-11.png";
import rod12 from "../Images/rod-12.png";
import rod4 from "../Images/rod4.png";
import rod13 from "../Images/rod13.png";
import rod14 from "../Images/rod14.png";
import rod15 from "../Images/rod15.png";
import Star1 from "../Images/Star 1.png";
import rupees from "../Images/rupees.png";
import testimonialsbg from "../Images/testimonials-bg.png";
import testimonialslogo from "../Images/testimonials-logo.png";
import twitterlogo from "../Images/twitter-logo.png";
import venuslogo from "../Images/venus-logo.png";
import venuslogoremovebg from "../Images/venus-logo-removebg-preview.png";
import Vectorright from "../Images/Vector_right.png";
import icons8hamburger from "../Images/icons8-hamburger-menu-24.png";
import pickupkart1 from "../Images/pick.png";
import websitebanner from "../Images/Website Banner.jpg";
// images end

// css
import './Main.css';
import '../processbar.css';
// css

import Nav from "../Nav";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Loader from "../Loader/Loader";
import BlurredBackground from "../Loader/BlurredBack";
import { IconButton } from "@mui/material";
import Toggle from "./component/Toggle";
import PickupMode from "./component/pickupMode";
import Carousel from "./component/Carousel";
import Carousel1 from "./component/Carousel";


const Main = () => {
    AOS.init({
        duration: 600,
        delay: 390,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleBeforeUnload = () => {
            sessionStorage.setItem('hasEntered', 'true');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        const hasEntered = sessionStorage.getItem('hasEntered');

        if (hasEntered) {
            setIsLoading(false);
        } else {
            const timer = setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem('hasEntered', 'true');
            }, 1900);
            return () => clearTimeout(timer);
        }

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);


    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        [{
            quote: 'You guys are legendary! You guys are great and having amazing support & service.',
            author: 'John Doe',
            stars: 5,
        },
        {
            quote: 'Ive recommended your company to all of my friends and family. Your products are top-notch and your customer service is second to none!',
            author: 'Julie Brown',
            stars: 4,
        }],
        [{
            quote: 'I recently used your product and was blown away by how easy it was to use. Thanks for creating such a great product!',
            author: 'Sarah Johnson',
            stars: 4,
        },

        {
            quote: 'Your customer service team went above and beyond to help me with my issue. I appreciate their dedication and hard work. Thanks again!',
            author: 'Mark Davis',
            stars: 3,
        }],
        [{
            quote: 'I have been a loyal customer of yours for years and have never been disappointed with your products. Keep up the great work! ',
            author: 'Kelly Smith',
            stars: 5,
        },

        {
            quote: 'I was hesitant to try your product at first, but Im so glad I did. It has exceeded all of my expectations!',
            author: ' David Lee',
            stars: 4,
        }]
    ];

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    };






    return (<>

        {isLoading ? (
            <BlurredBackground>
                <Loader />
            </BlurredBackground>
        ) : (<>
            <Nav />
            <a href="https://wa.me/+917249174747" target="_blank" rel="noopener noreferrer"><div className="fixed  bottom-[1.5vw] right-[1.5vw]  z-[100000] "><img src={wtsp} width={"50px"} /></div></a>

            <section className="w-full h-full overflow-x-hidden overflow-y-hidden" >



                {/* <RateDisplay01 /> */}
                {/* <Toggle/> */}
                {/* <Carousel1/> */}
                <PickupMode />


                {/* <!-- Hero-2 section --> */}




                <section className="w-full h-full   max-[900px]:pt-8 mt-10 max-[768px]:mt-[250px] flex flex-col mx-auto justify-center items-center relative">
                    <img src={rod1} className="absolute left-0 top-[26%] -z-50 max-[1500px]:hidden" alt="" />
                    <img src={delivarytruck} className="absolute left-[35%] top-[26%]  max-[1500px]:hidden" alt="" />
                    <img src={rod2} className="absolute left-[49.7%] top-[26%]  max-[1500px]:hidden" alt="" />
                    <img src={rod3} className="absolute left-[17%] top-[33.3%] -z-60 max-[1500px]:hidden" alt="" />
                    <img src={rod4} className="absolute left-[18%] top-[33%] -z-50 max-[1500px]:hidden" alt="" />
                    <img src={rightannimation} className="absolute right-0 top-[45%]  max-[1500px]:hidden" alt="" />

                    <img src={rod5} className="absolute bottom-[34%] left-[17%] max-[1500px]:hidden" alt="" />
                    <img src={rod6} className="absolute bottom-[27.3%] right-[31.8%] max-[1500px]:hidden" alt="" />
                    <img src={rod7} className="absolute bottom-[27.3%] right-[31.8%] max-[1500px]:hidden" alt="" />
                    <img src={rod8} className="absolute top-[70%] left-[35%] max-[1500px]:hidden" alt="" />



                    <div data-aos="fade-up" className="flex flex-col items-center gap-3 mx-auto">
                        <p className="text-[40px] font-ROBOTO font-semibold max-[640px]:text-[27px]">From Pickup To Delivered</p>
                        <p className="text-[28px] font-ROBOTO font-medium opacity-60 max-[640px]:text-[16px]">Our Proven delivery system </p>
                    </div>


                    <div data-aos="fade-up" className="mx-auto w-full flex flex-row items-start justify-between xl:gap-25 max-[1280px]:gap-20 gap-48 max-[1024px]:w-full max-[1024px]:pl-[3%] pl-[7%] pt-16">
                        <img src={homedelivery1} className="z-50 xl:w-[40%]  max-[1280px]:w-[35%] max-[1024px]:hidden" alt="" />
                        <div className="max-[1280px]:pl-24 max-[768px]:pl-0">
                            <p className="text-[28px] font-ROBOTO font-extrabold max-[640px]:text-[24px]">FOLLOW STEPS</p>
                            <div className="flex flex-row gap-6 pt-4 ">
                                <div className="w-[50px] h-[50px] rounded-full bg-[#EF8038] flex items-center pl-1">
                                    <img src={home} className="pl-[0.62rem]" alt="" />
                                </div>
                                <div className="w-[50%] max-[1280px]:w-[70%] max-[1024px]:w-[80%] flex flex-col gap-3 max-[1024px]:gap-0">
                                    <p data-aos="fade-up" className="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[18px]">Visit Our Website</p>
                                    <div className="flex flex-row items-center gap-3">
                                        <p data-aos="fade-up" className="text-[15px] text-[grey] font-ROBOTO font-medium  max-[640px]:text-[15px]">Visit our website and calculate your rate for shipment and create a pickup.</p>
                                        <span className="font-ROBOTO text-[70px] font-bold text-[#E0E0E0]">01</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row gap-6 pt-4">
                                <div className="w-[50px] h-[50px] rounded-full bg-[#EF8038] flex justify-center items-center">
                                    <i className="fa-solid fa-truck-pickup text-white"></i>
                                </div>
                                <div className="w-[50%] max-[1280px]:w-[70%] max-[1024px]:w-[80%] flex flex-col gap-3 max-[1024px]:gap-0">
                                    <p data-aos="fade-up" className="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[18px]">Doorstep pickup</p>
                                    <div className="flex flex-row items-center gap-3">
                                        <p data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[15px]">Our pickupman will reach at your doorstep and collect your
                                            parcel or document.</p>
                                        <span className="font-ROBOTO text-[70px] font-bold text-[#E0E0E0]">02</span>
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-row gap-6 pt-4">
                                <div className="w-[50px] h-[50px] rounded-full justify-center bg-[#EF8038] flex items-center">
                                    <i className="fas fa-receipt  text-white"></i>
                                </div>
                                <div className="w-[50%] max-[1280px]:w-[70%] max-[1024px]:w-[80%] flex flex-col gap-3 max-[1024px]:gap-0">
                                    <p data-aos="fade-up" className="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[18px]">Pay & Tracking</p>
                                    <div className="flex flex-row items-center gap-3">
                                        <p data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[15px]">Pay courier charges by cash or online and get instant tracking number.</p>
                                        <span className="font-ROBOTO text-[70px] font-bold text-[#E0E0E0]">03</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row gap-6 pt-4">
                                <div className="w-[50px] h-[50px] rounded-full  bg-[#EF8038] flex items-center justify-center">
                                    <i className="fas fa-location text-white"></i>                                </div>
                                <div className="w-[50%] max-[1280px]:w-[70%] max-[1024px]:w-[80%] flex flex-col gap-3 max-[1024px]:gap-0">
                                    <p data-aos="fade-up" className="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[18px]">Live Tracking</p>
                                    <div className="flex flex-row items-center gap-3">
                                        <p data-aos="fade-up" className="text-[15px] w-[100%] font-ROBOTO font-medium text-[grey] max-[640px]:text-[15px]">Live track your courier AWB number.</p>
                                        <span className="font-ROBOTO text-[70px] font-bold text-[#E0E0E0]">04</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row gap-6 pt-4">
                                <div className="w-[50px] h-[50px] rounded-full  bg-[#EF8038] flex items-center justify-center">
                                    <i className="fas fa-shipping-fast text-white"></i>                                </div>
                                <div className="w-[50%] max-[1280px]:w-[70%] max-[1024px]:w-[80%] flex flex-col gap-3 max-[1024px]:gap-0">
                                    <p data-aos="fade-up" className="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[18px]">Doorstep Delivery</p>
                                    <div className="flex flex-row items-center gap-3">
                                        <p data-aos="fade-up" className="text-[15px] w-[100%] font-ROBOTO font-medium text-[grey] max-[640px]:text-[15px]">Parcel delivered on your destination
                                            with safe and secure.</p>
                                        <span className="font-ROBOTO text-[70px] font-bold text-[#E0E0E0]">05</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>


                    <div data-aos="fade-up" className="flex flex-row pl-[11%] max-[768px]:pl-0  mt-32  xl:gap-25 gap-48 max-[1024px]:w-full max-[768px]:w-[85%]  max-[1280px]:gap-10 max-[1024px]:pl-[10%] justify-between items-start mx-auto w-full relative">

                        <div>
                            <div data-aos="fade-up" className="w-[100%] shadow-md rounded-lg bg-[#F9F9F9] pl-10 pt-14 pb-12  relative max-[768px]:p-9 max-[768px]:w-[100%]">
                                <p data-aos="fade-up" className="text-[28px] font-ROBOTO pb-2 font-extrabold max-[640px]:text-[24px]">WHY CHOOSE US</p>
                                <p data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">We handle multi model courierservice for a huge varity
                                    of industries sector,from fashion to Engineering,Pharmaceuticals,Automotive, E-commerce,sporting goods to personal shipment
                                    .And we will take care of it for you with doorstep pickup service.</p>
                                <div data-aos="fade-up" className="flex flex-row gap-6 pt-6">
                                    <div className="w-[50px] h-[50px] rounded-full  bg-[#EF8038] flex items-center justify-center">
                                        <i className="fas fa-inr text-white"></i>                               </div>
                                    <div className="w-[78%] flex flex-col gap-3]">
                                        <p data-aos="fade-up" className="text-[21px] font-ROBOTO font-bold max-[640px]:text-[20px] ">Resonable shipping cost</p>

                                        <p data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">We provide best compititive
                                            rate to reduce shipping cost and increase reach.<br />Maharashtra-35/kg(10kg+)<br />Rest of India-70/kg(10kg+)</p>

                                    </div>
                                </div>

                                <div data-aos="fade-up" className="flex flex-row gap-6 pt-4 ">
                                    <div className="w-[50px] h-[50px] rounded-full bg-[#EF8038] flex items-center justify-center">
                                        <i className="fa-solid fa-handshake text-white"></i>                                </div>
                                    <div className="w-[80%] flex flex-col pt-2 gap-3">
                                        <p data-aos="fade-up" className="text-[21px] font-ROBOTO font-bold max-[640px]:text-[20px]">courier partner</p>

                                        <p data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">We work with india's
                                            best athorised courier partner. </p>
                                    </div>
                                </div>


                                <div data-aos="fade-up" className="flex flex-row gap-6 pt-4 ">
                                    <div className="w-[50px] h-[50px] rounded-full  bg-[#EF8038] flex items-center justify-center">
                                        <i className="fas fa-shipping-fast text-white"></i>                                </div>
                                    <div className="w-[80%] flex flex-col pt-2 gap-3">
                                        <p data-aos="fade-up" className="text-[21px] font-ROBOTO font-bold max-[640px]:text-[20px]">Doorstep pickup</p>

                                        <p data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">Pickupkart is india's
                                            first online courier pickup service from document,parcel to bulk load(LTL) shipment we arrange pickup from
                                            your doorstep with hassle free . </p>
                                    </div>
                                </div>

                                <div data-aos="fade-up" className="flex flex-row gap-6 pt-4 pb-24">
                                    <div className="w-[50px] h-[50px] rounded-full  bg-[#EF8038] flex items-center justify-center">
                                        <i className="fa-solid fa-helmet-safety text-white"></i>                               </div>
                                    <div className="w-[80%] flex flex-col pt-2 gap-3">
                                        <p data-aos="fade-up" className="text-[21px] font-ROBOTO font-bold max-[640px]:text-[20px]">Safety and Reliability</p>

                                        <p data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">Our
                                            delivary system has proven to safety delivery and maximum security coverage for lost shipment. </p>
                                    </div>
                                </div>

                                <button
                                    className="w-[155px] h-[44px] bg-[#EF8038] text-white text-[16px] rounded-md absolute bottom-10 right-8">Get - Set - Ship</button>
                            </div>
                        </div>

                        <img src={homedelivery2} className="xl:w-[40%]  max-[1280px]:w-[35%] max-[1024px]:hidden" alt="" />
                    </div>
                </section>


                {/* <!-- Feature Section --> */}
                <section className="relative pt-40 pb-40 max-[768px]:pt-16">

                    <img src={rod9} className="absolute top-[15%] left-[35%] max-[1500px]:hidden" alt="" />
                    <img src={rod10} className="absolute top-[15%] right-[13%] -z-[50] max-[1495px]:hidden" alt="" />
                    <img src={rod11} className="absolute top-[23%] right-[13%] -z-[50] max-[1495px]:hidden" alt="" />
                    <img src={rod12} className="absolute top-[22.8%] right-[45%] -z-[50] max-[1495px]:hidden" alt="" />
                    <img src={rod13} className="absolute top-[63%] left-[35%] max-[1495px]:hidden" alt="" />
                    <img src={rod14} className="absolute bottom-[5%] left-[35%] max-[1495px]:hidden" alt="" />
                    <img src={rod15} className="absolute bottom-[-3%] right-[14%] -z-[50] max-[1495px]:hidden" alt="" />


                    <div className="flex flex-col justify-start mx-auto max-[1024px]:w-full gap-4 pl-8 max-[1024px]:pl-0 w-[90%] ">
                        <button data-aos="fade-up"
                            className="w-[155px] h-[44px] bg-white text-[#EF8038] text-[20px] drop-shadow-lg shadow-2xl border-[#EF8038] font-bold rounded-md font-ROBOTO max-[768px]:ml-5 max-[768px]:text-[17px] max-[768px]:w-[120px] max-[768px]:h-[35px]">Contact
                            Us</button>

                        <p data-aos="fade-up" className="text-[32px] font-ROBOTO font-bold max-[768px]:ml-5 max-[768px]:text-[25px]">Our Services</p>

                        <div data-aos="fade-up" className="flex flex-row gap-20 max-[1024px]:gap-10 max-[768px]:flex-col max-[768px]:w-[90%] max-[768px]:mx-auto max-[768px]:items-center">
                            <div className="flex shadow-lg flex-col justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[70%] bg-[#F9F9F9] border rounded-md">
                                <img src={homeservice1} className="" height="223px" alt="" />
                                <div className="bg-[#082161] text-white text-[18px] font-ROBOTO pl-5 font-semibold">Transportation
                                    Service</div>
                                <p data-aos="fade-up" className="text-[15px] text-[grey] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-20 max-[1280px]:pr-0 max-[1280px]:pl-1">
                                    Collaboratively customize front-end materials with standardized infomediaries</p>
                                <div className="pt-3 pb-4 pl-8">

                                    <button className="w-[118px] h-[38px] bg-[#EF8038] text-white text-[13px]  rounded-md ">Read
                                        More</button>
                                </div>
                            </div>

                            <div data-aos="fade-up" className="flex shadow-lg flex-col justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[70%] bg-[#F9F9F9] border rounded-md">
                                <img src={homeservice2} className="" height="223px" alt="" />
                                <div className="bg-[#082161] text-white text-[18px] font-ROBOTO pl-5 font-semibold">Storage Service
                                </div>
                                <p data-aos="fade-up" className="text-[15px] text-[grey] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-20 max-[1280px]:pr-0 max-[1280px]:pl-1">
                                    Collaboratively customize front-end materials with standardized infomediaries</p>
                                <div className="pt-3 pb-4 pl-8">

                                    <button className="w-[118px] h-[38px] bg-[#EF8038] text-white text-[13px]  rounded-md ">Read
                                        More</button>
                                </div>
                            </div>

                            <div data-aos="fade-up" className="flex shadow-lg flex-col justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[70%] bg-[#F9F9F9] border rounded-md">
                                <img src={homeservice3} className="" height="223px" alt="" />
                                <div className="bg-[#082161] text-white text-[18px] font-ROBOTO pl-5 font-semibold">Transportation
                                    Service</div>
                                <p data-aos="fade-up" className="text-[15px] font-ROBOTO text-[grey] font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-20 max-[1280px]:pr-0 max-[1280px]:pl-1">
                                    Collaboratively customize front-end materials with standardized infomediaries</p>
                                <div className="pt-3 pb-4 pl-8">

                                    <button className="w-[118px] h-[38px] bg-[#EF8038] text-white text-[13px]  rounded-md ">Read
                                        More</button>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="flex flex-row gap-0 border max-[1350px]: justify-between mt-[8.7rem] relative max-[1350px]:flex-col ">
                            <div className="flex flex-row gap-2 w-[42%] max-[1350px]:w-full pt-14 pb-40 bg-[#EF8038]">
                                <img src={courier} alt="" />
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-row gap-2 mt-12">
                                        <img src={testimonialslogo} alt="" />
                                        <p data-aos="fade-up" className="text-white font-ROBOTO font-semibold text-[16px] max-[640px]:text-[12px]">TESTIMONIAL</p>
                                    </div>
                                    <p data-aos="fade-up" className="font-bold  text-[32px] text-white max-[640px]:text-[20px] ">What People <br /> Say About Our <br /> Service

                                    </p>
                                    <div>
                                        <button onClick={handlePrev} className="w-[85px] h-[35px] pl-8 bg-white text-[13px] max-[640px]:w-[55px] max-[640px]:h-[28px] max-[640px]:pl-5"><img
                                            src={leftarrow} alt="" /></button>
                                        <button></button>
                                        <button onClick={handleNext} className="w-[85px] pl-8 h-[35px] bg-white text-[13px] max-[640px]:w-[55px] max-[640px]:h-[28px] max-[640px]:pl-5"><img
                                            src={forwardarrow} alt="" /></button>
                                        <button></button>
                                    </div>
                                </div>

                            </div>

                            {testimonials.map((pairitem, pairindex) => (
                                <div key={pairindex} className="flex flex-row gap-10  absolute top-[22%] right-[11%] max-[1480px]:right-8 max-[1350px]:relative max-[1350px]:w-full mx-auto max-[1350px]:justify-center max-[1350px]:pl-12 max-[1350px]: max-[768px]:gap-6 max-[640px]:flex-col items-center">
                                    {pairitem.map((item, index) => (
                                        <div key={index} className={`w-[335px] h-[350px] border z-[200] bg-white rounded-md relative ${currentIndex === pairindex ? 'block' : 'hidden'}`}>
                                            <img src={corner} className="absolute bottom-12 right-[-16px]" width="18px" alt="" />
                                            <p data-aos="fade-up" className="text-[grey] pt-[4.3rem] h-[170px] pl-10 pr-10 text-[16px] font-ROBOTO font-semibold opacity-40 mr-4 max-[768px]:pl-3 max-[768px]:pr-3 max-[768px]:pt-10">
                                                {item.quote}
                                            </p>
                                            <div data-aos="fade-up" className="bg-[#F5F5F5] mt-4 mb-2 flex flex-row items-center ml-4 gap-8 scale-x-110">
                                                <img src={personimg} className="pt-3 pb-3 pl-10" alt="" />
                                                <p className="text-[18px] font-bold font-ROBOTO">{item.author}</p>
                                            </div>
                                            <div className="flex flex-row gap-3 pl-10 mt-3 mb-8">
                                                {[...Array(item.stars)].map((_, index) => (
                                                    <img key={index} src={Star1} alt="" />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}

                        </div>
                    </div>

                </section>


                {/* <!-- Footer Section --> */}
                <section>
                    {/* <!-- upper part --> */}
                    <div className="flex bg-[#FFF4F0] flex-row  max-[768px]:flex-col">
                        <div className="relative">
                            <img src={personimgbottom} className="absolute left-16 bottom-[-0.05rem] max-[1024px]:left-6 max-[640px]:h-[120%]" alt="" />
                            <img src={bottompersonbg} className="w-full h-full" alt="" />
                        </div>
                        <div className="flex  flex-col gap-7 p-5 lg:pt-14 max-[768px]:pl-2">
                            <p className="text-[#0260AA] font-ROBOTO text-[28px] font-semibold tracking-wide max-[768px]:text-[24px]">READY TO GET MOVING? GET
                                YOUR FREE QUOTE</p>
                            <p className="text-[gray] font-ROBOTO font-medium tracking-wide opacity-80 text-[18px]  max-[768px]:text-[13px]">Collaboratively
                                customize front-end materials with standardized <br /> infomediaries</p>
                            <div className="flex flex-row gap-3 text-[#EF8038]">
                                <p className=" text-[28px] font-[dosis] font-ROBOTO  max-[768px]:text-[22px]">Call Us:</p>
                                <p className=" text-[28px]  font-[dosis] max-[768px]:text-[22px]">+91 7249174747</p>
                            </div>
                        </div>
                    </div>




                </section>


            </section></>)}

    </>);
}

export default Main;

