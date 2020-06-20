import React from 'react';
import { useStyles } from '../styles/main';
import { LinearBuffer } from '../components/Loading'
import { MonsterCard } from '../components/Card'
import { Container, Grid, CardMedia } from '@material-ui/core';
import Layout from '../components/navigation/Layout';
import { ModeType, MonsterType } from '../typings/types';

interface Props {
    query: string,
    data: Array<{ title: string, src: string }>
    mode: ModeType,
    setDarkMode: any,
    changeQuery: any,
}

const Monsters = ({ query, data, mode, setDarkMode, changeQuery }: Props) => {
    const classes = useStyles();

    // TODO: Handle timeout
    return (
        <Layout
            title="Hello, stranger"
            subtitle="Welcome to our world"
            action={{ name: "Join the other side", path: "/register" }}
            mode={mode}
            setDarkMode={setDarkMode}
            changeQuery={changeQuery}
        >
            {data && data.length > 0 ? (
                // <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    // justify="center"
                    alignItems="stretch"
                    spacing={2}
                >
                    {data.map((monster: MonsterType, index: Number) =>
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
                                mediaTop={<CardMedia className={classes.cardMedia} image={monster.src}>
                                    {/* <IconButton style={{float: "right"}} aria-label="add to favorites">
                                                <FavoriteBorderOutlinedIcon />
                                            </IconButton> */}
                                </CardMedia>}
                                menuItems={[{ name: 'Share monster' }]}
                            />
                        </Grid>
                    )}
                </Grid>
                // </Container>
            ) : (
                    <LinearBuffer />
                )}
        </Layout>
    );
}

export default Monsters;