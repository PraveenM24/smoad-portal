import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import axios from 'axios';
import { useStateValue } from '../utils/StateProvider';
import { actionTypes } from "../utils/Reducer";
import LoginIcon from '@mui/icons-material/Login';

const Container = styled.div`
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    background: #fff; 
    width: 50%;
    min-height: 45vh;
    margin: 20vh auto;
    padding: 10px;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: row;
    @media (max-width: 768px) {
        width: 85%;
        margin: 30vh auto;
        flex-direction: column;
    }
`
const LogoWrapper = styled.div`
    margin: auto 50px;
    justify-content: center;
    @media (max-width: 768px) {
        margin-top: 30px; 
    }
`

const Logo = styled.img`
    width: 100%;
`

const Input = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 30px auto;
    @media (max-width: 768px) {
        width: 85%;
    }
`
const InputTextField = styled.input.attrs({
    type: 'text'
})`
    background: transparent;
    padding: 12px 25px;
    margin: 5px 0px;
    border: 1px solid #e1e1e1;
    outline: none;
    border-radius: 10px;
    -webkit-transition: all 0.20s ease-in-out;
    -moz-transition: all 0.20s ease-in-out;
    -ms-transition: all 0.20s ease-in-out;
    -o-transition: all 0.20s ease-in-out;
    outline: none;
    &:focus{
        box-shadow: 0 0 4px #a3a3a3;
        border: 1px solid #707070;
    }
`
const InputPasswordField = styled.input.attrs({
    type: 'password'
})`
    background: transparent;
    padding: 12px 25px;
    margin: 5px 0px;
    border: 1px solid #e1e1e1;
    outline: none;
    border-radius: 10px;
    -webkit-transition: all 0.20s ease-in-out;
    -moz-transition: all 0.20s ease-in-out;
    -ms-transition: all 0.20s ease-in-out;
    -o-transition: all 0.20s ease-in-out;
    outline: none;
    &:focus{
        box-shadow: 0 0 4px #a3a3a3;
        border: 1px solid #707070;
    }
`

const Error = styled.p`
    color: #E85A4F;
    font-weight: 700;
    padding: 10px 25px;
    justify-content: center;
    margin: 5px auto;
    border-radius: 10px;
`

const LoginButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px
`

const buttonTheme = createTheme({
    palette: {
      primary: {
        main: '#0C2D48',
      },
    },
});

function Login() {

    const [{user}, dispatch] = useStateValue();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)

    const handleLogin = () => {

        if(username === '' || password === '') {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 4000);
            return false
        }
        var data
        axios.get('http://localhost/php-rest-api/api/read.php')
        .then(function (response) {
            data = response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            data.forEach(cred => {
                if(cred.name === username && cred.password === password){
                    dispatch({
                        type: actionTypes.SET_USER,
                        user: cred.name,
                    })
                }else{
                    setError(true)
                    setTimeout(() => {
                        setError(false)
                    }, 4000);
                    return false
                }
            })
        }); 
    }

    return (   
        <Container>
            <LogoWrapper>
                <Logo src = './../assets/logo.png'/>
            </LogoWrapper>
            <Input>
                {
                    error ? (
                        <Error>Invalid Credentials</Error>
                    ) : (
                        <></>
                    )
                }
                <InputTextField placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                <InputPasswordField placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>  
                <LoginButton>
                    <Button theme={buttonTheme} variant="contained" startIcon={<LoginIcon />} onClick={() => handleLogin()}>Login</Button>
                </LoginButton>           
            </Input>
        </Container>
    )
}

export default Login
