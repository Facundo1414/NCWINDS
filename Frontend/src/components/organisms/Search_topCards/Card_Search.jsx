import React from 'react'
import { Paper, Card, CardActionArea } from '@mui/material';
import "./Card_Search.css"

const Card_Search = ({tipo,precio, horas, link}) => {
  return (
    <CardActionArea component='a' href={link}>
      <Card  className='card' elevation={6}>
          <h3 className='card_tipo'>{tipo}</h3>
          <h2 className='card_precio'>$ {precio}</h2>
          <p className='card_horas'>{horas}</p>
      </Card>
    </CardActionArea>
  )
}

export { Card_Search };