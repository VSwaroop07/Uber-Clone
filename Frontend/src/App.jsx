import React from 'react';
import {Routes, Route} from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import UserLogin from './pages/userLogin';
import UserRegister from './pages/userRegister';
import CaptainLogin from './pages/captainLogin';
import CaptionRegister from './pages/captainRegister';
import Home from './pages/Home';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<GetStarted />}  />
      <Route path='/login' element={<UserLogin />}  />
      <Route path='/signup' element={<UserRegister />}  />
      <Route path='/captain-login' element={<CaptainLogin />}  />
      <Route path='/captain-signup' element={<CaptionRegister />}  />
      <Route path='/home' element={<Home />}  />
    </Routes>
  )
}

export default App