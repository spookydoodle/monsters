import React from 'react';
import { guestPage } from '../utils/authenticatedPage';
import { withPush } from '../utils/routingDecorators';
import { useStyles } from '../styles/main';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { ModeType, UserType } from '../logic/types';

interface Props {
    user: UserType,
    mode: ModeType,
    setDarkMode: any,
    push: string,
}

const Animations = ({ user, mode, setDarkMode, push }: Props) => {
    const classes = useStyles();

    return (
        <Grid 
            container 
            justify="center"
            alignItems="center"
            className={classes.header}
        >
            <Grid item>
                <Box className={`${classes.headerLightning} ${classes.popIn}`}>
                    ⚡
                </Box>

                <Typography className={`${classes.headerTitle} ${classes.popIn}`} variant="h2">
                    Awesome landing page
                </Typography>

                <Typography className={`${classes.headerSubtitle} ${classes.popIn}`} variant="h6" gutterBottom>
                    Start of the project
                </Typography>
                
                <Button className={`${classes.headerButton} ${classes.popIn}`} variant="outlined" size="large" color="inherit" style={{ margin: "1em" }}>
                    Get started
                </Button>
            </Grid>
        </Grid>
    );
}


export default guestPage(withPush(Animations));