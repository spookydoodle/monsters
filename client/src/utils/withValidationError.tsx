import React from 'react';
import { ValidationErrorType } from '../logic/types';



// // Wrapp a (Grid) Field component with `error`and 'touched' prop
// // TODO:
// const withValidationError = (wrappedComponent: any) => (props: ValidationErrorType) => {
//     const { error, touched } = props;
//     // TODO
//     return wrappedComponent({ ...props, error, touched });
// };

// export default withValidationError;
const getValue = (obj: object, name: string) => {
    for (const [key, value] of Object.entries(obj || {})) {
        if(key === name) {
            return value;
        }
    }
}


const withValidationError = (wrappedComponent: any, errors: object, touched: object) => (props: any) => {
    const { name } = props
    const error = getValue(errors, name)
    const touch = getValue(touched, name)
    
    return wrappedComponent({ ...props, error, touch });
};

export default withValidationError;