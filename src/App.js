import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Components from "./components";
import "./App.css";
import Home from "./Home";
import Services from "./Services";
import ContactUs from "./ContactUs";
import GIScourse from "./GIScourse";
import SPSScourse from "./SPSScourse";
import CRMCourse from "./CRMcourse";
import DAVCourse from "./DAVcourse";
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
            {courses.map((course, index) => (
              
            <Route
              key={index}
              exact path={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`}
              element={<CoursePage course={course} />}
            />
          ))}
            {/* <Route exact path="/courses/gis" element={<GIScourse />} />
            <Route exact path="/courses/spss" element={<SPSScourse />} />
            <Route exact path="/courses/python-data-analysis-visualisation" element={<DAVCourse />} />
            <Route exact path="/courses/research-methodology" element={<CRMCourse />} /> */}
            {/* <Route exact path="sitemap" element={<Sitemap />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
