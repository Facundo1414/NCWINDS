import React from 'react';
import { Card_Search } from './Card_Search';
import './Search_topCards.css';


const Search_topCards = () => {

  return (
    <div className='search_cards_container'>
        <Card_Search tipo={"Mas barato"} precio={"9.850.00"} horas={"12h 40m"}/>
        <Card_Search tipo={"Más rápido"} precio={"1.200.00"} horas={"8h 20m"}/>
        <Card_Search tipo={"Más elegido"} precio={"1.110.00"} horas={"12h 40m"}/>
    </div>
  )
}

export default Search_topCards;