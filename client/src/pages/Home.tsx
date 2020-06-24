import React from 'react';
import { guestPage } from '../utils/authenticatedPage';
import { withPush } from '../utils/routingDecorators';
import { useStyles } from '../styles/main';
import { Container, Grid, CardMedia, Typography, Divider, Link, List, ListItem, ListItemText, Hidden } from '@material-ui/core';
import { LinearBuffer } from '../components/Loading'
import { MonsterCard } from '../components/Card'
import Layout from '../components/navigation/Layout';
import { DataItemType, ModeType, MonsterType, UserType } from '../logic/types';
import jumbotronDark from '../img/JumbotronDark.png';
import jumbotronLight from '../img/JumbotronLight.png';

interface Props {
    user: UserType,
    query: string,
    data: Array<DataItemType>
    mode: ModeType,
    setDarkMode: any,
    changeQuery: any,
    push: string,
}

const Home = ({ user, query, data, mode, setDarkMode, changeQuery, push }: Props) => {
    const classes = useStyles();
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    // TODO: Handle timeout
    return (
        <Layout
            user={user}
            jumbotron={{
                img: mode === "dark" ? jumbotronDark : jumbotronLight,
                title: "Hello, stranger",
                subtitle: "Welcome to our world",
                actions: [
                    { name: "Join the other side", path: "/register" },
                    { name: "Show your true face", path: "/login" },
                ],
                onClick: undefined,
            }}
            mode={mode}
            setDarkMode={setDarkMode}
            changeQuery={changeQuery}
        >
            {data && data.length > 0 ? (
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        {/* Left area - navigation menu */}
                        <Hidden mdDown>
                            <Grid item xs={2}>
                                <Divider style={{ marginTop: "2em", marginBottom: "2em" }} />
                                <List>
                                    {[
                                        {name: "Intro", path: "#intro"},
                                        {name: "Gallery", path: "#gallery"},
                                        {name: "Outtro", path: "#outro"}
                                    ].map((item, i) => 
                                        <ListItem key={i} className={classes.pageNavList} button component={Link} href={item.path}>
                                            <ListItemText primary={item.name} />
                                        </ListItem>
                                    )}
                                </List>
                            </Grid>
                        </Hidden>
                        {/* Middle area - main content */}
                        <Grid container item sm={12} md={10} lg={8} spacing={2}>

                            <Grid item id="intro" xs={12}>
                                <Divider style={{ marginTop: "2em", marginBottom: "2em" }} />

                                <Typography variant="h3">
                                    Blablabla this page is nonsense, just for show
                            </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    kxkaro, 21/06/2020 15:25
                            </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.
                                <br /><br />
                                Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
                                <br /><br />
                                Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
                            </Typography>
                            </Grid>

                            <Grid item id="gallery" xs={12}>
                                <Divider style={{ marginTop: "2em", marginBottom: "2em" }} />

                                <Typography variant="h3">
                                    See our collection of monsters
                            </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Data collected from the whole world wide web
                            </Typography>

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
                                        <Grid item xs={12} sm={4} md={3} lg={3} key={`g2-${index}`}>
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
                            </Grid>

                            <Grid item id="outro" xs={12}>
                                <Divider style={{ marginTop: "2em", marginBottom: "2em" }} />

                                <Typography variant="h3">
                                    Hope you enjoyed it, bye!
                            </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    kxkaro, 21/06/2020 16:25
                            </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Pieces of Eight bowsprit Sink me Gold Road sheet keelhaul grog blossom chandler fore crack Jennys tea cup. Crimp hang the jib gibbet parley grog blossom loot rutters jib scuppers spike. Black jack scallywag bucko Jack Ketch run a shot across the bow fore port pillage squiffy blow the man down.
                                <br /><br />
                                Chantey bilge water bilge me main sheet red ensign Jolly Roger take a caulk jib topmast. Doubloon Sink me bilge rat deadlights fire in the hole gangplank hardtack dance the hempen jig keel scuppers. Loot ye jolly boat mizzen yawl black jack square-rigged yardarm bounty Jack Ketch.
                                <br /><br />
                                Interloper scourge of the seven seas scuttle take a caulk Pieces of Eight plunder aft pirate snow avast. Hang the jib pillage rigging jury mast fluke hornswaggle Buccaneer nipperkin cutlass tackle. Lookout Jolly Roger ahoy parrel salmagundi Nelsons folly nipper holystone lugger wherry.
                            </Typography>
                            </Grid>

                        </Grid>

                        {/* Right area - another navigation menu */}
                        <Hidden smDown>
                            <Grid item xs={2}>
                                <Divider style={{ marginTop: "2em", marginBottom: "2em" }} />
                                <List>
                                    {[
                                        {name: "Intro", path: "#intro"},
                                        {name: "Gallery", path: "#gallery"},
                                        {name: "Outtro", path: "#outro"}
                                    ].map((item, i) => 
                                        <ListItem key={i} className={classes.pageNavList} button component={Link} href={item.path}>
                                            <ListItemText primary={item.name} />
                                        </ListItem>
                                    )}
                                </List>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Container>
            ) : (
                    <LinearBuffer />
                )}
        </Layout>
    );
}

// export default guestPage(withPush(Home));
export default guestPage(withPush(Home));