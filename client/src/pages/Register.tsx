import React, { useState } from 'react';
import Layout from '../components/navigation/Layout';
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
    changeQuery: any,
    next?: any,
    onSuccess: any,
}

const Register = ({ user, mode, setDarkMode, changeQuery, next, onSuccess }: Props) => {
    const [error, setError] = useState('');

    const setErrorMessage = (err: {message: string, request: any}) => {
        setError(err.request.response)
    }

    return (
        <Layout
            user={user}
            mode={mode}
            setDarkMode={setDarkMode}
            changeQuery={changeQuery}
        >
            <AuthForm
                mode={mode}
                register={true}
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                }}
                onSubmit={({ username, password, email }: { username: string, password: string, email: string }) => {
                    authService
                        .register(username, password, email)
                        .then(res => {
                            const { user } = res;
                            onSuccess(user);
                            next();
                        })
                    .catch(setErrorMessage);
                }}
                error={error}
            />
        </Layout>
    );
};

// export default interceptPage(withShowError(Register));
export default interceptPage(Register);
