import React, { useState } from 'react';
import EmailValidator from 'email-validator';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { AppFormGrid } from './AppForm';
import { GridField } from './GridFields';

interface Props {
    register: boolean,
    initialValues: object,
    onSubmit: any,
}

// TODO: Add checkbox for 'stay logged in' and use cookies for keeping auth
const AuthForm = ({ register, initialValues, onSubmit }: Props) => {

    const noErrorObj = { email: "", password: "", username: "" };

    const validate = (values: any) => {
        
        let errors = { ...noErrorObj };
        
        if (!values.email) {
            errors.email = "Required";
        } else if (!EmailValidator.validate(values.email)) {
            errors.email = "Invalid email address";
        }
    
        const passwordRegex = /(?=.*[0-9])/;
        if (!values.password) {
            errors.password = "Required";
        } else if (values.password.length <= 8) {
            errors.password = "Password must be 8 characters long.";
        } else if (!passwordRegex.test(values.password)) {
            errors.password = "Invalida password. Must contain one number";
        }
    
        // Disable submit if errors are appearing on at least one of the fields
        // setDisabled(Object.values(errors).some(val => val !== ""))
        // console.log(errors, noErrorObj, errors != noErrorObj, submitDisabled);
    
        return errors;
    }

    // With Yup
    const validationSchema = (values: any) => Yup.object().shape({
        email: Yup.string()
            .email()
            .required("Required"),
        password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })

    return (
        <AppFormGrid
            title={register ? 'Register' : 'Login'}
            initialValues={initialValues}
            onSubmit={onSubmit}
            // validate={validate}
            validationSchema={register ? validationSchema : undefined}
        >
            <GridField
                required
                as={TextField}
                name="email"
                id="auth-email"
                label={`${!register ? 'Username / ' : ''}E-mail`}
                xs={12}
            />

            {register ? (
                <GridField
                    required
                    as={TextField}
                    name="username"
                    id="auth-username"
                    label="Username"
                    xs={12}
                />
            ) : undefined}

            <GridField
                required
                type="password"
                as={TextField}
                name="password"
                id="auth-password"
                label="Password"
                xs={12}
            />

            

        </AppFormGrid>
    );
};

export default AuthForm;
