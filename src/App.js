import React from "react";
import * as Components from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Components.Navbar />
      <Components.MainSection />
      <div className="cards">
        <Components.Cards heading='24x7 Support' text='hello world'/>
        <Components.Cards heading='Daily Reports' text='hello world'/>
        <Components.Cards heading='Daily Reports' text='hello world'/>
        <Components.Cards heading='24x7 Support' text='hello world'/>
      </div>
      <Components.Targets/>
      <Components.Why />
    </div>
  );
}

export default App;
