import React from 'react'
import data from './cards_data.json'
import Paper from '@mui/material/Paper';
import "./Card_eS.css"
//Esta card se encarga de renderizar la informacion de la seccion: "Por que elegirnos?"
// Se necesitan 3 Cards que seran renderizadas con este componente


const Card_eS = () => {

  return (
    <>
      {data.card?.map(item => (
        <Paper key={item.id} className='card-elegirnos-section' elevation={6} >
          <div className='imgContainer'>
            <img src={item.icon} alt="card_img" className='card_img'/> 
          </div> 
          <h2 className='card_title'>{item.title}</h2>
          <p className='card_text'>{item.text}</p>
        </Paper>
      ))}
    </>
  )
}



export default Card_eS

