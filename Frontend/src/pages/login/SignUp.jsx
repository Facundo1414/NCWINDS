import React, { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { Link } from 'react-router-dom';
import LoginPage, { Input } from '@react-login-page/page7';
import Login from 'react-login-page';
import {useFormik} from 'formik'
import { sendData } from '../../services/apiService';
import './Login.css';

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            password: '',
          },
          onSubmit: (values) => {
            async function obtenerRespuesta() {
                try {
                  const response = await sendData('usuario', values);
                  setIsRegisteredUserAlertVisible(true)
                } catch (error) {
                  console.error('Error al enviar datos:', error);
                  setIsNotRegisteredUserAlertVisible(true)
                }
              }
              obtenerRespuesta();
            
          },
          
    })
    const [isRegisteredUserAlertVisible, setIsRegisteredUserAlertVisible] = useState(false);
    const [isNotRegisteredUserAlertVisible, setIsNotRegisteredUserAlertVisible] = useState(false);

    const handleCloseRegisterMessage = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setIsRegisteredUserAlertVisible(false);
      };
      const handleCloseErrorRegisterMessage = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setIsNotRegisteredUserAlertVisible(false);
      };
    return (
        <LoginPage style={{ height: 690 }} className='login-page7' >
            <LoginPage.Logo>
                <img src="./planeLogin.png" alt="" />
            </LoginPage.Logo>
            <LoginPage.Title>Registrate</LoginPage.Title>
            <Input name="username" visible={false}/>
            <Input name="nombre" type="nombre" placeholder="Usuario" index={0} id='usuario' value={formik.values.nombre} onChange={formik.handleChange}  />
            <Input name="email" type="email" placeholder="Correo" index={1} id='email' value={formik.values.email} onChange={formik.handleChange} />
            <Input name="password" type="password" placeholder="Contraseña" index={2} id='password'  value={formik.values.password} onChange={formik.handleChange}/>
            <Login.Button keyname="submit" index={1} type="submit" onClick={formik.handleSubmit} >
                Crear cuenta
            </Login.Button>
            <LoginPage.Footer >
            ¿Ya tienes una cuenta? <Link to={"/login"}>Inicia sesion ahora</Link>
            </LoginPage.Footer>
            {isRegisteredUserAlertVisible?<Snackbar open={isRegisteredUserAlertVisible} autoHideDuration={5000} onClose={handleCloseRegisterMessage}><Alert severity="success" >Usuario creado exitosamente</Alert></Snackbar>:<></>}
            {isNotRegisteredUserAlertVisible?<Snackbar open={isNotRegisteredUserAlertVisible} autoHideDuration={5000} onClose={handleCloseErrorRegisterMessage}><Alert severity="error">No se pudo registrar al usuario</Alert></Snackbar>:<></>}
        </LoginPage>
        
        
    );
}

export default SignUp;
