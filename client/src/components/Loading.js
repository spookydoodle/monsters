import React from 'react';
import { useStyles } from '../styles/main';
import { Container, Typography, LinearProgress, CircularProgress } from '@material-ui/core';

export const Loading = () => {
    const classes = useStyles();

    return (
        <div className={classes.loading}>
            <CircularProgress color="secondary" />
        </div>
    );
};

export const Empty = () => {
    const classes = useStyles();

    return (
        <div className={classes.loading}>
            <i className="optin monster icon" style={{color: "#fff"}} href="/" />
            <Typography variant="h5" style={{color: "#fff"}}>Oops... Nothing found. Lazy, lazy...</Typography>
        </div>
    );
};


export const LinearBuffer = () => {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
  
    const progressRef = React.useRef(() => {});
    React.useEffect(() => {
      progressRef.current = () => {
        if (progress > 100) {
          setProgress(0);
          setBuffer(10);
        } else {
          const diff = Math.random() * 10;
          const diff2 = Math.random() * 10;
          setProgress(progress + diff);
          setBuffer(progress + diff + diff2);
        }
      };
    });
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        progressRef.current();
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <div style={{ width: "100%", paddingTop: "45vh"}}>
        <LinearProgress 
            variant="buffer" 
            value={progress} 
            valueBuffer={buffer} 
            color="secondary"
        />
      </div>
    );
  }