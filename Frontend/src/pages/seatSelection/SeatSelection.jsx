import React, { useState } from "react";
import { Grid } from "@mui/material";
import { SelectFlight } from "../../components/molecules/selectFligth/SelectFlight";
import { Plane } from "../../components/organisms/plane/Plane";
import { FligthInfo } from "../../components/organisms/flightInfo/FligthInfo";
import { SeatList } from '../../components/organisms/seatsList/SeatsList';
import "./SeatSelection.css";


const SeatSelection =()=>{
  const [selectedSeats, setSelectedSeats] = useState([
    {id: 2, seatNumber: 'A2', seatPrice: '1250000'},
    {id: 10, seatNumber: 'D1', seatPrice: '1250000'},
    {id: 16, seatNumber: 'F5', seatPrice: '1250000'},
    {id: 6, seatNumber: 'B6', seatPrice: '1250000'}
  ]);
  const [selectPlane, setSelectPlane] = useState(true);

  return (
    <div>
      <Grid container justifyContent={"space-evenly"}>
        <SelectFlight setSelectPlane={setSelectPlane}/>

        <Grid container component={'div'} marginY='3rem' padding='1rem' color='black'>
          <Grid item xs={12} md={3} marginY='1rem'>
            <FligthInfo/>
          </Grid>

          <Grid item xs={12} md={6} paddingX='1rem' marginY='1rem'>

          {selectPlane?<div className="container-plane-in">
            <Plane />
            </div>:<div className="container-plane-out">
            <Plane />
             </div>}
            
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