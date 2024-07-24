import React, { useState, useEffect } from "react";
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
import { FormHelperText, Typography } from "@mui/material";
import QuickNav from "./QuickNav";


const QuickForm = () => {


    const [pickAd, setPickAd] = useState();
    const [dropAd, setDropAd] = useState();

    const [pAddress, setPickaddress] = useState({
        pcontactname: "",
        pcontactno: "",
        pemail: "quickUser",
        phouse: "",
        parea: "",
        ppin: Number(400001),
        pcity: "",
        pstate: "",
    })

    const [dAddress, setdropaddress] = useState({
        dcontactname: "",
        dcontactno: "",
        demail: "quickUser",
        dhouse: "",
        darea: "",
        dpin: Number(440010),
        dcity: "",
        dstate: "",


    })
    const [rateCal, setrateCal] = useState({
        destination: "",
        shiptype: "",
        weight: "",
        unit: ""
    })

    useEffect(() => {
        if (dAddress) {
            const dest = dAddress.dstate;

            if (dest === "Maharashtra") {
                setrateCal(prevState => ({ ...prevState, destination: 1 }));
            } else if (dest === "Gujarat" || dest === "Goa") {
                setrateCal(prevState => ({ ...prevState, destination: 2 }));
            } else {
                setrateCal(prevState => ({ ...prevState, destination: 3 }));
            }
        }
    }, [dAddress]);

    let prices;

    switch (rateCal.destination) {
        case 1:
            switch (rateCal.shiptype) {
                case 'Document':
                    if (rateCal.weight < 250) {
                        prices = 50;
                    } else if (rateCal.weight >= 250 && rateCal.weight <= 1000) {
                        prices = 70;
                    } else {
                        prices = 'Invalid data';
                    }
                    break;
                case 'Parcel':
                    if (rateCal.weight >= 1 && rateCal.weight <= 15) {
                        prices = 40 * rateCal.weight;
                    } else {
                        prices = 'Invalid data';
                    }
                    break;
                case 'Cargo':
                    if (rateCal.weight > 10) {
                        prices = 150 * rateCal.weight;
                    } else {
                        prices = 'Invalid data';
                    }
                    break;
                default:
                    prices = 'Invalid data';
            }
            break;
        case 2:
            switch (rateCal.shiptype) {
                case 'Document':
                    if (rateCal.weight < 250) {
                        prices = 70;
                    } else if (rateCal.weight >= 250 && rateCal.weight <= 1000) {
                        prices = 80;
                    } else {
                        prices = 'Invalid data';
                    }
                    break;
                case 'Parcel':
                    if (rateCal.weight >= 1 && rateCal.weight <= 15) {
                        prices = 60 * rateCal.weight;
                    } else {
                        prices = 'Invalid data';
                    }
                    break;
                case 'Cargo':
                    if (rateCal.weight > 10) {
                        prices = 200 * rateCal.weight;
                    } else {
                        prices = 'Invalid data';
                    }
                    break;
                default:
                    prices = 'Invalid data';
            }
            break;
        case 3:
            switch (rateCal.shiptype) {
                case 'Document':
                    if (rateCal.weight < 250) {
                        prices = 80;
                    } else if (rateCal.weight >= 250 && rateCal.weight <= 1000) {
                        prices = 100;
                    } else {
                        prices = 'Invalid data';
                    }
                    break;
                case 'Parcel':
                    if (rateCal.weight >= 1 && rateCal.weight <= 15) {
                        prices = 75 * rateCal.weight;
                    } else {
                        prices = 'Invalid data';
                    }
                    break;
                case 'Cargo':
                    if (rateCal.weight > 10) {
                        prices = 250 * rateCal.weight;
                    } else {
                        prices = 'Invalid data';
                    }
                    break;
                default:
                    prices = 'Invalid data';
            }
            break;
        default:
            prices = 'Invalid data';
    }

    useEffect(() => {
        if (rateCal.shiptype == "Document") {
            setrateCal(prev => ({ ...prev, unit: "Gram" }))

        }
        else {
            setrateCal(prev => ({ ...prev, unit: "Kg" }))

        }
    },[rateCal.shiptype])

    // state end
    const navigate = useNavigate();


    //service api
    const [servicePin, setServicePin] = useState();
    const [ppinAvailable, setPPinAvailable] = useState(true)
    const [dpinAvailable, setDPinAvailable] = useState(true)

    const serviceUrl = "https://pickupkart.in/api/service"
    useEffect(() => {
        axios.get(serviceUrl)
            .then((res) => {
                const { data } = res;
                setServicePin(data.map((item) => {
                    return item.Pincode
                }))
            })
            .catch((error) => {
                console.error(error);
            })
    },[])
    //service api end
    // stateUpdate



    const handleChange1 = (e) => {
        setrateCal(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };



    const allValuesPresentD = Object.values(dAddress).every((value) => Boolean(value));
    const allValuesPresentP = Object.values(pAddress).every((value) => Boolean(value));
    const allValuesPresentR = Object.values(rateCal).every((value) => Boolean(value));






    const handlePickChange = (e) => {
        setPickaddress(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };
    const handleDropChange = (e) => {
        setdropaddress(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };






    const [selectedDate, setSelectedDate] = useState('');


    const handleDate = (event) => {
        setSelectedDate(event.target.value);


    }





    const postUrl = "https://pickupkart.in/api/postBooking";
    const [submitted, setSubmitted] = useState(false)
    const currentDate = new Date().toISOString().slice(0, 10);


    const handleClick = () => {
        if (allValuesPresentP && allValuesPresentD && allValuesPresentR && selectedDate) {
            const pConAd = pAddress.pcity + " " + pAddress.parea;
            const dConAd = dAddress.dcity + " " + dAddress.darea;

            const detail = {
                pname: pAddress.pcontactname,
                pnumber: pAddress.pcontactno,
                pemail: pAddress.pemail,
                paddress: pAddress.phouse,
                ppin: Number(pAddress.ppin),
                pcity: pConAd,
                pstate: pAddress.pstate,
                dname: dAddress.dcontactname,
                dnumber: dAddress.dcontactno,
                demail: dAddress.demail,
                daddress: dAddress.dhouse,
                dpin: Number(dAddress.dpin),
                dcity: dConAd,
                dstate: dAddress.dstate,
                shiptype: rateCal.shiptype,
                weight: rateCal.weight,
                unit: rateCal.unit,
                schedules: selectedDate,
                price: Number(prices),
                orderDate: currentDate
            };

            axios.post(postUrl, detail)
                .then(response => {
                    // console.log('Response:', response.data);
                    alert("Data Submitted Successfully.");
                })
                .catch(error => {
                    console.error('Error:', error);
                });

            setSubmitted(true)

        }
        else {
            alert("please fill all data")
        }
    }
   

    const postalUrl = "https://api.postalpincode.in/pincode/";
    const handleNext = async () => {
        const index01 = servicePin.findIndex(num => num === Number(pAddress.ppin));
        if (index01 !== -1) {
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
                return { ...prevState, pstate: state, parea: district }
            });

            setPickAd(pickData)
            const pAd = pickData[0].PostOffice;

            window.sessionStorage.setItem('pickAd', JSON.stringify(pAd));
        } else {
            setPPinAvailable(false)
        }

    };
    const handleNext1 = async () => {
        const index01 = servicePin.findIndex(num => num === Number(dAddress.dpin));
        if (index01 !== -1) {
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
                return { ...prevState, dstate: state, darea: district }
            });

            setDropAd(dropData);


            const dAd = dropData[0].PostOffice;

            window.sessionStorage.setItem('dropkAd', JSON.stringify(dAd));
        } else {
            setDPinAvailable(false)
        }

    };

    return (
        <><QuickNav/>
            <div className=" py-4 bg-[#F8FEFF]">

                
                <div className=" mx-auto h-full border rounded-lg mb-3  max-w-[1200px] shadow-lg">
                    <div className="h-[45px] flex flex-row justify-between pl-5 pr-5 items-center rounded-t-md bg-[#0260AA]">
                        <p className="text-white ">Add<span className="text-[#EF8038] font-bold"> Address</span> </p>

                    </div>

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1,  width:{ xs:"90%",md:'25ch'} },
                        }}
                        noValidate
                        autoComplete="off"
                        textAlign={"center"}
                    >
                        <div className="mt-3">
                            <TextField onChange={handlePickChange} id="outlined-basic" label="Pickup Contact Name" variant="outlined" name="pcontactname" />
                            <TextField onChange={handlePickChange}

                                id="outlined-required"
                                label="Pickup Mobile"
                                name="pcontactno"
                            />
                            <TextField onChange={handlePickChange}

                                id="outlined-required"
                                label="Pickup Address"
                                name="phouse"
                            />
                            <TextField onChange={handlePickChange} onBlur={handleNext}
                                id="outlined-number"
                                label="Pickup Pincode"
                                type="number"
                                name="ppin"
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
                                    select
                                    label="Pickup City"
                                    name="pcity"
                                    helperText="Please select your Pickup City"
                                    value={pAddress.pcity}

                                    children={pickAd[0].PostOffice.map((option) => (
                                        <MenuItem key={option.value} value={option.Name}>
                                            {option.Name}
                                        </MenuItem>
                                    ))}
                                >

                                </TextField>) : (<TextField onChange={handlePickChange}
                                    id="outlined-select-currency"

                                    disabled
                                    label="Pickup City"
                                    name="pcity"
                                    helperText="Please select your Pickup City"
                                >
                                    {/* {pselect.map((option) => (
                                        <MenuItem key={option.value} value={option.Name}>
                                            {option.Name}
                                        </MenuItem>
                                    ))} */}
                                </TextField>)
                            }



                        </div>
                    </Box>








                </div>
                <div className=" mx-auto h-full border rounded-lg mb-3 shadow-lg max-w-[1200px]">


                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1,  width:{ xs:"90%",md:'25ch'} },
                        }}
                        noValidate
                        autoComplete="off"
                        textAlign={"center"}
                    >
                        <div className="mt-3">
                            <TextField onChange={handleDropChange} id="outlined-basic" label=" Receiver's Name" variant="outlined" name="dcontactname" />
                            <TextField onChange={handleDropChange}

                                id="outlined-required"
                                label="Receiver's Mobile"
                                name="dcontactno"
                            />
                            <TextField onChange={handleDropChange}

                                id="outlined-required"
                                label="Delivery Address"
                                name="dhouse"
                            />
                            <TextField onChange={handleDropChange} onBlur={handleNext1}
                                id="outlined-number"
                                label="Delivery Pincode"
                                type="number"
                                name="dpin"
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
                                    select
                                    label="Delivery City"
                                    name="dcity"
                                    helperText="Please select delivery City"
                                    value={dAddress.dcity}
                                    children={dropAd[0].PostOffice.map((option) => (
                                        <MenuItem key={option.value} value={option.Name}>
                                            {option.Name}
                                        </MenuItem>
                                    ))}
                                >


                                </TextField>) : (<TextField onChange={handlePickChange}
                                    id="outlined-select-currency"

                                    disabled
                                    label="Delivery City"
                                    name="dcity"
                                    helperText="Please select delivery City"
                                >


                                </TextField>)}




                        </div>
                    </Box>








                </div>

                <div className=" mx-auto h-full border shadow-lg rounded-lg mb-3  max-w-[1200px]">

                    <div className="h-[45px] flex flex-row justify-between pl-5 pr-5 items-center  rounded-t-md ">
                        <p className="text-[#EF8038]  ">Add <span className="text-[#0260AA] font-bold"> Package </span>  details</p>

                    </div>

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width:{ xs:"90%",md:'25ch'} },
                            '@media (max-width: 600px)': {
                                textAlign: "center"
                            },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                        <TextField onChange={handleChange1}
                                id="outlined-select-currency"
                                select
                                label="Package Type"
                                name="shiptype"
                                helperText="Please select your Type"
                                value={rateCal.shiptype}
                            >

                                <MenuItem value="Document">
                                    Document
                                </MenuItem>
                                    <MenuItem value="Parcel">
                                    Parcel     
                                    </MenuItem>
                                    <MenuItem value="Cargo">
                                        Cargo
                                    </MenuItem>

                            </TextField>
                           {rateCal.unit=="Gram"? <TextField onChange={handleChange1} id="outlined-basic" label="Weight in Gram only" variant="outlined" name="weight" />:<TextField onChange={handleChange1} id="outlined-basic" label="Weight in Kg only" variant="outlined" name="weight" />}
                        
                            
                            {prices == "Invalid data" ? (
                              <Box p={2}> <Typography variant="caption" color={"error"}>Please Note: parcel weight must be under 15kg and cargo must be above 10kg</Typography>
                               </Box>
                            ) : (  <FormControl sx={{ pt: 2 }}>

                                <RadioGroup
                                    onChange={handleChange1}
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="unit"
                                >
                                    
                                        <FormControlLabel value="stdRate" control={<Radio />} label={`PickupKart Std: ₹${prices}`} />
                                           
                                       <FormControlLabel value="groundRate" control={<Radio />} label={`PickupKart Ground: ₹${prices}`} />
                                       <FormControlLabel value="cargoRate" control={<Radio />} label={`PickupKart Cargo: ₹${prices}`} />

                                </RadioGroup>
                            </FormControl>)}

                        </div>
                    </Box>









                </div>



                <div className="border border-grey-200 shadow-lg mx-auto mt-2 rounded-lg max-w-[1200px]">

                    <div className="h-[45px] flex flex-row justify-between pl-5 pr-5 items-center  rounded-t-md ">
                        <p className="text-[#EF8038]  "><span className="text-[#0260AA] font-bold"> Schedule </span>Pickup</p>

                    </div>
                    <hr />
                    <div className="p-3">



                        {/* <img src={Vectorright} className="absolute right-7 top-5 max-[1024px]:right-8" alt=""/>  */}
                        <input
                                    type="datetime-local"
                                    required
                                    name="pickupdatetime"
                                    onChange={handleDate}
                                    className="p-2 transition-all duration-200 border border-gray-200 shadow-md rounded-lg font-mullish outline-lightBlue placeholder:text-base max-[475px]:placeholder:text-xs"
                                />
                    </div>
                </div>
            </div>


            <div className="flex flex-col bg-[#F8FEFF] items-center justify-center">
                {!submitted && (
                    <button
                        className="w-[133px] max-[475px]:text-[13px] max-[475px]:w-[140px] max-[475px]:h-[40px] h-[30px] bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO mt-5 rounded-lg mb-4"
                        onClick={handleClick}
                    >
                        Get Quote
                    </button>
                )}
                {submitted && (
                    <>
                        <div className="mb-4 mt-4 text-[green] text-[20px]">"Hooray, Our courier is currently en route to pick it up."</div>
                        <div>
                            <Link to="/">
                                <button className="w-[133px] max-[475px]:text-[13px] max-[475px]:w-[140px] max-[475px]:h-[40px] h-[30px] bg-[#EDEDED] text-black text-[16px] font-semibold font-ROBOTO mt-5 rounded-lg mb-4">Go to Homepage</button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default QuickForm;