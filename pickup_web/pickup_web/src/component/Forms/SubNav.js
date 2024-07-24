import React, { useState , useEffect} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import { Grid, Paper } from '@mui/material';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Forms from './Forms';
import Package from './Package';
import Schedule01 from './Schedule01';
import Summary from './Summary';
import pickupkart1 from "../Images/pick.png";
import { Link } from 'react-router-dom';
import formBack from '../Images/formBack.jpg'
import axios from 'axios';
import './Forms.css'


const steps = ['Add address', 'Package Type', 'schedule pickup'];

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());


    const [deliveryOptionPins,setDelOptPin]=useState();

    const delOptPin="https://pickupkart.in/api/deliveryOptionPin"

    useEffect(()=>{
        axios.get(delOptPin)
        .then((res)=>{
            const {data}=res;
            setDelOptPin(data);
            
        })
     },[])
     const pickupkartGround = deliveryOptionPins?.pickupkartGround.map(item => item.Pin);
     const pickupkartStd = deliveryOptionPins?.pickupkartStd.map(item => item.Pin);
     const pickupkartCargo = deliveryOptionPins?.pickupkartCargo.map(item => item.Pin);
    useEffect(() => {
        const handleBeforeUnload = () => {
          sessionStorage.clear();
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
            window.scrollTo(0, 0);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
        window.scrollTo(0, 0);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        window.scrollTo(0, 0);
    };

    const [isForms, setForms] = useState(false)
    const [isPackage, setPackage] = useState()
    const [isSchedule, setSchedule] = useState()

    

    const handleReset = () => {
       window.location.reload();
    };
    const renderSteps = () => {
        switch (activeStep) {
            case 0:
                return <Forms pickupkartGround={pickupkartGround} pickupkartStd={pickupkartStd} pickupkartCargo={pickupkartCargo}  setForms={setForms} />;
            case 1:
                return <Package setPackage={setPackage} />;
            case 2:
                return <Schedule01 pickupkartGround={pickupkartGround} pickupkartStd={pickupkartStd} pickupkartCargo={pickupkartCargo}  setSchedule={setSchedule} />;
            default:
                return <Forms setForms={setForms} />;
        }
    }

    const isStepComplete = () => {
        switch (activeStep) {
          case 0:
            return isForms;
          case 1:
            return isPackage;
          case 2:
            return isSchedule;
          default:
            return false;
        }
      };

    return (
        <Box sx={{ width: '100%' }}>
            <Grid display={"flex"} justifyContent={"center"} container sx={{ backgroundColor: "#ECEEED" }}> <Grid item sm={12} md={6}>
                <Box textAlign={"center"}>   <Link style={{textAlign:"center"}} to={'/'}> <img src={pickupkart1} className="max-[640px]:-ml-5 -ml-3 max-[768px]:w-[160px]" width="200" alt="" /></Link></Box>

            </Grid>
                <Grid item md={6}>
                    <Box p={3} >

                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};

                                if (isStepSkipped(index)) {
                                    stepProps.completed = false;
                                }
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel  {...labelProps}><Typography fontFamily={'Fjalla One'}> {label}</Typography></StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>

                    </Box>
                </Grid>
            </Grid><hr />



            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography>
                        <Summary />
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: "center", p: 2, backgroundColor: "#ECEEED" }}>
                        <Button variant='contained' onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment >
                    <Box sx={{
                        backgroundImage: `url(${formBack})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        {renderSteps()}</Box>
                    <Box sx={{ display: 'flex', justifyContent: "center", p: 5, backgroundColor: "#ECEEED" }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box />

                        <Button
                            variant='contained'
                            disabled={!isStepComplete()} 
                            onClick={handleNext}
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}