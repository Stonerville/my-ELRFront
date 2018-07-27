import { SET_FIRSTNAME, SET_LASTNAME, SET_PHONE } from '../actions/actions'
import { setDefaultInput } from '../constants/Constants'

const initialState = {
    firstNameInput: setDefaultInput('firstName', 'First Name', false),
    lastNameInput: setDefaultInput('lastName', 'Last Name', true),
    middleNameInput: setDefaultInput('middleName', 'Middle Name', false),
    phoneInput: setDefaultInput('firstName', 'First Name', true)
}

export const reducer = (state = initialState, action) => {
    console.log('** reducer ** ',action);
    console.log('** state ** ',state);
    const tempState = state;
    switch (action.type) {
        case SET_FIRSTNAME:
            tempState.firstNameInput = setTempState(tempState.firstNameInput, action);
            return Object.assign({}, state, tempState)
        case SET_LASTNAME:
            tempState.lastNameInput = setTempState(tempState.lastNameInput, action);
            return Object.assign({}, state, tempState)
        case SET_PHONE:
            tempState.phoneInput = setTempState(tempState.phoneInput,action);
            return Object.assign({}, state, tempState)
        default:
             return state
   }
}

const setTempState = (input, action) => {
    input.value = action.payload;
    input.isValid = action.isValid;
    input.className = action.className;
    return input;
}