import React, { useState } from 'react';
import { useStyles } from '../../styles/landings';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@material-ui/core';
import { LandingType } from '../../logic/types';

const HeaderHover = ({ user, mode, setDarkMode, title, subtitle, button }: LandingType) => {
    const classes = useStyles();

    // This variable adds or removes a class responsible for displaying
    let [show, setShow] = useState(false)
    let [showDetails, setShowDetails] = useState(false)

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
                        <span className={classes.linkUnderline}> mice {<span className={`${classes.tooltip} ${show && classes.show}`}> This could be any component mice can think of </span>} </span>

                    </Link>
                    have my breakfast spaghetti yarn for <span placeholder="This is just a styled tooltip" className={classes.styledTooltip}>plop</span> down in the
                    <Link to={button.path}>
                        <span className={classes.linkUnderlineAnim}> middle </span>
                    </Link>
                    where everybody walks so i show my 
                    <Link to={button.path}>
                         <span placeholder=" fluffy " className={classes.linkSwipeDown}> fluffy </span> 
                    </Link>
                     belly but it's a trap!
                </Typography>
            </Grid>
        </Container>
    );
}


export default HeaderHover;