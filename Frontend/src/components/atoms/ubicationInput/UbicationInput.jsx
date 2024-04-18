import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { fetchData } from '../../../services/apiService';

const UbicacionInput = ({ label, bgcolor, setValueVuelo }) => {
  const [value, setValue] = useState(null);
  const [data, setData] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //TODO Renderizar datos: Se encarga de buscar la ubicacion de los viajes disponibles a renderizar
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await fetchData('http://localhost:8080/api/v1/viajes');
        setData(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    obtenerDatos();
  }, []);

  let originAndDestiny = [];
  data?.map((travel) => {
    if (!originAndDestiny.includes(travel.origin)) {
      originAndDestiny.push(travel.origin);
    }
    if (!originAndDestiny.includes(travel.destiny)) {
      originAndDestiny.push(travel.destiny);
    }
  });

  // enviar info del vuelo para guardarla en el use Context
  useEffect(() => {
    if (value !== null) {
      setValueVuelo(String(value.option));
    }
  }, [value]);

  const options = originAndDestiny?.map((option) => {
    const firstLetter = option[0].toUpperCase();

    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      option,
    };
  });

  //const error o success
  const [infoColor, setInfoColor] = useState({
    color: "",
    focussed: false
  })
  const selectChange = ()=>{
    if (value === "") {
      setInfoColor({
        color: "error",
        focussed: true
      })
    }
      else if (value != null) {
        setInfoColor({
          color: "success",
          focussed: true
        })
      }
        else{
          setInfoColor({
            color: "",
            focussed: false
          })
        }
    
  }

  return (
    <Autocomplete
      value={value}
      onChange={handleChange}
      options={options?.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.option}
      sx={{ width: 280, bgcolor: bgcolor }}
      renderInput={(params) => (
        <TextField {...params} label={label} color={infoColor.color} focused={infoColor.focussed} onChange={selectChange} />
      )}
    />
  );
};

export default UbicacionInput;
