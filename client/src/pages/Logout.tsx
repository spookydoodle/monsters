import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Layout from '../components/navigation/Layout';
import { AppFormGrid } from '../components/forms/AppForm';
import authService from '../services/authService';
// import withShowError from '../components/withShowError';
import { ModeType, UserType } from '../typings/types';

// TODO: sort this page out 

interface Props {
    user: UserType,
    mode: ModeType,
    setDarkMode: any,
    changeQuery: any,
    onSuccess: any,
}

const Logout = ({ user, mode, setDarkMode, changeQuery, onSuccess }: Props) => {
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
        return <Redirect to={'/home'} />;
    } else {
        return (
            <Layout
                user={user}
                mode={mode}
                setDarkMode={setDarkMode}
                changeQuery={changeQuery}
            >
                <AppFormGrid title="Bye, bye, monster!" initialValues={{}} onSubmit={undefined}>
                    {/* <Typography variant="h4">
                        Bye, bye, monster!
                    </Typography> */}
                </AppFormGrid>
            </Layout>
        );
    }
};

// export default withShowError(Logout);
export default Logout;
