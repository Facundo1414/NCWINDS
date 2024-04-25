import React, { useEffect, useState, useContext } from 'react';
import { Grid } from '@mui/material';
import { Card_Search } from './Card_Search';
import { useNavigate } from "react-router-dom";
import { ViajesContext } from "../../../context/ViajesContextProvider";

const Search_topCards = ({ vuelosFetch }) => {
  const [vueloMasBarato, setvueloMasBarato] = useState()
  const [vueloMasRapido, setvueloMasRapido] = useState()
  const [vueloMasElegido, setvueloMasElegido] = useState()

  const navigate = useNavigate();
  const { setVueloSeleccionado } = useContext(ViajesContext);

  const onClick = (vuelo) => {
    setVueloSeleccionado({
      id: vuelo.id,
      origin: vuelo.origin,
      destiny: vuelo.destiny,
      price: vuelo.price,
      dateOfOrigin: vuelo.dateOfOrigin,
      dateOfDestiny: vuelo.dateOfDestiny,
      departureTime: vuelo.departureTime,
      arrivalTime: vuelo.arrivalTime,
      scaleNumbers: vuelo.scaleNumbers,
      description: vuelo.description,
      duration: vuelo.duration
    });
    navigate("/seatSelection");
  };


  useEffect(() => {
    if (vuelosFetch.length !== 0) {
      // Filtrar los vuelos más baratos y más rápidos
      const vueloBarato = vuelosFetch.reduce((prev, current) => (prev.price < current.price ? prev : current));
      const vueloRapido = vuelosFetch.reduce((prev, current) => (prev.duration < current.duration ? prev : current));
      
      // Filtrar el vuelo más elegido basándose en precio y duración
      const vueloElegido = vuelosFetch.reduce((prev, current) => {
        const prevScore = prev.price / prev.duration;
        const currentScore = current.price / current.duration;
        return prevScore < currentScore ? prev : current;
      });
  
      // Actualizar los estados
      setvueloMasBarato(vueloBarato);
      setvueloMasRapido(vueloRapido);
      setvueloMasElegido(vueloElegido);
    }
  }, [vuelosFetch]);
  


  return (
    <Grid spacing={4} padding='1rem 0px' container className='search_cards_container'>
      <Grid item xs={12} md={4}>
        <Card_Search tipo={"Más barato"} precio={vueloMasBarato?.price} horas={vueloMasBarato?.duration} onClick={() => onClick(vueloMasBarato)}/>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card_Search tipo={"Más rápido"} precio={vueloMasRapido?.price} horas={vueloMasRapido?.duration} onClick={() => onClick(vueloMasRapido)}/>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card_Search tipo={"Más elegido"} precio={vueloMasElegido?.price} horas={vueloMasElegido?.duration} onClick={() => onClick(vueloMasElegido)}/>
      </Grid>
    </Grid>
  );
}

export default Search_topCards;
