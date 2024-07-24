import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, FormHelperText, Grid, Typography } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Slider } from "@mui/material";


const RateDisplay01 = () => {

    const weightLimits = {
        Document: [1, 1000],
        Parcel: [1, 15],
        Cargo: [1, 5000]
    };

    const [alignment, setAlignment] = useState('Document');
    const [priceType, setPriceType] = useState();
    const handleChanges = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    // states
    const navigate = useNavigate();
    const [locate, setLocate] = useState();
    const [locate1, setLocate1] = useState();
    const [ddistrict, setddistrict] = useState();

    const [address, setaddress] = useState({
        pickuplocation: "",
        dropedlocation: "",
        name: "",
        address: "",
        mobile: "",
        dileverypin: ""

    })



    const [rateCal, setrateCal] = useState({
        destination: "",
        shiptype: alignment,
        weight: "",
        unit: ""
    })

    useEffect(() => {
        if (locate1) {
            let dest = locate1;
            const vidarbhDistricts = ['Yavatmal', 'Akola', 'Amravati', 'Wardha', 'Buldhana', 'Washim', 'Nagpur', 'Chandrapur', 'Bhandara', 'Gadchiroli', 'Gondia'];
            if(vidarbhDistricts.includes(ddistrict)){
                dest="Gujarat"
            }
            if (dest === "Maharashtra") {
                
                setrateCal(prevState => ({ ...prevState, destination: 1 }));
            } else if (dest === "Gujarat" || dest === "Goa" || dest=="Daman & Diu") {
                
                setrateCal(prevState => ({ ...prevState, destination: 2 }));
            } else {
                setrateCal(prevState => ({ ...prevState, destination: 3 }));
            }

        }
    }, [locate1,ddistrict]);
    useEffect(() => {
        if (alignment == "Document") {
            setrateCal(prevState => ({ ...prevState, unit: "Gram" }));

        }
        else {
            setrateCal(prevState => ({ ...prevState, unit: "Kg" }));

        }
    }, [alignment])
    useEffect(() => {
        setrateCal(prevState => ({ ...prevState, shiptype: alignment }));
    }, [alignment]);

    //service api
    //  const [ppinAvailable, setPPinAvailable] = useState(true)
    //  const [dpinAvailable, setDPinAvailable] = useState(true)
    const [deliveryOptionPin, setDelOptPin] = useState();
    const delOptPin = "https://pickupkart.in/api/deliveryOptionPin"

    useEffect(() => {
        axios.get(delOptPin)
            .then((res) => {
                const { data } = res;
                setDelOptPin(data);

            })
    }, [])
    //service api end
    const tableUrl = "https://pickupkart.in/api/pricings"
    // const priceTypeUrl = "http://localhost:8700/priceType";
    const priceTypeUrl = "https://pickupkart.in/api/priceType";
    const [tablePrice, setTablePrice] = useState();
    useEffect(() => {
        axios.get(tableUrl)
            .then((res) => {
                const { data } = res;
                setTablePrice(data);
            })
    }, [])
    useEffect(() => {
        axios.get(priceTypeUrl)
            .then((res) => {
                const { data } = res;
                setPriceType(data)
            })

    }, [])


    // let prices;
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
    //                         prices = tablePrice[Number(rateCal.destination) - 1].parcel * rateCal.weight;
    //                     } else {
    //                         prices = 'Invalid data';
    //                     }
    //                     break;
    //                 case 'Cargo':
    //                     if (rateCal.weight > 10) {
    //                         prices = tablePrice[Number(rateCal.destination) - 1].cargo * rateCal.weight;
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
    //                         prices = tablePrice[Number(rateCal.destination) - 1].parcel * rateCal.weight;
    //                     } else {
    //                         prices = 'Invalid data';
    //                     }
    //                     break;
    //                 case 'Cargo':
    //                     if (rateCal.weight > 10) {
    //                         prices = tablePrice[Number(rateCal.destination) - 1].cargo * rateCal.weight;
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
    //                         prices = tablePrice[Number(rateCal.destination) - 1].parcel * rateCal.weight;
    //                     } else {
    //                         prices = 'Invalid data';
    //                     }
    //                     break;
    //                 case 'Cargo':
    //                     if (rateCal.weight > 10) {
    //                         prices = tablePrice[Number(rateCal.destination) - 1].cargo * rateCal.weight;
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
                            let price = tablePrice[Number(rateCal.destination) - 1].parcel  * rateCal.weight;
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
                        if (rateCal.weight >= 10) {
                            let price = tablePrice[Number(rateCal.destination) - 1].cargo * rateCal.weight ;
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
                            let price = tablePrice[Number(rateCal.destination) - 1].parcel * rateCal.weight ;
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
                        if (rateCal.weight >= 10) {
                            let price = tablePrice[Number(rateCal.destination) - 1].cargo * rateCal.weight ;
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
                            let price = tablePrice[Number(rateCal.destination) - 1].parcel * rateCal.weight ;
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
                        if (rateCal.weight >= 10) {
                            let price = tablePrice[Number(rateCal.destination) - 1].cargo * rateCal.weight ;
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






    // state end

    const postalUrl = "https://api.postalpincode.in/pincode/";
    const pincodeUrl = `${postalUrl}${address.pickuplocation}`;
    const pincodeUrl1 = `${postalUrl}${address.dropedlocation}`;

    // useEffect(() => {
    //     axios.get(pincodeUrl)
    //         .then((res) => {
    //             const { data } = res;
    //             const states = data[0]?.PostOffice?.[0]?.State;
    //             setLocate(states);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         })
    // }, [pincodeUrl])
    // useEffect(() => {
    //     axios.get(pincodeUrl1)
    //         .then((res) => {
    //             const { data } = res;
    //             const states = data[0]?.PostOffice?.[0]?.State;
    //             setLocate1(states);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         })
    // }, [pincodeUrl1])

    const fetchLocateP = () => {
        axios.get(pincodeUrl)
            .then((res) => {
                const { data } = res;
                const states = data[0]?.PostOffice?.[0]?.State;
                setLocate(states);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const fetchLocateD = () => {
        axios.get(pincodeUrl1)
            .then((res) => {
                const { data } = res;
                const states = data[0]?.PostOffice?.[0]?.State;
                const district = data[0]?.PostOffice?.[0]?.District;
                setddistrict(district)
                setLocate1(states);
            })
            .catch((error) => {
                console.error(error);
            })
    }



    // stateUpdate

    const handleChange = (e) => {
        setaddress(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleChange1 = (e) => {
        setrateCal(prev => ({ ...prev, [e.target.name]: e.target.value }))

    };
    const handleWeight = (e) => {
        const inputValue = e.target.value;
        const numericValue = parseFloat(inputValue);

        if (
            inputValue === '' || // Allow empty input
            (numericValue >= weightLimits[alignment][0] && numericValue <= weightLimits[alignment][1])
        ) {
            setrateCal(prev => ({ ...prev, [e.target.name]: e.target.value }))
        }
    }
    // stateUpdate end


    const [serviceType, setServiceType] = useState({
        isStdAvailable: false,
        isGroundAvailable: false,
        isCargoAvailable: false
    })


    const checksForOptionsAvailability = () => {
        const toBeChecked = num => num === Number(address.dropedlocation)
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

    const NavToBook = () => {
        window.scrollTo(0, 0);
        navigate('./stepper');

    }
    // post request API end


    //handle rate appear
    const [israte, setIsRate] = useState(false)

    const handleNxtRate = () => {
        setIsRate(true)
        checksForOptionsAvailability();

    }

    //handle rate appear end







    //calculator




    // rate and pickup mouseover




    return (
        <>
            {/* <!-- Hero-1 section --> */}
            <section className="w-full min-h-[650px] scale-x-110 bg-[url('')] bg-contain bg-no-repeat relative img3">
                <div className="flex flex-col gap-24 w-[60%] absolute top-32 left-[22%] max-[900px]:top-13 max-[900px]:left-[15%] max-[768px]:top-10 max-[768px]:left-[15%]">
                    <div className=" flex flex-col gap-16 max-[900px]:gap-8 max-[768px]:gap-5  ">
                        <p data-aos="fade-up" className="font-ROBOTO text-[48px] font-bold text-white max-[900px]:text-[32px] max-[768px]:text-[20px] ">
                            We Provide Best Mover <br /> Packer Services
                        </p>
                        <div className="flex flex-row gap-6">
                            <Link data-aos="zoom-out" to={'/about'}> <button className="w-[155px] h-[44px] bg-[#0260AA] text-white text-[16px] rounded-md max-[900px]:text-[13px] max-[900px]:w-[130px] max-[900px]:h-[40px] max-[768px]:text-[9px] max-[768px]:w-[80px] max-[768px]:h-[30px]">Know
                                More</button></Link>
                            <Link data-aos="zoom-out" to={'/contact'}> <button className="w-[155px] h-[44px] bg-white text-black text-[16px] rounded-md max-[900px]:text-[13px] max-[900px]:w-[130px] max-[900px]:h-[40px] max-[768px]:text-[9px] max-[768px]:w-[80px] max-[768px]:h-[30px]">Contact
                                Us</button></Link>
                            <Link data-aos="zoom-out" to={'/quick'}><button className="w-[155px] h-[44px] bg-[#EF8038] text-white text-[16px] rounded-md max-[900px]:text-[13px] max-[900px]:w-[130px] max-[900px]:h-[40px] max-[768px]:text-[9px] max-[768px]:w-[80px] max-[768px]:h-[30px]">Quick Book</button></Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- form section --> */}
            <section className="relative w-full h-full z-100">

                <div className="bg-white  rounded-md shadow-lg pb-7 lg:mx-auto w-[60%] absolute left-[20%] top-[-200px] max-[900px]:top-[-320px] max-[768px]:w-full max-[768px]:relative  max-[768px]:left-[0%] max-[600px]:-mt-[80px] max-[475px]:-mt-[120px]">
                    <div className="flex flex-row items-center gap-4">
                        <div className="w-[45px] h-[7px] bg-[#EF8038] max-[475px]:w-[30px] max-[475px]:h-[5px]"></div>
                        <p className="text-[20px] font-[Dosis] font-semibold max-[475px]:text-[14px]">Rate Estimate</p>
                        <p className="pl-8 font-[Poppins] text-[15px] opacity-50 max-[475px]:text-[12px]">Send from your location, to anywhere in the
                            country</p>
                    </div>


                    {!israte ? (<> <div className="grid grid-cols-2 pt-3 max-[475px]:gap-0 max-[475px]:pl-0 pl-3 text-center ">
                        <form className=" max-[475px]:pl-0 px-1 mt-2 mb-4">
                            <div>
                                <TextField
                                    label="Enter Origin Pincode"
                                    variant="outlined"
                                    name="pickuplocation"
                                    sx={{ width: { xs: "180px", lg: "270px" } }}
                                    onBlur={fetchLocateP}
                                    value={address.pickuplocation}
                                    onChange={handleChange}
                                    size="small"
                                    InputProps={{
                                        endAdornment: locate && (
                                            <span className="MuiInputAdornment-positionEnd text-[12px] text-green-500">{locate}</span>
                                        ),
                                    }}
                                />
                            </div>

                        </form>
                        <form className=" max-[475px]:pl-0 px-1 mt-2 mb-4">

                            <div>
                                <TextField
                                    label="Enter Destination Pincode"
                                    variant="outlined"
                                    name="dropedlocation"
                                    value={address.dropedlocation}
                                    onChange={handleChange}
                                    onBlur={fetchLocateD}
                                    size="small"
                                    sx={{ width: { xs: "180px", lg: "270px" } }}
                                    InputProps={{
                                        endAdornment: locate && (
                                            <span className="MuiInputAdornment-positionEnd text-[12px] text-green-500">{locate1}</span>
                                        ),
                                    }}
                                />
                            </div>
                        </form>
                    </div>

                        <Grid container>
                            <Grid item display={"flex"} justifyContent={"center"} alignItems={"center"} xs={12} md={6}>
                                <Box>
                                    <ToggleButtonGroup
                                        color="primary"
                                        value={alignment}
                                        exclusive
                                        onChange={handleChanges}
                                        aria-label="Platform"

                                    >
                                        <ToggleButton sx={{ fontSize: "18px", backgroundColor: '#F7FDFD', color: '#DDDDDD', fontFamily: "Fjalla One" }} value="Document">Document</ToggleButton>
                                        <ToggleButton sx={{ fontSize: "18px", backgroundColor: '#F7FDFD', color: '#DDDDDD', fontFamily: "Fjalla One" }} value="Parcel">Parcel</ToggleButton>
                                        <ToggleButton sx={{ fontSize: "18px", backgroundColor: '#F7FDFD', color: '#DDDDDD', fontFamily: "Fjalla One" }} value="Cargo">Cargo</ToggleButton>
                                    </ToggleButtonGroup>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>

                                <Box m={2} alignItems="center" display="flex" justifyContent="center">
                                    <TextField
                                        onKeyPress={(event) => {
                                            const charCode = event.which ? event.which : event.keyCode;
                                            if (charCode < 48 || charCode > 57) {
                                                event.preventDefault();
                                            }
                                            const value = parseFloat(event.target.value + String.fromCharCode(charCode));
                                            if (value < weightLimits[alignment][0] || value > weightLimits[alignment][1]) {
                                                event.preventDefault();
                                            }
                                        }}
                                        value={rateCal.weight}
                                        onChange={handleWeight}
                                        id="outlined-basic"
                                        label={
                                            alignment === "Document"
                                                ? "Weight (1gm - 1000gm)"
                                                : alignment === "Parcel"
                                                    ? "Weight (1kg - 15kg)"
                                                    : "Weight (10kg and above)"
                                        }
                                        variant="outlined"
                                        name="weight"
                                    />
                                    <Button variant="contained" sx={{ backgroundColor: "#EF8038" }}>
                                        {alignment === "Document" ? "Gram" : "Kg"}
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>



                        <div className="max-[1024px]:ml-[-30px]" >



                            <div className="text-center">
                                <button
                                    className="w-[223px] font-[Dosis] max-[475px]:text-[13px] max-[475px]:w-[150px] max-[475px]:h-[40px] h-[49px] bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO  mt-5"
                                    onClick={handleNxtRate}
                                >
                                    Calculate
                                </button></div>

                        </div></>) :
                        (
                            <Box textAlign={"center"} >
{/* 
                                {prices == "Invalid Data" ? (<>
                                    <Box m={2}>
                                        <FormControl sx={{ pt: 2 }}>

                                            <RadioGroup
                                                onChange={handleChange1}
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="unit"
                                            >
                                                <Box>
                                                    <Grid container><Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}><FormControlLabel value="stdRate" control={<Radio />} label="Pickupkart Standard" /></Grid>
                                                        <Grid item xs={12} md={6}> <TextField
                                                            sx={{ alignSelf: 'end' }}
                                                            id="filled-read-only-input"
                                                            label="Pickupkart Standard"
                                                            value="₹ 0"
                                                            InputProps={{
                                                                readOnly: true,
                                                            }}
                                                            variant="filled"
                                                        /></Grid></Grid>
                                                    <Grid container pt={2}><Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}><FormControlLabel value="groundRate" control={<Radio />} label="Pickupkart Ground" /></Grid>
                                                        <Grid item xs={12} md={6}> <TextField
                                                            sx={{ alignSelf: 'end' }}
                                                            id="filled-read-only-input"
                                                            label="Pickupkart Ground"
                                                            value="₹ 0"
                                                            InputProps={{
                                                                readOnly: true,
                                                            }}
                                                            variant="filled"
                                                        /></Grid></Grid>
                                                    <Grid container pt={2}><Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}><FormControlLabel value="cargoRate" control={<Radio />} label="Pickupkart Cargo" /></Grid>
                                                        <Grid item xs={12} md={6}><TextField
                                                            sx={{ alignSelf: 'end' }}
                                                            id="filled-read-only-input"
                                                            label="Pickupkart Cargo"
                                                            value="₹ 0"
                                                            InputProps={{
                                                                readOnly: true,
                                                            }}
                                                            variant="filled"
                                                        /></Grid></Grid>
                                                </Box>
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>

                                    <Button sx={{ zIndex: "1000" }} onClick={() => setIsRate(false)}>Back</Button>
                                    <Button sx={{ zIndex: "1000" }} variant="contained" onClick={NavToBook}
                                    >Book Now</Button>
                                </>
                                ) : (
                                    <> */}
                                        <Box m={2}>
                                            <FormControl sx={{ pt: 2 }}>

                                                <RadioGroup
                                                    onChange={handleChange1}
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="unit"
                                                >
                                                    <Box>
                                                        <Grid container><Grid item xs={12} md={6} textAlign={"left"}><FormControlLabel value="stdRate" disabled={!serviceType.isStdAvailable} control={<Radio />} label="Pickupkart Standard" /></Grid>
                                                            <Grid item xs={12} md={6}> <TextField
                                                                sx={{ alignSelf: 'end' }}
                                                                id="filled-read-only-input"
                                                                label="Pickupkart Standard"
                                                                disabled={!serviceType.isStdAvailable}
                                                                value={serviceType.isStdAvailable ? stdPrices : "standard Service not available"}
                                                                InputProps={{
                                                                    readOnly: true,
                                                                }}
                                                                variant="filled"
                                                            /></Grid></Grid>
                                                        <Grid container pt={2}><Grid item xs={12} md={6} textAlign={"left"}><FormControlLabel disabled={!serviceType.isGroundAvailable} value="groundRate" control={<Radio />} label="Pickupkart Ground" /></Grid>
                                                            <Grid item xs={12} md={6}> <TextField
                                                                disabled={!serviceType.isGroundAvailable}
                                                                sx={{ alignSelf: 'end' }}
                                                                id="filled-read-only-input"
                                                                label="Pickupkart Ground"
                                                                value={serviceType.isGroundAvailable ? groundPrices : "Ground Service not available"}
                                                                InputProps={{
                                                                    readOnly: true,
                                                                }}
                                                                variant="filled"
                                                            /></Grid></Grid>
                                                        <Grid container pt={2}><Grid item xs={12} md={6} textAlign={"left"}><FormControlLabel disabled={!serviceType.isCargoAvailable} value="cargoRate" control={<Radio />} label="Pickupkart Cargo" /></Grid>
                                                            <Grid item xs={12} md={6}><TextField
                                                                disabled={!serviceType.isCargoAvailable}
                                                                sx={{ alignSelf: 'end' }}
                                                                id="filled-read-only-input"

                                                                label="Pickupkart Cargo"
                                                                value={serviceType.isCargoAvailable ? cargoPrices : "Cargo not available"}
                                                                InputProps={{
                                                                    readOnly: true,
                                                                }}
                                                                variant="filled"
                                                            /></Grid></Grid>
                                                    </Box>
                                                </RadioGroup>
                                            </FormControl>
                                        </Box>

                                        <Button sx={{ zIndex: "1000" }} onClick={() => setIsRate(false)}>Back</Button>
                                        <Button disabled={!serviceType.isCargoAvailable && !serviceType.isStdAvailable && !serviceType.isGroundAvailable} sx={{ zIndex: "1000" }} variant="contained" onClick={NavToBook}>Book Now</Button>
                                    {/* </>)} */}
                            </Box>

                        )
                    }


                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                            '@media (max-width: 600px)': {
                                textAlign: "center"
                            },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            {/* <TextField onChange={handleChange1} id="outlined-basic" label="Weight" variant="outlined" name="weight" />
                            <FormControl sx={{ pt: 2 }}>

                                <RadioGroup
                                    onChange={handleChange1}
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="unit"
                                >
                                    <FormControlLabel value="Kg" control={<Radio />} label="Kg" />
                                    <FormControlLabel value="Gram" control={<Radio />} label="Gram" />


                                </RadioGroup>
                            </FormControl> */}


                            {/* {prices == "Invalid Data" ? (
                                <TextField
                                    id="filled-read-only-input"
                                    label="By Road"
                                    value="₹ 0"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="filled"
                                />) : (<TextField
                                    id="filled-read-only-input"
                                    label="By Road"
                                    value={"₹" + prices}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="filled"
                                />)} */}

                        </div>
                    </Box>

                </div>

            </section>
        </>
    )


}
export default RateDisplay01;









