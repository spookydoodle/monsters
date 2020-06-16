import React, { useState, useEffect } from 'react';
import { useStyles } from '../styles/main';
import monstersService from '../services/monsters'
import { LinearBuffer } from '../components/Loading'
import { MonsterCard } from '../components/Card'
import { Container, Grid, CardMedia } from '@material-ui/core';
import { IconRobot } from '../components/Icons';

interface Monster {
    title: string,
    src: string,
}

const Monsters = () => {
    const classes = useStyles();
    const [monsters, setMonsters] = useState([]);

    const getMonsters = async () => {
        let res = await monstersService.getGoogleScrape('furry+monster');
        // let res = await monstersService.getGoogleHTML('furry+monster');
        // let res = await monstersService.getGoogleAPI('furry+monster');
        console.log(res)
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
                        // justify="center"
                        alignItems="stretch"
                        spacing={2}
                    >
                        {monsters.map((monster: Monster, index: Number) =>
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={`g2-${index}`}>
                                <MonsterCard
                                    key={parseInt(index.toString())}
                                    user={"Alpha"}
                                    object={{_id: "1234"}}
                                    model="Monster"
                                    comments={[]}
                                    likes={[]}
                                    users={new Map()}
                                    title="Monster"
                                    subtitle={`No${parseInt(index.toString()) + 1}`}
                                    body={monster.title}
                                    mediaMiddle={
                                        <CardMedia className={classes.height250} image={monster.src} />
                                    }
                                    menuItems={[{ name: 'Share monster' }]}
                                />
                            </Grid>
                        )}
                    </Grid>
                </Container>
            )
    );
}

export default Monsters;