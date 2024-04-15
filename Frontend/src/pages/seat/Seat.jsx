import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import SearchBar from '../../components/molecules/searchBar/SearchBar';
import { PlaneHead } from '../../components/atoms/planeHead/PlaneHead';

export const Seat =()=>{

  return(
    <Grid container component={'div'} marginY='3rem' padding='1rem' height='800px'>
      <Grid item border={'1px solid black'} xs={3}>
        <SearchBar />
      </Grid>

      <Grid item border={'1px solid black'} xs={6} paddingX='25px'>
        <Typography variant='h4' color='black' align='center' margin='12px'>Boing 737</Typography>
        <Grid container>
          <Grid item xs={5} border='1px solid red'>
            column1
          </Grid>

          <Grid item xs={2} border='1px solid red'>
            column2
          </Grid>
          
          <Grid item xs={5} border='1px solid red'>
            column3
          </Grid>
        </Grid>

      </Grid>

      <Grid item border={'1px solid black'} xs={3}>

      </Grid>
    </Grid>
  );
}