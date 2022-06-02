import React from 'react'
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css'
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';

function Home(){
    return (
    <>
    <Grid container direction="row" justifyContent="center" alignItems="center"  className="background">
 
                <Grid alignItems="center" item xs={12}>

                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
               
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                <TabPostagem/>
                </Grid>
            </Grid>

    </>
    )
}

export default Home

