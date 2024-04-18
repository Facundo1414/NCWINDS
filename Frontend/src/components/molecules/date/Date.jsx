import React, { useContext, useEffect } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ViajesContext } from '../../../context/ViajesContextProvider';
import "./Date.css"


export default function Date({vueltaChecked, bgcolor, setFechaIda, setFechaVuelta}) {
  const today = dayjs();
  const [ida, setIda] = React.useState(dayjs(today));
  const [vuelta, setVuelta] = React.useState(dayjs(today));

  // cuando se actualicen
  useEffect(()=>{
    setFechaIda(
      ida.format('YYYY-MM-DD')
    )
    setFechaVuelta(
      vuelta.format('YYYY-MM-DD')
    )
  },[ida,vuelta])


    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DatePicker']} sx={{ bgcolor: bgcolor }}> 
          <div className="date-pickers-container">
            <DatePicker
              label="IDA"
              value={ida}
              onChange={(newValue) => setIda(newValue)}
              disablePast
            />
            <DatePicker
              label="VUELTA"
              value={vuelta}
              onChange={(newValue) => setVuelta(newValue)}
              disabled={vueltaChecked}
              disablePast
            />
          </div>
        </DemoContainer>
      </LocalizationProvider>
    );
}

export { Date };