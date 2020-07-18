import React from 'react';
import { useStyles } from '../../styles/main';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Box, Grid, Button, Typography, Hidden, Grow } from '@material-ui/core';
import { JumbotronType } from '../../logic/types';
import jumbotronLight from '../../img/landing/JumbotronLight.png';
import arrow from '../../img/downarrow.png';
import { PATHS } from '../../constants/data';
const { main } = PATHS;


const Jumbotron = ({
    img = jumbotronLight,
    title = "Hello",
    subtitle = "Welcome",
    actions = [],
}: JumbotronType) => {
    const classes = useStyles();

    return (
        <>
            {/* Background image */}
            <div className={classes.jumbotronImg} style={{ backgroundImage: `url(${img})` }} />

            {/* Bottom blur effect */}
            <HashLink to="#main-content" smooth={true}>
                <Box className={classes.bottomNav} />
            </HashLink>

            {/* Main content */}
            <Grow timeout={2000} in={true}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.jumbotronContent}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        container
                        alignItems="center"
                        direction="column"
                    >
                        <Typography variant="h2">
                            {title}
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            {subtitle}
                        </Typography>

                        <Grid item container justify="center">
                            {actions && actions.map((action, i) =>
                                <Grid item key={`item-${i}`}>
                                    <Link to={`${action.path}?next=${main}`}>
                                        <Button key={`button-${i}`} style={{ margin: "0.5em" }} variant="contained" color="primary" >
                                            {action.name}
                                        </Button>
                                    </Link>
                                </Grid>)}
                        </Grid>
                    </Grid>

                    <Hidden smDown>
                        <Grid item md={6}>

                        </Grid>
                    </Hidden>

                </Grid>
            </Grow>
        </>
    );
}

export default Jumbotron;