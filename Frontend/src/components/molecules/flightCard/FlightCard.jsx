import React from "react";
import { Box, Button, Grid, Typography, Divider } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';


const FlightCard =({ horaSalida, horaLlegada, lugarSalida, lugarLlegada, duracionVuelo, precio })=>{

  return(
    <Grid container component='article' height='160px' marginY='15px' borderRadius='12px' color={'black'} sx={{backgroundColor: 'white', boxShadow: 3}}>
      <Grid item container display={'flex'} xs='9'>
        <Grid item xs='3' alignContent='center' textAlign='center'>
          <Typography variant='h4' fontWeight='600' letterSpacing={2}>{horaSalida}</Typography>
          <Typography>{lugarSalida[0]}</Typography>
          <Typography>{lugarSalida[1]}</Typography>
        </Grid>

        <Grid item xs='6' alignContent='center' textAlign='center'>
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

        <Grid item xs='3' alignContent='center' textAlign='center'>
          <Typography  variant='h4' fontWeight='600' letterSpacing={2}>{horaLlegada}</Typography>
          <Typography>{lugarLlegada[0]}</Typography>
          <Typography>{lugarLlegada[1]}</Typography>
        </Grid>
      </Grid>

      <Grid item xs='3' alignContent='center'>
        <Box display='flex' justifyContent='center' alignContent='center'>
          <Button sx={{
            backgroundColor: '#FFB500',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '25px',
            letterSpacing: '2px',
            borderRadius: '30px',
            padding: '10px',
            width: '180px'
          }}>
            {precio}
          </Button>
          </Box>
      </Grid>
    </Grid>
  );
}

export default FlightCard;