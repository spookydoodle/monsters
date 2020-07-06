import React from 'react';
import { useStyles } from '../../styles/main';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';
import { ModeType, UserType } from '../../logic/types';
import arrow from '../../img/downarrow.png';
import { LandingType } from '../../logic/types';

const HeaderFrame = ({ user, mode, setDarkMode, title, subtitle, button }: LandingType) => {
    const classes = useStyles();

    return (
        <Box className={classes.headerFrame}>
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