import React from 'react';
import Layout from '../components/navigation/Layout';
import AuthForm from '../components/forms/AuthForm';
import authService from '../services/authService';
import usersService from '../services/usersService';
// import { interceptPage } from '../components/interceptPage';
// import withShowError from '../components/withShowError';
import { UserType } from '../typings/types';

/* 
    Users can log in using either their e-mail (passport 'username') or their publicName
    If non-email address value entered, match with publicName and replace 'email' value 
    by matched user's username (=email) 
 */
interface Props {
    next?: any,
    onLoginSuccess: any,
    // user: UserType,
}

const Login = ({ next, onLoginSuccess }: Props) => {
    // const { addNotification } = notificationsProps;
    return (
        <AuthForm
            register={false}
            initialValues={{
                email: '',
                password: '',
            }
            }
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
                        // next();
                    })
                    // .catch(showError);
            }}
        />
    );
};

// export default interceptPage(withShowError(Login));
export default Login;
