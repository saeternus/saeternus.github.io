import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import * as Components from './components';
import './App.css';
import Home from './Home'
import Services from './Services'
import ContactUs from './ContactUs'
import Courses from './Courses'

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Components.Navbar />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/courses/gis" element={<Courses />} />
      </Route>
    </Routes>
  </HashRouter>
  );
}

export default App;
