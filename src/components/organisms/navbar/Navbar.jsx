import React, { useEffect, useState } from "react";
import { useUsuario } from "../../../context/usuario/UsuarioProvider";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Toolbar,
  AppBar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import MenuSession from "../../molecules/menuSesion/MenuSession";

const Navbar = (currentPage) => {
  const [anchorNav, setAnchorNav] = useState(null);

  const handleOpenNav = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorNav(null);
  };

  const { usuario, setUsuario } = useUsuario();
  const handleLogout = () => {
    setUsuario(null);
    setAnchorNav(null);
  };

  return (

    <AppBar
      className={
        currentPage.currentPage === "/" ||
        currentPage.currentPage === "/login" ||
        currentPage.currentPage === "/signUp"
          ? "transparent-navbar"
          : "background-navbar"
      }
    >
      <Toolbar className="toolBar">
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "white" }}
          className="logoContainer"
        >
          <Link
            to="/"
            className={
              currentPage.currentPage === "/login" ||
              currentPage.currentPage === "/signUp"
                ? "brandLogin"
                : "brand"
            }
          >
            NoCountry Wings
          </Link>
        </Typography>

        <Box
          component="div"
          className="buttonContainer"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <IconButton onClick={handleOpenNav}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Menu
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            anchorEl={anchorNav}
            open={Boolean(anchorNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem
              onClick={handleCloseNavMenu}
              component="a"
              href="#destines"
            >
              Destinos
            </MenuItem>

            <MenuItem
              onClick={handleCloseNavMenu}
              component="a"
              href="#section-container"
            >
              Nosotros
            </MenuItem>

            <MenuItem
              onClick={handleCloseNavMenu}
              component="a"
              href="#porque-elegirnos"
            >
              Información
            </MenuItem>

            <MenuItem sx={{ justifyContent: "center" }}>
              {usuario ? (
                <MenuSession
                  userName={usuario?.nombre}
                  onLogout={handleLogout}
                />
              ) : (
                <Button component={Link} to="/login" className="login-btn">
                  Login
                </Button>
              )}
            </MenuItem>
          </Menu>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }} gap={"2rem"}>
          {currentPage.currentPage === "/" && (
            <>
              <Button
                component="a"
                href="#destines"
                color="inherit"
                className="nav-link"
              >
                Destinos
              </Button>
              <Button
                component="a"
                href="#section-container"
                color="inherit"
                className="nav-link"
              >
                Nosotros
              </Button>
              <Button
                component="a"
                href="#porque-elegirnos"
                color="inherit"
                className="nav-link"
              >
                Información
              </Button>
            </>
          )}
          {usuario ? (
            <MenuSession userName={usuario?.nombre} onLogout={handleLogout} />
          ) : (
            <Button component={Link} to="/login" className="login-btn">
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
