import { Typography } from "@mui/material";
import "./Destinations.css";

import dataDestinations from "../../../utils/destinations/destinations.json"
import Carousel from "../carousel/Carousel";
export default function Destinations() {
    
  return (
    <div className="container-destinations-principal">
      <Typography 
        style={{ fontWeight: "medium", fontSize: 40 , textAlign:"left", marginLeft: "6%"}} color={'#002561'}
      >
        DESCUBRE TU PROXIMO DESTINO
      </Typography>
      <Carousel images={dataDestinations}/>  
      
    </div>
  );
}
