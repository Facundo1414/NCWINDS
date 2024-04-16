import React from "react";
import { Box } from '@mui/material';
import PlaneSeat from "../../atoms/planeSeat/PlaneSeat";

const RowSeat =({rowNumber, seatColumns})=>{


  return(
    <Box display='flex' justifyContent='space-evenly' paddingY='8px'>
      {seatColumns.map((seatColumn) => <PlaneSeat key={seatColumn+rowNumber} seatNumber={seatColumn+rowNumber} />)}
    </Box>
  );
}

export { RowSeat };