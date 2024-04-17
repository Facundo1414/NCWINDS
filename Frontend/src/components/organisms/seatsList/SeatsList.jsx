import React from "react";
import { Box, Divider, Typography, colors } from '@mui/material';
import { SeatCard } from '../../molecules/seatCard/SeatCard';
import { AtomButton } from '../../atoms/atomButton/AtomButton';


const SeatList =({ selectedSeats, setSelectedSeats })=>{
  let finalPrice = 0;

  const deleteSeat = (seatNumber) => {
    setSelectedSeats(selectedSeats.filter((seat) => seat.seatNumber !== seatNumber));
  };

  const calculateFinalPrice = () => {
     selectedSeats.forEach(seat => {
      finalPrice += parseInt(seat.seatPrice);
     })
  };


  return(
    <Box borderRadius='12px' padding='20px 10px' sx={{backgroundColor: 'white'}} boxShadow='3'>
      <Box>
        <Typography variant="h5">Pasajeros</Typography>
      </Box>
      <Box>
        {selectedSeats.map((value, index) =>{
          calculateFinalPrice();
          return <SeatCard key={index} passengerNumber={index+1} seatNumber={value.seatNumber} 
                  seatPrice={value.seatPrice}  onDelete={()=> deleteSeat(value.seatNumber)}/>
        })}
      </Box>
      <Box display='flex' justifyContent='center'>
        <AtomButton
          buttonStyles={{
            borderRadius: '1.5rem', 
            backgroundColor: '#FFB500',
            color: 'black',
            fontWeight: 'bold',
            width: '80%',
            padding: '8px',
            fontSize: '1.2rem'
          }} 
          inputText={'Comprar'}/>
      </Box>
      <Divider sx={{marginY: '10px'}}/>
      <Box display='flex' justifyContent='space-between' color='#002561' paddingX='8px'>
        <Typography fontSize='1.1rem'>Precio Final:</Typography>
        <Typography fontSize='1.1rem'>${finalPrice}</Typography>
      </Box>
    </Box>
  );
}

export { SeatList };