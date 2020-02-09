import React from 'react';
import submit from '../resources/submit.png';
import axios from 'axios';
import {Link} from 'react-router-dom';
import back from '../resources/back.PNG';

class RegisterScreen extends React.Component{
    constructor(props){
        super(props);

        this.state={
            username: '',
            password: '',
        }
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();

        const user = {
          username: this.state.username
        }
    
        console.log(user);
    
        axios.post('http://localhost:5000/users/add', user)
          .then(res => {console.log(res)})
          .catch(error =>{console.log(error)});
    
        this.setState({
          username: ''
        })    
    }
        
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value 
        });
    }

    render(){
        return(
            <div className = "container">
                 <div className="login-container">
                    <div className="title"><h1>Register</h1></div>
                    <div>
                        <input type = "text" id = "username" value = {this.state.username} onChange = {this.handleChange}></input>
                        <label for="">Username</label>
                    </div>
                    <button className = "submit-button" onClick = {this.handleSubmit}><img src = {submit}></img></button>
                    <Link to="/">
                    <button className = "back"><img src ={back}></img></button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default RegisterScreen;