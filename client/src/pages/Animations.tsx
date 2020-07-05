import React from 'react';
import { guestPage } from '../utils/authenticatedPage';
import { withPush } from '../utils/routingDecorators';
import { useStyles } from '../styles/main';
import { Grid } from '@material-ui/core';
import Layout from '../components/layouts/Main';
import { ModeType, UserType } from '../logic/types';
import { PATHS } from '../constants/data';
import header from '../img/header-1.jpg';

interface Props {
    user: UserType,
    mode: ModeType,
    setDarkMode: any,
    push: string,
}

const Animations = ({ user, mode, setDarkMode, push }: Props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.header}>
            
        </Grid>
    );
}


export default guestPage(withPush(Animations));