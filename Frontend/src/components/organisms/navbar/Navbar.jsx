import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Typography  variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          FlyAirlines
        </Typography>
        <Button component={Link} to="/" color="inherit">Destinos</Button>
        <Button component={Link} to="/about" color="inherit">Paquetes</Button>
        <Button component={Link} to="/contact" color="inherit">Información</Button>
        <Button component={Link} to="/login" variant="outlined" color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
