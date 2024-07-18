import React, { useContext, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";
import LoginPage, { Input } from "@react-login-page/page7";
import Login from "react-login-page";
import { useFormik } from "formik";
import { sendData } from "../../services/apiService";
import { BackendGateWayContext } from "../../context/BackendGateWayContextProvider";
import "./Login.css";

const SignUp = () => {
  const { urlSignUpController } = useContext(BackendGateWayContext);
  const [dataForm, setDataForm] = useState({
    nombre: "",
    correo: "",
    password: "",
  });
  const formik = useFormik({
    initialValues: {
      nombre: "",
      correo: "",
      password: "",
    },
    onSubmit: () => {
      async function obtenerRespuesta() {
        try {
          const response = await sendData(urlSignUpController, dataForm);
          setIsRegisteredUserAlertVisible(true);
        } catch (error) {
          console.error("Error al enviar datos:", error);
          setIsNotRegisteredUserAlertVisible(true);
        }
      }
      obtenerRespuesta();
    },
  });
  const [
    isRegisteredUserAlertVisible,
    setIsRegisteredUserAlertVisible,
  ] = useState(false);
  const [
    isNotRegisteredUserAlertVisible,
    setIsNotRegisteredUserAlertVisible,
  ] = useState(false);

  const handleCloseRegisterMessage = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsRegisteredUserAlertVisible(false);
  };
  const handleCloseErrorRegisterMessage = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsNotRegisteredUserAlertVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };
  return (
    <LoginPage style={{ height: 690 }} className="login-page7">
      <LoginPage.Logo>
        <img src="./planeLogin.png" alt="" />
      </LoginPage.Logo>
      <LoginPage.Title>Regístrate</LoginPage.Title>
      <Input name="username" visible={false} />
      <Input
        name="nombre"
        type="nombre"
        placeholder="Usuario"
        index={0}
        id="usuario"
        onChange={handleInputChange}
      />
      <Input
        name="correo"
        type="correo"
        placeholder="Correo"
        index={1}
        id="email"
        onChange={handleInputChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="Contraseña"
        index={2}
        id="password"
        onChange={handleInputChange}
      />
      <Login.Button
        keyname="submit"
        index={1}
        type="submit"
        onClick={formik.handleSubmit}
      >
        Crear cuenta
      </Login.Button>
      <LoginPage.Footer>
        ¿Ya tienes una cuenta? <Link to={"/login"}>Inicia sesión ahora</Link>
      </LoginPage.Footer>
        <Snackbar
          open={isRegisteredUserAlertVisible}
          autoHideDuration={5000}
          onClose={handleCloseRegisterMessage}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="success">El usuario ha sido creado exitosamente!</Alert>
        </Snackbar>
        <Snackbar
          open={isNotRegisteredUserAlertVisible}
          autoHideDuration={5000}
          onClose={handleCloseErrorRegisterMessage}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="error">Ocurrió un error al intentar registrar al usuario</Alert>
        </Snackbar>
      
    </LoginPage>
  );
};

export default SignUp;
