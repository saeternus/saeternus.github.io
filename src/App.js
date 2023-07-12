import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Components from './components';
import './App.css';
import Home from './Home'
import Services from './Services'
import ContactUs from './ContactUs'
import Courses from './Courses'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Components.Navbar />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/courses/gis" element={<Courses />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
