import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid, responsiveFontSizes } from '@material-ui/core';
import './Footer.css';

function Footer (){
    return(
        <>
         <Grid container className="cordefundofooter"  direction="row" justifyContent="center" alignItems="center" >
                <Grid alignItems="center" item xs={12}>
                    <Box  style={{ height: "80px"}} >
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography  variant="h5" align="center" gutterBottom style={{ color: "white", fontSize:15 }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.instagram.com/nay_lrs/" target="_blank">
                                <InstagramIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/nayara-lucia-1a0982205/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box  style={{ height: "60px"}}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >Nay © 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;