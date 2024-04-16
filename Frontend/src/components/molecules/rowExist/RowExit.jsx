import { Box, Typography } from "@mui/material";
import React from "react";


const RowExit =()=>{

  return(
    <Box display='flex' justifyContent='space-between' paddingX='1rem'>
      <Box display='flex' alignItems='center' justifyContent='center' height='3rem' width='5rem' paddingY='8px' borderRadius='8px' border='2px solid black'>
        <Typography fontWeight='bold'>Exit</Typography>
      </Box>

      <Box display='flex' alignItems='center' justifyContent='center' height='3rem' width='5rem' paddingY='8px' borderRadius='8px' border='2px solid black'>
        <Typography fontWeight='bold'>Exit</Typography>
      </Box>
    </Box>
  );
}

export { RowExit };