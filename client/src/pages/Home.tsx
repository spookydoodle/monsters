import React, { Suspense, lazy } from 'react';
import { guestPage } from '../utils/authenticatedPage';
import { withPush } from '../utils/routingDecorators';
import { useStyles } from '../styles/main';
import { Box } from '@material-ui/core';
import { LinearBuffer } from '../components/Loading';
import FeedLayout from '../components/layouts/Feed';
import Gallery from '../components/Gallery';
import ContentsList from '../components/navigation/ContentsList';
import ReactPlayer from 'react-player'
import { DataItemType, ModeType, UserType } from '../logic/types';
import { PATHS } from '../constants/data';
import jumbotronDark from '../img/landing/JumbotronDark.png';
import jumbotronLight from '../img/landing/JumbotronLight.png';
const Layout = lazy(() => import('../components/layouts/Main'));

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
    const { login, register } = PATHS;

    return (
        <Suspense fallback={<LinearBuffer />}>
            <Layout
                user={user}
                jumbotron={{
                    img: mode === "dark" ? jumbotronDark : jumbotronLight,
                    title: "Hello, stranger",
                    subtitle: "Welcome to our world",
                    actions: [
                        { name: "Join the other side", path: register },
                        { name: "Show your true face", path: login },
                    ],
                }}
                appBar={true}
                mode={mode}
                setDarkMode={setDarkMode}
            >
                <FeedLayout posts={[
                    {
                        id: "intro",
                        title: "This page is nonsense",
                        subtitle: "kxkaro, 21/06/2020 15:25",
                        body: `Dear stranger, welcome to my page.
                        As the title already mentions, the page does not make too much sense. Bits and pieces of everything smashed together.
                        No guidelines, no idea, no style. They say you're only as good as the worse piece in your portfolio.
                        Go to the menu and explore.`,
                    },
                    {
                        id: "winst0n",
                        title: "Meet Winst0n",
                        subtitle: "kxkaro, 18/07/2020 20:58 (time is refracted)",
                        body: `The guy up there who is staring at you... that's Winst0n. He's friendly and serves tea. 
                        He always carries a tray with tea with him. Even in space. 
                        And he always follows you. He will always follow you. 
                        Even to the fridge. 
                        Here is Winst0n wobblin' at home in his early days:`,
                        content: <Box style={{ display: "flex", justifyContent:"center", marginTop: "2em" }}>
                            <ReactPlayer controls={true} url="https://www.youtube.com/watch?v=VfB_uW782pA&t=13s" />
                        </Box>
                    },
                    {
                        id: "winst0n",
                        title: "Making of a spaceship",
                        subtitle: "kxkaro, 18/07/2020 21:08",
                        body: `It is important to deliver tea to space. We are joining forces with Elon Musk. 
                        Here is how:`,
                        content: <Box style={{ display: "flex", justifyContent:"center", marginTop: "2em" }}>
                            <ReactPlayer controls={true} url="https://www.youtube.com/watch?v=iBBIO0FnRwQ&t=6s" />
                        </Box>
                    },
                    {
                        id: "gallery",
                        title: "Our favorite monsters",
                        subtitle: "kxkaro, 21/06/2020 14:25",
                        body: `Actually, not favorite, just some random from the world wide web. But don't tell them, they'll be sad...`,
                        content: <Gallery user={user} changeQuery={changeQuery} data={data} mode={mode} />,
                        additional: <ContentsList items={[{ name: "Dungeons", path: "#" }, { name: "Dragons", path: "#" }, { name: "These links lead to nowhere", path: "#" }]} />
                    },
                    {
                        id: "outro",
                        title: "Hope you enjoyed it, bye!",
                        subtitle: "kxkaro, 21/06/2020 12:25",
                        body: `Pieces of Eight bowsprit Sink me Gold Road sheet keelhaul grog blossom chandler fore crack Jennys tea cup. Crimp hang the jib gibbet parley grog blossom loot rutters jib scuppers spike. Black jack scallywag bucko Jack Ketch run a shot across the bow fore port pillage squiffy blow the man down.
                    
                    Chantey bilge water bilge me main sheet red ensign Jolly Roger take a caulk jib topmast. Doubloon Sink me bilge rat deadlights fire in the hole gangplank hardtack dance the hempen jig keel scuppers. Loot ye jolly boat mizzen yawl black jack square-rigged yardarm bounty Jack Ketch.
                    
                    Interloper scourge of the seven seas scuttle take a caulk Pieces of Eight plunder aft pirate snow avast. Hang the jib pillage rigging jury mast fluke hornswaggle Buccaneer nipperkin cutlass tackle. Lookout Jolly Roger ahoy parrel salmagundi Nelsons folly nipper holystone lugger wherry.`,
                    }
                ]} />
            </Layout>
        </Suspense>
    );
}


export default guestPage(withPush(Home));