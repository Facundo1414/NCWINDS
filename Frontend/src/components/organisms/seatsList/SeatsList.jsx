import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Divider, Typography, Link } from '@mui/material';
import { SeatCard } from '../../molecules/seatCard/SeatCard';
import { ViajesContext } from "../../../context/ViajesContextProvider";


const SeatList =()=>{
  const navigate = useNavigate();
  const { listaAsientos, setListaAsientos } = useContext(ViajesContext);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    listaAsientos.forEach(seat => {
        price += parseInt(seat.seatPrice);
    });
    setFinalPrice(price);
}, [listaAsientos]);


  const deleteSeat = (seatNumber) => {
    setListaAsientos(listaAsientos.filter((seat) => seat.seatNumber !== seatNumber));
  };

  const handleButtonClick =()=>{
    navigate("/clientInfo");
  };

  console.log(listaAsientos);
  return(
    <Box borderRadius='12px' padding='20px 10px' sx={{backgroundColor: 'white'}} boxShadow='3'>
      <Box>
        <Typography variant="h5">Pasajeros</Typography>
      </Box>
      <Box>
        {listaAsientos.map((value, index) =>{
          return <SeatCard key={index} passengerNumber={index+1} seatNumber={value.seatNumber} 
                  seatPrice={value.seatPrice}  onDelete={()=> deleteSeat(value.seatNumber)}/>
        })}    
      </Box>

      <Box display='flex' justifyContent='center'>
        <Link sx={{
          borderRadius: '1.5rem', 
          backgroundColor: '#FFB500',
          color: 'black',
          fontWeight: 'bold',
          width: '80%',
          padding: '8px',
          fontSize: '1.2rem'
        }}
        onClick={handleButtonClick}
        >
          Comprar
        </Link>
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