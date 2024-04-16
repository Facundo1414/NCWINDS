import React from 'react'
import { Button, Grid } from '@mui/material'
import "./SeatSelection.css"
import SelectFlight from '../../components/molecules/selectFligth/SelectFlight'

export default function SeatSelection() {
  return (
    <div style={{height: "50rem"}}>
    <Grid container height={"100%"} padding={"1rem"} justifyContent={"space-evenly"}>
       
        <SelectFlight/>

    </Grid>
</div>
  )
}
