import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing.css';
// import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { PATHS } from '../constants/data';
const { home } = PATHS;

// TODO: move to components/landings and migrate styles from css file to makeStyles
const Landing = (props: any) => (
    <>
        <div className="fade-in">
            <div className="landing-header">
                <Typography variant="h4">A large, ugly, and frightening imaginary creature</Typography>
                <Typography className="offset" variant="h5">
                    noun | UK <VolumeUpIcon />
                    /ˈmɒn.stər/ | US <VolumeUpIcon /> /ˈmɑːn.stɚ/
                </Typography>
                <Link to={home} className="btn-slideshow">
                ENTER IF YOU DARE
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

export default Landing;

