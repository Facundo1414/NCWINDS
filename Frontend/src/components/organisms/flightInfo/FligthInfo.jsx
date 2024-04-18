import React from "react";
import { Box, Typography } from "@mui/material";
import { ControlledAccordions } from "../../molecules/accordion/Accordion";


const FligthInfo = () => {
  return (
    <Box padding='1rem' sx={{backgroundColor: 'white'}} boxShadow='3' borderRadius='12px'>
      <Typography variant="h4" align="center" flexWrap={1} color={"black"} >Informacion de Vuelo</Typography>
      <ControlledAccordions />
    </Box>
  );
};

export { FligthInfo };