import React from 'react';
import logo from './resources/logo.PNG';
//import logo from './logo.svg';
//import './App.css';

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/

function App() {
  return (
    <div className="App">
      <img src = {logo}></img>
    </div>
  );
}

export default App;
