import React, { useState } from 'react';
import UbicacionInput from '../../atoms/ubicationInput/UbicationInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Date from '../date/Date';
import AtomButton from '../../atoms/atomButton/AtomButton';
import "./Search.css"

const SearchBar = ({translateStyle, searchStyles}) => {
    const [tipoViaje, setTipoViaje] = useState(false);

    const handleTipoViajeChange =(event)=>{
        setTipoViaje(event.target.value === 'true');   
    };

    let bgcolor = "";
    let bgcolorContainer = "white";
    if (searchStyles) {
        bgcolor = searchStyles.bgcolor;
        bgcolorContainer = searchStyles.bgcolorContainer;
    }

    return (
        <div className={`search-bar-container ${translateStyle? "search-bar-containerTransform" : ""}`} style={{backgroundColor: bgcolorContainer}}>
            <div className='input-viaje-container'>
                <div className="donde-viaje-container-search">
                    <div>
                    <UbicacionInput bgcolor={bgcolor} label={"Origen"}/>
                    </div>
                    <div>
                    <UbicacionInput bgcolor={bgcolor} label={"Destino"} />
                    </div>
                </div>
                <div className='cuando-viaje-container'>
                    <Date bgcolor={bgcolor} vueltaChecked={tipoViaje}/>
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

export default SearchBar;