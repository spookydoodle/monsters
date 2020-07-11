<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
>>>>>>> dde1bf6ef325757be65ca05f2b620acbb9203c47
import { useStyles } from '../../styles/main';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';
import { ModeType, UserType } from '../../logic/types';
import arrow from '../../img/downarrow.png';
import { LandingType } from '../../logic/types';

const HeaderFrame = ({ user, mode, setDarkMode, title, subtitle, button }: LandingType) => {
    const classes = useStyles();

<<<<<<< HEAD
    let [className, setClassName] = useState(classes.jsLoading);

    useEffect(() => {
        if( className === classes.jsLoading) {
            setClassName('');
        }
    })

    return (
        <Box className={`${classes.headerFrame} ${className}`}>
=======
    return (
        <Box className={classes.headerFrame}>
>>>>>>> dde1bf6ef325757be65ca05f2b620acbb9203c47
            <Box className={classes.headerFrameInner}>
                <Typography className={`${classes.headerFrameTitle} ${classes.fadeIn}`} variant="h1">
                    {title}
                </Typography>

                <Typography className={`${classes.headerFrameSubtitle} ${classes.fadeIn}`} variant="h1" style={{ fontWeight: "bold" }} gutterBottom>
                    {subtitle}
                </Typography>

                <Link to={button.path}>
                    <Typography className={`${classes.headerFrameButton} ${classes.fadeIn}`} variant="h2">
                        {button.name}
                    </Typography>
                </Link>
            </Box>
        </Box>
    );
}


export default HeaderFrame;