import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navbar.css'

//TODO: hacer que el navbar sea responsive

const Navbar = () => {
  return (
    <AppBar position="absolute" className="transparent-navbar">
      <Toolbar className="toolBar">
        <Typography  variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }} className="logoContainer">
          <Link to="/" className="brand">FlyAirlines</Link>
        </Typography>
        <div className="buttonContainer">          
          <Button component={Link} to="/destinos" color="inherit" className="nav-link" >Destinos</Button>
          <Button component={Link} to="/paquetes" color="inherit" className="nav-link">Paquetes</Button>
          <Button component={Link} to="/informacion" color="inherit" className="nav-link">Información</Button>
          <Button component={Link} to="/login" variant="outlined" color="inherit" className="login-btn" >Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};


export default Navbar;