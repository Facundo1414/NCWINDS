import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "./Date.css"
import { useEffect } from 'react';
import { useContext } from 'react';
import { ViajesContext } from '../../../context/ViajesContextProvider';

export default function Date({vueltaChecked, bgcolor}) {
    const today = dayjs();
    const [ida, setIda] = React.useState(dayjs(today));
    const [vuelta, setVuelta] = React.useState(dayjs(today));

    // inicio del uso de useContext
    const { infoVuelo, setInfoVuelo } = useContext(ViajesContext); // Obtén la función de actualización del contexto

    useEffect( ()=>{
      setInfoVuelo(
        {
          ...infoVuelo,
          horarioIda: ida.format('YYYY-MM-DD')
        }
      )
    },[ida]
    )
    
    useEffect( ()=>{
      if (!vueltaChecked) {
        setInfoVuelo(
          {
            ...infoVuelo,
            horarioIda: vuelta.format('YYYY-MM-DD')
          }
        )}
    },[vuelta]
    )

    // end of uso de useContext

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* Modificable */}
        <DemoContainer components={['DatePicker', 'DatePicker']} sx={{ bgcolor: bgcolor }}> 
          <div className="date-pickers-container">
            <DatePicker
              label="IDA"
              value={ida}
              onChange={(newValue) => setIda(newValue)}
            />
            <DatePicker
              label="VUELTA"
              value={vuelta}
              onChange={(newValue) => setVuelta(newValue)}
              disabled={vueltaChecked}
            />
          </div>
        </DemoContainer>
      </LocalizationProvider>
    );
}
