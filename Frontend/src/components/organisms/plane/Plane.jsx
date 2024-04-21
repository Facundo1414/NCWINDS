import React from "react";
import { Grid, Box, Typography } from '@mui/material';
import { RowSeat } from "../../molecules/rowSeats/RowSeats";
import { RowExit } from "../../molecules/rowExist/RowExit";


// const Plane = ({ selectedSeats,setSelectedSeats }) => {
const Plane =()=> {
  const seatColumns = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatRows = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];


  return (
    <Box paddingY='2rem' sx={{backgroundColor: 'white'}} boxShadow='3' borderRadius='12px'>
      <Box padding='1rem'>
        <Typography variant='h4' color='black' align='center'>Boing 737</Typography>
      </Box>

      <Grid container>
        <Grid xs={12}>
          <RowExit/>
        </Grid>

        {seatRows.map((rowNumber) => (
          <Grid container>
            <Grid item xs={5}>
              {/* <RowSeat rowNumber={rowNumber} seatColumns={seatColumns.slice(0, 3)} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/> */}
              <RowSeat rowNumber={rowNumber} seatColumns={seatColumns.slice(0, 3)} />
            </Grid>

            <Grid item xs={2}>
              <Box display='flex' height='66px' alignItems='center' justifyContent='center' paddingY='8px'>
                <Typography variant='h4' fontWeight='bold'>{rowNumber}</Typography>
              </Box>
            </Grid>

            <Grid item xs={5}> 
              {/* <RowSeat rowNumber={rowNumber} seatColumns={seatColumns.slice(3)} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/> */}
              <RowSeat rowNumber={rowNumber} seatColumns={seatColumns.slice(3)} />
            </Grid>
          </Grid>
        ))}

        <Grid xs={12}>
        <RowExit/>
        </Grid>
      </Grid>
  </Box>
  );
}

export { Plane };