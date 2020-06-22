import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../components/navigation/Layout';
import authService from '../services/authService';
// import withShowError from '../components/withShowError';
import { UserType } from '../typings/types';

interface Props {
    onSuccess: any,
    user: UserType,
}

const Logout = ({ user, onSuccess }: Props) => {
    // const { addNotification } = notificationsProps;

    const [logoutRequestDone, setLogoutRequestDone] = useState(false);

    useEffect(() => {
        if (!logoutRequestDone) {
            authService
                .logout()
                .then(() => onSuccess())
                // .catch(showError)
                .finally(() => setLogoutRequestDone(true));
        }
    });

    if (logoutRequestDone) {
        return <Redirect to={'/'} />;
    } else {
        return (
            // <Layout user={user} >
                <h1>Logging you out</h1>
            // </Layout>
        );
    }
};

// export default withShowError(Logout);
export default Logout;
