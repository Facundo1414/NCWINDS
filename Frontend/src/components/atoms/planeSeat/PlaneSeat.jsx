import React, { useState ,useEffect, useContext } from "react";
import { Typography, Tooltip, Button } from '@mui/material';
import { HoverComponent } from '../../atoms/hoverComponent/HoverComponent';
import { ViajesContext } from "../../../context/ViajesContextProvider";


// const PlaneSeat =({seatNumber, seatPrice, selectedSeats, setSelectedSeats})=>{
const PlaneSeat =({ seatNumber, seatPrice })=>{
  const { listaAsientos, setListaAsientos } = useContext(ViajesContext);
  const [isSelected, setIsSelected] = useState(false);
 
  useEffect(() => {
    const isSeatSelected = listaAsientos.some(seat => seat.seatNumber === seatNumber);
    setIsSelected(isSeatSelected);
  }, [listaAsientos, seatNumber]);

  const handleSeatClick = () => {
    if (isSelected) {
      setListaAsientos(prevSeats => prevSeats.filter(seat => seat.seatNumber !== seatNumber));
    } else if (listaAsientos.length < 4) {
      setListaAsientos(prevSeats => [...prevSeats, { seatNumber, seatPrice }]);
    }
  }


  return(
    <Tooltip title={<HoverComponent seatNumber={seatNumber} price={seatPrice} />} placement='top' arrow>
      <Button style={{backgroundColor:isSelected? 'rgb(6,88,190)':'white'}} onClick={handleSeatClick} sx={{border: '2px solid black', borderRadius: '8px', width: '3rem', height: '3.5rem', color: 'black', ":hover":{backgroundColor: '#0658BE', color: 'white'}}}>
          <Typography fontWeight='bold'>{seatNumber}</Typography>
      </Button>
    </Tooltip>
  );
}

export { PlaneSeat };