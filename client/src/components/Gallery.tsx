import React from 'react';
import { useStyles } from '../styles/main';
import { Grid, CardMedia, Tabs, Tab } from '@material-ui/core';
import { LinearBuffer } from '../components/Loading'
import { MonsterCard } from '../components/Card'
import { ModeType, MonsterType, UserType } from '../logic/types';
import { CATEGORIES } from '../constants/data';
// import jumbotronDark from '../img/JumbotronDark.png';
// import jumbotronLight from '../img/JumbotronLight.png';

interface Props {
    user: UserType,
    data: Array<{ title: string, src: string }>
    mode: ModeType,
    changeQuery: any,
}

const Gallery = ({ user, data, mode, changeQuery }: Props) => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    // TODO: Handle timeout
    return (
        data && data.length > 0 ? (
            <React.Fragment>
                <Tabs
                    style={{ marginTop: "1.5em" }}
                    value={value}
                    variant="scrollable"
                    indicatorColor="primary"
                    scrollButtons="auto"
                    textColor={mode === "light" ? "primary" : undefined}
                    onChange={handleChange}
                // aria-label="disabled tabs example"
                >
                    <Tab label="Random" />
                    {CATEGORIES.map((text, index) => (
                        <Tab key={index} label={text} onClick={changeQuery(text)} />
                    ))}
                </Tabs>

                <Grid
                    container
                    item
                    direction="row"
                    // justify="center"
                    alignItems="stretch"
                    xs={12}
                    spacing={2}
                    style={{ marginTop: "1em" }}
                >
                    {data.map((monster: MonsterType, index: Number) =>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={`g2-${index}`}>
                            <MonsterCard
                                key={parseInt(index.toString())}
                                user={user}
                                mode={mode}
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
            </React.Fragment>
        ) : (
                <LinearBuffer />
            )
    );
}

export default Gallery;