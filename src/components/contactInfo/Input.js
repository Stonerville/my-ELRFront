import React, { Component } from 'react';
import '../../css/main.css';

function Input(props){
    // class Input extends Component{

    // updateState =(e) => {
    //     let targetValue = e.target.value;
    //     const targetId = e.target.id;
    //     const targetValid = () => !(targetValue === '') && this.props.isRequired;
    //     this.setState({[targetId]: targetValue, 
    //                     isValid:targetValid,
    //                     className: targetValid?"input-valid":"input-error"}); 
    //  }

    //  componentDidMount(){
    //     if (this.props.isRequired) {
    //     this.setState({isRequired:this.props.isRequired,
    //                     className: 'input-error'}); 
    //     }
    // }

    // render()     
    // {
        //const className = this.state.className;
        return(
            <legend>
                <label htmlFor={props.id}>{props.label}
                <input id={props.id} className={props.className} type="text" value={props.value} onChange={props.updateState}/>
                </label>
                {/* <label htmlFor={this.props.id}>{this.props.label}
                <input id={this.props.id} className={this.props.className} type="text" value={this.props.value} onChange={this.updateState}/>
                </label> */}
            </legend>
        );   
    // }      
}
// const mapStateToProps = (state) => {
//     return {
//         id: state.id,
//         label: state.label,
//         className: state.className,
//         value: state.value,
//         updateState: state.updateState
//     };
// };
  
export const FirstName = Input;
export const LastName = Input;
export const MiddleName = Input;
export const AddressLine1 = Input;
export const AddressLine2 = Input;
export const City = Input;
export const State = Input;
export const ZipCode = Input;
export const Phone1 = Input;
export const Phone2 = Input;
export const Phone3 = Input;
export const Phone4 = Input;