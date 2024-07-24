import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Box, Paper } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, FormHelperText, Typography } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Package = ({ setPackage }) => {

    const dAddress = JSON.parse(sessionStorage.getItem('deliveryDetail'));
    const pAddress = JSON.parse(sessionStorage.getItem('pickDetail'));
    const packages = JSON.parse(sessionStorage.getItem('package'));
    const {
        destination = "",
        shiptype = "",
        weight = "",
        unit = "",
        description = "",
        height = "",
        width = "",
        length = "",
        productValue = "",
        numberOfParcels = "",
        finalWeight = ""
    } = packages || {};

    const [rateCal, setrateCal] = useState({
        destination,
        shiptype,
        weight,
        unit,
        description,
        height,
        width,
        length,
        productValue,
        numberOfParcels,
        finalWeight
    });

    useEffect(() => {
        if (dAddress) {
            let dest = dAddress.dstate;
            const vidarbhDistricts = ['Yavatmal', 'Akola', 'Amravati', 'Wardha', 'Buldhana', 'Washim', 'Nagpur', 'Chandrapur', 'Bhandara', 'Gadchiroli', 'Gondia'];
            if(vidarbhDistricts.includes(dAddress.ddistrict)){
                dest="Gujarat"
            }
            if (dest === "Maharashtra" || dest == "maharashtra") {
               
                setrateCal(prevState => ({ ...prevState, destination: 1 }));
            } else if (dest === "Gujarat" || dest == "gujrat" || dest === "gujarat" || dest == "Gujrat" || dest === "Goa" || dest == "goa" || dest=="Daman & Diu") {
              
                setrateCal(prevState => ({ ...prevState, destination: 2 }));
            } else {
                setrateCal(prevState => ({ ...prevState, destination: 3 }));
            }
        }
    }, [dAddress.dstate,dAddress.ddistrict]);



    const [isEnter, setEnter] = useState(false);

    const handleSubmit = () => {

        const allValuesPresent = Object.values(rateCal).every((value) => Boolean(value));
        if (allValuesPresent == true) {
            window.sessionStorage.setItem("package", JSON.stringify(rateCal));
            // window.sessionStorage.setItem("price", JSON.stringify(prices));
            const priceObject={
                stdPrices:stdPrices,
                groundPrices:groundPrices,
                cargoPrices:cargoPrices
                
            }
            window.sessionStorage.setItem("prices", JSON.stringify(priceObject));
            setPackage(true)
            setEnter(true)
        }
        else {
            alert("please fill all The fiels")
        }
    }

    // state end

    const navigate = useNavigate();

    // stateUpdate


    const handleChange1 = (e) => {
        setrateCal(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };

    useEffect(() => {
        let volumetricWeight = (rateCal.length * rateCal.height * rateCal.width) / 5000;
        if (volumetricWeight > rateCal.weight) {
            setrateCal(prev => ({ ...prev, finalWeight: volumetricWeight }))

        }
        else {
            setrateCal(prev => ({ ...prev, finalWeight: rateCal.weight }))
        }
    }, [rateCal])

    // stateUpdate end

    useEffect(() => {
        if (rateCal.shiptype == "Document") {
            setrateCal(prev => ({ ...prev, unit: "Gram" }))

        }
        else {
            setrateCal(prev => ({ ...prev, unit: "Kg" }))

        }
    }, [rateCal.shiptype])



    const tableUrl = "https://pickupkart.in/api/pricings"

    const [tablePrice, setTablePrice] = useState();
    useEffect(() => {
        axios.get(tableUrl)
            .then((res) => {
                const { data } = res;
                setTablePrice(data);
            })
    }, [])


    let prices;

    // if (tablePrice) {
    //     switch (rateCal.destination) {
    //         case 1:
    //             switch (rateCal.shiptype) {
    //                 case 'Document':
    //                     if (rateCal.weight < 250) {
    //                         prices = tablePrice[Number(rateCal.destination) - 1].doc_lt_250;
    //                     } else if (rateCal.weight >= 250 && rateCal.weight <= 1000) {
    //                         prices = tablePrice[Number(rateCal.destination) - 1].doc_250_1000;
    //                     } else {
    //                         prices = 'Invalid data';
    //                     }
    //                     break;
    //                 case 'Parcel':
    //                     if (rateCal.weight >= 1 && rateCal.weight <= 15) {
    //                         prices = tablePrice[Number(rateCal.destination) - 1].parcel * rateCal.finalWeight;
    //                     } else {
    //                         prices = 'Invalid data';
    //                     }
    //                     break;
    //                 case 'Cargo':
    //                     if (rateCal.weight > 10) {
    //                         prices = tablePrice[Number(rateCal.destination) - 1].cargo * rateCal.finalWeight;
    //                     } else {
    //                         prices = 'Invalid data';
    //                     }
    //                     break;
    //                 default:
    //                     prices = 'Invalid data';
    //             }
    //             break;
    //         case 2:
    //             switch (rateCal.shiptype) {
    //                 case 'Document':
    //                     if (rateCal.weight < 250) {
    //                         prices = tablePrice[Number(rateCal.destination) - 1].doc_lt_250;
    //                     } else if (rateCal.weight >= 250 && rateCal.weight <= 1000) {
    //                         prices = tablePrice[Number(rateCal.destination) - 1].doc_250_1000;
    //                     } else {
    //                         prices = 'Invalid data';
    //                     }
    //                     break;
    //                 case 'Parcel':
    //                     if (rateCal.weight >= 1 && rateCal.weight <= 15) {
    //                         prices = tablePrice[Number(rateCal.destination) - 1].parcel * rateCal.finalWeight;
    //                     } else {
    //                         prices = 'Invalid data';
    //                     }
    //                     break;
    //                 case 'Cargo':
    //                     if (rateCal.weight > 10) {
    //                         prices = tablePrice[Number(rateCal.destination) - 1].cargo * rateCal.finalWeight;
    //                     } else {
    //                         prices = 'Invalid data';
    //                     }
    //                     break;
    //                 default:
    //                     prices = 'Invalid data';
    //             }
    //             break;
    //         case 3:
    //             switch (rateCal.shiptype) {
    //                 case 'Document':
    //                     if (rateCal.weight < 250) {
    //                         prices = tablePrice[Number(rateCal.destination) - 1].doc_lt_250;
    //                     } else if (rateCal.weight >= 250 && rateCal.weight <= 1000) {
    //                         prices = tablePrice[Number(rateCal.destination) - 1].doc_250_1000;
    //                     } else {
    //                         prices = 'Invalid data';
    //                     }
    //                     break;
    //                 case 'Parcel':
    //                     if (rateCal.weight >= 1 && rateCal.weight <= 15) {
    //                         prices = tablePrice[Number(rateCal.destination) - 1].parcel * rateCal.finalWeight;
    //                     } else {
    //                         prices = 'Invalid data';
    //                     }
    //                     break;
    //                 case 'Cargo':
    //                     if (rateCal.weight > 10) {
    //                         prices = tablePrice[Number(rateCal.destination) - 1].cargo * rateCal.finalWeight;
    //                     } else {
    //                         prices = 'Invalid data';
    //                     }
    //                     break;
    //                 default:
    //                     prices = 'Invalid data';
    //             }
    //             break;
    //         default:
    //             prices = 'Invalid data';
    //     }
    // }
    // const priceTypeUrl = "http://localhost:8700/priceType";
    const priceTypeUrl = "https://pickupkart.in/api/priceType";
    const [priceType, setPriceType] = useState();

    useEffect(() => {
        axios.get(priceTypeUrl)
            .then((res) => {
                const { data } = res;
                setPriceType(data)
            })

    }, [])


    let stdPrices;
    let groundPrices;
    let cargoPrices;

    if (tablePrice) {
        switch (rateCal.destination) {
            case 1:
                switch (rateCal.shiptype) {
                    case 'Document':
                        if (rateCal.weight < 250) {
                            let price = tablePrice[Number(rateCal.destination) - 1].doc_lt_250;
                            stdPrices = price * priceType?.[0].rate;
                            groundPrices = price * priceType?.[1].rate;
                            cargoPrices = price * priceType?.[2].rate

                        } else if (rateCal.weight >= 250 && rateCal.weight <= 1000) {
                            let price = tablePrice[Number(rateCal.destination) - 1].doc_250_1000;
                            stdPrices = price * priceType?.[0].rate;
                            groundPrices = price * priceType?.[1].rate;
                            cargoPrices = price * priceType?.[2].rate
                        } else {
                            stdPrices = "invalid data";
                            groundPrices = "invalid data";
                            cargoPrices = "invalid data";
                        }
                        break;
                    case 'Parcel':
                        if (rateCal.weight >= 1 && rateCal.weight <= 15) {
                            let price = tablePrice[Number(rateCal.destination) - 1].parcel * rateCal.finalWeight;
                            stdPrices = price * priceType?.[0].rate;
                            groundPrices = price * priceType?.[1].rate;
                            cargoPrices = price * priceType?.[2].rate
                        } else {
                            stdPrices = "invalid data";
                            groundPrices = "invalid data";
                            cargoPrices = "invalid data";
                        }
                        break;
                    case 'Cargo':
                        if (rateCal.weight > 10) {
                            let price = tablePrice[Number(rateCal.destination) - 1].cargo * rateCal.finalWeight;
                            stdPrices = price * priceType?.[0].rate;
                            groundPrices = price * priceType?.[1].rate;
                            cargoPrices = price * priceType?.[2].rate
                        } else {
                            stdPrices = "invalid data";
                            groundPrices = "invalid data";
                            cargoPrices = "invalid data";
                        }
                        break;
                    default:
                        stdPrices = "invalid data";
                        groundPrices = "invalid data";
                        cargoPrices = "invalid data";
                }
                break;
            case 2:
                switch (rateCal.shiptype) {
                    case 'Document':
                        if (rateCal.weight < 250) {
                            let price = tablePrice[Number(rateCal.destination) - 1].doc_lt_250;
                            stdPrices = price * priceType?.[0].rate;
                            groundPrices = price * priceType?.[1].rate;
                            cargoPrices = price * priceType?.[2].rate
                        } else if (rateCal.weight >= 250 && rateCal.weight <= 1000) {
                            let price = tablePrice[Number(rateCal.destination) - 1].doc_250_1000;
                            stdPrices = price * priceType?.[0].rate;
                            groundPrices = price * priceType?.[1].rate;
                            cargoPrices = price * priceType?.[2].rate
                        } else {
                            stdPrices = "invalid data";
                            groundPrices = "invalid data";
                            cargoPrices = "invalid data";
                        }
                        break;
                    case 'Parcel':
                        if (rateCal.weight >= 1 && rateCal.weight <= 15) {
                            let price = tablePrice[Number(rateCal.destination) - 1].parcel * rateCal.finalWeight;
                            stdPrices = price * priceType?.[0].rate;
                            groundPrices = price * priceType?.[1].rate;
                            cargoPrices = price * priceType?.[2].rate
                        } else {
                            stdPrices = "invalid data";
                            groundPrices = "invalid data";
                            cargoPrices = "invalid data";
                        }
                        break;
                    case 'Cargo':
                        if (rateCal.weight > 10) {
                            let price = tablePrice[Number(rateCal.destination) - 1].cargo * rateCal.finalWeight;
                            stdPrices = price * priceType?.[0].rate;
                            groundPrices = price * priceType?.[1].rate;
                            cargoPrices = price * priceType?.[2].rate
                        } else {
                            stdPrices = "invalid data";
                            groundPrices = "invalid data";
                            cargoPrices = "invalid data";
                        }
                        break;
                    default:
                        stdPrices = "invalid data";
                        groundPrices = "invalid data";
                        cargoPrices = "invalid data";
                }
                break;
            case 3:
                switch (rateCal.shiptype) {
                    case 'Document':
                        if (rateCal.weight < 250) {
                            let price = tablePrice[Number(rateCal.destination) - 1].doc_lt_250;
                            stdPrices = price * priceType?.[0].rate;
                            groundPrices = price * priceType?.[1].rate;
                            cargoPrices = price * priceType?.[2].rate
                        } else if (rateCal.weight >= 250 && rateCal.weight <= 1000) {
                            let price = tablePrice[Number(rateCal.destination) - 1].doc_250_1000;
                            stdPrices = price * priceType?.[0].rate;
                            groundPrices = price * priceType?.[1].rate;
                            cargoPrices = price * priceType?.[2].rate
                        } else {
                            stdPrices = "invalid data";
                            groundPrices = "invalid data";
                            cargoPrices = "invalid data";
                        }
                        break;
                    case 'Parcel':
                        if (rateCal.weight >= 1 && rateCal.weight <= 15) {
                            let price = tablePrice[Number(rateCal.destination) - 1].parcel * rateCal.finalWeight;
                            stdPrices = price * priceType?.[0].rate;
                            groundPrices = price * priceType?.[1].rate;
                            cargoPrices = price * priceType?.[2].rate
                        } else {
                            stdPrices = "invalid data";
                            groundPrices = "invalid data";
                            cargoPrices = "invalid data";
                        }
                        break;
                    case 'Cargo':
                        if (rateCal.weight > 10) {
                            let price = tablePrice[Number(rateCal.destination) - 1].cargo * rateCal.finalWeight;
                            stdPrices = price * priceType?.[0].rate;
                            groundPrices = price * priceType?.[1].rate;
                            cargoPrices = price * priceType?.[2].rate
                        } else {
                            stdPrices = "invalid data";
                            groundPrices = "invalid data";
                            cargoPrices = "invalid data";
                        }
                        break;
                    default:
                        stdPrices = "invalid data";
                        groundPrices = "invalid data";
                        cargoPrices = "invalid data";
                }
                break;
            default:
                stdPrices = "invalid data";
                groundPrices = "invalid data";
                cargoPrices = "invalid data";
        }
    }



    // rate calculator end


    const [isDesc, setDesc] = useState(false);




    const handleNext = () => {
        if (isEnter == true) {
            navigate('/schedule')
        }
        else {
            alert("Please Select Shipment Type")
        }
    }

    return (
        <>
            <div className="  items-center">
                <div className="grid grid-cols-1  lg:grid-cols-2">
                    <div className="flex m-3 justify-center">
                        <div>

                            {!isDesc ? (<section id="desc">
                                <Box display={"flex"} justifyContent={"center"} sx={{ borderRadius: "10px" }}>
                                    <Box sx={{ maxWidth: "370px", width: "370px", boxShadow: '0px 0px 10px lightgrey' }}>
                                        <Box sx={{ backgroundColor: "#F8FEFF", borderRadius: "10px" }} elevation={0} >
                                            <Box display={"flex"} alignItems={"center"} p={3} sx={{ height: "45px", backgroundColor: '#EF8038', borderRadius: "10px 10px 0 0" }}>
                                                <Typography fontFamily={"Dosis"} color={"white"} variant="subtitle1" fontWeight={500} gutterBottom><span className="text-[#0260AA]">Package </span>Contents</Typography>
                                            </Box>
                                            <Box p={2}>
                                                <TextField
                                                    onChange={handleChange1}
                                                    name="description"
                                                    id="outlined-multiline-static"
                                                    label="Product Description"
                                                    value={rateCal.description}
                                                    multiline
                                                    rows={3}
                                                    fullWidth
                                                    sx={{ p: 1 }}
                                                />
                                                <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
                                                    <Typography fontFamily={"Dosis"} align="left">Product Value :</Typography>
                                                    <input value={rateCal.productValue} name="productValue" onChange={handleChange1} className="shadow-lg bg-transparent" style={{ border: "1px solid lightgrey", borderRadius: "5px", height: "40px", width: "100px", textAlign: "right" }} />
                                                </Box>
                                                <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
                                                    <Typography fontFamily={"Dosis"} align="left">Number of Parcels :</Typography>
                                                    <input value={rateCal.numberOfParcels} name="numberOfParcels" onChange={handleChange1} className="shadow-lg bg-transparent" style={{ border: "1px solid lightgrey", borderRadius: "5px", width: "100px", height: "40px", textAlign: "right" }} />
                                                </Box>

                                            </Box>

                                            <div className="flex justify-center pb-5">
                                                <button onClick={() => setDesc(true)} type="submit"
                                                    className="w-[133px] max-[475px]:text-[13px] max-[475px]:w-[120px] max-[475px]:h-[40px] h-[40px] bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO  mt-5 rounded-lg"
                                                >
                                                    Next

                                                </button></div>

                                            {/* {isEnter ? (<div className="flex justify-center pb-5">
                                                <button
                                                    className="text-green-500 w-[133px] max-[475px]:text-[13px] max-[475px]:w-[120px] max-[475px]:h-[40px] h-[40px] bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO mt-5 rounded-lg "

                                                >
                                                    Submitted
                                                </button></div>
                                            ) : (<div className="flex justify-center pb-5">
                                                <button type="submit"
                                                    className="w-[133px] max-[475px]:text-[13px] max-[475px]:w-[120px] max-[475px]:h-[40px] h-[40px] bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO  mt-5 rounded-lg"
                                                    onClick={handleSubmit}
                                                >
                                                    Submit
                                                </button></div>
                                            )} */}
                                        </Box>
                                    </Box>
                                </Box></section>

                            ) : (<div className="rateCalculator max-w-[370px] shadow-lg border border-gray-200  m-3 flex-col content-center   rounded-lg bg-[#F8FEFF]">

                                <div className="h-[45px] flex flex-row justify-between pl-5 pr-5 items-center rounded-t-md bg-[#EF8038]">
                                    <Typography fontFamily={"Dosis"} color={"white"} variant="subtitlt2" gutterBottom><span className="text-[#0260AA]">Add </span>Package</Typography>

                                </div>




                                <div className="px-4 pt-2">
                                    <div className="flex justify-center m-1">
                                        <select
                                            value={rateCal.shiptype}
                                            name="shiptype"
                                            onChange={handleChange1}
                                            className="pl-6 pr-14 w-[100%] py-3  transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline-lightBlue placeholder:text-base max-[680px]:placeholder:text-xs"
                                        >
                                            <option className="" value="0">
                                                Select Type
                                            </option>
                                            <option value="Document">Document</option>

                                            <option value="Parcel">Parcel</option>
                                            <option value="Cargo">Cargo</option>
                                            

                                        </select>
                                    </div>

                                    {rateCal.shiptype == "Document" ? (
                                        <div className="flex justify-center m-1">
                                            <input
                                                value={rateCal.weight}
                                                type="text"
                                                name="weight"
                                                onChange={handleChange1}
                                                placeholder="Enter Weight in Gram"
                                                className="pl-6 pr-14 py-3 w-[100%]  transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline-lightBlue placeholder:text-base max-[680px]:placeholder:text-xs sm:w-full"
                                            />
                                        </div>) : (<div className="flex justify-center m-1">
                                            <input
                                                value={rateCal.weight}
                                                type="text"
                                                name="weight"
                                                onChange={handleChange1}
                                                placeholder="Enter Weight in Kg"
                                                className="pl-6 pr-14 py-3 w-[100%]  transition-all duration-200 border border-gray-400 shadow-md rounded-lg font-mullish outline-lightBlue placeholder:text-base max-[680px]:placeholder:text-xs sm:w-full"
                                            />
                                        </div>)
                                    }

                                </div>

                                <div className=" flex justify-center">

                                    <Box textAlign={"center"} m={2}>
                                        <FormControl sx={{ pt: 2 }}>

                                            <RadioGroup
                                                onChange={handleChange1}
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="unit"
                                            >
                                                <Box>
                                                    <Box display={"flex"} justifyContent={"center"}>
                                                        <Box textAlign={"center"} mt={3}>
                                                            <Typography fontFamily={"Fjalla One"} variant="h6" gutterBottom>Dimension in cm</Typography>
                                                            <TextField
                                                                onChange={handleChange1}
                                                                value={rateCal.height}
                                                                name="height"
                                                                id="standard-required"
                                                                label="Height"
                                                                variant="standard"
                                                                sx={{ mb: 2 }}
                                                            />
                                                            <TextField
                                                                onChange={handleChange1}
                                                                value={rateCal.width}
                                                                name="width"
                                                                id="standard-required"
                                                                label="Width"
                                                                variant="standard"
                                                                sx={{ mb: 2 }}
                                                            />
                                                            <TextField
                                                                onChange={handleChange1}
                                                                value={rateCal.length}
                                                                name="length"
                                                                id="standard-required"
                                                                label="Length"
                                                                variant="standard"
                                                            /></Box></Box>
                                                    {/* <Box><FormControlLabel value="kartRate" control={<Radio />} label="Pickupkart rate" />
                                                            <TextField
                                                                sx={{ alignSelf: 'end' }}
                                                                id="filled-read-only-input"
                                                                label="Pickupkart rate"
                                                                value="₹ 0"
                                                                InputProps={{
                                                                    readOnly: true,
                                                                }}
                                                                variant="filled"
                                                            /></Box>
                                                        <Box pt={2}><FormControlLabel value="stdRate" control={<Radio />} label="Standard rate" />
                                                            <TextField
                                                                sx={{ alignSelf: 'end' }}
                                                                id="filled-read-only-input"
                                                                label="Standard Rate"
                                                                value="₹ 0"
                                                                InputProps={{
                                                                    readOnly: true,
                                                                }}
                                                                variant="filled"
                                                            /></Box> */}

                                                </Box>
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>



                                </div>
                                <Box display={"flex"} justifyContent={"center"}>
                                    <Button onClick={() => setDesc(false)}><i className="fa-solid fa-arrow-left"></i></Button>
                                </Box>

                                {isEnter ? (<div className="flex justify-center pb-5">
                                    <button
                                        className="text-green-500 w-[133px] max-[475px]:text-[13px] max-[475px]:w-[120px] max-[475px]:h-[40px] h-[40px] bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO mt-5 rounded-lg "

                                    >
                                        Submitted
                                    </button></div>
                                ) : (<div className="flex justify-center pb-5">
                                    <button type="submit"
                                        className="w-[133px] max-[475px]:text-[13px] max-[475px]:w-[120px] max-[475px]:h-[40px] h-[40px] bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO  mt-5 rounded-lg"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button></div>
                                )}


                            </div>)}

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
                                                        {pAddress ? (<>  <span className="text-[#EF8038]">Pickup address</span> :<br /> {pAddress.pcontactname},{pAddress.phouse},{pAddress.parea},{pAddress.pcity},{pAddress.pstate},{pAddress.ppin}</>) : (<span></span>)}
                                                    </h6>
                                                    <h6 className="mt-2">
                                                        {dAddress ? (<>  <span className="text-[#EF8038]">Delivery Address </span>:<br />  {dAddress.dcontactname},{dAddress.dhouse},{dAddress.darea},{dAddress.dcity},{dAddress.dstate},{dAddress.dpin}</>) : (<span></span>)}
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
            </div>
        </>
    )
}

export default Package;