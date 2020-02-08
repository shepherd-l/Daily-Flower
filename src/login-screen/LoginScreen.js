import React from 'react';
import submit from '../resources/submit.png';

class LoginScreen extends React.Component{
    render(){
        return (
            <div className="container">
                <div>
                    <button className = "submit-button"><img src = {submit}></img></button>
                </div>
            </div>
        );
    }
}

export default LoginScreen;