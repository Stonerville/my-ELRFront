import React, { Component } from 'react';
import '../css/main.css';
import PropTypes from 'prop-types';

class PhoneNumber extends Component {
constructor(props) {
    super();
    this.state = {
        number: '',
        isValid: false
        };
    };
    updateState =(e) => {
        let targetValue = e.target.value;
        const targetId = e.target.id;
        const targetValid = targetValue === ''? false : true ;
        this.setState({[targetId]: targetValue, 
                        isValid:targetValid}); 
     }

    render()     
    {
        const className = (this.state.isValid)?"PhoneNumber-valid":"PhoneNumber-error";
        return(
            <legend>
                <label htmlFor="number">Phone Number
                <input id="number" className={className} type="text" value={this.props.value} onChange={this.updateState}/>
                </label>
            </legend>
        );         
    }
}

PhoneNumber.prototype = {
    value: function(props, propName, componentName) {
        if (!/same/.test(props[propName])) {
          return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
          );
        }
      },
    
};
export default PhoneNumber;
        