import React from 'react';
import LoginPage from '@react-login-page/page7';
import './Login.css';

const Login = () => (
    <LoginPage style={{ height: 690 }} className='login-page7'>
        <LoginPage.Logo>
            <img src="./planeLogin.png" alt="" />
        </LoginPage.Logo>
        <LoginPage.Username />
        <LoginPage.Password/>
        <LoginPage.Footer>
        Not a member? <a href="#">Sign up now</a>
        </LoginPage.Footer>
    </LoginPage>
);

export default Login;