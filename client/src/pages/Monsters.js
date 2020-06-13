import React, { useState, useEffect } from 'react';
import { useStyles } from '../styles/main';
import monstersService from '../services/monsters'
import { MonsterCard } from '../components/Card'
import { Container, Grid, CardMedia } from '@material-ui/core';
import { LinearBuffer } from '../components/Loading'

const Monsters = () => {
    const classes = useStyles();
    const [monsters, setMonsters] = useState(null);

    const getMonsters = async () => {
        let res = await monstersService.get1('furry+monster');
        setMonsters(res);
    }

    useEffect(() => {
        if (!monsters) {
            getMonsters();
        }
    });

    // TODO: Handle timeout
    return (
        !monsters || monsters.length === 0 ?
            <LinearBuffer />
            : (
                <Container maxWidth="lg">
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="stretch"
                        spacing={2}
                    >
                        {monsters.map((monster, index) =>
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={`g2-${index}`}>
                                <MonsterCard
                                    key={index}
                                    // user={user}
                                    // object={post}
                                    // model="Monster"
                                    comments={[]}
                                    likes={[]}
                                    // users={users}
                                    title="Monster"
                                    subtitle={`No${index + 1}`}
                                    body={monster.title}
                                    mediaMiddle={
                                        <CardMedia className={classes.height250} image={monster.src} />
                                        // <img src={monster.data} />
                                    }
                                    menuItems={[{ name: 'Share monster' }]}
                                // updateStateData={updateStateData}
                                />
                            </Grid>
                        )}
                    </Grid>
                </Container>
            )
    );
}

export default Monsters;