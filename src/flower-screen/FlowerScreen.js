import React from 'react';
import Modal from 'react-materialize/lib/Modal';
import Button from 'react-materialize/lib/Button'
import submit from '../resources/submit.png';
import close from '../resources/close.png';
import flowerbud from '../resources/flowerBud.png';

import axios from 'axios';

class FlowerScreen extends React.Component{
    constructor(props){
        super(props);

        this.state={
            flowers: []
        }
    }
    handleSave = () => {

    }

    componentDidMount(){
        axios.get('http://localhost:5000/flowers/')
        .then(response=>{
            console.log(response);
        })
    }

    render(){
        return (
            <div className = "container">
                <div className = "row">
                    <Modal trigger = {<div className = "col s4 flower"><img className = "flower" src={flowerbud}></img></div>}
                           options = {{dismissible: false,preventScrolling: true,}}
                           actions ={[]}>
                        <div className = "modal-header">
                            <Button flat className = "modal-close-button" modal = "close"><img src = {close}></img></Button>
                        </div>
                        <textarea className = "flower-description" cols="40"></textarea>
                        <Button flat className = "modal-submit-button" modal="close" onClick = {this.handleSave}><img src = {submit}></img></Button>
                    </Modal>
                    <Modal trigger = {<div className = "col s4 flower"><img className = "flower" src={flowerbud}></img></div>}
                           options = {{dismissible: false,preventScrolling: true,}}
                           actions ={[]}>
                        <div className = "modal-header">
                            <Button flat className = "modal-close-button" modal = "close"><img src = {close}></img></Button>
                        </div>
                        <textarea className = "flower-description" cols="40"></textarea>
                        <Button flat className = "modal-submit-button" modal="close" onClick = {this.handleSave}><img src = {submit}></img></Button>
                    </Modal>
                    <Modal trigger = {<div className = "col s4 flower"><img className = "flower" src={flowerbud}></img></div>}
                           options = {{dismissible: false,preventScrolling: true,}}
                           actions ={[]}>
                        <div className = "modal-header">
                            <Button flat className = "modal-close-button" modal = "close"><img src = {close}></img></Button>
                        </div>
                        <textarea className = "flower-description" cols="40"></textarea>
                        <Button flat className = "modal-submit-button" modal="close" onClick = {this.handleSave}><img src = {submit}></img></Button>
                    </Modal>
                </div> 

            </div>
        );
    }
}

export default FlowerScreen;