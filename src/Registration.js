import { PUBLIC_ACTIONS } from 'utils/constants'
import * as fromActions from '../../actions/registration/contact.actions'
 
const initState = {
  fullName: "",
  primaryEmail: "",
  primaryPhone: "",
  mdContact: "",
  companyName:"",
  emailSent: false,
  isVisible:false,
  errorVisibleMessage:"",
  errorClass:"",
  spanClass:"",
  errors: []   
}
 
export default (state = initState, action) => {
 
  switch (action.type) {
    case PUBLIC_ACTIONS.INITIALIZE_CONTACT:
      console.log(PUBLIC_ACTIONS.INITIALIZE_CONTACT + " ACTION", action.errors);
      return {
        ...state,
        errors: action.errors,
        isAgreeAccepted: true
      }
    case PUBLIC_ACTIONS.UPDATE_CONTACT_ERRORS:
      const errors = action.errors;
      return {
        ...state,
        errors: action.errors,
      }
    case PUBLIC_ACTIONS.SUBMIT_CONTACT_SUCCESS:
    return {
      ...initState,
      emailSent : true,
      isVisible:true,
      errorClass:"-oneX-notification__icon -oneX-notification--confirmation",
      spanClass:"-oneX-icon--confirmation-inverse",
      errorVisibleMessage:"Your message was submitted.  Our team will review your message and contact you soon."
    }
    case PUBLIC_ACTIONS.SUBMIT_CONTACT_FAILURE:
    return {
      ...state,
      emailSent : true,
      isVisible:true,
      errorClass:"-oneX-notification__icon -oneX-notification--error",
      spanClass:"-oneX-icon--error-inverse",
      errorVisibleMessage:"Your info could not be sent",
    }
    case PUBLIC_ACTIONS.UPDATE_CONTACT:
      const updatedField = action.updatedField;
      return {
        ...state,
        [updatedField.name]:updatedField.value,
      }
    case fromActions.CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        isVisible: false
      }
    default:
      return state;
  }
}