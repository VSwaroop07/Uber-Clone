import React from "react";
import { Routes, Route } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import UserLogin from "./pages/userLogin";
import UserRegister from "./pages/userRegister";
import CaptainLogin from "./pages/captainLogin";
import CaptionRegister from "./pages/captainRegister";
import Home from "./pages/home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectionWrapper from "./pages/CaptainProtectionWrapper";
import CaptainLogout from "./pages/CaptainLogout";
import Riding from "./pages/Riding";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/riding" element={<Riding />} />
      <Route path="/signup" element={<UserRegister />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptionRegister />} />
      <Route
        path="/home"
        element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        }
      />
      <Route
        path="/user/logout"
        element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        }
      />
      <Route
        path="/captain-home"
        element={
          <CaptainProtectionWrapper>
            <CaptainHome />
          </CaptainProtectionWrapper>
        }
      />
      <Route 
        path="/captain/logout" 
        element={
          <CaptainProtectionWrapper>
            <CaptainLogout />
          </CaptainProtectionWrapper>
        }
      />
    </Routes>
  );
};

export default App;
