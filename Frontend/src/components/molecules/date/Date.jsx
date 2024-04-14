import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "./Date.css"

export default function Date({vueltaChecked, bgcolor}) {
    const today = dayjs();
    const [ida, setIda] = React.useState(dayjs(today));
    const [vuelta, setVuelta] = React.useState(dayjs(today));

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
