import React, { useContext } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ViajesContext } from '../../../context/ViajesContextProvider'


const ControlledAccordions =()=>{
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const {vueloSeleccionado} = useContext(ViajesContext)

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }} fontSize='1.2rem' fontWeight='bold'>
            Origen
          </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Box display='flex'>
            <Typography fontWeight='bold'>Origen: </Typography>
            <Typography>{vueloSeleccionado.origin}</Typography>
          </Box>
          <Box display='flex'>
            <Typography fontWeight='bold'>Fecha de salida: </Typography>
            <Typography>{vueloSeleccionado.dateOfOrigin}</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }} fontSize='1.2rem' fontWeight='bold'>Destino</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display='flex'>
            <Typography fontWeight='bold'>Destino: </Typography>
            <Typography>{vueloSeleccionado.destiny}</Typography>
          </Box>
          <Box display='flex'>
            <Typography fontWeight='bold'>Fecha de llegada: </Typography>
            <Typography>{vueloSeleccionado.dateOfDestiny}</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }} fontSize='1.2rem' fontWeight='bold'>
            Informacion adicional
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display='flex'>
            <Typography fontWeight='bold'>Hora de salida: </Typography>
            <Typography>{vueloSeleccionado.departureTime}</Typography>
          </Box>

          <Box display='flex'>
            <Typography fontWeight='bold'>Hora de llegada: </Typography>
            <Typography>{vueloSeleccionado.arrivalTime}</Typography>
          </Box>

          <Box display='flex'>
            <Typography fontWeight='bold'>Cantidad de escalas: </Typography>
            <Typography>{vueloSeleccionado.scaleNumbers}</Typography>
          </Box>

          <Box display='flex'>
            <Typography fontWeight='bold'>Descripcion: </Typography>
            <Typography>{vueloSeleccionado.description}</Typography>
          </Box>

          <Box display='flex'>
            <Typography fontWeight='bold'>Duracion: </Typography>
            <Typography>{vueloSeleccionado.duration}</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export { ControlledAccordions };