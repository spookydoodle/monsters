import React from 'react';
import { useLocation } from "react-router-dom";
import clsx from 'clsx';
import { useStyles } from '../../styles/main';
import { Box, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HideOnScroll from './HideOnScroll';
import { AuthButtonsHorizontal } from './AuthButtons';
import { ModeType, UserType } from '../../logic/types';
import { PATHS } from '../../constants/data';

const { landing, home, login, logout, register } = PATHS;

interface Props {
    user: UserType,
    name: string,
    mode: ModeType,
    setDarkMode: any,
    open: boolean,
    handleDrawerOpen: any,
    handleDrawerClose: any,
}


const NavBar = ({ user, name, mode, setDarkMode, open, handleDrawerOpen, handleDrawerClose }: Props) => {
    const classes = useStyles();
    const location = useLocation();
    const path = location.pathname; 

    return (
        <HideOnScroll>
            <AppBar
                color="primary"
                // position="absolute"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={classes.toolbar}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            {name}
                        </Typography>

                        {/* Show auth buttons only on other pages than authentication or home (includes those buttons on the jumbotron) */}
                        {![landing, home, login, logout, register].includes(path) ? <AuthButtonsHorizontal style={{ marginLeft: "auto" }} user={user} /> : undefined}
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}

export default NavBar;