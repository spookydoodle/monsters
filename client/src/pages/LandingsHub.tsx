import React from 'react';
import { createTheme, } from '../styles/themes';
import { useStyles } from '../styles/landings';
import { Link } from 'react-router-dom';
import { withPush } from '../utils/routingDecorators';
import { Grid, Typography, Hidden } from '@material-ui/core';
import { ModeType, UserType } from '../logic/types';
import { PATHS } from '../constants/data';

interface Props {
    user: UserType,
    mode: ModeType,
    setDarkMode: any,
    push: string,
}

const LandingsHub = ({ user, mode, setDarkMode, push }: Props) => {
    const classes = useStyles();
    // TODO: fix classes to receive custom theme
    const theme = createTheme(mode);
    const { home, landingFrame, landingSimple, landingSlideShow, landingHover } = PATHS;
    const items = [
        {
            name: "Monster Slideshow",
            path: landingSlideShow,
        },
        {
            name: "Space Frame",
            path: landingFrame,
        },
        {
            name: "Simple Plants",
            path: landingSimple,
        },
        {
            name: "Animation Tricks",
            path: landingHover,
        },
    ];

    return (
        <Grid container justify="center" alignItems="flex-start" className={classes.hub}>
            <Grid item xs={12} className={classes.hubHeader}>
                <Link to={home}>
                    <Typography variant="h3" component="span" className={`${classes.hubTitle} ${classes.hubTitleButton}`}>
                        {`<<`}
                    </Typography>
                </Link>

                <Hidden only="xs">
                    <Typography variant="h3" component="span" className={classes.hubTitle}>
                        Landings
                </Typography>
                </Hidden>
            </Grid>

            <Grid item xs={12} sm={9} md={6} lg={4} xl={3} className={classes.hubList}>
                {items.map(item => (
                    <Link to={item.path}>
                        <Typography variant="h5" className={classes.hubListItem}>
                            {item.name}
                        </Typography>
                    </Link>
                ))}
            </Grid>
        </Grid>
    );
}


export default withPush(LandingsHub);