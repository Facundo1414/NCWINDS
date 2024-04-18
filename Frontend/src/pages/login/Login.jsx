import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';
import LoginPage, { Input} from '@react-login-page/page7';
import LoginC from 'react-login-page'
import { sendData } from '../../services/apiService';
import {useFormik} from 'formik'
import './Login.css';

const Login = () => {
    const [isNotValidCredentialsAlertVisible, setIisNotValidCredentialsAlertVisible] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
          },
          onSubmit: (values) => {
            async function obtenerRespuesta() {
                try {
                  const response = await sendData('', values);
                  
                } catch (error) {
                  console.error('Error al enviar datos:', error);
                  setIisNotValidCredentialsAlertVisible(true)
                }
              }
              obtenerRespuesta();
          },
          
    })
    const handleCloseErrorBadCredentialsMessage = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setIisNotValidCredentialsAlertVisible(false)
      };

 return(
 <LoginPage style={{ height: 690 }} className='login-page7'>
        <LoginPage.Logo>
            <img src="./planeLogin.png" alt="" />
        </LoginPage.Logo>
        <LoginPage.Title>Inicia Sesion</LoginPage.Title>
        <Input name="username" visible={false}/>
        <Input name="email" type="email" placeholder="Correo" index={1} id='email' value={formik.values.email} onChange={formik.handleChange} />
        <Input name="password" type="password" placeholder="Contraseña" index={2} id='password'  value={formik.values.password} onChange={formik.handleChange}/>
        <LoginC.Button keyname="submit" index={1} type="submit" onClick={formik.handleSubmit} >
                Ingresar
            </LoginC.Button>
        <LoginPage.Footer>
        No eres un miembro? <Link to={"/signUp"}>Registrate ahora</Link>
        </LoginPage.Footer>
        {isNotValidCredentialsAlertVisible?<Snackbar open={isNotValidCredentialsAlertVisible} autoHideDuration={5000} onClose={handleCloseErrorBadCredentialsMessage}><Alert severity="error">Algo salio mal</Alert></Snackbar>:<></>}
    </LoginPage>
 )  
};

export default Login;