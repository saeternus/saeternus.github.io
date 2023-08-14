import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Components from "./components";
import "./App.css";
import Home from "./Home";
import Services from "./Services";
import ContactUs from "./ContactUs";
import GIScourse from "./GIScourse";
import SSPScourse from "./SPSScourse";
import CourseCatalog from "./CourseCatalog";
import Sitemap from "./Sitemap";
import { Helmet } from "react-helmet";

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
            <Route exact path="/courses/gis" element={<GIScourse />} />
            <Route exact path="/courses/ssps" element={<SSPScourse />} />
            {/* <Route exact path="sitemap" element={<Sitemap />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
