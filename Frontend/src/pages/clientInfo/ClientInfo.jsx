import React, { useContext } from "react";
import { Grid, Box, Typography, TextField } from '@mui/material';
import { FligthInfo } from "../../components/organisms/flightInfo/FligthInfo";
import { ViajesContext } from "../../context/ViajesContextProvider";


const ClientInfo =()=>{
  const {listaAsientos} = useContext(ViajesContext);
  console.log(listaAsientos);


  return(
    <Grid component={'main'} container color='black'>
      <Grid item xs='7' padding='2rem 1rem'>
        <Box borderRadius='8px' minHeight='580px' padding='1rem' boxShadow='3' sx={{backgroundColor: 'white'}}>
          <Box padding='0px 1rem'>
            <Typography variant='h4'>Información de Cliente</Typography>
          </Box>
          <Grid container component='form'>
            <Grid xs='6' paddingX='1rem'>
              <TextField label="Nombre" variant="outlined" margin='normal' fullWidth/>
              <TextField label="Documento" variant="outlined" margin='normal' fullWidth/>
              <TextField label="Fecha de Nacimiento" variant="outlined" margin='normal' fullWidth/>
            </Grid>

            <Grid xs='6' paddingX='1rem'>
              <TextField label="Apellido" variant="outlined" margin='normal' fullWidth/>
              <TextField label="Nacionalidad" variant="outlined" margin='normal' fullWidth/>
              <TextField label="Género" variant="outlined" margin='normal' fullWidth/>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs='5' padding='2rem 1rem'>
        <Box borderRadius='8px' boxShadow='3' sx={{backgroundColor: 'white'}}>
          <FligthInfo />

        </Box>
      </Grid>
    </Grid>
  );
}

export default ClientInfo;