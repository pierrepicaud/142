import React from 'react';
import logo from './logo.svg';
import './App.css';
import Snowfall from 'react-snowfall';

function App() {
  return (
    <div className="App">
      <Snowfall />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Merry Christmas and 143 pặc pặc!
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
