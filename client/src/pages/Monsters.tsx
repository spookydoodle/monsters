import React, { useState, useEffect } from 'react';
import { useStyles } from '../styles/main';
import monstersService from '../services/monsters'
import { LinearBuffer } from '../components/Loading'
import { MonsterCard } from '../components/Card'
import { Container, Grid, CardMedia } from '@material-ui/core';
import Layout from '../components/navigation/Layout';

interface Props {
    query: string,
    data: Array<{ title: string, src: string }>,
    changeQuery: any,
}

interface Monster {
    title: string,
    src: string,
}

const Monsters = ({ query, data, changeQuery }: Props) => {
    const classes = useStyles();

    // TODO: Handle timeout
    return (
        <Layout changeQuery={changeQuery}>
            {!data || data.length === 0 ?
                <LinearBuffer />
                : (
                    // <Container maxWidth="lg">
                        <Grid
                            container
                            direction="row"
                            // justify="center"
                            alignItems="stretch"
                            spacing={2}
                        >
                            {data.map((monster: Monster, index: Number) =>
                                <Grid item xs={12} sm={6} md={3} lg={2} key={`g2-${index}`}>
                                    <MonsterCard
                                        key={parseInt(index.toString())}
                                        user={"Alpha"}
                                        object={{ _id: "1234" }}
                                        model="Monster"
                                        comments={[]}
                                        likes={[]}
                                        users={new Map()}
                                        title={monster.title}
                                        subtitle={`No${parseInt(index.toString()) + 1}`}
                                        body={monster.title}
                                        mediaTop={<React.Fragment>
                                            <CardMedia className={classes.height200} image={monster.src}>
                                                {/* <IconButton style={{float: "right"}} aria-label="add to favorites">
                                                <FavoriteBorderOutlinedIcon />
                                            </IconButton> */}
                                            </CardMedia>
                                        </React.Fragment>}
                                        menuItems={[{ name: 'Share monster' }]}
                                    />
                                </Grid>
                            )}
                        </Grid>
                    // </Container>
                )}
        </Layout>
    );
}

export default Monsters;