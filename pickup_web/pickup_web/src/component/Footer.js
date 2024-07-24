import React from "react";
import { Link } from "react-router-dom";

// images
import fblogo from "./Images/fb-logo.png";
import instalogo from "./Images/insta-logo.png";
import pickupkart1 from "./Images/pick.png";
import twitterlogo from "./Images/twitter-logo.png";
import messagediv from "./Images/message-div.png";
import bottompersonbg from "./Images/bottom-person-bg.png";
import personimgbottom from "./Images/person-img-bottom.png";
import forwardarrow from "./Images/forward-arrow.png";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";


// images end


const Footer = () => {

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
            {/* <!-- Footer Section --> */}
            <section>




                {/* <!-- Bottom part --> */}
                <Box p={3} sx={{backgroundColor:"#F6FEFF"}}>
                    <Box>
                        <Grid container textAlign={"center"}>
                           
                            <Grid item xs={12}><TextField size="small" placeholder="Your Email" /><Button  variant="contained" color="primary">Subscribe - <i className="fa-solid fa-truck"></i></Button></Grid>
                        </Grid>
                    </Box>
                    <Grid container p={3} mt={3}>
                        <Grid item p={2} xs={6} md={4} lg={4}>

                            <Box display={"flex"} justifyContent={"center"}>
                                <img src={pickupkart1} width={"200px"} />  </Box>
                            <Typography fontFamily={"dosis"} color={"gray"} sx={{fontSize:{md:"15px",xs:"2.5vw"},px:{md:10}}}  textAlign={"center"}> We make the things you need arrive on time. You focus on what you need to do.</Typography>


                        </Grid>
                        <Grid item p={2} textAlign={"center"}  xs={6} md={4} lg={4}>
                            <div className="flex  flex-col gap-1 ">
                                <Link color={"gray"} onClick={scrollTop} className="text-[18px] font-[dosis] text-[gray] font-medium font-ROBOTO" to="/">Home</Link>
                                <Link onClick={scrollTop} className="text-[18px] text-[gray]  font-[dosis] font-medium font-ROBOTO" to="/About">About Us</Link>
                                <Link onClick={scrollTop} className="text-[18px] text-[gray] font-[dosis] font-medium font-ROBOTO" to="/Services">Services</Link>
                                <Link onClick={scrollTop} className="text-[18px] text-[gray] font-[dosis] font-medium font-ROBOTO" to="/Contact">Contact Us</Link>
                            </div>


                        </Grid>
                        <Grid item p={2} display={"flex"} justifyContent={"center"} xs={12} md={4} lg={4}>
                            <Box sx={{lineHeight:"30"}}>
                                <Box mt={1}>
                                    <Typography fontFamily={"dosis"} color={"gray"} lineHeight={2}>
                                        <i className="fa-solid p-2 text-[#0260AA] fa-location-dot"></i> Karad
                                    </Typography>
                                </Box>
                                <Box mt={1}>
                                    <Typography fontFamily={"dosis"} color={"gray"} lineHeight={2}>
                                        <i className="fa-solid p-2 text-[#0260AA] fa-phone"></i> +917249174747
                                    </Typography>
                                </Box>
                                <Box mt={1}>
                                    <Typography fontFamily={"dosis"} color={"gray"} lineHeight={2}>
                                        <i className="fa-solid p-2 text-[#0260AA] fa-envelope"></i> contact@pickupkart.in
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} md={4} >
                    <Box display={"flex"} justifyContent={"center"} >
                        <Typography color={"gray"} fontFamily={"Dosis"} pr={3}>FOLLOW US: </Typography>
                        <Button  variant="contained" ><i className="fa-brands fa-facebook-f"></i></Button>
                        <Button variant="contained" sx={{mx:1}}><i className="fa-brands fa-instagram"></i></Button>
                        <Button variant="contained"><i className="fa-brands fa-twitter"></i></Button>
                    </Box></Grid> <Grid item xs={12} md={4} ></Grid> <Grid item xs={12} md={4} ></Grid> <Grid item xs={12} md={4} ></Grid> </Grid>

                </Box>
                <div className="text-white flex justify-center items-center h-[40px] bg-[#0260AA] z-[500]  font-ROBOTO text-[12px]   max-[1024px]:pl-[10rem] max-[768px]:pl-[4rem] max-[640px]:pl-[1rem]">
                           <Grid container px={2}><Grid item xs={12} md={4} textAlign={"center"}> &copy; 2023 Venus Express & Logistics</Grid><Grid item xs={12} md={4}></Grid> <Grid item xs={12} md={4} textAlign={"center"}> Designed & developed by 5Tech Lab</Grid></Grid> 
                        </div>



            </section>
        </>
    )
}

export default Footer;