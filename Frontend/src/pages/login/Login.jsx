import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, InputBase, Snackbar, TextField } from "@mui/material";
import LoginPage, { Input } from "@react-login-page/page7";
import LoginC from "react-login-page";
import { sendData } from "../../services/apiService";
import { useFormik } from "formik";
import { useUsuario } from "../../context/usuario/UsuarioProvider";
import { BackendGateWayContext } from "../../context/BackendGateWayContextProvider";
import "./Login.css";

const Login = () => {
  const {urlLoginController} = useContext(BackendGateWayContext);
  const navigate = useNavigate();
  const { setUsuario, actualizarUsuario } = useUsuario();
  const [dataForm, setDataForm] = useState({ correo: "", password: "" });
  const [
    isNotValidCredentialsAlertVisible,
    setIisNotValidCredentialsAlertVisible,
  ] = useState(false);

  const [items, addItems] = useState([]);
  const formik = useFormik({
    initialValues: {
      correo: "",
      password: "",
    },
    onSubmit: () => {
      
      async function obtenerRespuesta() {
        try {
          const response = await sendData(urlLoginController, dataForm);
          const usuario = {
            nombre: response.nombre,
            perfil: response.perfil,
            token: response.token,
          };
          setUsuario(usuario);
          actualizarUsuario(usuario);
          navigate("/");
        } catch (error) {
          console.error("Error al enviar datos:", error);
          setIisNotValidCredentialsAlertVisible(true);
        }
      }
      obtenerRespuesta();
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };
  return (
    <>
    <LoginPage style={{ height: 690 }} className="login-page7">
      <LoginPage.Logo>
        <img src="./planeLogin.png" alt="" />
      </LoginPage.Logo>
      <LoginPage.Title>Inicia Sesión</LoginPage.Title>
      <Input name="username" visible={false} />
      
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
      <LoginC.Button
        keyname="submit"
        index={1}
        type="submit"
        onClick={formik.handleSubmit}
        
      >
        Ingresar
      </LoginC.Button>
      <LoginPage.Footer>
      ¿No eres un miembro? <Link to={"/signUp"}>Regístrate ahora</Link>
      </LoginPage.Footer>
      
        <Snackbar
          open={isNotValidCredentialsAlertVisible}
          autoHideDuration={5000}
          onClose={()=>setIisNotValidCredentialsAlertVisible(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="error">Ups, algo salió mal</Alert>
        </Snackbar>
      
    </LoginPage>
  
    </>
  );
};

export default Login;
