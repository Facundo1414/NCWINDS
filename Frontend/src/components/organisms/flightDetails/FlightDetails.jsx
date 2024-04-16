import React, { useState } from "react";
import { Box, Typography, Divider, Slider } from "@mui/material";
import "./FlightDetails.css";

const FlightDetails = () => {
  const [price, setPrice] = useState([0, 4000000]);
  const [duracionVuelo, setDuracionVuelo] = useState([0, 48]);
  const [departureTime, setDepartureTime] = useState([0, 24]);
  const [scales, setScales] = useState([0, 10]);

  const handleChangePrice = (event, newPrice) => {
    setPrice(newPrice);
  };

  const handleChangeDuracion = (event, newTime) => {
    setDuracionVuelo(newTime);
  };

  const handleChangeDepartureTime = (event, newDepartureTime) => {
    setDepartureTime(newDepartureTime);
  };

  const handleChangeScales = (event, newScale) => {
    setScales(newScale);
  };
  return (
    <Box
      component="section"
      sx={{ backgroundColor: "white", color: "black" }}
      borderRadius="12px"
      boxShadow="3"
      marginY="15px"
      padding="20px"
    >
      <Box component="div">
        <Typography variant="h6" component="h6" sx={{ fontWeight: "bold" }}>
          Filtrar por
        </Typography>
      </Box>

      <Divider />
      <Box component="div" marginY="8px">
        <Typography sx={{ fontWeight: "bold" }}>Precio</Typography>
        <Typography>
          ${price[0]} - ${price[1]}
        </Typography>
        <div className="sliderStyles">
          <Slider
            sx={{ color: "#0658BE", width: "90%" }}
            value={price}
            onChange={handleChangePrice}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={4000000}
          />
        </div>
      </Box>

      <Divider />
      <Box component="div" alignItems="center" marginY="6px">
        <Typography sx={{ fontWeight: "bold" }}>Duración del vuelo</Typography>
        <Typography>
          hrs {duracionVuelo[0]} - hrs {duracionVuelo[1]}
        </Typography>
        <div className="sliderStyles">
          <Slider
            sx={{ color: "#0658BE", width: "90%" }}
            value={duracionVuelo}
            onChange={handleChangeDuracion}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={48}
          />
        </div>
      </Box>

      <Divider />
      <Box component="div" alignItems="center" marginY="6px">
        <Typography sx={{ fontWeight: "bold" }}>Hora de salida</Typography>
        <Typography>
          hrs {departureTime[0]} - hrs {departureTime[1]}
        </Typography>
        <div className="sliderStyles">
          <Slider
            sx={{ color: "#0658BE", width: "90%" }}
            value={departureTime}
            onChange={handleChangeDepartureTime}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={24}
          />
        </div>
      </Box>

      <Divider />
      <Box component="div" alignItems="center" marginY="6px">
        <Typography sx={{ fontWeight: "bold" }}>Cantidad de escalas</Typography>
        <Typography>
          {scales[0]} - {scales[1]}
        </Typography>
        <div className="sliderStyles">
          <Slider
            sx={{ color: "#0658BE", width: "90%" }}
            value={scales}
            onChange={handleChangeScales}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={10}
          />
        </div>
      </Box>
    </Box>
  );
};

export default FlightDetails;
