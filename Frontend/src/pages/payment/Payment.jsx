import React from 'react'
import { Grid } from '@mui/material'


const Payment = () => {
  return (
    <div style={{height: "50rem"}}>
        <Grid container height={"100%"} padding={"1rem"} justifyContent={"space-evenly"}>
            <Grid xs={12} md={12} display={'flex'} justifyContent={'center'} alignItems={'center'} color={"black"} height={"5%"}>
                    <h2>Personal information and Payment</h2>
            </Grid>
            {/* columnas */}
            <Grid item xs={5} md={5} display={'flex'} justifyContent={'center'} alignItems={"center"} bgcolor={'#D9D9D9'} color={"black"} sx={{height: '80%'}}>
                <h2>Payment detail</h2>
            </Grid>
            
            <Grid item xs={5} md={5} sx={{height: '80%'}}>
                <Grid container display={'flex'} height={"100%"} gap={"2rem"}>
                    <Grid item xs={12} md={12} bgcolor={'#D9D9D9'} color={"black"} height={"60%"} display={'flex'} justifyContent={"center"} padding={"1rem"}>
                        <h1>Seat detail</h1>
                    </Grid>
                    <Grid item xs={12} md={12} bgcolor={'#D9D9D9'} color={"black"} height={"20%"} display={'flex'} justifyContent={"center"} alignItems={"center"} padding={"1rem"}>
                        {/* Este button es momentaneo */}
                        <button style={{height:'3rem', padding: "2rem", width:"10rem", display:"flex" , justifyContent:"center",alignItems: "center"}}>Pay</button>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    </div>
  )
}

export default Payment