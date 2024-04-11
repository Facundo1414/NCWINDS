import React, { useState } from 'react';
import UbicacionInput from './UbicacionInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Date from './Date';
import SearchButton from './SearchButton';
import "./Search.css"


const SearchBar = ({translateStyle}) => {
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

    // translateStyle = (transform: translate(0%, -50%);)

    return (
        <div className={`search-bar-container ${translateStyle? "search-bar-containerTransform" : ""}`}>
            <div className='input-viaje-container'>
                <div className="donde-viaje-container-search">
                    <div>
                    <UbicacionInput label={"Origen"}/>
                    </div>
                    <div>
                    <UbicacionInput label={"Destino"} />
                    </div>
                </div>
                <div className='cuando-viaje-container'>
                    <Date vueltaChecked={idaChecked}/>
                </div>
                <div className='search-button'>
                <SearchButton/>
                </div>
            </div>
            <FormControl className='check-container'>
                    <RadioGroup row aria-labelledby="demo-form-control-label-placement" name="position" defaultValue="only">
                        <FormControlLabel checked={idaChecked} onChange={handleIdaChange} value="only"control={<Radio />}label="Solo ida" labelPlacement="right"/>
                        <FormControlLabel checked={idaVueltaChecked} onChange={handleIdaVueltaChange} value="both" control={<Radio />} label="Ida y vuelta" labelPlacement="right" />
                    </RadioGroup>
                </FormControl>
        </div>
    );
};

export default SearchBar;
