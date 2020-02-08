import React from 'react';
import submit from '../resources/submit.png';

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
                <div>
                    <input type = "text" id = "username" value = {this.state.username} onChange = {this.handleChange}></input>
                    <button className = "submit-button" onClick = {this.handleSubmit}><img src = {submit}></img></button>
                </div>
            </div>
        );
    }
}

export default LoginScreen;