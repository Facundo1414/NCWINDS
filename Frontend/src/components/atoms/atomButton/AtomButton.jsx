import React from "react";
import Button from '@mui/material/Button';


const AtomButton =({buttonStyles, variant, inputText,handleClick})=>{

  return(
    <Button sx={buttonStyles} variant={variant} onClick={handleClick}>{inputText}</Button>
  );
}

export { AtomButton };