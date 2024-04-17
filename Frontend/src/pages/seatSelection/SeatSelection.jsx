import React, { useState } from "react";
import { Grid } from "@mui/material";
import { SelectFlight } from "../../components/molecules/selectFligth/SelectFlight";
import { Plane } from "../../components/organisms/plane/Plane";
import { FligthInfo } from "../../components/organisms/flightInfo/FligthInfo";
import { SeatList } from '../../components/organisms/seatsList/SeatsList';
import "./SeatSelection.css";


const SeatSelection =()=>{
  const [selectedSeats, setSelectedSeats] = useState([]);


  return (
    <div>
      <Grid container justifyContent={"space-evenly"}>
        <SelectFlight setSelectPlane={setSelectPlane}/>

        <Grid container component={'div'} marginY='3rem' padding='1rem' color='black'>
          <Grid item xs={12} md={3} marginY='1rem'>
            <FligthInfo/>
          </Grid>

          <Grid item xs={12} md={6} paddingX='1rem' marginY='1rem'>
            <Plane selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>
          </Grid>

          <Grid item xs={12} md={3} marginY='1rem'>
            <SeatList selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default SeatSelection;