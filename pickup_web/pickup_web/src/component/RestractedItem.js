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
import homedelivery2 from "./Images/home delivery2.png";



const RestractedItem = () => {

    AOS.init({
        duration: 600,
        delay: 350,
    });
    return (<>
        <Nav />
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
                            Restricted Items</p>
                        <p className="font-ROBOTO text-[18px] font-semibold text-white"><span className="text-[#EF8038]">Home {'>'}
                        </span> Restricted Items</p>
                    </div>
                </div>
            </section>


            {/* <!-- Hero-3 --> */}
            <section className="w-full h-full bg-[url('')] bg-cover img6">
                <div className="h-full w-[80%] mx-auto flex flex-col items-center pt-12 gap-8 relative pb-20">


                    {/* <button  className="text-[#EF8038] font-semibold text-[18px] font-ROBOTO px-9 rounded-md py-2 border shadow-[#EF8038] shadow-sm">Delivery</button> */}

                    <p data-aos="fade-up" className="text-[40px] font-ROBOTO font-semibold max-[640px]:text-[27px] pb-10">Restricted items list</p>

                    <div className="flex w-full flex-row gap-8 mx-auto items-center max-[768px]:flex-col max-[500px]:ml-[-15px] max-[425px]:ml-[-25px]">
                        <div className="w-[350px] h-[270px] flex flex-col shadow-md items-center mx-auto gap-4 bg-white pt-4 rounded-md border ">
                            <img src={residentialmovers} alt="" />
                            <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Jewellery</p>

                            <p data-aos="fade-up" className="pb-6 text-[grey] text-[15px] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Precious stones, ornaments gems and jewellery.</p>
                        </div>
                        <div className="w-[350px] h-[270px] flex flex-col items-center mx-auto gap-4  bg-white pt-7 rounded-md border 
                         shadow-md">
                            <img src={packinggoods} alt="" />
                            <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Currency</p>

                            <p data-aos="fade-up" className="pb-6 text-[grey] text-[15px] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Uncrossed(bearer cheques) drafts/cheques, currency and coins.</p>
                        </div>
                        <div className="w-[350px] h-[270px] flex flex-col items-center mx-auto gap-4  bg-white pt-7 rounded-md border 
                         shadow-md">
                            <img src={storagesolution} alt="" />
                            <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Poison</p>

                            <p data-aos="fade-up" className="pb-6 text-[15px] text-[grey] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Poision, harmful liquids and other similar substances.</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-8 mx-auto w-full max-[768px]:flex-col items-center max-[500px]:ml-[-15px] max-[425px]:ml-[-25px]">
                        <div className="w-[350px] h-[270px] flex flex-col items-center mx-auto gap-4  bg-white pt-7 rounded-md border 
                         shadow-md">
                            <img src={courierfast} alt="" />
                            <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Explosives</p>

                            <p data-aos="fade-up" className="pb-6 text-[15px] text-[grey] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Firearms, explosives and military equipment.</p>
                        </div>

                        <div className="w-[350px] h-[270px] flex flex-col items-center mx-auto gap-4  bg-white pt-7 rounded-md border shadow-md">
                            <img src={machinery} alt="" />
                            <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Paint</p>

                            <p data-aos="fade-up" className="pb-6 text-[15px] text-[grey] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Oil-based paint, Thinners (flammable liquids) and Industrial solvents.</p>
                        </div>

                        <div className="w-[350px] h-[270px] flex flex-col items-center mx-auto gap-4  bg-white pt-7 rounded-md border 
                         shadow-md">
                            <img src={documentspaper} alt="" />
                            <p data-aos="fade-up" className="text-[18px] font-ROBOTO font-bold -mb-4 max-[640px]:text-[15px]">Chemicals</p>

                            <p data-aos="fade-up" className="pb-6 text-[15px] text-[grey] font-ROBOTO font-medium text-center leading-relaxed opacity-70 pl-8 pt-4 pr-10 max-[1280px]:pr-1 max-[1280px]:pl-1">
                                Insecticides, Garden chemicals (fertilizers, poisons).</p>
                        </div>

                    </div>
                </div>

            </section>

            <p data-aos="fade-up" className="text-[40px] mt-10 text-center font-ROBOTO font-semibold max-[640px]:text-[27px] ">Sending restrictions</p>


            <div data-aos="fade-up" className="flex flex-row pl-[4%] pr-14 max-[768px]:pl-0  mt-28  xl:gap-25 gap-32 max-[1024px]:w-full max-[768px]:w-[85%]  max-[1280px]:gap-10 max-[1024px]:pl-[10%] justify-between items-start mx-auto w-full relative">
                <div>
                    <div data-aos="fade-up" className="w-[100%] shadow-md rounded-lg bg-[#F9F9F9] pl-10 pt-14 pb-12  relative max-[768px]:p-9 max-[768px]:w-[100%] mb-10">
                        <p data-aos="fade-up" className="text-[28px] font-ROBOTO pb-2 font-extrabold max-[640px]:text-[24px]">Fragile and personal / irreplaceable items</p>
                        <p data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">If you need to send appliances or electronics, Movery can help. Just remember that some items won't be covered for compensation if they're lost or damaged. Make sure you note down any prohibited items too before you try to book a delivery.</p>
                        <div data-aos="fade-up" className="flex flex-row gap-6 pt-6">
                            <div className="w-[50px] h-[50px] rounded-full  bg-[#EF8038] flex items-center justify-center">
                                <i className="fas fa-inr text-white"></i>                               </div>
                            <div className="w-[78%] flex flex-col gap-3]">
                                <p data-aos="fade-up" className="text-[21px] font-ROBOTO font-bold max-[640px]:text-[20px] ">Excluded from compensation</p>
                                <ui> 
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        All items that have been badly packaged.
                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Ceramic or composite items of any description including without limitation mirrored items, crystal, ceramics, porcelain, plaster, marble, china, stone, slate, resin, granite, concrete (or any item containing these materials)
                                    </li>     <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Fossils, stones, marble, stoneware or any stone derivative

                                    </li>     <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Glass items or fragile items that contain glass parts including kitchen appliances
                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Lighting equipment such as vehicle lights and light bulbs

                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Cameras, lenses, spectacles and optical equipment such as telescopes or binoculars

                                    </li>  <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Liquids or items contained in glass or ceramics – please note ALL liquids are prohibited

                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Paintings, prints or canvases
                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Musical instruments including their cases or suitcases when used as external packaging

                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Articles made largely or wholly of gold, silver or other precious metals

                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Kitchen appliances such as white goods or electronic equipment with fragile/glass parts

                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Resin, amber and composite items
                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Plants, seeds, flowers and plant derivatives

                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Antiques - objects over 100 years old

                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Furniture - unless flat packed and safely packaged

                                    </li>
                                </ui>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="flex flex-row gap-6 pt-4 ">
                            <div className="w-[50px] h-[50px] rounded-full bg-[#EF8038] flex items-center justify-center">
                                <i className="fa-solid fa-handshake text-white"></i>                                </div>
                            <div className="w-[80%] flex flex-col pt-2 gap-3">
                                <p data-aos="fade-up" className="text-[21px] text-red-600 font-ROBOTO font-bold max-[640px]:text-[20px]">Restricted items, not permitted in the network – do not send</p>
                                <ui>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        All liquids are prohibited – including gels, creams, pastes, lotions, oils, perfumes, aftershaves, paints, inks, enamels and varnishes including nail varnish
                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Pressurised containers – such as aerosols, oxygen tanks or fire extinguishers
                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Scripts or subscription certificates
                                    </li>
                                </ui>
                            </div>
                        </div>

                        {/* <button
                            className="w-[155px] h-[44px] bg-[#EF8038] text-white text-[16px] rounded-md absolute bottom-10 right-8">Get - Set - Ship</button> */}
                    </div>
                </div>
                <div>
                    <div data-aos="fade-up" className="w-[100%] shadow-md rounded-lg bg-red-100 pl-10 pt-14 pb-12  relative max-[768px]:p-9 max-[768px]:w-[100%]">
                        <p data-aos="fade-up" className="text-[28px] font-ROBOTO pb-2 font-extrabold max-[640px]:text-[24px]">Appliances, mechanical items and/or electronics</p>
                        <p data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">If you need to send appliances or electronics, Movery can help. Just remember that some items won't be covered for compensation if they're lost or damaged. Make sure you note down any prohibited items too before you try to book a delivery.</p>
                        <div data-aos="fade-up" className="flex flex-row gap-6 pt-6">
                            <div className="w-[50px] h-[50px] rounded-full  bg-[#EF8038] flex items-center justify-center">
                                <i className="fas fa-inr text-white"></i>                               </div>
                            <div className="w-[78%] flex flex-col gap-3]">
                                <p data-aos="fade-up" className="text-[21px] font-ROBOTO font-bold max-[640px]:text-[20px] ">Excluded from compensation</p>
                                <ui>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Cameras, lenses, spectacles and optical equipment such as telescopes or binoculars
                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Glass items or fragile items that contain glass parts including kitchen appliances
                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Kitchen appliances such as white goods, electronic equipment with fragile/glass parts
                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Laptops and computers , TVs and monitors
                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Lighting equipment such as vehicle lights and light bulbs
                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Internal damage to appliances, mechanical items or electronics is excluded from compensation
                                    </li>
                                </ui>


                            </div>
                        </div>

                        <div data-aos="fade-up" className="flex flex-row gap-6 pt-4 ">
                            <div className="w-[50px] h-[50px] rounded-full bg-[#EF8038] flex items-center justify-center">
                                <i className="fa-solid fa-handshake text-white"></i>                                </div>
                            <div className="w-[80%] flex flex-col pt-2 gap-3">
                                <p data-aos="fade-up" className="text-[21px] text-red-600 font-ROBOTO font-bold max-[640px]:text-[20px]">Restricted items, not permitted in the network – do not send</p>
                                <ui>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Batteries such as lithium batteries, unless included with the equipment they power
                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Gardening and household tools, unless they are properly protected
                                    </li>
                                    <li data-aos="fade-up" className="text-[15px] font-ROBOTO font-medium text-[grey] max-[640px]:text-[13px]">
                                        Vehicle parts – parts which are over our weight limit (15kg), that are outside of our dimension limits, or contain liquids
                                    </li>
                                </ui>
                            </div>
                        </div>

                        {/* <button
                            className="w-[155px] h-[44px] bg-[#EF8038] text-white text-[16px] rounded-md absolute bottom-10 right-8">Get - Set - Ship</button> */}
                    </div>
                </div>

                {/* <img src={homedelivery2} className="xl:w-[40%]  max-[1280px]:w-[35%] max-[1024px]:hidden" alt="" /> */}
            </div>


            {/* <!-- Above Footer --> */}
            <section
                className="w-full h-full bg-[url('')]  bg-cover bg-no-repeat relative img5">
                <img src={van} className="absolute right-0 bottom-0 max-[1200px]:hidden" alt="" />

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

export default RestractedItem;