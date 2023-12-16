import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import * as Components from "./components";
import "./App.css";
import Home from "./Home";
import Services from "./Services";
import ContactUs from "./ContactUs";
import CourseCatalog from "./CourseCatalog";
import Sitemap from "./Sitemap";
import CourseLoader from './CourseLoader'; 

function App() {
  return (
    <div className="App">
      {/* Your Helmet component and other content */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Components.Navbar />}>
            <Route index element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/courses" element={<CourseCatalog />} />
            <Route exact path="/courses/:slug" element={<CourseLoader />} /> 
            <Route path="/courses/*" element={<Navigate to="/" />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
