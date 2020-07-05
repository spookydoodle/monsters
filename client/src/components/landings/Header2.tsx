import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/landing.css';
// import Container from '@material-ui/core/Container';
import { Button, Typography } from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { PATHS } from '../../constants/data';
import { LandingType } from '../../logic/types';
const { home } = PATHS;

// TODO: move to components/landings and migrate styles from css file to makeStyles
const Header2 = ({ user, mode, setDarkMode, title, subtitle, button }: LandingType) => (
    <>
        <div className="fade-in">
            <div className="landing-header">
                <Typography variant="h4">
                    {title}
                </Typography>

                <Typography className="offset" variant="h5">
                    {/* {subtitle} */}
                    noun | UK <VolumeUpIcon />
                    /ˈmɒn.stər/ | US <VolumeUpIcon /> /ˈmɑːn.stɚ/
                </Typography>

                <Link to={button.path}>
                    <Button variant="outlined" size="large" color="inherit" style={{ margin: "1em", fontWeight: "bold" }} className="btn-slideshow">
                        {button.name}
                    </Button>
                </Link>
            </div>
        </div>
        <ul className="slideshow">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </>
);

export default Header2;