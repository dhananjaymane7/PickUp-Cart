import React from "react";
import { Link } from "react-router-dom";
import venuslogoremovebg from "./Images/venus-logo-removebg-preview.png";
import fblogo from "./Images/fb-logo.png";
import instalogo from "./Images/insta-logo.png";
import twitterlogo from "./Images/twitter-logo.png";
import rightannimation from "./Images/right-annimation.png";
import icons8hamburger from "./Images/icons8-hamburger-menu-24.png";
import courier from "./Images/courier.png";
import courierservice1 from "./Images/courier service1.jpg";
import courierservice2 from "./Images/courier service2.jpg";
import courierservice3 from "./Images/courier service3.jpg";
import courierservice4 from "./Images/courier service4.jpg";
import courierservice5 from "./Images/courier service5.png";
import courierservice6 from "./Images/courier service 6.png";
import residentialmovers from "./Images/residential_movers.png";
import packinggoods from "./Images/packing_goods.png";
import messagediv from "./Images/message-div.png";
import storagesolution from "./Images/storage_solution.png";
import courierfast from "./Images/courier-fast.png";
import machinery from "./Images/machinery.png";
import documentspaper from "./Images/documents_paper.png";
import van from "./Images/van.png";
import forwardarrow from "./Images/forward-arrow.png";
import pickupkart1 from "./Images/pick.png";
import Nav from "./Nav";
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Services = () =>{
    
  AOS.init({
    duration: 600,
    delay:350,
  });
    return(<>
      <Nav/>
    <section className="w-full h-full overflow-x-hidden">


       


        {/* <!-- Hero-1 --> */}
        <section
            className="w-full min-h-[380px] scale-x-110 bg-[url('')]  bg-cover bg-no-repeat relative img7">
            <div className="bg-[rgba(0,0,0,0.5)] z-50 w-full min-h-[380px] "></div>
            <div
                className="flex flex-col gap-24 w-[60%] absolute top-32 left-[22%] max-[900px]:top-20 max-[900px]:left-[15%] max-[768px]:top-16 max-[768px]:left-[15%]">
                <div className=" flex flex-col gap-1 max-[900px]:gap-8 max-[768px]:gap-5  ">
                    <p
                        className="font-ROBOTO text-[44px] font-bold text-white max-[900px]:text-[32px] max-[768px]:text-[20px] ">
                        Our Services</p>
                    <p className="font-ROBOTO text-[18px] font-semibold text-white"><span className="text-[#EF8038]">Home
                        </span> Services</p>
                </div>
            </div>
        </section>


        {/* <!-- Hero-2 --> */}
        <section className="w-full h-full relative"> 
            <img src={rightannimation} className="absolute right-0 top-16 max-[768px]:hidden" alt=""/>

            <div className="h-full w-[80%] mx-auto flex flex-col items-center pt-12  gap-8 relative">
                <img src={courier} className="absolute top-10 left-0 max-[1024px]:hidden" width="150px"  alt=""/>
                
                <button
                className="text-[#EF8038] font-semibold text-[18px] font-ROBOTO px-9 rounded-md py-2 border shadow-[#EF8038] shadow-sm">Courier</button>

                    <p data-aos="fade-up" className="text-[40px] font-ROBOTO font-semibold max-[640px]:text-[27px] pb-16">Our Courier Services For you</p>

                <div className="pb-8 flex flex-row gap-20 max-[1024px]:gap-10 max-[768px]:flex-col max-[768px]:mx-auto max-[768px]:items-center">
                    <div className="flex flex-col gap-3  justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[100%] border rounded-md">
                        <img src={courierservice1} className="" height="223px" alt=""/>
                        
                        <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px] pl-8 max-[1280px]:pl-2">Door to Door Service</p>
                        
                        <p  data-aos="fade-up" className="pb-6 text-[15px] text-[grey] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-2">
                            Door to Door gescribes a shipping method where parcel is picked up to the door of the sender and deliverd to the 
                            reciver door.The shipment is collected from the sender and taken to the reciver.</p>
                       
                    </div>

                    <div className="flex flex-col gap-3 justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[100%] border rounded-md">
                        <img src={courierservice2} className="" height="223px" alt=""/>

                        <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px] pl-8 max-[1280px]:pl-2">Express parcel services</p>
                        
                        <p data-aos="fade-up" className="pb-6 text-[grey] text-[15px] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                            Our express parcel service available over 6000+ pincode in india . I can be handle each shipment up to 25 kg.
                            From same-day pickup to same-day ,next-day and 48 to 96 hours deliveries for all over india .
                            We transport your parcel safely via autherised courier partner.</p>
                       
                    </div>

                    <div className="flex flex-col gap-3  justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[100%] border rounded-md">
                        <img src={courierservice3} className="" height="223px" alt=""/>
                        
                        <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px] pl-8 max-[1280px]:pl-2">Air carg</p>
                        
                        <p data-aos="fade-up" className="pb-6 text-[grey] text-[15px] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                            Pickupkart is one of the best air cargo services in karad. Our air courier partner ensure the delivery of critical 
                            & priority shipment such as medicine and vaccines based on the customer needs .We always aim to provide quickest and most secure way to deliver goods anywhere in the country .</p>
                       
                    </div>
                </div>

                <div className="flex pb-28 flex-row gap-20 max-[1024px]:gap-10 max-[768px]:flex-col max-[768px] max-[768px]:mx-auto max-[768px]:items-center">
                    <div className="flex flex-col gap-3  justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[100%] border rounded-md">
                        <img src={courierservice4} className="" height="223px" alt=""/>
                        
                        <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px] pl-8 max-[1280px]:pl-2">LTL (less-than truck load)</p>
                        
                        <p data-aos="fade-up" className="pb-6 text-[grey] text-[15px] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                            Pickupkart provide LTL freignt (bulk load) service for personal,Retailers ,E-commerce,Seller,Companies etc.</p>
                       
                    </div>

                    <div className="flex flex-col gap-3 justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[100%] border rounded-md">
                        <img src={courierservice5} className="" height="223px" alt=""/>
                        
                        <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px] pl-8 max-[1280px]:pl-2">Ware House</p>
                        
                        <p data-aos="fade-up" className="pb-6 text-[grey] text-[15px] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                            Secure delivery consists in reinforcing delivery procedures within each and every link.</p>
                    </div>

                    <div className="flex flex-col gap-3 justify-start w-[27%] max-[1024px]:w-[30%] max-[768px]:w-[100%] border rounded-md">
                        <img src={courierservice6} className="" height="223px" alt=""/>
                        
                        <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px] pl-8 max-[1280px]:pl-2">Supply Chain</p>
                        
                        <p data-aos="fade-up" className="pb-6 text-[grey] text-[15px] font-ROBOTO font-medium leading-relaxed opacity-60 pl-8 pt-4 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                            Collaboratively customize front-end materials with standardized infomediaries</p>
                       
                    </div>
                </div>


            </div>
        </section>


        {/* <!-- Hero-3 --> */}
        <section className="w-full h-full bg-[url('')] bg-cover img6">
            <div  className="h-full w-[80%] mx-auto flex flex-col items-center pt-12 gap-8 relative pb-20">
                                
                <button
                className="text-[#EF8038] font-semibold text-[18px] font-ROBOTO px-9 rounded-md py-2 border shadow-[#EF8038] shadow-sm">Delivery</button>

                    <p data-aos="fade-up" className="text-[40px] font-ROBOTO font-semibold max-[640px]:text-[27px] pb-10">Our Delivery Services For you</p>

                    <div className="flex w-full flex-row gap-8 mx-auto items-center max-[768px]:flex-col max-[500px]:ml-[-15px] max-[425px]:ml-[-25px]">
                        <div className="w-[350px] h-[270px] flex flex-col shadow-md items-center mx-auto gap-4 bg-white pt-4 rounded-md border ">
                            <img src={residentialmovers} alt=""/>
                            <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Residential Movers</p>
                        
                            <p data-aos="fade-up" className="pb-6 text-[grey] text-[15px] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Secure delivery consists in reinforcing delivery procedures within each and every link.</p>
                        </div>

                        <div className="w-[350px] h-[270px] flex flex-col items-center mx-auto gap-4  bg-white pt-7 rounded-md border 
                         shadow-md">
                            <img src={packinggoods} alt=""/>
                            <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Packaging Goods</p>
                        
                            <p data-aos="fade-up" className="pb-6 text-[grey] text-[15px] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Secure delivery consists in reinforcing delivery procedures within each and every link.</p>
                        </div>

                        <div className="w-[350px] h-[270px] flex flex-col items-center mx-auto gap-4  bg-white pt-7 rounded-md border 
                         shadow-md">
                            <img src={storagesolution} alt=""/>
                            <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Storage Solution</p>
                        
                            <p data-aos="fade-up" className="pb-6 text-[15px] text-[grey] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Secure delivery consists in reinforcing delivery procedures within each and every link.</p>
                        </div>

                    </div>

                    <div className="flex flex-row gap-8 mx-auto w-full max-[768px]:flex-col items-center max-[500px]:ml-[-15px] max-[425px]:ml-[-25px]">
                        <div className="w-[350px] h-[270px] flex flex-col items-center mx-auto gap-4  bg-white pt-7 rounded-md border 
                         shadow-md">
                            <img src={courierfast} alt=""/>
                            <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Furniture Assets</p>
                        
                            <p data-aos="fade-up" className="pb-6 text-[15px] text-[grey] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Secure delivery consists in reinforcing delivery procedures within each and every link.</p>
                        </div>

                        <div className="w-[350px] h-[270px] flex flex-col items-center mx-auto gap-4  bg-white pt-7 rounded-md border shadow-md">
                            <img src={machinery} alt=""/>
                            <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Machinery Items</p>
                        
                            <p data-aos="fade-up" className="pb-6 text-[15px] text-[grey] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Secure delivery consists in reinforcing delivery procedures within each and every link.</p>
                        </div>

                        <div className="w-[350px] h-[270px] flex flex-col items-center mx-auto gap-4  bg-white pt-7 rounded-md border 
                         shadow-md">
                            <img src={documentspaper} alt=""/>
                            <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Documents Papers</p>
                        
                            <p data-aos="fade-up" className="pb-6 text-[15px] text-[grey] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Secure delivery consists in reinforcing delivery procedures within each and every link.</p>
                        </div>

                    </div>
            </div>

        </section>


        {/* <!-- Above Footer --> */}
        <section
        className="w-full h-full bg-[url('')]  bg-cover bg-no-repeat relative img5">
        <img src={van} className="absolute right-0 bottom-0 max-[1200px]:hidden" alt=""/>
      
        <div className="flex flex-row justify-start text-white items-center pt-24 pb-12 max-[1200px]:justify-center max-[768px]:flex-col ">
            <div className="w-[25%] flex  ml-12 flex-row pr-4 max-[1200px]:w-[35%] max-[768px]:w-[70%]">
                <span className="text-5xl text-white  font-bold">1.</span>
                <div className="flex flex-col gap-6 pl-3">
                    <p className="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[16px] pl-2">Apply Online</p>
                        
                    <p className="pb-6 text-[15px] font-ROBOTO font-medium leading-relaxed opacity-70 pl-2 pt-1 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                        Collaboratively customize front-end materials with standardized infomediaries</p>
                </div>
            </div>
            <div className="w-[25%] flex  ml-12 flex-row pr-4 max-[1200px]:w-[35%] max-[768px]:w-[70%]">
                <span className="text-5xl text-white  font-bold">2.</span>
                <div className="flex flex-col gap-6 pl-3">
                    <p className="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[16px] pl-2">Pack</p>
                        
                    <p className="pb-6 text-[15px] font-ROBOTO font-medium leading-relaxed opacity-70 pl-2 pt-1 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                        Collaboratively customize front-end materials with standardized infomediaries</p>
                </div>
            </div>
            <div className="w-[25%] flex  ml-12 flex-row pr-4 max-[1200px]:w-[35%] max-[768px]:w-[70%]">
                <span className="text-5xl text-white  font-bold">3.</span>
                <div className="flex flex-col gap-6 pl-3">
                    <p className="text-[21px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[16px] pl-2">Delivery</p>
                        
                    <p className="pb-6 text-[15px] font-ROBOTO font-medium leading-relaxed opacity-70 pl-2 pt-1 pr-10 max-[1280px]:pr-0 max-[1280px]:pl-1">
                        Collaboratively customize front-end materials with standardized infomediaries</p>
                </div>
            </div>

        </div>
    </section>



    </section>
    </>);
};

export default Services;