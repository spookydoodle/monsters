import React from 'react';
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
    return (
        <AppFormGrid title={register ? 'Register' : 'Login'} initialValues={initialValues} onSubmit={onSubmit}>
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
