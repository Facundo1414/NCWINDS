import React from 'react'
import { Button, Grid } from '@mui/material'
import "./SeatSelection.css"
import SelectFligth from '../../components/molecules/selectFligth/SelectFligth'
export default function SeatSelection() {
  return (
    <div style={{height: "50rem"}}>
    <Grid container height={"100%"} padding={"1rem"} justifyContent={"space-evenly"}>
        {/* <Grid xs={12} md={12} display={'flex'} justifyContent={'center'} alignItems={'center'} color={"black"} height={"5%"}>
                <h2>Personal information and Payment</h2>
        </Grid> */}
        
        <SelectFligth/>

    </Grid>
</div>
  )
}
