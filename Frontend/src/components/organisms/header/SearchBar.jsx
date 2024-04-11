import React, { useState } from 'react';
import UbicacionInput from './UbicacionInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Date from './Date';
import SearchButton from './SearchButton';
import "./Search.css"


const SearchBar = ({translateStyle, searchStyles}) => {
    const [idaChecked, setIdaChecked] = useState();
    const [idaVueltaChecked, setIdaVueltaChecked] = useState();

    const handleIdaChange = (event) => {
        setIdaChecked(event.target.checked);
        setIdaVueltaChecked(false)
    };

    const handleIdaVueltaChange = (event) => {
        setIdaVueltaChecked(event.target.checked);
        setIdaChecked(false)
    };

    // Estilos modificables section (dependen de los parametros)
    let bgcolor = "";
    let bgcolorContainer = "white";
    if (searchStyles) {
        bgcolor = searchStyles.bgcolor; // Access bgcolor property correctly
        bgcolorContainer = searchStyles.bgcolorContainer;
    }

    // end of estilos modificables section

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
                    <Date bgcolor={bgcolor} vueltaChecked={idaChecked}/>
                </div>
                <div className='search-button'>
                <SearchButton/>
                </div>
            </div>
            {/* modificable */}
            <FormControl className='check-container' style={{color:bgcolor}}>
                    <RadioGroup row aria-labelledby="demo-form-control-label-placement" name="position" defaultValue="only">
                        <FormControlLabel checked={idaChecked} onChange={handleIdaChange} value="only"control={<Radio />}label="Solo ida" labelPlacement="right"/>
                        <FormControlLabel checked={idaVueltaChecked} onChange={handleIdaVueltaChange} value="both" control={<Radio />} label="Ida y vuelta" labelPlacement="right" />
                    </RadioGroup>
                </FormControl>
        </div>
    );
};

export default SearchBar;
