import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Components from './components';
import './App.css';
import Home from './Home'
import OurWork from './Our-Work'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Courses from './Courses'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Components.Navbar />}>
        <Route index element={<Home />} />
        <Route path="/Our-Work" element={<OurWork />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/Courses" element={<Courses />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
