import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PhoneNumber from './PhoneNumber';
import {ButtonUpdate} from './../buttons/Button';
import '../../css/main.css';


class Contact extends Component {
  constructor(props) {
    super();
    this.state = {
       firstName: '',
       lastName: ''
      };
    };
    updateState =(e) => {
      const targetValue = e.target.value;
      const targetId = e.target.id;
      this.setState({[targetId]: targetValue}); 
      //console.log((e.target, i)=>{target:[i]})
      //console.log(e.target.map(material => material.value));

      ReactDOM.findDOMNode(document.getElementById(targetId)).style.color = 'red';
    }

  
    updateButton =(e) => {
      // const targetName = e.target.name;
      // const targetValue = e.target.value;
      e.preventDefault();
    }
  //   componentDidMount() {

  //     this.setState[{firstName:'',
  //     lastName:'' }];
  //  }

 render() {
    // You can use them as regular CSS styles
    const firstN = this.state.firstName;
    const lastN = this.state.lastName;
    return (
        <form>
            <FirstName value={firstN} updateStateProp = {this.updateState}/>
            <br/>
            <LastName value={lastN} updateStateProp = {this.updateState}/>
            <br/>
            <PhoneNumber/>
            <br/>
            <FullName fullName={firstN + " " + lastN}/>
            <br/>
            <br/>
           <ButtonUpdate updateStateProp = {this.updateButton} title="Update All"/>
        </form>
            
    );
  }
}
class FirstName extends Component {
      render() {
      // You can use them as regular CSS styles
      return (
              <label>First Name
              <input id="firstName" type="text" value={this.props.value} onChange={this.props.updateStateProp}/>
              </label>
      );
    }
  }
  class LastName extends Component {
      render() {
      // You can use them as regular CSS styles
      return (
              <label>Last Name
              <input id="lastName" type="text" value={this.props.value}  onChange={(event) => this.props.updateStateProp(event)}/>
              </label>
      );
    }
  }
  
  class FullName extends Component {
    render() {
      // You can use them as regular CSS styles
      return (
              <label>Full Name
              <div id="fullName">{this.props.fullName}</div>
              </label>
      );
    }
 }  
export default Contact;