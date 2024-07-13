import React from 'react';
import Chat from './componentes/ChatBase.js';
import Login from './componentes/SignIn.js';
import FormSignUp from './componentes/FormSignUp.js';
import { BrowserRouter as Router ,Route, Navigate, Routes } from "react-router-dom";


export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/FormSignUp" element={<FormSignUp />} />
        <Route path="/ChatBase" element={<Chat />} />
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
    </Router>
  )
}






 