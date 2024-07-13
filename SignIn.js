import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Navigate, Routes, redirect, useHistory } from "react-router-dom";
import FormSignUp from './FormSignUp';
import Chat from './ChatBase'

const LogoV = () => {

  return (
    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/v-symbol.png" alt="v-symbol"
      style={{ width: '10%', height: '15%', display: 'block', margin: 'auto' }}
    />)
};


const StyledBody = styled.div`

  background: #ecebebb6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;


`


const StyledBox = styled.div`
  height: 560px;
  width: 450px;
  margin: auto;
  background-image:;
  border-radius: 25px;
  transition: all .3s;
  box-shadow: 0px 0px 25px 1px #9f9f9fb6;
  margin-top: 100px;
  background-color: #f4f3f3b6;
  
  `


const StyledInput = styled.input`
  font-family: Poppins-Regular;
  font-size: 15px;
  color: #171717;
  line-height: 1.0;
  display: block;
  width: 80%;
  height: 45px;
  background: 0 0;
  padding: 0 5px;
  margin: auto;
  margin-top: 30px; 
  margin-bottom: 15px;
  border-bottom: 2px solid #adadad;
  border-width: 2px;
  border-left:0px;
  border-right:0px;
  border-top:0px;
   `


const StyledBemVindo = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0.6em;
  background-color:;
  border-radius: 25px;
  text-align:center;
  font-family: Poppins-Bold;
  color: #333;    
`
const StyledButtonLogin = styled.button`
  background: linear-gradient(to left, #2c9583 0%, #16d3c0 100%);
  border: none; 
  color: white;
  text-align: center;  
  display: inline-block;
  border-radius: 15px; 
  cursor: pointer;
  margin-left: 150px;
  margin-top: 20px;
  height: 40px;
  width: 150px;
  font-family: Poppins-Bold;
  font-size: 17px;
  transition: background 0.3s ease;
  &:hover {background: linear-gradient(to left, #16d3c0, #2c9583);}

`


const StyledSpam = styled.button` 

  margin-top: 70px;
  margin-left: 115px;
  border: none;
  background-color: #f4f3f3b6;
  font-family: Poppins-Regular;
  font-size: 15px;
  color: #6e6e6e;
  `
const StyledSignUp = styled.button`

  border-left: 0px;
  border-right: 0px;
  border-top: 0px; 
  color: #2d2c2c;
  text-align: center;  
  display: inline-block; 
  cursor: pointer;
  margin-left: 0px;
  font-family: Poppins-Bold;
  font-size: 15px;
  background-color: #f4f3f3b6;
  border-bottom: 1px solid #adadad;
`


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



      const MyButton = () => {
        const history = useHistory();
      
        const handleButtonClick = () => {
          // Redireciona para a página desejada
          history.push("./componentes/ChatBase");
  
  };}

  const handleForm = () => {

    window.location.assign('./FormSignUp');
  };

  return (
    

      <StyledBody>
        <StyledBox>
          <div className="login-container">
            <StyledBemVindo>
              <p>Welcome</p>
            </StyledBemVindo>

            <LogoV></LogoV>

            <form>

              <label htmlFor="emailbox"></label>
              <StyledInput
                type="text"
                id="emailbox"
                placeholder='Email Adress'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />

              <label htmlFor="passwordbox"></label>
              <StyledInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="passwordbox"
                required />


            </form>
          

              

                

                <StyledButtonLogin onClick={handleButtonClick}>Login</StyledButtonLogin>
                
               

              

            

        
            <div>

              <StyledSpam>

                <text>Don´t have an account? </text>

              </StyledSpam>




              <StyledSignUp onClick={handleForm}>Sign Up</StyledSignUp>


            </div>




          </div>
        </StyledBox>
      </StyledBody>

  );
};

export default Login;
