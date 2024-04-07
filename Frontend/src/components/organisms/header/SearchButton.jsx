import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const CustomButton = styled(Button)({
  backgroundColor: '#FFB500',
  color: 'black', // Text color
  '&:hover': {
    backgroundColor: "#CC9400", 
  },
  fontSize: "1.2rem",
  fontWeight: "bolder",
  borderRadius: "25px !important",
  padding: "0.7rem 2.5rem",
  border: "solid black 2px",
  alignContent: "center",
  textAlign: "center"
});

// Functional component for the button
const SearchButton = () => {
  return (
    <CustomButton variant="contained">
      Buscar
    </CustomButton>
  );
}

export default SearchButton;
