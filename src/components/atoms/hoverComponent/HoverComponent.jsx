import React from "react";
import { Box, Typography } from "@mui/material";

const HoverComponent =({seatNumber, price})=>{

  return(
    <Box>
      <Typography>Asiento: {seatNumber}</Typography>
      <Typography>Precio: ${price}</Typography>
    </Box>
  );
}

export { HoverComponent };