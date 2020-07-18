/* 
    This component is used on home and main pages and is meant to display the list of contents on the left,
    posts (texts and/or media content) in the middle, and additional related content on the right next to each post (e.g. links)
    'id' prop must be provided correctly for the table of contents to work (it uses #foo url elements)
*/

import React from 'react';
import { Container, Grid, Divider, Hidden, Typography } from '@material-ui/core';
import PostLayout from './Post';
import ContentsList from '../navigation/ContentsList';
import { FeedLayoutType } from '../../logic/types';

const FeedLayout = ({ posts }: FeedLayoutType) => {
    const contentsList = posts.map(post => ({ name: post.title, path: `#${post.id}` }))

    return (
        <Container  id="main-content" maxWidth="xl">
            <Grid container spacing={6}>
                {/* Left area - navigation menu for the whole page */}
                <Hidden mdDown>
                    <Grid item xs={2}>
                        <Divider style={{ marginTop: "2em", marginBottom: "2em" }} />

                        <Typography variant="h4" style={{ marginBottom: "0.45em" }}>
                            Jump to:
                        </Typography>

                        <ContentsList items={contentsList} />
                    </Grid>
                </Hidden>

                {/* Main area by post */}
                <Grid container item xs={12} lg={10} spacing={2}>
                    {posts && posts.map((post, i) =>
                        <PostLayout key={i} {...post} />)}
                </Grid>

            </Grid>
        </Container>
    );
}

export default FeedLayout;