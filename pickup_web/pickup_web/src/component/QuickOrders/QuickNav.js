import React from "react";
import { Grid, Box } from "@mui/material";
import pickupkart1 from "../Images/pick.png";
import { Link } from "react-router-dom";

const QuickNav = () => {
    return (
        <>
            <Grid container sx={{ backgroundColor: "#F8FEFF" }}>
                <Grid display={"flex"} justifyContent={"center"} item xs={12} md={6}><Link to={'/'}> <img src={pickupkart1} width={"200px"} /></Link> </Grid>
                <Grid item xs={12} md={6}> <div className="flex text-[30px] justify-center items-center h-full mb-3">
                    <h1 className="text-[#EF8038]"><span className="text-[#0260AA]">Quick </span> Book</h1>
                </div>
                </Grid>

            </Grid>
        </>
    )
}

export default QuickNav