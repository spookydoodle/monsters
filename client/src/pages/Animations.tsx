import React from 'react';
import { guestPage } from '../utils/authenticatedPage';
import { withPush } from '../utils/routingDecorators';
import { useStyles } from '../styles/main';
import { Grid } from '@material-ui/core';
import Layout from '../components/layouts/Main';
import { DataItemType, ModeType, UserType } from '../logic/types';
import { PATHS } from '../constants/data';

interface Props {
    user: UserType,
    query: string,
    data: Array<DataItemType>
    mode: ModeType,
    setDarkMode: any,
    changeQuery: any,
    push: string,
}

const Animations = ({ user, query, data, mode, setDarkMode, changeQuery, push }: Props) => {
    const classes = useStyles();
    const { login, register } = PATHS;
    
    return (
        <Layout
            user={user}
            mode={mode}
            setDarkMode={setDarkMode}
            changeQuery={changeQuery}
        >
            <Grid container>
                
            </Grid>
        </Layout>
    );
}


export default guestPage(withPush(Animations));