export const INPUT_VALID_CLASS = 'input-valid';
export const INPUT_ERROR_CLASS = 'input-error';

export const CLASS_VALID_INPUT = { valid: INPUT_VALID_CLASS, error: INPUT_ERROR_CLASS};
export const DEFAULT_INPUT_FIRSTNAME = {id: 'firstName', label:  'First Name', isRequired: false};
export const DEFAULT_INPUT_LASTNAME = {id: 'lastName', label:  'Last Name', isRequired: true};
export const DEFAULT_INPUT_MIDDLENAME = {id: 'middleName', label:  'Middle Name', isRequired: false};
export const DEFAULT_INPUT_PHONE = {id: 'phone', label:  'Phone', isRequired: true};

/* ----------------------------------
    SetUp Input 
   ---------------------------------- */

export const setClassName = (isRequired) => {
    return (isRequired) ? CLASS_VALID_INPUT.valid : CLASS_VALID_INPUT.error;
}

export const setDefaultInput = (id, label, isRequired) => {
     return {
        id: id,
        label: label,
        value: '',
        isRequired: isRequired,
        invalidMessage: [],
        isValid: !isRequired,
        className: setClassName(isRequired)
    }
 }
