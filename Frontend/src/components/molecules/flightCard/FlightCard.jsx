import React, { useContext } from "react";
import { Box, Grid, Typography, Divider, Hidden, Link } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { AtomButton } from '../../atoms/atomButton/AtomButton';
import { useNavigate } from "react-router-dom";

const FlightCard = ({ flight }) => {
  const navigate = useNavigate();
  const { setVueloSeleccionado } = useContext(ViajesContext);

  const { origin, destiny, dateOfOrigin, dateOfDestiny, duration, price, departureTime , arrivalTime, scaleNumbers,description} = flight;

  const propsFlightCard = {
    origen: origin.split(','),
    destino: destiny.split(','),
    horaSalida: dateOfOrigin,
    horaLlegada: dateOfDestiny,
    duracionVuelo: duration,
    precio: price
  };

  const onClick = () => {
    setVueloSeleccionado({
      id: flight.id,
      origin: origin,
      destiny: destiny,
      price: price,
      dateOfOrigin: dateOfOrigin,
      dateOfDestiny: dateOfDestiny,
      departureTime: departureTime,
      arrivalTime: arrivalTime,
      scaleNumbers: scaleNumbers,
      description: description,
      duration: duration
    });

    navigate("/seatSelection");
  };

  return (
    <Link href='#' underline="none" sx={{ cursor: 'pointer' }} onClick={onClick}>
      <Grid container component='article' minHeight='160px' alignItems='center' marginY='15px' padding='20px' borderRadius='12px' color={'black'} sx={{ backgroundColor: 'white', boxShadow: 3, borderLeft: '8px solid #FFB500' }}>
        <Grid item container xs='12' md='9'>
          <Grid item xs='6' md='3' alignContent='center' textAlign='center'>
            <Typography variant='h4' fontWeight='600' letterSpacing={2}>{propsFlightCard.horaSalida}</Typography>
            <Typography>{propsFlightCard.origen[0]}</Typography>
            <Typography>{propsFlightCard.origen[1]}</Typography>
          </Grid>
          <Hidden mdDown>
            <Grid item xs='12' md='6' alignContent='center' textAlign='center'>
              <Typography variant='h5' letterSpacing='2px' fontWeight='700'>{propsFlightCard.duracionVuelo}</Typography>
              <Divider variant="middle" sx={{ borderColor: '#FFB500', borderWidth: '2px' }} />
              <Box display='flex' position='relative'>
                <Box position='absolute' top='-15px' color="#FFB500">
                  <CircleIcon />
                </Box>
                <Box position='absolute' top='-15px' right='0' color="#FFB500">
                  <CircleIcon />
                </Box>
              </Box>
            </Grid>
          </Hidden>
          <Grid item xs='6' md='3' alignContent='center' textAlign='center'>
            <Typography variant='h4' fontWeight='600' letterSpacing={2}>{propsFlightCard.horaLlegada}</Typography>
            <Typography>{propsFlightCard.destino[0]}</Typography>
            <Typography>{propsFlightCard.destino[1]}</Typography>
          </Grid>
        </Grid>
        <Hidden mdUp>
          <Grid item xs='12' md='6' alignContent='center' textAlign='center' margin='20px'>
            <Typography variant='h5' letterSpacing='2px' fontWeight='700'>{propsFlightCard.duracionVuelo}</Typography>
            <Divider variant="middle" sx={{ borderColor: '#FFB500', borderWidth: '2px' }} />
            <Box display='flex' position='relative'>
              <Box position='absolute' top='-15px' color="#FFB500">
                <CircleIcon />
              </Box>
              <Box position='absolute' top='-15px' right='0' color="#FFB500">
                <CircleIcon />
              </Box>
            </Box>
          </Grid>
        </Hidden>
        <Grid item xs='12' md='3' alignContent='center'>
          <Box display='flex' justifyContent='center' alignContent='center'>
            <AtomButton
              inputText={`$${propsFlightCard.precio}`}
              buttonStyles={{
                backgroundColor: '#FFB500',
                color: 'black',
                fontWeight: 'bold',
                fontSize: '25px',
                letterSpacing: '2px',
                borderRadius: '30px',
                padding: '10px',
                width: '180px'
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Link>
  );
}

export default FlightCard;
