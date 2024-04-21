import React from "react";
import { Box } from '@mui/material';
import { PlaneSeat } from "../../atoms/planeSeat/PlaneSeat";

// const RowSeat =({rowNumber, seatColumns, selectedSeats, setSelectedSeats})=>{
const RowSeat =({ rowNumber, seatColumns })=>{


  return(
    <Box display='flex' justifyContent='space-evenly' paddingY='8px'>
      {seatColumns.map((seatColumn) => 
        <PlaneSeat 
          key={seatColumn+rowNumber}
          seatNumber={seatColumn+rowNumber} 
          // selectedSeats={selectedSeats} 
          // setSelectedSeats={setSelectedSeats}
          seatPrice={'1250000'}
          />
      )}
    </Box>
  );
}

export { RowSeat };