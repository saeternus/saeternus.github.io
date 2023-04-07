import React from 'react';
import * as Components from './components';
import './App.css';
import Targets from './components/Targets';

function App() {
  return (
    <div className="App">
      <Components.Navbar />
      <Components.Targets/>
    </div>
  );
}

export default App;
