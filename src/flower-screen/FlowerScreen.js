import React from 'react';
import Modal from 'react-materialize/lib/Modal';
import Button from 'react-materialize/lib/Button'
import submit from '../resources/submit.png';
import close from '../resources/close.png';

import flowerbud from '../resources/flowerBud.png';
import flowerbloom from '../resources/flowerBloom.PNG';
import {Link} from 'react-router-dom';
import back from '../resources/back.PNG';

import DatePicker from 'react-materialize/lib/DatePicker';

class FlowerScreen extends React.Component{
    constructor(props){
        super(props);

        this.state={
            flowers: [{prompt: "", description: ""},{prompt: "", description: ""},{prompt: "", description: ""}],
            currText0: '',
            currText1: '',
            currText2: '',
        }
    }
    handleSave = (e,index) => {
        e.preventDefault();

        var flowerArr = this.state.flowers;
        switch(index){
            case 0:
                flowerArr[0].description = this.state.currText0;
                break;
            case 1:
                flowerArr[1].description = this.state.currText1;
                break;
            case 2:
                flowerArr[2].description = this.state.currText2;
                break;
        }
        this.setState({flowers: flowerArr}, function(){console.log(this.state.flowers);});
    }
/*
    componentDidMount(){
        axios.get('http://localhost:5000/flowers/')
        .then(response=>{
            console.log(response);
        })
    }
    */

    handleChange = (e, index) => {
        e.preventDefault();
        
        switch(index){
            case 0:
                this.setState({currText0: e.target.value});
                break;
            case 1:
                this.setState({currText1: e.target.value});
                break;
            case 2:
                this.setState({currText2: e.target.value});
                break;
        }
    }

    render(){
        return (
            <div className = "container">
                <div className="title"><h1>Click a Flower</h1></div>
                <div className = "row">
                    {this.state.flowers[0].description != ""?
                    <Modal className = "flower-modal" trigger = {<div className = "col s4 flower"><img className = "flower" src={flowerbloom}></img></div>}
                        options = {{dismissible: false,preventScrolling: true,}}
                        actions ={[]}>
                        <div className = "modal-header">
                            <Button flat className = "modal-close-button" modal = "close"><img src = {close}></img></Button>
                        </div>
                        <div className = "prompt">Describe a happy memory that you have.</div>
                        <textarea className = "flower-description" cols="40" defaultValue = {this.state.flowers[0].description} value = {this.state.currText0} onChange={(e)=> this.handleChange(e,0)}></textarea>
                        <Button flat className = "modal-submit-button" modal="close" key = '0' onClick = {(e)=>this.handleSave(e,0)}><img src = {submit}></img></Button>
                    </Modal> 
                    : 
                    <Modal className = "flower-modal" trigger = {<div className = "col s4 flower"><img className = "flower" src={flowerbud}></img></div>}
                           options = {{dismissible: false,preventScrolling: true,}}
                           actions ={[]}>
                        <div className = "modal-header">
                            <Button flat className = "modal-close-button" modal = "close"><img src = {close}></img></Button>
                        </div>
                        <div className = "prompt">Describe a happy memory that you have.</div>
                        <textarea className = "flower-description" cols="40" defaultValue = {this.state.flowers[0].description} value = {this.state.currText0} onChange={(e)=> this.handleChange(e,0)}></textarea>
                        <Button flat className = "modal-submit-button" modal="close" key = '0' onClick = {(e)=>this.handleSave(e,0)}><img src = {submit}></img></Button>
                    </Modal>}

                    {this.state.flowers[1].description != ""?
                    <Modal className = "flower-modal" trigger = {<div className = "col s4 flower"><img className = "flower" src={flowerbloom}></img></div>}
                        options = {{dismissible: false,preventScrolling: true,}}
                        actions ={[]}>
                        <div className = "modal-header">
                            <Button flat className = "modal-close-button" modal = "close"><img src = {close}></img></Button>
                        </div>
                        <div className = "prompt">What are you looking forward to?</div>
                        <textarea className = "flower-description" cols="40" defaultValue = {this.state.flowers[1].description} value = {this.state.currText1} onChange={(e)=> this.handleChange(e,1)}></textarea>
                        <Button flat className = "modal-submit-button" modal="close" key = '1' onClick = {(e)=>this.handleSave(e,1)}><img src = {submit}></img></Button>
                    </Modal> 
                    : 
                    <Modal className = "flower-modal" trigger = {<div className = "col s4 flower"><img className = "flower" src={flowerbud}></img></div>}
                           options = {{dismissible: false,preventScrolling: true,}}
                           actions ={[]}>
                        <div className = "modal-header">
                            <Button flat className = "modal-close-button" modal = "close"><img src = {close}></img></Button>
                        </div>
                        <div className = "prompt">What are you looking forward to?</div>
                        <textarea className = "flower-description" cols="40" defaultValue = {this.state.flowers[1].description} value = {this.state.currText1} onChange={(e)=> this.handleChange(e,1)}></textarea>
                        <Button flat className = "modal-submit-button" modal="close" key = '1' onClick = {(e)=>this.handleSave(e,1)}><img src = {submit}></img></Button>
                    </Modal>}

                    {this.state.flowers[2].description != ""?
                    <Modal className = "flower-modal" trigger = {<div className = "col s4 flower"><img className = "flower" src={flowerbloom}></img></div>}
                        options = {{dismissible: false,preventScrolling: true,}}
                        actions ={[]}>
                        <div className = "modal-header">
                            <Button flat className = "modal-close-button" modal = "close"><img src = {close}></img></Button>
                        </div>
                        <div className = "prompt">What is your favorite word and why?</div>
                        <textarea className = "flower-description" cols="40" defaultValue = {this.state.flowers[2].description} value = {this.state.currText2} onChange={(e)=> this.handleChange(e,2)}></textarea>
                        <Button flat className = "modal-submit-button" modal="close" key = '1' onClick = {(e)=>this.handleSave(e,2)}><img src = {submit}></img></Button>
                    </Modal> 
                    : 
                    <Modal className = "flower-modal" trigger = {<div className = "col s4 flower"><img className = "flower" src={flowerbud}></img></div>}
                           options = {{dismissible: false,preventScrolling: true,}}
                           actions ={[]}>
                        <div className = "modal-header">
                            <Button flat className = "modal-close-button" modal = "close"><img src = {close}></img></Button>
                        </div>
                        <div className = "prompt">What is your favorite word and why?</div>
                        <textarea className = "flower-description" cols="40" defaultValue = {this.state.flowers[2].description} value = {this.state.currText2} onChange={(e)=> this.handleChange(e,2)}></textarea>
                        <Button flat className = "modal-submit-button" modal="close" key = '1' onClick = {(e)=>this.handleSave(e,2)}><img src = {submit}></img></Button>
                    </Modal>}
                    <div className = "row">
                        <div className = "col s7">
                            <Link to="/">
                                <button className = "back"><img src ={back}></img></button>
                            </Link>
                        </div>
                        <div className = "col s4">
                            
                            <DatePicker id="flower-date" options={{autoClose: false,format: 'mmm dd, yyyy',defaultDate:'FEB 08, 2020'}}></DatePicker>
                            <label for="flower-date"><i class="material-icons large calendar-icon">event_note</i></label>
                        </div>
                    </div>
                      
                    
               
                </div> 

            </div>
        );
    }
}

export default FlowerScreen;