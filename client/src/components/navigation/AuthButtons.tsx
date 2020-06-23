import React from 'react';
import { useStyles } from '../../styles/main';
import { Link } from 'react-router-dom';
import { Box, Button, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { UserType } from '../../typings/types';
import { PATHS } from '../../constants/data';

const { landing, home, login, logout, register } = PATHS;

const getText = (user: UserType) => {
    return {
        logout: !user ? 'Show your face' : 'Exit the planet',
        login: !user ? 'Join the other side' : `Hey there, ${user.publicName}!`,
    };
};

interface Props {
    user: UserType,
    style?: object,
}

export const AuthButtonsHorizontal = ({ user, style }: Props) => {
    let loginButton = (
        <Button color="secondary" href={!user ? '/login' : undefined}>
            {getText(user).login}
        </Button>
    );

    let signUpButton = (
        <Button variant="outlined" color="secondary" href={!user ? '/register' : '/logout'}>
            {getText(user).logout}
        </Button>
    );

    return (
        <Box style={style}>
            {loginButton}
            {signUpButton}
        </Box>
    );
};

export const AuthButtonsVertical = ({ user, style }: Props) => {
    const classes = useStyles();

    let loginButton = (
        <ListItem component={Link} to={!user ? login : landing}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={getText(user).login} />
        </ListItem>
    );

    let signUpButton = (
        <ListItem component={Link} to={!user ? register : logout}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={getText(user).logout} />
        </ListItem>
    );

    return (
        <List style={style} >
            {loginButton}
            {signUpButton}
        </List>
    );
};
