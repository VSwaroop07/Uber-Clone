import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import UserLogin from './pages/userLogin';
import UserRegister from './pages/userRegister';
import CaptainLogin from './pages/captainLogin';
import CaptionRegister from './pages/captainRegister';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/login' element={<UserLogin />}  />
      <Route path='/signup' element={<UserRegister />}  />
      <Route path='/captain-login' element={<CaptainLogin />}  />
      <Route path='/captain-signup' element={<CaptionRegister />}  />
    </Routes>
  )
}

export default App