import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import ResetPass from './pages/ResetPass';
import ChangePass from './pages/ChangePass';
import ChooseNewPass from './pages/ChooseNewPass';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/log-in" element={<LogIn />} />
    <Route path="/reset-pass" element={<ResetPass />} />
    <Route path="/change-pass" element={<ChangePass />} />
    <Route path="/choose-new-pass" element={<ChooseNewPass />} />
  </Routes>
  </BrowserRouter>
}
