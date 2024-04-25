import React from 'react';
import { Grid, Typography, List, ListItemText, Link, Box, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';


const Footer = () => {

  return (
    <footer>
      <Divider sx={{backgroundColor: 'white'}}/>
      <Grid container padding={'30px 30px'} display={'flex'} justifyContent={'space-around'} >
        <Grid xs={12} sm={4} item marginBottom={'20px'} paddingLeft={'2rem'} >
          <Typography variant='h5' component='h5' color={'#002561'} fontWeight={'bold'}>
            FlyAirlines
          </Typography>
          <List>
              <ListItemText>
                <Link href='#' color={'black'} underline='none'>Acerca de FlyAirLines</Link>
              </ListItemText>
              <ListItemText>
                <Link href='#' color={'black'} underline='none'>Experiencia FlyArilines</Link>
              </ListItemText>
              <ListItemText>
                <Link href='#' color={'black'} underline='none'>Destinos</Link>
              </ListItemText>
              <ListItemText>
                <Link href='#' color={'black'} underline='none'>Mis Viajes</Link>
              </ListItemText>
            </List>
        </Grid>

        <Grid xs={12} sm={4} item marginBottom={'20px'} >
          <Typography variant='h5' component='h5' color={'#002561'} fontWeight={'bold'}>
              Información Legal
            </Typography>
            <List>
              <ListItemText>
                  <Link href='#' color={'black'} underline='none'>Términos y servicios</Link>
                </ListItemText>
                <ListItemText>
                  <Link href='#' color={'black'} underline='none'>Términos de uso</Link>
                </ListItemText>
            </List>
        </Grid>

        <Grid xs={12} sm={4} item sx={{ display: 'flex', flexDirection: 'column'}} marginBottom={'20px'} alignItems={'end'} paddingRight={'2rem'}>
          <Typography variant='h5' component='h5' color={'#002561'} fontWeight={'bold'}>
            Nuestras redes
          </Typography>
          <Box component={'div'}>
            <Link href={'#'}>
              <InstagramIcon sx={{height: '50px', width: '50px', marginRight: '8px', color: 'black'}}/>
            </Link>

            <Link href={'#'}>
              <FacebookIcon sx={{height: '50px', width: '50px', marginRight: '8px', color: 'black'}}/>
            </Link>

            <Link href={'#'}>
              <XIcon sx={{height: '50px', width: '50px', marginRight: '8px', color: 'black'}}/>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Divider variant='middle'/>
      <Typography variant='p' component='p' align='center' marginY={'10px'} color={'#4c4c4d'}>
        Copyright© 2024 | FlyAirlines.com | Todos Los Derechos Reservados
      </Typography>
    </footer>
  )
}

export { Footer };