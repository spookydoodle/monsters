import React from 'react';
import { useStyles } from '../styles/main';
import { Typography } from '@material-ui/core';
import { PostType } from '../logic/types';
// import { LinearBuffer } from './Loading';

const Post = ({ title, subtitle, body, content }: PostType) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h4">
                {title}
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
                {subtitle}
            </Typography>

            <Typography variant="body1" gutterBottom>
                {body}
            </Typography>
            
                {content}
        </React.Fragment>
    );
}

export default Post;