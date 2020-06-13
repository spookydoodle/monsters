import React, { useState, useEffect } from 'react';
import { useStyles } from '../styles/main';
import monstersService from '../services/monsters'
import { LinearBuffer } from '../components/Loading'
import { MonsterCard } from '../components/Card'
import { Container, Grid, CardMedia } from '@material-ui/core';

interface Monster {
    title: string,
    src: string,
}

const Monsters = () => {
    const classes = useStyles();
    const [monsters, setMonsters] = useState([]);

    const getMonsters = async () => {
        let res = await monstersService.get1('furry+monster');
        setMonsters(res);
    }

    useEffect(() => {
        if (monsters.length === 0) {
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
                        {monsters.map((monster: Monster, index: Number) =>
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={`g2-${index}`}>
                                <MonsterCard
                                    key={parseInt(index.toString())}
                                    // user={user}
                                    // object={post}
                                    // model="Monster"
                                    user={"Alpha"}
                                    object={new Object()}
                                    model="Monster"
                                    comments={[]}
                                    likes={[]}
                                    // users={users}
                                    users={new Map()}
                                    title="Monster"
                                    subtitle={`No${parseInt(index.toString()) + 1}`}
                                    body={monster.title}
                                    // TODO: find out what type <CardMedia> is
                                    // mediaMiddle={
                                    //     <CardMedia className={classes.height250} image={monster.src} />
                                    //     // <img src={monster.src} />
                                    // }
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