import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import SearchBar from '../../components/molecules/searchBar/SearchBar';
import { Plane } from '../../components/organisms/plane/Plane';


export const Seat =()=>{

  return(
    <Grid container component={'div'} marginY='3rem' padding='1rem' color='black'>
      <Grid item border={'1px solid black'} xs={12} md={3}>
        <SearchBar />
      </Grid>

      <Grid item border={'1px solid black'} xs={12} md={6}>
        <Plane />

      </Grid>

      <Grid item border={'1px solid black'} xs={12} md={3}>

      </Grid>
    </Grid>
  );
}

export default Seat;