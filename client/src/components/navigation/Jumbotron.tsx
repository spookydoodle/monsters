import React from 'react';
import { useStyles } from '../../styles/main';
import { Box, Grid, Button, Typography, Hidden, Grow, Slide } from '@material-ui/core';
import { JumbotronType } from '../../typings/types';
import jumbotronLight from '../../img/JumbotronLight.png';


const Jumbotron = ({
    img = jumbotronLight,
    title = "Hello",
    subtitle = "Welcome",
    actions = [],
    onClick
}: JumbotronType) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.jumbotronImg} style={{ backgroundImage: `url(${img})` }} />

            <Grow timeout={2000} in={true}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    className={classes.jumbotronContent}
                >

                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        item
                        xs={12}
                        md={6}
                    >
                        <Typography variant="h2">
                            {title}
                        </Typography>
                        <Typography variant="h4">
                            {subtitle}
                        </Typography>
                        <Box>
                            {actions ? actions.map((action, i) => 
                            <Button key={i} style={{ margin: "15px" }} variant="contained" color="primary" href={`${action.path}?next=/monsters`} >
                                {action.name}
                            </Button>) : undefined}
                        </Box>
                    </Grid>

                    <Hidden smDown>
                        <Grid item md={5}>

                        </Grid>
                    </Hidden>

                </Grid>
            </Grow>
        </React.Fragment>
    );
}

export default Jumbotron;