import React, { useContext } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { FligthInfo } from '../../components/organisms/flightInfo/FligthInfo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PDF_Render } from '../../components/atoms/PDF_Render/PDF_Render';
import { pdf } from '@react-pdf/renderer';
import dayjs from 'dayjs';
import { ViajesContext } from '../../context/ViajesContextProvider';
import { useState } from 'react';


const formatCreditCardNumber = (value) => {
    // Elimina cualquier caracter que no sea un número
    let formattedValue = value.replace(/\D/g, "");
    // Limita la longitud del número a 16 caracteres
    formattedValue = formattedValue.slice(0, 16);
    // Divide el número en bloques de 4 caracteres con un guion entre cada bloque
    formattedValue = formattedValue.replace(/(\d{4})/g, "$1-");
    // Elimina el guion adicional al final, si lo hay
    formattedValue = formattedValue.replace(/-$/, "");
    return formattedValue;
  };

const Payment = () => {
    const [fullName, setFullName] = useState("");
    const [creditCardNumber, setCreditCardNumber] = useState("");
    const { reserva, vueloSeleccionado, listaAsientos } = useContext(ViajesContext);

    const handleChangeFullName = (event) => {
        // Convierte el texto ingresado en mayúsculas y actualiza el estado
        setFullName(event.target.value.toUpperCase());
      };

    const handleChangeCreditCardNumber = (event) => {
      // Formatea el número de tarjeta y actualiza el estado
      setCreditCardNumber(formatCreditCardNumber(event.target.value));
    };

    const downloadPDF = async () => {
        const doc = <PDF_Render reserva={reserva} vueloSeleccionado={vueloSeleccionado} listaAsientos={listaAsientos} />;
        const asPdf = pdf([]);
        asPdf.updateContainer(doc);
        const blob = await asPdf.toBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Recibo_FlyAirlines.pdf';
        link.click();
    };


  return (
    <>
        <main>
            <Grid container>
                <Grid item xs={7} padding='1rem'> 
                    <Box color='black' borderRadius='8px' boxShadow='3' padding='1rem' sx={{backgroundColor: 'white'}}>
                        <Typography variant='h4'>Información de Pago</Typography>
                        <Box component='form'>
                            <TextField label="Nombre completo" variant="outlined" margin='normal' type='text' fullWidth value={fullName}
                                onChange={handleChangeFullName}/>
                            <TextField label="Número de tarjeta" variant="outlined" margin='normal' fullWidth  value={creditCardNumber}
                                onChange={handleChangeCreditCardNumber}/>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateField label='Fecha de vencimiento' format='MM-YY' defaultValue={dayjs('2026-04')} margin='normal'/>
                            </LocalizationProvider>
                            <TextField label="Código de seguridad" variant="outlined" margin='normal' fullWidth/>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={5} padding='1rem'>
                    <Box borderRadius='8px' boxShadow='3' sx={{backgroundColor: 'white'}} display='flex' flexDirection='column' justifyContent='right'>
                        <FligthInfo />

                        <Button
                            variant='contained'
                            onClick={()=> {
                                downloadPDF();
                            }}
                            sx={{
                                backgroundColor: '#FFB500',
                                margin: '1.4rem auto',
                                padding: '10px 5rem',
                                borderRadius: '12px',
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '1.2rem',
                                ":hover": {backgroundColor: '#FFB500'}
                            }}
                        >Comprar</Button>
                    </Box>
                </Grid>
            </Grid>
        </main>
    </>
  )
}

export default Payment