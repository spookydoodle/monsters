import React from 'react';
import { useStyles } from '../../styles/main';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
// import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import jumbotronLight from '../../img/JumbotronLight.png';
import { JumbotronType } from '../../typings/types';


const Jumbotron = ({
    img = jumbotronLight,
    title = "Hello",
    subtitle = "Welcome",
    action = { name: "Enter", path: "/" },
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
                        <Button style={{ margin: "15px" }} variant="contained" color="primary" href={action.path} >
                            {action.name}
                        </Button>
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