import React,{useEffect, useState} from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { fetchData } from '../../../services/apiService';


const UbicacionInput = ({label, bgcolor , setValueVuelo}) => {
  const [value, setValue] = useState(null);
  const [data, setData] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Renderizar datos: Se encarga de buscar la ubicacion de los viajes disponibles a renderizar
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await fetchData('viajes');
        setData(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    obtenerDatos();
  }, []);

    let originAndDestiny =[];
     data?.map((travel)=>{
      if(!originAndDestiny.includes(travel.origin)){
        originAndDestiny.push(travel.origin)
      }
      if(!originAndDestiny.includes(travel.destiny)){
        originAndDestiny.push(travel.destiny)
      }
    })

    // enviar info del veulo para guardarla en el use Context
    useEffect(() => {
      if (value !== null) {
        setValueVuelo(String(value.option));
      }
    }, [value]);
    
    //

    const options = originAndDestiny?.map((option) => {
      
        const firstLetter = option[0].toUpperCase();
        
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          option,
        };
      });

  // end of renderizar datos    




    return (
        <Autocomplete
          value={value}
          id="grouped-demo"
          onChange={handleChange}
          options={options?.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.option}
          sx={{ width: 280, bgcolor: bgcolor }} 
          renderInput={(params) => <TextField {...params} label= {label}/>}
        />
    )
}

export default UbicacionInput