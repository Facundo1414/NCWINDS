import React from 'react';
import LoginPage from '@react-login-page/page7';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => (
    <LoginPage style={{ height: 690 }} className='login-page7'>
        <LoginPage.Logo>
            <img src="./planeLogin.png" alt="" />
        </LoginPage.Logo>
        <LoginPage.Username />
        <LoginPage.Password/>
        <LoginPage.Footer>
        Not a member? <Link to={"/signUp"}>Sign up now</Link>
        </LoginPage.Footer>
    </LoginPage>
);

export default Login;