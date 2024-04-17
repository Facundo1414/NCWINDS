import React from "react";
import { Typography, Tooltip, Button } from '@mui/material';
import { HoverComponent } from '../../atoms/hoverComponent/HoverComponent';

const PlaneSeat =({seatNumber, price})=>{

  return(
    <Tooltip title={<HoverComponent seatNumber={seatNumber} price={price} />} placement='top' arrow>
      <Button sx={{border: '2px solid black', borderRadius: '8px', width: '3rem', height: '3.5rem', color: 'black', ":hover":{backgroundColor: '#0658BE', color: 'white'}}}>
          <Typography fontWeight='bold'>{seatNumber}</Typography>
      </Button>
    </Tooltip>
  );
}

export { PlaneSeat };