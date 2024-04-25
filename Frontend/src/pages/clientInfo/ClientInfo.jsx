import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Typography, TextField, Autocomplete } from '@mui/material';
import { FligthInfo } from "../../components/organisms/flightInfo/FligthInfo";
import { ViajesContext } from "../../context/ViajesContextProvider";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { AtomButton } from "../../components/atoms/atomButton/AtomButton";


const ClientInfo =()=>{
  const navigate = useNavigate();
  const nacionalidades = [
    'Argentina', 'Chile', 'Bolivia','México',
    'España', 'Francia','Estados Unidos',
    'Alemania', 'Reino Unido', 'Dinamarca',
  ];
  const generos = ['Hombre', 'Mujer', 'No definido',];

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [numberDocument, setNumberDocument] = useState(0);
  const [residenceCountry, setResidenceCountry] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');

  const { setReserva } = useContext(ViajesContext);


  const handleButtonContinuar =()=>{
    const userData = {
      viaje: {id: ""},
      usuario: {id: ""},
      name: name,
      lastName: lastName,
      numberDocument: numberDocument,
      residenceCountry: residenceCountry,
      dateOfBirth: dateOfBirth,
      gender: gender,
    };
    console.log(userData)
    setReserva(userData);
    navigate('/payment');
  };


  return(
    <Grid component={'main'} container color='black'>
      <Grid item xs='7' padding='2rem 1rem'>
        <Box borderRadius='8px' minHeight='580px' padding='1rem' boxShadow='3' sx={{backgroundColor: 'white'}}>
          <Box padding='0px 1rem'>
            <Typography variant='h4'>Información de Cliente</Typography>
          </Box>
          <Grid container component='form'>
            <Grid xs='6' paddingX='1rem'>
              <TextField onChange={(e)=>{setName(e.target.value)}} label="Nombre" variant="outlined" margin='normal' fullWidth/>
              <TextField onChange={(e)=>{setNumberDocument(e.target.value)}} label="Documento" variant="outlined" margin='normal' fullWidth/>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField onChange={(e)=>{setDateOfBirth(e.target.value)}} label='Fecha de nacimiento' format='DD-MM-YY' defaultValue={dayjs('2026-04')} margin='normal' fullWidth/>
              </LocalizationProvider>
            </Grid>

            <Grid xs='6' paddingX='1rem'>
              <TextField onChange={(e)=>{setLastName(e.target.value)}} label="Apellido" variant="outlined" margin='normal' fullWidth/>
              <Autocomplete 
                freeSolo
                options={nacionalidades}
                renderInput={(params) => (
                  <TextField {...params} label="Nacionalidad" variant="outlined" margin='normal' fullWidth/>
                )}
                onChange={(event, value) => setResidenceCountry(value)}
              />
              <Autocomplete 
                freeSolo
                options={generos}
                renderInput={(params) => (
                  <TextField {...params} label="Género" variant="outlined" margin='normal' fullWidth/>
                )}
                onChange={(event, value) => setGender(value)}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs='5' padding='2rem 1rem'>
        <Box borderRadius='8px' boxShadow='3' sx={{backgroundColor: 'white'}} display='flex' flexDirection='column' justifyContent='right'>
          <FligthInfo />

          <AtomButton
            handleClick={handleButtonContinuar}
            variant={'outlined'}
            buttonStyles={{
              backgroundColor: '#FFB500',
              margin: '1.4rem auto',
              padding: '10px 5rem',
              borderRadius: '12px',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              '&:hover': {backgroundColor: '#FFB500'}
              }}
              inputText={'Siguiente'}
          />

        </Box>
      </Grid>
    </Grid>
  );
}

export default ClientInfo;