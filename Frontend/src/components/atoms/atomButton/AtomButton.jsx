import React from "react";
import Button from '@mui/material/Button';


const AtomButton =({buttonStyles, variant, inputText})=>{

  return(
    <Button sx={buttonStyles} variant={variant}>{inputText}</Button>
  );
}

export default AtomButton;