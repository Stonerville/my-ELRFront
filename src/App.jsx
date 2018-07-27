import React, { Component } from 'react';
//import Contact from './components/contactInfo/Contact';
import {FirstName, LastName, Phone1} from './components/contactInfo/Input'
import {SET_FIRSTNAME, SET_LASTNAME, SET_PHONE} from './actions/actions'
import { connect } from 'react-redux'
import './App.css';

class App extends Component {

  // updateState = (e) => {
  //     const targetValue = e.target.value;
  //     const targetId = e.target.id;
  //     this.setState({[targetId]: targetValue,
  //   }); 
  // }

  render() {
      return (
        // <Contact />
        <form>
            <FirstName inputProps={this.props} updateState={this.props.setFirstName}/>
            <br/>
            <LastName inputProps={this.props} updateState={this.props.setLastName}/>
            <br/>
            <p></p>
            <br/>
            <Phone1 inputProps={this.props} updateState={this.props.setPhone}/>
             <br/>
            <br/>
            {/* <ButtonUpdate updateStateProp = {this.updateButton} title="Update All"/>
            <ButtonUpdate updateStateProp = {this.updateButton} title="Dammit!  No update"/> */}
            <button onClick={this.props.updateState}>test button</button>
        </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
        id: state.id,
        label: state.label,
        className: state.className,
        value: state.value,
        updateState: state.updateState
    };
  };

const mapDispatchToProps = (dispatch) => {
  return {
    setFirstName: (event) => {
      const eventValue = event.target.value;
      dispatch({
          type: SET_FIRSTNAME,
          payload: eventValue,
           invalidMessage: [],
          isValid: false,//,
          className: 'input-valid'
        });
    },
    setLastName: (event) => {
      // console.log('Setting Last Name: '+event.target.value);
      const eventValue = event.target.value;
      dispatch({
          type: SET_LASTNAME,
          payload: eventValue,
           invalidMessage: [],
          isValid: eventValue === ''?true:false,//,
          className: this.isValid?'input-valid':'input-error'
        });
    },
    setPhone: (event) => {
      // console.log('Setting Phone Number 1: '+event.target.value);
      const eventValue = event.target.value;
      dispatch({
          type: SET_PHONE,
          payload: eventValue,
           invalidMessage: [],
          isValid: false,//,
          className: 'input-valid'
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
