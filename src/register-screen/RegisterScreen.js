import React from 'react';
import submit from '../resources/submit.png';
import axios from 'axios';

class RegisterScreen extends React.Component{
    state={
        username: '',
        password: '',
    }
    handleSubmit = (e) =>{
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
    }
        
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value 
        });
    }

    render(){
        return(
            <div className = "container">
                 <div>
                    <input type = "text" id = "username" value = {this.state.username} onChange = {this.handleChange}></input>
                    <button className = "submit-button" onClick = {this.handleSubmit}><img src = {submit}></img></button>
                </div>
            </div>
        )
    }
}

export default RegisterScreen;