import React from 'react';
import { Grid } from '@mui/material';
import { Card_Search } from './Card_Search';


const Search_topCards = () => {

  return (
    <Grid spacing={4} padding='1rem 0px' container className='search_cards_container'>
      <Grid item xs={12} md={4}>
        <Card_Search tipo={"Mas barato"} precio={"9.850.00"} horas={"12h 40m"}/>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card_Search tipo={"Más rápido"} precio={"1.200.00"} horas={"8h 20m"}/>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card_Search tipo={"Más elegido"} precio={"1.110.00"} horas={"12h 40m"}/>
      </Grid>

    </Grid>
  )
}

export default Search_topCards;