import React, { useContext, useEffect, useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, Grid }from '@mui/material';
import  UbicacionInput  from '../../atoms/ubicationInput/UbicationInput';
import { Date } from '../date/Date';
import { AtomButton } from '../../atoms/atomButton/AtomButton';
import { ViajesContext } from '../../../context/ViajesContextProvider';
import "./Search.css"
import { Link, useNavigate } from 'react-router-dom';


const SearchBar = ({translateStyle, searchStyles}) => {
    const navigate = useNavigate()
    // viaje de ida y vuelta o solo ida
    const {infoVuelo,setInfoVuelo} = useContext(ViajesContext)
    const [tipoViaje, setTipoViaje] = useState(false);
    const handleTipoViajeChange =(event)=>{
        setTipoViaje(event.target.value === 'true');   
    };

    // styles
    let bgcolor = "";
    let bgcolorContainer = "white";
    let direccion = "";
    if (searchStyles) {
        bgcolor = searchStyles.bgcolor;
        bgcolorContainer = searchStyles.bgcolorContainer;
        direccion = searchStyles.direccion;
    }

  // use context para poder mostrar la informacion en todas las paginas
  const [valueOrigen, setValueOrigen] = useState("");
  const [valueDestino, setValueDestino] = useState("");
  const [valueFechaIda, setValueFechaIda] = useState("");
  const [valueFechaVuelta, setValueFechaVuelta] = useState("");
  // end of use context


  //BUSCAR
  const handleClick = () => {
      if (tipoViaje) {
        setInfoVuelo({
          origen: valueOrigen,
          destino: valueDestino,
          fechaIda: valueFechaIda,
          fechaVuelta: '',
        });
      } else {
        setInfoVuelo({
          origen: valueOrigen,
          destino: valueDestino,
          fechaIda: valueFechaIda,
          fechaVuelta: valueFechaVuelta,
        });
      }
    if (infoVuelo.origen !== "" && infoVuelo.destino !== "") {
        navigate('/search')
    }
    else{
        //alert("error")
    }
  };

  // end of Buscar


    return (
            <div className={`search-bar-container ${translateStyle ? "search-bar-containerTransform" : ""}`} style={{ backgroundColor: bgcolorContainer }}>
                <Grid container direction="column" spacing={1}>
                    <Grid item>
                        <Grid container display={'flex'} direction={direccion} alignItems={'center'} spacing={2}>
                            <Grid item lg={3} md={12} xs={12} width={'100%'}>
                                <UbicacionInput key={"origen"} bgcolor={bgcolor} label={"Origen"} setValueVuelo={setValueOrigen} />
                            </Grid>
                            <Grid item lg={3} md={12} xs={12} width={'100%'}>
                                <UbicacionInput key={"Destino"} bgcolor={bgcolor} label={"Destino"} setValueVuelo={setValueDestino} />
                            </Grid>
                            <Grid item lg={4} md={12} xs={12} >
                                <Date bgcolor={bgcolor} vueltaChecked={tipoViaje} setFechaIda={setValueFechaIda} setFechaVuelta={setValueFechaVuelta} />
                            </Grid>
                            <Grid item lg={2} md={12} xs={12} display={'flex'} justifyContent={'center'}>
                                <AtomButton
                                    variant={'contained'}
                                    inputText={'Buscar'}
                                    buttonStyles={{
                                        backgroundColor: '#FFB500',
                                        color: 'black',
                                        '&:hover': { backgroundColor: "#CC9400" },
                                        width: "80% !important",
                                        fontSize: "1.2rem",
                                        fontWeight: "bolder",
                                        borderRadius: "25px !important",
                                        padding: "0.7rem 2.5rem !important",
                                        alignContent: "center",
                                        textAlign: "center"
                                    }}
                                    handleClick={handleClick}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item lg={12} md={12} xs={12} display={'flex'} justifyContent={'center'}>
                                <FormControl style={{ color: bgcolor }}>
                                    <RadioGroup row aria-labelledby="demo-form-control-label-placement" name="position" defaultValue='true' onChange={handleTipoViajeChange}>
                                        <FormControlLabel checked={tipoViaje} value='true' control={<Radio />} label="Solo ida" labelPlacement="end" />
                                        <FormControlLabel checked={!tipoViaje} value='false' control={<Radio />} label="Ida y vuelta" labelPlacement="end" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
    );
};

export default SearchBar ;
