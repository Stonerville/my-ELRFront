import React, { Component } from 'react';
import {SERVICE_ROUTES} from '../constants/Constants' 
import './Button.css'; // Tell Webpack that Button.js uses these styles

export const Button = class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return (
    <div className="Button" />,
    <label>${SERVICE_ROUTES.UPLOAD_LOGO}</label>
    )
  }
}

export const ButtonUpdate =  class ButtonUpdate extends Component {
  render() {
     return (
        <div>
           <button className="btn btn-danger" onClick = {this.props.updateStateProp}>{this.props.title}</button>
        </div>
     );
  }
}