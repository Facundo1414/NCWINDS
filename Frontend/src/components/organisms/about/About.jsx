import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { CustomCanvas } from '../../atoms/customCanvas/CustomCanvas';


const About =()=>{

  return(
    <Box component='section' id='section-container' marginY={'20px'}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='grid-col'>
          <CustomCanvas />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} paddingY={'1.2rem'} className='grid-col'>
          <div className='col-2-tittle-container'>
            <Typography color={'#002561'} variant='h3' component='h3' align='center'>
              A donde quieras ir <br /><span style={{ color: "#EFB750" }}>nosotros te llevamos</span>
            </Typography>
          </div>



          <Box component='div' display="flex" justifyContent="center" padding={'1rem'} className='col-2-description-container'>
            <Box component='div' borderRadius={'12px'} maxWidth={'500px'} padding={'22px'} marginTop={'2rem'} sx={{backgroundColor: '#002561', boxShadow: 3}}>
              <Typography variant='h6' component='p' align='' color={'white'} padding={'1rem'}>
              Somos los que no dejan que las distancias nos separen de los que más queremos. <br /> Somos los que hoy estamos acá y mañana podemos estar allá. <br /> Somos un equipo trabajando para que todos podamos volar.              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export { About };