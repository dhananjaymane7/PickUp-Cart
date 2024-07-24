import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { CircularProgress } from '@mui/material';
import { Box, Paper } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, FormHelperText, Grid } from "@mui/material";

const Schedule01 = ({ setSchedule }) => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState('');
    const [isEnter, setEnter] = useState(false)

    const handleDate = (event) => {
        setSelectedDate(event.target.value);


    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedDate && rateCal.deliveryType) {
            window.sessionStorage.setItem("schedule", JSON.stringify(selectedDate));
            window.sessionStorage.setItem("delType", JSON.stringify(rateCal.deliveryType));
            setSchedule(true)
            setEnter(true);
        }
        else {
            alert("please select all the fields")
        }
    }
    const dAddress = JSON.parse(sessionStorage.getItem('deliveryDetail'));
    const pAddress = JSON.parse(sessionStorage.getItem('pickDetail'));
    const packages = JSON.parse(sessionStorage.getItem('package'));
    const schedule = JSON.parse(sessionStorage.getItem('schedule'));
    const price = JSON.parse(sessionStorage.getItem('prices'))
    const [rateCal, setrateCal] = useState({
        deliveryType: "",
    })
    const [deliveryOptionPin, setDelOptPin] = useState();

    const delOptPin = "https://pickupkart.in/api/deliveryOptionPin"
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get(delOptPin)
            .then((res) => {
                const { data } = res;
                setDelOptPin(data);

            })
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);



    },[])
    //service api e

    const [serviceType, setServiceType] = useState({
        isStdAvailable: false,
        isGroundAvailable: false,
        isCargoAvailable: false
    })
    useEffect(() => { checksForOptionsAvailability(); }, [dAddress])
    const checksForOptionsAvailability = () => {
        const toBeChecked = num => num === Number(dAddress.dpin)
        const pickupkartGround = deliveryOptionPin?.pickupkartGround.map(item => item.Pin);
        const pickupkartStd = deliveryOptionPin?.pickupkartStd.map(item => item.Pin);
        const pickupkartCargo = deliveryOptionPin?.pickupkartCargo.map(item => item.Pin);

        if (deliveryOptionPin) {
            const checkStd = pickupkartStd.findIndex(toBeChecked);
            const checkGround = pickupkartGround.findIndex(toBeChecked);
            const checkCargo = pickupkartCargo.findIndex(toBeChecked);
            setServiceType({
                isStdAvailable: checkStd !== -1,
                isGroundAvailable: checkGround !== -1,
                isCargoAvailable: checkCargo !== -1,
            });
        }
    }

    const handleChange1 = (e) => {
        setrateCal(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };



    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex p-3 justify-center  items-center">
                    <div className="border bg-[#F8FEFF] border-grey-200 rounded-lg p-5 max-w-[700px] shadow-lg">
                        <p className="pt-5  pl-2 text-2xl font-[Dosis] text-[#EF8038]">Charges and Pickup Schedule</p><hr />




                        {isLoading ? <Box textAlign={"center"} p={2}><CircularProgress size={24}/> </Box>: <Box textAlign={"center"} >

                          
                                    <Box m={2}>
                                        <FormControl sx={{ pt: 2 }}>

                                            <RadioGroup
                                                onChange={handleChange1}
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="deliveryType"
                                            >
                                                <Box>
                                                    <Grid container><Grid xs={12} md={6} textAlign={"left"}><FormControlLabel  disabled={!serviceType.isStdAvailable} value="stdRate" control={<Radio />} label="Pickupkart Standard" /></Grid>
                                                        <Grid xs={12} md={6}> <TextField
                                                            sx={{ alignSelf: 'end' }}
                                                            id="filled-read-only-input"
                                                            label="Pickupkart Standard"
                                                            disabled={!serviceType.isStdAvailable}
                                                            value={serviceType.isStdAvailable ? price?.stdPrices : "standard Service not available"}
                                                            InputProps={{
                                                                readOnly: true,
                                                            }}
                                                            variant="filled"
                                                        /></Grid></Grid>
                                                    <Grid container pt={2}><Grid xs={12} md={6} textAlign={"left"}><FormControlLabel  disabled={!serviceType.isGroundAvailable} value="groundRate" control={<Radio />} label="Pickupkart Ground" /></Grid>
                                                        <Grid xs={12} md={6}> <TextField
                                                         disabled={!serviceType.isGroundAvailable}
                                                            sx={{ alignSelf: 'end' }}
                                                            id="filled-read-only-input"
                                                            label="Pickupkart Ground"
                                                            value={serviceType.isGroundAvailable ? price?.groundPrices : "standard Service not available"}
                                                            InputProps={{
                                                                readOnly: true,
                                                            }}
                                                            variant="filled"
                                                        /></Grid></Grid>
                                                    <Grid container pt={2}><Grid xs={12} md={6} textAlign={"left"}><FormControlLabel  disabled={!serviceType.isCargoAvailable} value="cargoRate" control={<Radio />} label="Pickupkart Cargo" /></Grid>
                                                        <Grid xs={12} md={6}><TextField
                                                         disabled={!serviceType.isCargoAvailable}
                                                            sx={{ alignSelf: 'end' }}
                                                            id="filled-read-only-input"
                                                            label="Pickupkart Cargo"
                                                            value={serviceType.isCargoAvailable ? price?.cargoPrices : "standard Service not available"}
                                                            InputProps={{
                                                                readOnly: true,
                                                            }}
                                                            variant="filled"
                                                        /></Grid></Grid>
                                                </Box>
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>

                          
                        </Box>}
                        <hr />




                        <div className="flex justify-between p-4 mt-3 text-center pt-3 mb-2">
                            <div className="pt-0 md:p-2"> <p className="text-xl font-[Dosis]">Pickup Schedule:</p></div>
                            <div className="text-center">
                                <input
                                    type="datetime-local"
                                    required
                                    value={schedule}
                                    name="pickupdatetime"
                                    onChange={handleDate}
                                    className="p-2 transition-all duration-200 border border-gray-200 shadow-md rounded-lg font-mullish outline-lightBlue placeholder:text-base max-[475px]:placeholder:text-xs"
                                />

                            </div>
                        </div>

                        <form className="  pl-0 max-[475px]:pl-0 px-1  mb-4">
                            {/* <img src={Vectorright} className="absolute right-7 top-5 max-[1024px]:right-8" alt=""/>  */}


                            {isEnter ? (<div className="flex justify-center">
                                <button
                                    className="w-[133px] max-[475px]:text-[13px] max-[475px]:w-[120px] max-[475px]:h-[40px] h-[40px] bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO  mt-5 rounded-lg mb-4"

                                >
                                    Submitted
                                </button></div>
                            ) : (<div className="flex justify-center">
                                <button type="submit"
                                    className="w-[133px] max-[475px]:text-[13px] max-[475px]:w-[120px] max-[475px]:h-[40px] h-[40px] bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO mt-5 rounded-lg mb-4"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button></div>
                            )}
                        </form>
                    </div>
                </div>
                <div className="lg:flex lg:justify-end p-3 items-center">
                    <Box>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{ backgroundColor: "#0260AA" }}
                            >
                                <Typography fontFamily={"Dosis"} color={"white"}>Order Summary</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="p-2 lg:w-[500px] shadow-lg border border-gray-200 rounded-lg text-white bg-[#0260AA]">
                                    <div className="orderSummary">
                                        <h1 className="text-[30px] font-[Dosis]">Order Summary</h1>
                                        <hr className="mb-5" />
                                        <div className="p-4 font-[Poppins]">
                                            <h5 className="text-[20px]">Address Details:</h5>
                                            <div className="pl-5">
                                                <h6 >
                                                    {pAddress ? (<>   <span className="text-[#EF8038]">Pickup address</span> :<br /> {pAddress.pcontactname},{pAddress.phouse},{pAddress.parea},{pAddress.pcity},{pAddress.pstate},{pAddress.ppin}</>) : (<span></span>)}
                                                </h6>
                                                <h6 className="mt-2">{dAddress ? (<> <span className="text-[#EF8038]">Delivery Address </span>:<br />  {dAddress.dcontactname},{dAddress.dhouse},{dAddress.darea},{dAddress.dcity},{dAddress.dstate},{dAddress.dpin}</>) : (<span></span>)}</h6>
                                            </div>
                                            <div className="mt-4">
                                                <h5 className="text-[20px]">Package Details:</h5>
                                                <h6>
                                                    {packages ? (<> <span className="text-[#EF8038] pl-5">Packge Type</span> : {packages.shiptype}</>) : (<span></span>)}
                                                </h6>
                                                <h6>
                                                    {packages ? (<><span className="text-[#EF8038] pl-5">Packge weight</span> : {packages.weight} {packages.unit}</>) : (<span></span>)}
                                                </h6>
                                                <h6>
                                                    {packages ? (<><span className="text-[#EF8038] pl-5">Packge description</span> : {packages.description} </>) : (<span></span>)}
                                                </h6>
                                                <h6>
                                                    {packages ? (<><span className="text-[#EF8038] pl-5">Packge Dimension</span> : {packages.length}cm X {packages.width}cm X {packages.height}cm </>) : (<span></span>)}
                                                </h6>
                                                <h6>
                                                    {packages ? (<><span className="text-[#EF8038] pl-5">Product Value</span> : ₹{packages.productValue} </>) : (<span></span>)}
                                                </h6>
                                                <h6>
                                                    {packages ? (<><span className="text-[#EF8038] pl-5">Number of Parcels</span> : {packages.numberOfParcels} </>) : (<span></span>)}
                                                </h6>
                                            </div>


                                        </div>
                                    </div>
                                    {/* <div className="flex justify-center"> <button className="w-[133px] createPickup1 max-[475px]:text-[13px] max-[475px]:w-[140px] max-[475px]:h-[40px] h-[30px] bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO  mt-5 rounded-lg mb-4" onClick={handleNext}>Next</button></div> */}
                                </div>
                            </AccordionDetails>
                        </Accordion></Box>
                </div>

            </div>
        </>
    )
}

export default Schedule01;