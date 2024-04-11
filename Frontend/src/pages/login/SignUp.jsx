import React from 'react';
import LoginPage, { Input } from '@react-login-page/page7';
import './Login.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <LoginPage style={{ height: 690 }} className='login-page7'>
            <LoginPage.Logo>
                <img src="./planeLogin.png" alt="" />
            </LoginPage.Logo>
            <LoginPage.Title>Sign Up</LoginPage.Title>
            <Input name="username" type="text" placeholder="Username" index={0}/>
            <Input name="password" type="password" placeholder="Password" index={1} id='password'/>
            <Input name="confirmPassword" type="password" placeholder="Confirm Password" index={2} id='confpassword' />
            <LoginPage.Footer>
                Already have an account? <Link to={"/login"}>Log in now</Link>
            </LoginPage.Footer>
        </LoginPage>
    );
}

export default SignUp;
