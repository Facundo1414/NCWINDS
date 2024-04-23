import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { FligthInfo } from '../../components/organisms/flightInfo/FligthInfo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PDF_Render } from '../../components/atoms/PDF_Render/PDF_Render';
import { pdf } from '@react-pdf/renderer';
import dayjs from 'dayjs';


const Payment = () => {

    const downloadPDF = async () => {
        const doc = <PDF_Render />;
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
                            <TextField label="Nombre completo" variant="outlined" margin='normal' fullWidth/>
                            <TextField label="Número de tarjeta" variant="outlined" margin='normal' fullWidth/>
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