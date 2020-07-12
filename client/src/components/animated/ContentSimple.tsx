import React from 'react';
import { useStyles } from '../../styles/main';
import { Link } from 'react-router-dom';
import { Grid, Button, Typography } from '@material-ui/core';
import { ModeType, UserType } from '../../logic/types';
import arrow from '../../img/downarrow.png';
import { LandingType } from '../../logic/types';

const ContentSimple = ({ user, mode, setDarkMode, title, subtitle, button }: LandingType) => {
    const classes = useStyles();

    return (
        <Grid
            id="main-content"
            container
            justify="center"
            alignItems="center"
            style={{ minHeight: "100vh" }}
        >
            <Grid item>
                <Typography variant="h4" color="secondary">
                    Some content goes here
                </Typography>
            </Grid>
        </Grid>
    );
}


export default ContentSimple;