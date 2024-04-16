import React from "react";
import { Grid, Box, Typography } from '@mui/material';
import PlaneSeat from '../../atoms/planeSeat/PlaneSeat';
import { RowSeat } from "../../molecules/rowSeats/RowSeats";

const Plane = () => {
  const seatColumns = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatRows = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];


  return (
    <Box marginX='1.5rem'>
    <Typography variant='h4' color='black' align='center' margin='12px'>Boing 737</Typography>

    <Grid container>
      {seatRows.map((rowNumber) => (
        <Grid container>
          <Grid item xs={5} border='1px solid black'>
            <RowSeat rowNumber={rowNumber} seatColumns={seatColumns.slice(0, 3)} />
          </Grid>

          <Grid item xs={2} border='1px solid black'>
            <Box display='flex' height='66px' alignItems='center' justifyContent='center' paddingY='8px'>
              <Typography variant='h4' fontWeight='bold'>{rowNumber}</Typography>
            </Box>
          </Grid>

          <Grid item xs={5} border='1px solid black'> 
            <RowSeat rowNumber={rowNumber} seatColumns={seatColumns.slice(3)} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  </Box>
  );
}

export { Plane };
