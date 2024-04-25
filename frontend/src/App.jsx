import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/log-in" element={<LogIn />} />
  </Routes>
  </BrowserRouter>
}