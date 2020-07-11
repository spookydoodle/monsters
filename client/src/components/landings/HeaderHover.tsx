import React, { useState } from 'react';
import { useStyles } from '../../styles/main';
import { Link } from 'react-router-dom';
import { Container, Grid, Button, Typography } from '@material-ui/core';
import { ModeType, UserType } from '../../logic/types';
import arrow from '../../img/downarrow.png';
import { LandingType } from '../../logic/types';

const HeaderHover = ({ user, mode, setDarkMode, title, subtitle, button }: LandingType) => {
    const classes = useStyles();

    // This variable adds or removes a class responsible for displaying
    let [show, setShow] = useState(false)

    return (
        <Container maxWidth="md">
            <Grid container direction="column" alignItems="center" justify="center" style={{ height: "100vh" }}>
                <Typography variant="h5" gutterBottom style={{ textAlign: "center" }}>
                    Mouse cat is love, cat is life chase
                    <Link 
                        to={button.path} 
                        // title="See here to learn about what mice are" // This displays a default browser tooltip
                        onMouseEnter={() => setShow(true)}
                        onMouseOut={() => setShow(false)}
                    >
                        <span className={classes.linkUnderline}> mice {<span className={`${classes.tooltip} ${show && classes.show}`}> See here to learn about what mice are </span>} </span>
                        
                    </Link>
                    have my breakfast spaghetti yarn for plop down in the 
                    <Link  to={button.path}>
                        <span className={classes.linkUnderlineAnim}> middle </span>
                    </Link>
                    where everybody walks so i show my fluffy belly but it's a trap!
                </Typography>
            </Grid>
        </Container>
    );
}


export default HeaderHover;