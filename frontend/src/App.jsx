import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
/* import ResetPass from './pages/ResetPass'; */
import ChangePass from './pages/ChangePass';
/* import ChooseNewPass from './pages/ChooseNewPass'; */
import Header from './components/Header';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/log-in" element={<LogIn />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/change-pass" element={<ChangePass />} />
    <Route path="/reset-password" element={<ResetPassword />} />
  </Routes>
  </BrowserRouter>
}
