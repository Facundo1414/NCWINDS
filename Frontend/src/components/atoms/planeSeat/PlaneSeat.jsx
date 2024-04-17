import React, { useState ,useEffect} from "react";
import { Typography, Tooltip, Button } from '@mui/material';
import { HoverComponent } from '../../atoms/hoverComponent/HoverComponent';


const PlaneSeat =({seatNumber, seatPrice, selectedSeats, setSelectedSeats})=>{
const [isSelected, setIsSelected] = useState(false);
 
useEffect(() => {
  const isSeatSelected = selectedSeats.some(seat => seat.seatNumber === seatNumber);
  setIsSelected(isSeatSelected);
}, [selectedSeats, seatNumber]);

const handleSeatClick = () => {
  if (!isSelected && selectedSeats.length < 4) {
    setSelectedSeats(prevSeats => [...prevSeats, { seatNumber, seatPrice }]);
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