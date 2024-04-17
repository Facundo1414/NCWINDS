import React, { useContext, useEffect, useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl }from '@mui/material';
import { UbicacionInput } from '../../atoms/ubicationInput/UbicationInput';
import { Date } from '../date/Date';
import { AtomButton } from '../../atoms/atomButton/AtomButton';
import { ViajesContext } from '../../../context/ViajesContextProvider';
import "./Search.css"


const SearchBar = ({translateStyle, searchStyles}) => {
    // viaje de ida y vuelta o solo ida
    const [tipoViaje, setTipoViaje] = useState(false);
    const handleTipoViajeChange =(event)=>{
        setTipoViaje(event.target.value === 'true');   
    };

    // styles
    let bgcolor = "";
    let bgcolorContainer = "white";
    if (searchStyles) {
        bgcolor = searchStyles.bgcolor;
        bgcolorContainer = searchStyles.bgcolorContainer;
    }

  // use context para poder mostrar la informacion en todas las paginas
  const {infoVuelo ,setInfoVuelo} = useContext(ViajesContext)
  const [valueOrigen, setValueOrigen] = useState("");
  const [valueDestino, setValueDestino] = useState("");
  const [valueFechaIda, setValueFechaIda] = useState("");
  const [valueFechaVuelta, setValueFechaVuelta] = useState("");
  // end of use context

  //BUSCAR
  const handleClick = () => {
      // en caso que sea solo viaje de ida
      if (tipoViaje) {
        setInfoVuelo(
          {
            origen: valueOrigen,
            destino: valueDestino,
            fechaIda: valueFechaIda,
            fechaVuelta: ""
          }
        )
      }
      else{
        setInfoVuelo(
          {
            origen: valueOrigen,
            destino: valueDestino,
            fechaIda: valueFechaIda,
            fechaVuelta: valueFechaVuelta
          }
        )
      }
      console.log(infoVuelo);
  }
  // end of Buscar

  //TODO : las fechas deberian ser menos estrictas y los input deberian ser estrictamentes requeridos

    return (
        <div className={`search-bar-container ${translateStyle? "search-bar-containerTransform" : ""}`} style={{backgroundColor: bgcolorContainer}}>
            <div className='input-viaje-container'>
                <div className="donde-viaje-container-search">
                    <div>
                    <UbicacionInput bgcolor={bgcolor} label={"Origen"} setValueVuelo = {setValueOrigen}/>
                    </div>
                    <div>
                    <UbicacionInput bgcolor={bgcolor} label={"Destino"} setValueVuelo= {setValueDestino} />
                    </div>
                </div>
                <div className='cuando-viaje-container'>
                    <Date bgcolor={bgcolor} vueltaChecked={tipoViaje} setFechaIda={setValueFechaIda} setFechaVuelta={setValueFechaVuelta}/>
                </div>
                <div className='search-button'>
                    <AtomButton 
                        variant={'contained'} 
                        inputText={'Buscar'}
                        buttonStyles={{
                            backgroundColor: '#FFB500',
                            color: 'black',
                            '&:hover': {backgroundColor: "#CC9400"},
                            width:"80%",
                            fontSize: "1.2rem",
                            fontWeight: "bolder",
                            borderRadius: "25px !important",
                            padding: "0.7rem 2.5rem",
                            alignContent: "center",
                            textAlign: "center"
                        }}
                        handleClick={handleClick}
                    />
                </div>
            </div>
            <FormControl className='check-container' style={{color:bgcolor}}>
                <RadioGroup row aria-labelledby="demo-form-control-label-placement" name="position" defaultValue='true' onChange={handleTipoViajeChange}>
                    <FormControlLabel checked={tipoViaje} value='true' control={<Radio />} label="Solo ida" labelPlacement="right"/>
                    <FormControlLabel checked={!tipoViaje} value='false' control={<Radio />} label="Ida y vuelta" labelPlacement="right" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export { SearchBar };
