import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing.css';
// import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

const Landing = (props: any) => (
    <React.Fragment>
        <div className="fade-in">
            <div className="landing-header">
                <Typography variant="h4">A large, ugly, and frightening imaginary creature</Typography>
                <Typography className="offset" variant="h5">
                    noun | UK <VolumeUpIcon />
                    /ˈmɒn.stər/ | US <VolumeUpIcon /> /ˈmɑːn.stɚ/
                </Typography>
                <Link to={'/monsters/monsters'} className="btn-slideshow">
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
    </React.Fragment>
);

export default Landing;

