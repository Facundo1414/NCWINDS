import React from "react";
import { Box, Grid, Typography, Divider, Hidden, Link } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { AtomButton }from '../../atoms/atomButton/AtomButton';

//Falta definir el path de cada card

const FlightCard =({props})=>{
  const horaSalida = props.horaSalida;
  const horaLlegada = props.horaLlegada;
  const lugarSalida = props.origen;
  const lugarLlegada = props.destino;
  const duracionVuelo = props.duracionVuelo;
  const precio = props.precio;

  return(
    <Link href='#' underline="none" sx={{cursor: 'pointer'}}>
      <Grid container component='article' minHeight='160px' alignItems='center' marginY='15px' padding='20px' borderRadius='12px' color={'black'} sx={{backgroundColor: 'white', boxShadow: 3, borderLeft: '8px solid #FFB500'}}>
        <Grid item container xs='12' md='9'>

          <Grid item xs='6' md='3' alignContent='center' textAlign='center'>
            <Typography variant='h4' fontWeight='600' letterSpacing={2}>{horaSalida}</Typography>
            <Typography>{lugarSalida[0]}</Typography>
            <Typography>{lugarSalida[1]}</Typography>
          </Grid>

          <Hidden mdDown>
            <Grid item xs='12' md='6' alignContent='center' textAlign='center'>
              <Typography variant='h5' letterSpacing='2px' fontWeight='700'>{duracionVuelo}</Typography>
              <Divider variant="middle" sx={{ borderColor: '#FFB500', borderWidth: '2px' }}/>
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
            <Typography  variant='h4' fontWeight='600' letterSpacing={2}>{horaLlegada}</Typography>
            <Typography>{lugarLlegada[0]}</Typography>
            <Typography>{lugarLlegada[1]}</Typography>
          </Grid>
        </Grid>

        <Hidden mdUp>
          <Grid item xs='12' md='6' alignContent='center' textAlign='center' margin='20px'>
              <Typography variant='h5' letterSpacing='2px' fontWeight='700'>{duracionVuelo}</Typography>
              <Divider variant="middle" sx={{ borderColor: '#FFB500', borderWidth: '2px' }}/>
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
              inputText={`$${precio}`}
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

export { FlightCard };