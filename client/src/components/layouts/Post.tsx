import React from 'react';
import { Grid, Divider, Hidden, Typography } from '@material-ui/core';
import Post from '../Post';
import { PostLayoutType } from '../../logic/types';

/* 
    This component is used on home and main pages and is meant to display on post composed of the main content
    (text and/or media content) on the left taking most of the width, and additional related content on the right (e.g. links)
    'id' prop must be provided correctly for the table of contents to work (it uses #foo url elements)
*/

const PostLayout = ({ id, additional, ...props }: PostLayoutType) => {

    return (
        <React.Fragment>
            {/* Middle area - main content by post */}
            <Grid item id={id} xs={12} md={10}>
                <Divider style={{ marginTop: "2em", marginBottom: "2em" }} />
                <Post {...props} />
            </Grid>

            {/* Right area - Additional content by post */}
            <Hidden smDown>
                <Grid item xs={2}>
                    <Divider style={{ marginTop: "2em", marginBottom: "2em" }} />
                    
                    {additional ? (
                        <React.Fragment>
                            <Typography variant="h4" style={{ marginBottom: "0.45em" }}>
                                Cool stuff:
                            </Typography>

                            {additional}
                        </React.Fragment>
                    ) : undefined}

                </Grid>
            </Hidden>
        </React.Fragment>
    )
}

export default PostLayout;