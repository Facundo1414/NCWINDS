import React from "react";
import { Box, IconButton, Typography, Zoom, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Modal from "@mui/material/Modal";

export default function ModalVoucher({ isVisible, handlerCloseModal }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Modal
      open={isVisible}
      onClose={handlerCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={isVisible}>
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handlerCloseModal}
            sx={{
              position: "inherit",
              top: 8,
              right: 8,
              color: "text.secondary",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color={"#002561"}
          >
            Compra exitosa!
          </Typography>
          <Zoom in={isVisible} timeout={2000}>
            <FlightTakeoffIcon sx={{ mt: 1, fontSize: 32, color: "#002561" }} />
          </Zoom>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            color={"#002561"}
          >
            Se ha descargado su factura.
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
}
