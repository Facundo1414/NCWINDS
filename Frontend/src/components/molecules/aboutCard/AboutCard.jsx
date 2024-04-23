import React from "react";
import { Box, Typography, Paper } from '@mui/material';
import './AboutCard.css';



const AboutCard =({ aboutImg, aboutTittle, aboutDesc })=>{

  return(
    <Box className='aboutCard-container' padding={'1rem'}>
      <Box className='aboutImg-container'>
        <img src={aboutImg} alt="img-about" />
      </Box>
      <Box className='aboutText-container' justifyContent={'space-between'}>
        <Typography variant="h5">{aboutTittle}</Typography>
        <Typography variant="p">{aboutDesc}</Typography>
      </Box>
    </Box>
  );
}

export { AboutCard };