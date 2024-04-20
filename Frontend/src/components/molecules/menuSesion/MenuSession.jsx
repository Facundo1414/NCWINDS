import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
export default function MenuSession({ userName, onLogout }) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = ()=>{
    localStorage.removeItem("usuario");
    onLogout();
    navigate("/login");
    setAnchorEl(null);
  }
  
  const styles = {
    button: {
      cursor: 'pointer',
    border: 'none', // Sin borde
    outline: 'none', // Sin contorno de enfoque
    },
  };
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        disableRipple
        style={styles.button}
       
      >
        <AccountCircle disableRipple />
        <Typography >{userName}</Typography>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Cerrar Sesion</MenuItem>
      </Menu>
    </>
  );
}
