import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router ,Route, Navigate, Routes } from "react-router-dom";

const StyledBody = styled.div`

  background: #ecebebb6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;

`

const StyledBox = styled.div`

  height: 600px;
  width: 1000px;
  margin: auto;
  border-radius: 25px;
  margin-top: 100px;
  background-color: #f4f3f3b6 ;
  box-shadow: 0px 0px 25px 1px #9f9f9fb6;
  
  `
const StyledCreateAccount = styled.h2`

    font-size: 30px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin-top:40px;
`
const StyledMember = styled.text`

    color: #3D3D3D;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: 15px;
    margin-left: 411px;
    
`
const StyledSignIn = styled.button`

  border-left: 0px;
  border-right: 0px;
  border-top: 0px; 
  color: #3D3D3D;;
  text-align: center;  
  display: inline-block; 
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  background-color: #f4f3f3b6;
  border-bottom: 1px solid #adadad; 
`
const StyledInputLabel = styled.label`
  
  margin-left: 23px;
  font-family: 'Poppins', sans-serif;
  color: #3D3D3D;
  font-weight: bold;
  display: block;
  margin-bottom: 9px;
  margin-top: 25px;

`
const StyledInput = styled.input`
  
  width: 45%;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.32);
  border-radius: 20px;
  outline: none;
  border: 2px solid transparent;
  padding: 15px;
  font-size: 15px;
  color: #616161;
  transition: all 0.4s ease;
  margin-left: 6px;
  
`
const StyledButtonLogin = styled.button`
  background: linear-gradient(to left, #2c9583 0%, #16d3c0 100%);
  border: none; 
  color: white;
  text-align: center;  
  display: inline-block;
  border-radius: 15px; 
  cursor: pointer;
  margin-left: 99px;
  margin-top: 35px;
  height: 40px;
  width: 30%;
  font-family: Poppins-Bold;
  font-size: 17px;
  transition: background 0.3s ease;
  &:hover {background: linear-gradient(to left, #16d3c0, #2c9583);}
`

const StyledLogoV = styled.img`

    width: 10%,
    height: 10%, 
    display: flex;
    padding: 20px;
    float:right;
    margin-right: 183px;


`
const handleLogin = () => {
     
    window.location.assign('./SignIn');
  };

const handleChat = () => {
     
    window.location.assign('./ChatBase');
  };

const LogoV = () => {

    return (
        <StyledLogoV width="100" height="100" src="https://img.icons8.com/ios-filled/100/v-symbol.png" alt="v-symbol"/>)};

function FormSignUp() {
    return (
        
        <StyledBody>
            <StyledBox>
                <StyledCreateAccount>Create an account</StyledCreateAccount>
                <StyledMember>Already a member?</StyledMember>
                <StyledSignIn onClick={handleLogin}>Sign In</StyledSignIn>
                <form>
                    <div>
                        <StyledInputLabel htmlFor="nome">Name</StyledInputLabel>
                        <StyledInput type="text"
                            id="nome"
                            placeholder="Full Name"
                            required />
                    </div>

                    <div>
                        <LogoV></LogoV>
                        <StyledInputLabel htmlFor="email">E-mail</StyledInputLabel>
                        <StyledInput
                            type="email"
                            id="email"
                            placeholder="example@gmail.com"
                            required />
                    </div>

                    

                    <StyledInputLabel htmlFor="Password">Password</StyledInputLabel>
                    <StyledInput
                        type="password"
                        id="password"
                        placeholder="Password"
                        required />


                    <div>
                        <StyledInputLabel htmlFor="ConfirPassword">Confirm Password</StyledInputLabel>
                        <StyledInput
                            type="password"
                            id="ReEnterPassword"
                            placeholder="Re-enter password"
                            required />
                    </div>

                    <div>
                        <StyledButtonLogin onClick={handleChat}>Register</StyledButtonLogin>
                    </div>
                </form>
            </StyledBox>
        </StyledBody>
    );
}

export default FormSignUp;














