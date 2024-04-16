import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useContext } from "react";
import {ViajesContext} from '../../../context/ViajesContextProvider'

export default function ControlledAccordions() {
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
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            Origen
          </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Origen: {vueloSeleccionado.origin}
          </Typography>
          <Typography>
            Fecha de salida: {vueloSeleccionado.dateOfOrigin}
          </Typography>
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
          <Typography sx={{ width: "100%", flexShrink: 0 }}>Destino</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Destino: {vueloSeleccionado.destiny}
          </Typography>
          <Typography>
            Fecha de llegada: {vueloSeleccionado.dateOfDestiny}
          </Typography>
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
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            Informacion adicional
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Hora de salida: {vueloSeleccionado.departureTime}
          </Typography>
          <Typography>
            Hora de llegada: {vueloSeleccionado.arrivalTime}
          </Typography>
          <Typography>
            Cantidad de escalas: {vueloSeleccionado.scaleNumbers}
          </Typography>
          <Typography>
            Descripcion: {vueloSeleccionado.description}
          </Typography>
          <Typography>
            Duracion: {vueloSeleccionado.duration}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
