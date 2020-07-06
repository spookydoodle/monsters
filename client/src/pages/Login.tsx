import React, { useState } from 'react';
import Layout from '../components/layouts/Main';
import AuthForm from '../components/forms/AuthForm';
import authService from '../services/authService';
import usersService from '../services/usersService';
import { interceptPage } from '../utils/interceptPage';
import { ModeType, UserType } from '../logic/types';

/* 
    Users can log in using either their e-mail (passport 'username') or their publicName
    If non-email address value entered, match with publicName and replace 'email' value 
    by matched user's username (=email) 
 */
interface Props {
    user: UserType,
    mode: ModeType,
    setDarkMode: any,
    next?: any,
    onLoginSuccess: any,
    showError: any,
    // user: UserType,
}

const Login = ({ user, mode, setDarkMode, next, onLoginSuccess, showError }: Props) => {
    const [error, setError] = useState('');

    const setErrorMessage = (err: any) => {
        setError(err.request.response)
    }

    return (
        <Layout
            user={user}
            mode={mode}
            setDarkMode={setDarkMode}
        >
            <AuthForm
                mode={mode}
                error={error}
                register={false}
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={async ({ password, email }: { password: string, email: string }) => {
                    authService
                        .login(password, email)
                        .then(({ user }) => {
                            onLoginSuccess(user);
                            next();
                        })
                        .catch(setErrorMessage);
                }}
            />
        </Layout>
    );
};

// export default interceptPage(withShowError(Login));
export default interceptPage(Login);
