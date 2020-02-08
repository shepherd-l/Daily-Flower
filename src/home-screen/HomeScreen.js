import React from 'react';
import logo from '../resources/logo.png';
import login from '../resources/login.png';
import register from '../resources/register.png';
import {Link} from 'react-router-dom';

class HomeScreen extends React.Component{

    render(){
        return (
            <div className = "container">
                <img src = {logo} id ="main-logo"></img>
                <div className = "home-buttons">
                    <Link to="/login">
                        <button className = "login-button"><img src = {login}></img></button>
                    </Link>
                    <Link to="/register">
                        <button className = "register-button"><img src = {register}></img></button>
                    </Link>
                    
                </div>
                
            </div>
        );
    }
}

export default HomeScreen;