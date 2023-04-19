import React from "react";
import * as Components from './components';
import './App.css';
import Home from './Home'
import OurWork from './Our-Work'

function App() {
  return (
    <div className="App">
      <Components.Navbar />
      {/* <Home/> */}
      <OurWork/>
      <Components.ContactInfo/>
    </div>
  );
}

export default App;
