import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeScreen from './home-screen/HomeScreen';
import LoginScreen from './login-screen/LoginScreen';
import RegisterScreen from './register-screen/RegisterScreen';
import FlowerScreen from './flower-screen/FlowerScreen';
import Navbar from './navbar/Navbar';

import CreateUser from './createUser';
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
    <Router>
      <Route exact path = "/" component={HomeScreen}></Route>
      <Route path = "/test" component={CreateUser}></Route>
      <Route path = "/login" component={LoginScreen}></Route>
      <Route path = "/register" component={RegisterScreen}></Route>
      <Route path = "/flowers/:uid" component={FlowerScreen}></Route>
    </Router>
  );
}

export default App;
