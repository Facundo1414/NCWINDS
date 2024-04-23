import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { AboutCard } from "../../molecules/aboutCard/AboutCard";
import aboutCards from "../../../utils/aboutCards/aboutCards.json";

const ChooseUsSection = () => {
  return (
    <Box component="section" borderRadius="1rem" margin="0 2rem 5rem 2rem" padding={'2rem 1rem'} sx={{ backgroundColor: '#002561' }}>
      <Grid container padding="1.2rem" minHeight="460px">
        <Grid item xs={12} md={3} display="flex" justifyContent="center" alignItems="center">
          <Box padding="0.5rem"  >
            <Typography marginTop={"-1rem"} marginBottom={'1rem'} align="center" variant="h2" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', fontSize: "40px", fontWeight: "600", textShadow: " 2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
              ¿Por qué elegirnos?
            </Typography>
            <Typography align="center" variant="h4" fontSize={'1.3rem'} fontWeight={'normal'} fontFamily={'Inter, sans-serif'} padding={'1.5rem'}>
              Somos una empresa comprometida con brindarte la mejor experiencia para llevarte a tu destino
            </Typography>
          </Box>
        </Grid>

        <Grid item container xs={12} md={9}>
          {aboutCards.map((value) => (
            <Grid item key={value.id} xs={12} md={4} display="flex" alignItems="center" >
              <AboutCard aboutImg={value.icon} aboutTittle={value.title} aboutDesc={value.text} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export { ChooseUsSection };
