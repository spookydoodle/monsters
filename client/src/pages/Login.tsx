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
    onLoginSuccess: any,
    showError: any,
    // user: UserType,
}

const Login = ({ user, mode, setDarkMode, changeQuery, next, onLoginSuccess, showError }: Props) => {
    const [error, setError] = useState('');

    const setErrorMessage = (err: { message: string, request: any }) => {
        console.log(Object.values(err))
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
                error={error}
                register={false}
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={async ({ password, email }: { password: string, email: string }) => {
                    if (email.indexOf('@') === -1)
                        await usersService.getAll().then((users: Array<{ publicName: string, password: string, username: string }>) => {
                            let matchedUsers = users.filter(user => user.publicName === email);
                            email = matchedUsers.length > 0 ? matchedUsers[0].username : email;
                        });

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
