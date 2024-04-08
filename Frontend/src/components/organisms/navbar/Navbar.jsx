import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Toolbar, AppBar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'


const Navbar = () => {
  const [anchorNav, setAnchorNav] = useState(null);

  const handleOpenNav = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorNav(null);
  };

  return (
    <AppBar position="absolute" className="transparent-navbar">
      <Toolbar className="toolBar">
        <Typography  variant="h6" component="div" sx={{color: 'white' }} className="logoContainer">
          <Link to="/" className="brand">FlyAirlines</Link>
        </Typography>

        <Box component='div' className="buttonContainer" sx={{display: { xs: 'flex', md: 'none'}}}>   
          <IconButton onClick={handleOpenNav} >
            <MenuIcon sx={{color: 'white'}}/>
          </IconButton>
          <Menu
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            anchorEl={anchorNav}
            open={Boolean(anchorNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: {xs: 'block', md: 'none'},
            }}
          >
            <MenuItem onClick={handleCloseNavMenu} component={Link} to="/destinos">Destinos</MenuItem>

            <MenuItem onClick={handleCloseNavMenu} component={Link} to="/paquetes">Paquetes</MenuItem>

            <MenuItem onClick={handleCloseNavMenu} component={Link} to="/informacion">Información</MenuItem>

            <MenuItem sx={{justifyContent: 'center'}}>
              <Button component={Link} to="/login" className="login-btn" >Login</Button>
            </MenuItem>
          </Menu>
        </Box>

        <Box sx={{display: {xs: 'none', md: 'flex'}}}>
          <Button component={Link} to="/destinos" color="inherit" className="nav-link" >Destinos</Button>
          <Button component={Link} to="/paquetes" color="inherit" className="nav-link">Paquetes</Button>
          <Button component={Link} to="/informacion" color="inherit" className="nav-link">Información</Button>
          <Button component={Link} to="/login"  color="inherit" className="login-btn" >Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;