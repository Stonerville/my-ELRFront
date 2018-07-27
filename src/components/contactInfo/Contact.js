import React from 'react';
import {FirstName, LastName, Phone1} from './Input';
//import {ButtonUpdate} from './../buttons/Button';
import '../../css/main.css';

function Contact(props) {

  // updateState = (e) => {
  //     const targetValue = e.target.value;
  //     const targetId = e.target.id;
  //     this.setState({[targetId]: targetValue,
  //                     }); 
  //   }

  //   updateButton = (e) => {
  //     e.preventDefault();
  //     alert('You clicked '+ e.target.value+ ' button')
  //   }
 
 //render() {
     return (
        <form>
            <FirstName />
            <br/>
            <LastName />
            <br/>   
            <Phone1 props={props}/>
             <br/>
            <br/>
            {/* <ButtonUpdate updateStateProp = {this.updateButton} title="Update All"/>
            <ButtonUpdate updateStateProp = {this.updateButton} title="Dammit!  No update"/> */}
            <button onClick={props.onClick}>test button</button>
        </form>
            
    );
  //}
}

export default Contact;