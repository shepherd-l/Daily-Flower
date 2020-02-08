import React from 'react';
import Modal from 'react-materialize/lib/Modal';
import Button from 'react-materialize/lib/Button'
import submit from '../resources/submit.png';
import close from '../resources/close.png';

class FlowerScreen extends React.Component{
    render(){
        return (
            <div className = "container">
                <div className = "row">
                    <Modal trigger = {<div className = "col s4 flower">FLOWER</div>}
                           actions = {[<Button flat className = "modal-submit-button" modal="close"><img src = {submit}></img></Button>, <Button flat className = "modal-close-button" modal = "close"><img src = {close}></img></Button>]}
                           options = {{dismissible: false,preventScrolling: true,}}  >
                    </Modal>
 
                </div> 
                
                <div className = "row">
                    <div className = "col s4 pot">POT</div>
                    <div className = "col s4 pot">POT</div>
                    <div className = "col s4 pot">POT</div>
                </div> 
                

            </div>
        );
    }
}

export default FlowerScreen;