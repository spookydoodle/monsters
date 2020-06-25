import React from 'react';
import { useStyles } from '../../styles/main';
import { Link } from 'react-router-dom';
import { Box, Button, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { UserType } from '../../logic/types';
import { PATHS } from '../../constants/data';

const { home, login, logout, register } = PATHS;

// Set text on auth buttons dependent on whether a user is logged in or not
const getText = (user: UserType) => {
    return {
        register: !user ? 'Join the other side' : `Hey there, ${user.publicName}`,
        login: !user ? 'Show your face' : 'Exit the planet',
    };
};

interface Props {
    user: UserType,
    style?: object,
}

export const AuthButtonsHorizontal = ({ user, style }: Props) => {
    let signUpButton = (
        <Button style={{margin: "0 15px"}} color="inherit" href={!user ? register : undefined}>
            {getText(user).register}
        </Button>
    );

    let loginButton = (
        <Button variant="outlined" color="secondary" href={!user ? login : logout}>
            {getText(user).login}
        </Button>
    );

    return (
        <Box style={style}>
            {signUpButton}
            {loginButton}
        </Box>
    );
};

export const AuthButtonsVertical = ({ user, style }: Props) => {
    const classes = useStyles();

    let signUpButton = (
        <ListItem button component={!user ? Link : Typography} to={!user ? register : ''}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={getText(user).register} />
        </ListItem>
    );

    let loginButton = (
        <ListItem button component={Link} to={!user ? login : logout}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={getText(user).login} />
        </ListItem>
    );

    return (
        <List style={style} >
            {signUpButton}
            {loginButton}
        </List>
    );
}; 
