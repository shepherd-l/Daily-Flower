import React from 'react';
import submit from '../resources/submit.png';
import {Link} from 'react-router-dom';
import back from '../resources/back.PNG';

class LoginScreen extends React.Component{
    constructor(props){
        super(props);

        this.state={
            username: '',
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value 
        });
    }

    handleSubmit =(e) =>{
        this.props.history.push("/flowers/"+this.state.username);
    }

    render(){
        return (
            <div className="container">
                <div className="login-container">
                    <div className="title"><h1>Login</h1></div>
                    <div>
                        <input type = "text" id = "username" value = {this.state.username} onChange = {this.handleChange}></input>
                        <label for="username">Username</label>
                    </div>
                    <button className = "submit-button" onClick = {this.handleSubmit}><img src = {submit}></img></button>
                    <Link to="/">
                    <button className = "back"><img src ={back}></img></button>
                    </Link>
                </div>
                
            </div>
        );
    }
}

export default LoginScreen;