import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import * as Components from "./components";
import "./App.css";
import Home from "./Home";
import Services from "./Services";
import ContactUs from "./ContactUs";
import CourseCatalog from "./CourseCatalog";
import Sitemap from "./Sitemap";
import courses from './CourseData';
import { Helmet } from "react-helmet";
import CoursePage from './CoursePage';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Saeternus</title>
        <meta name="description" content="Portfolio page for Saeternus" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Components.Navbar />}>
            <Route index element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/courses" element={<CourseCatalog />} />
            <Route exact path="/courses/research-methodology" element={<Navigate to="/courses/research-methodology-research-design-and-writing" />} />
            <Route exact path="/courses/remote-sensing-erdas" element={<Navigate to="/courses/remote-sensing" />} />
            {courses.map((course, index) => (
              
            <Route
              key={index}
              exact path={`/courses/${course.slug}`}
              element={<CoursePage course={course} />}
            />
          ))}
          <Route path="/*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
