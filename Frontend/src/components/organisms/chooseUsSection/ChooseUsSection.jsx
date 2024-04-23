import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { AboutCard } from "../../molecules/aboutCard/AboutCard";
import aboutCards from "../../../utils/aboutCards/aboutCards.json";


const ChooseUsSection =()=>{


  return(
    <Box component='section' borderRadius='1rem' margin='0 2rem 5rem 2rem' sx={{backgroundColor: '#002561'}}>
      <Grid container padding='1.2rem' minHeight='460px'>
        <Grid item xs={12} md={3} display='flex' justifyContent='center' alignItems='center'>
          <Box padding='0.5rem'>
            <Typography fontWeight='bold' align="center" variant='h3'>¿Por qué elegirnos?</Typography>
            <Typography align="center" variant='h6'>Somos una empresa comprometida con brindarte la mejor experiencia para llevarte a tu destino</Typography>
          </Box>
        </Grid>

        <Grid item container xs={12} md={9}> 

          {aboutCards.map((value) => {
            return(
              <Grid item key={value.id} xs={12} md={4} display='flex' alignItems='center'>
                <AboutCard aboutImg={value.icon} aboutTittle={value.title} aboutDesc={value.text}/>
              </Grid>
            );
          })}

        </Grid>
      </Grid>
    </Box>
  );
}

export { ChooseUsSection };