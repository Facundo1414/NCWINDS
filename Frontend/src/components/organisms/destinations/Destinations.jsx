import React from "react";
import { Typography } from "@mui/material";
import { Carousel } from "../carousel/Carousel";
import dataDestinations from "../../../utils/destinations/destinations.json"
import "./Destinations.css";


const Destinations =()=>{
    
  return (
    <div className="container-destinations-principal">
      <Typography 
        style={{ fontWeight: "medium", fontSize: 40 ,marginLeft:"10%"}} color={'#002561'}
      >
        DESCUBRE TU PROXIMO DESTINO
      </Typography>
      <Carousel images={dataDestinations}/>  
      
    </div>
  );
}

export { Destinations };