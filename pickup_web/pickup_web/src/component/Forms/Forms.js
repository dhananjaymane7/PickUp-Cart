import React, { useEffect } from "react";
import cross from "../Images/cross.png";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FormHelperText, Grid, Paper } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from "@emotion/styled";


const Forms = ({ pickupkartCargo, pickupkartGround, pickupkartStd, setForms }) => {

    //data from postal api
    const [pickAd, setPickAd] = useState();
    const [dropAd, setDropAd] = useState();
    //data from postal api end

    //postal api url
    const postalUrl = "https://api.postalpincode.in/pincode/";


    //address details
    const dAAddress = JSON.parse(sessionStorage.getItem('deliveryDetail'));
    const pAAddress = JSON.parse(sessionStorage.getItem('pickDetail'));
    const {
        dcontactname = "",
        dcontactno = "",
        demail = "",
        dhouse = "",
        darea = "",
        dpin = "",
        dcity = "",
        dstate = "",
        ddistrict=""
    } = dAAddress || {};

    const [dAddress, setdropaddress] = useState({
        dcontactname,
        dcontactno,
        demail,
        dhouse,
        darea,
        dpin,
        dcity,
        dstate,
        ddistrict
    });

    const {
        pcontactname = "",
        pcontactno = "",
        pemail = "",
        phouse = "",
        parea = "",
        ppin = "",
        pcity = "",
        pstate = ""
    } = pAAddress || {};

    const [pAddress, setPickaddress] = useState({
        pcontactname,
        pcontactno,
        pemail,
        phouse,
        parea,
        ppin,
        pcity,
        pstate
    });


    ////empty field check
    const allValuesPresentD = Object.values(dAddress).every((value) => Boolean(value));
    const allValuesPresentP = Object.values(pAddress).every((value) => Boolean(value));

    if (allValuesPresentD == true && allValuesPresentP == true) {
        setForms(true);
    }
    //empty field check end

    const handleDropChange = (e) => {
        setdropaddress(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };
    const handlePickChange = (e) => {
        setPickaddress(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };

    //address details end

    //service api
    // const [servicePin, setServicePin] = useState([]);
    const [ppinAvailable, setPPinAvailable] = useState(true)
    const [dpinAvailable, setDPinAvailable] = useState(true)

    // const serviceUrl = "https://pickupkart.in/api/service"
    // useEffect(() => {
    //     axios.get(serviceUrl)
    //         .then((res) => {
    //             const { data } = res;
    //             setServicePin(data.map((item) => {
    //                 return item.Pincode
    //             }))
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         })
    // }, [])
    //service api end
    const navigate = useNavigate();


    //handle submit button
    const handleDrop = (event) => {
        event.preventDefault();

        var deliveryDetail = { dcontactname: dAddress.dcontactname, dcontactno: dAddress.dcontactno, demail: dAddress.demail, dhouse: dAddress.dhouse, darea: dAddress.darea, dpin: dAddress.dpin, dcity: dAddress.dcity, dstate: dAddress.dstate,ddistrict:dAddress.ddistrict }
        window.sessionStorage.setItem("deliveryDetail", JSON.stringify(deliveryDetail));
        if (allValuesPresentD == true) {
            setDIsAvailable(true);
        }
        else {
            alert("please fill Delivery Details")
        }
    }
    const handlePick = (event) => {
        event.preventDefault();

        var pickDetail = { pcontactname: pAddress.pcontactname, pcontactno: pAddress.pcontactno, pemail: pAddress.pemail, phouse: pAddress.phouse, parea: pAddress.parea, ppin: pAddress.ppin, pcity: pAddress.pcity, pstate: pAddress.pstate }
        window.sessionStorage.setItem("pickDetail", JSON.stringify(pickDetail));
        if (allValuesPresentP == true) {
            setPIsAvailable(true);
        } else {
            alert("please fill Pickup Details")
        }
    }


    //handle submit button end


    //empty field check
    const [isPAvailable, setPIsAvailable] = useState(false);
    const [isDAvailable, setDIsAvailable] = useState(false);
    //empty field check end

    //handle postal api
    const handleNext1 = async () => {
        const toBeChecked = num => num === Number(dAddress.dpin)

        const checkStd = await pickupkartStd?.findIndex(toBeChecked);
        const checkGround = await pickupkartGround?.findIndex(toBeChecked);
        const checkCargo = await pickupkartCargo?.findIndex(toBeChecked);
        if (checkStd!==-1 || checkGround!==-1 || checkCargo!==-1) {
            setDPinAvailable(true)
            const [dropRes] = await Promise.all([

                axios.get(`${postalUrl}${Number(dAddress.dpin)}`)
            ]);

            const dropData = dropRes.data;
            const office = dropData[0];
            const post = office.PostOffice[0];
            const city = post.Block
            const state = post.State
            const district = post.District
            setdropaddress(prevState => {
                return { ...prevState, dstate: state, dcity: city,ddistrict:district }
            });

            setDropAd(dropData);
            

            const dAd = dropData[0].PostOffice;

            window.sessionStorage.setItem('dropkAd', JSON.stringify(dAd));
        } else {
            setDPinAvailable(false)
        }

    };

  


    const handleNext = async () => {
        const toBeChecked = num => num === Number(pAddress.ppin)


        const checkStd = await pickupkartStd.findIndex(toBeChecked);
        const checkGround = await pickupkartGround.findIndex(toBeChecked);
        const checkCargo = await pickupkartCargo.findIndex(toBeChecked);


        if (checkStd !== -1 || checkGround !== -1 || checkCargo !== -1) {
            setPPinAvailable(true)
            const [pickRes] = await Promise.all([
                axios.get(`${postalUrl}${Number(pAddress.ppin)}`),

            ]);

            const pickData = pickRes.data;
            const office = pickData[0];
            const post = office.PostOffice[0];
            const city = post.Block
            const state = post.State
            const district = post.District
            setPickaddress(prevState => {
                return { ...prevState, pstate: state, pcity: city }
            });

            setPickAd(pickData)
            const pAd = pickData[0].PostOffice;

            window.sessionStorage.setItem('pickAd', JSON.stringify(pAd));

        } else {
            setPPinAvailable(false)
        }

    };


  
    //handle postal api end

    return (
        <>
            {/* address fields */}

            <Grid container sx={{ p: { md: '30px', xs: "5px" } }}>
                <Grid item display={"Flex"} justifyContent={"center"} md={6}>
                    <div className="mb-10 mt-10 md:mt-0">
                        <Accordion sx={{ p: 1, backgroundColor: "transparent" }} elevation={0}>
                            <AccordionSummary

                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{
                                    textAlign: "center",
                                    backgroundColor: "#EF8038",
                                    color: "#fff",
                                    borderRadius: "20px",
                                    boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.2)",
                                    '& .MuiAccordionSummary-expandIcon': {
                                        color: "#fff",
                                    },
                                    '&:hover': {
                                        backgroundColor: "#D76B1C",
                                    },
                                }}
                            >
                                <Typography fontFamily={'Dosis'}>Pickup Address</Typography>
                            </AccordionSummary >
                            <AccordionDetails>
                                <section className="w-full h-full mt-3 ">
                                    <div className="max-w-[480px] mx-auto bg-[#F8FEFF] shadow-[#F0F5F6] shadow-lg border rounded-lg pb-8">
                                        <div className="h-[45px] flex flex-row justify-center pl-5 pr-5 items-center rounded-t-md">
                                            <p className=" ">Add <span className="text-[#0260AA] font-bold"> Pickup </span>  Address</p>

                                        </div>

                                        <Box
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                            textAlign={"center"}
                                        >
                                            <div className="mt-3">
                                                <TextField size="small" onChange={handlePickChange} id="outlined-basic" label="Contact Name" variant="outlined" name="pcontactname" value={pAddress.pcontactname} />
                                                <TextField onChange={handlePickChange}
                                                    size="small"
                                                    id="outlined-required"
                                                    label="Mobile"
                                                    name="pcontactno"
                                                    value={pAddress.pcontactno}
                                                />
                                                <TextField onChange={handlePickChange}
                                                    size="small"
                                                    id="outlined-required"
                                                    label="Email Address"
                                                    name="pemail"
                                                    value={pAddress.pemail}
                                                />
                                                <TextField onChange={handlePickChange}
                                                    size="small"
                                                    id="outlined-required"
                                                    label="Flat No., Apartment, Street"
                                                    name="phouse"
                                                    value={pAddress.phouse}
                                                />

                                                <TextField onChange={handlePickChange} onBlur={handleNext}
                                                    id="outlined-number"
                                                    label="Pickup Pincode" size="small"
                                                    type="number"
                                                    name="ppin"
                                                    value={pAddress.ppin}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}

                                                />
                                                {!ppinAvailable && (
                                                    <FormHelperText style={{ color: 'red', display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                                        Pincode not serviceable
                                                    </FormHelperText>
                                                )}
                                                {pickAd ? (
                                                    <TextField onChange={handlePickChange}
                                                        id="outlined-select-currency"
                                                        select size="small"
                                                        label="Pickup Area"
                                                        name="parea"
                                                        helperText="Please select your Pickup City"
                                                        value={pAddress.parea}
                                                        children={pickAd[0].PostOffice.map((option) => (
                                                            <MenuItem key={option.value} value={option.Name}>
                                                                {option.Name}
                                                            </MenuItem>
                                                        ))}
                                                    >
                                                    </TextField>
                                                ) : (<TextField onChange={handlePickChange}
                                                    id="outlined-select-currency"
                                                    size="small"
                                                    value={pAddress.parea}
                                                    label="Pickup Area"
                                                    name="parea"
                                                    helperText="Please select your Pickup City"
                                                >
                                               
                                                </TextField>)
                                                }
                                                <TextField onChange={handlePickChange}
                                                    disabled size="small"
                                                    value={pAddress.pcity}
                                                    label="City"
                                                    name="pcity"
                                                    id="filled-read-only-input"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    variant="filled"
                                                />
                                                <TextField onChange={handlePickChange}
                                                    disabled size="small"
                                                    value={pAddress.pstate}
                                                    label="State"
                                                    name="pstate"
                                                    id="filled-read-only-input"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    variant="filled"
                                                />


                                            </div>
                                        </Box>
                                        <div className="flex justify-center  items-center">
                                            {isPAvailable ? (
                                                <button
                                                    className="text-green-500 w-[460px]  max-[475px]:text-[13px] max-[475px]:w-[150px] max-[1024px]:w-[255px] max-[475px]:h-[40px] h-[49px] bg- 
                                [#FFFFFF] text-black text-[16px] font-semibold font-ROBOTO rounded-lg mt-5 bg-[#EDEDED]"

                                                >
                                                    Submitted
                                                </button>
                                            ) : (
                                                <button type="submit"
                                                    className="w-[460px]  max-[475px]:text-[13px] max-[475px]:w-[150px] max-[1024px]:w-[255px] max-[475px]:h-[40px] h-[49px] bg- 
                                [#FFFFFF] text-black text-[16px] font-semibold font-ROBOTO rounded-lg mt-5 bg-[#EDEDED]"
                                                    onClick={handlePick}
                                                >
                                                    Submit
                                                </button>
                                            )}
                                        </div>


                                    </div>
                                </section>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ p: 1, backgroundColor: "transparent" }} elevation={0}>
                            <AccordionSummary

                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                sx={{
                                    textAlign: "center",
                                    backgroundColor: "#0260AA",
                                    color: "#fff",
                                    borderRadius: "20px",
                                    boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.2)",
                                    '& .MuiAccordionSummary-expandIcon': {
                                        color: "#fff",
                                    },
                                    '&:hover': {
                                        backgroundColor: " #003E7D.",
                                    },

                                }}
                            >
                                <Typography fontFamily={'Dosis'}>Delivery Address</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <section className="w-full h-full mt-3">
                                    <div className="max-w-[480px] mx-auto h-full border rounded-lg bg-[#F8FEFF] shadow-[#F0F5F6] shadow-lg pb-8">
                                        <div className="h-[45px] flex flex-row justify-center pl-5 pr-5 text-center items-center rounded-t-md ">
                                            <p className="text-center ">Add<span className="text-[#EF8038] font-bold"> Delivery</span> Address</p>

                                        </div>

                                        <Box
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                            textAlign={"center"}
                                        >
                                            <div className="mt-3">
                                                <TextField size="small" onChange={handleDropChange} id="outlined-basic" label="Contact Name" variant="outlined" name="dcontactname" value={dAddress.dcontactname} />
                                                <TextField onChange={handleDropChange}
                                                    size="small"
                                                    id="outlined-required"
                                                    label="Mobile"
                                                    name="dcontactno"
                                                    value={dAddress.dcontactno}
                                                />
                                                <TextField onChange={handleDropChange}
                                                    size="small"
                                                    id="outlined-required"
                                                    label="Email Address"
                                                    name="demail"
                                                    value={dAddress.demail}
                                                />
                                                <TextField onChange={handleDropChange}
                                                    size="small"
                                                    id="outlined-required"
                                                    label="Flat No., Apartment, Street"
                                                    name="dhouse"
                                                    value={dAddress.dhouse}
                                                />

                                                <TextField onChange={handleDropChange} onBlur={handleNext1}
                                                    id="outlined-number" size="small"
                                                    label="Delivery Pincode"
                                                    type="number"
                                                    name="dpin"
                                                    value={dAddress.dpin}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                                {!dpinAvailable && (
                                                    <FormHelperText style={{ color: 'red', display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                                        Pincode not serviceable
                                                    </FormHelperText>
                                                )}
                                                {dropAd ? (
                                                    <TextField onChange={handleDropChange}
                                                        id="outlined-select-currency"
                                                        select size="small"
                                                        label="Delivery Area"
                                                        name="darea"
                                                        helperText="Please select your delivery Area"
                                                        value={dAddress.darea}
                                                        children={dropAd[0].PostOffice.map((option) => (
                                                            <MenuItem key={option.value} value={option.Name}>
                                                                {option.Name}
                                                            </MenuItem>))}
                                                    >

                                                    </TextField>) : (<TextField onChange={handleDropChange}
                                                        id="outlined-select-currency"
                                                        size="small"
                                                        value={dAddress.darea}
                                                        label="Delivery Area"
                                                        name="darea"
                                                        helperText="Please select your Delivery Area"
                                                    >
                                                  
                                                    </TextField>)
                                                }
                                                <TextField onChange={handleDropChange}
                                                    disabled size="small"
                                                    value={dAddress.dcity}
                                                    label="City"
                                                    name="dcity"
                                                    id="filled-read-only-input"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    variant="filled"
                                                />
                                                <TextField onChange={handleDropChange}
                                                    disabled size="small"
                                                    value={dAddress.dstate}
                                                    label="State"
                                                    name="pstate"
                                                    id="filled-read-only-input"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    variant="filled"
                                                />


                                            </div>
                                        </Box>

                                        <div className="flex justify-center  items-center">
                                            {isDAvailable ? (
                                                <button
                                                    className="text-green-500 w-[460px]  max-[475px]:text-[13px] max-[475px]:w-[150px] max-[1024px]:w-[255px] max-[475px]:h-[40px] h-[49px] bg- 
                                [#FFFFFF] text-black text-[16px] font-semibold font-ROBOTO rounded-lg mt-5 bg-[#EDEDED]"

                                                >
                                                    Submitted
                                                </button>
                                            ) : (
                                                <button
                                                    className="w-[460px]  max-[475px]:text-[13px] max-[475px]:w-[150px] max-[1024px]:w-[255px] max-[475px]:h-[40px] h-[49px] bg- 
                                [#FFFFFF] text-black text-[16px] font-semibold font-ROBOTO rounded-lg mt-5 bg-[#EDEDED]"
                                                    onClick={handleDrop}
                                                >
                                                    Submit
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </section>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box display={"flex"} justifyContent={"center"}>
                        <Paper sx={{ width: { md: "50%", xs: "100%" }, boxShadow: '0px 3px 7px #EBE6DE', p: "10px" }}>
                            <Typography fontFamily={'Dosis'} variant="h5" gutterBottom>Please Note</Typography>
                            <Box mb={2}> <Typography fontFamily={'Dosis'} variant="subtitle2" fontWeight={600}>Restriction</Typography>
                                <Typography fontFamily={'Exo 2'} color={"GrayText"} variant="caption">Please ensure you are not sending any illegal item</Typography>
                            </Box>
                            <Box><Typography fontFamily={'Dosis'} variant="subtitle2" fontWeight={600}>Package Description</Typography>
                                <Typography fontFamily={'Exo 2'} color={"GrayText"} variant="caption">Please enter material details of package like liquid etc.</Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>


            </Grid>






            {/* address fields end */}

        </>
    )
}

export default Forms;