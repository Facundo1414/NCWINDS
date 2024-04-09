import React from 'react'
import Paper from '@mui/material/Paper';
import "./Card_Search.css"

const Card_Search = ({tipo,precio, horas}) => {
  return (
    <Paper className='card' elevation={6}>
        <h3 className='card_tipo'>{tipo}</h3>
        <h2 className='card_precio'>$ {precio}</h2>
        <p className='card_horas'>{horas}</p>
    </Paper>
  )
}

export default Card_Search