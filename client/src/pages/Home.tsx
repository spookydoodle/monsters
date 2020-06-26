import React from 'react';
import { guestPage } from '../utils/authenticatedPage';
import { withPush } from '../utils/routingDecorators';
import { useStyles } from '../styles/main';
import Layout from '../components/layouts/Main';
import FeedLayout from '../components/layouts/Feed';
import Gallery from '../components/Gallery';
import ContentsList from '../components/navigation/ContentsList';
import { DataItemType, ModeType, UserType } from '../logic/types';
import { PATHS } from '../constants/data';
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
    const { login, register } = PATHS;

    return (
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
                onClick: undefined,
            }}
            mode={mode}
            setDarkMode={setDarkMode}
            changeQuery={changeQuery}
        >
            <FeedLayout posts={[
                {
                    id: "intro",
                    title: "Blablabla this page is nonsense, just for show",
                    subtitle: "kxkaro, 21/06/2020 15:25",
                    body: `Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.
                    
                    Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
                    
                    Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.`,                    
                },
                {
                    id: "gallery",
                    title: "See our collection of monsters",
                    subtitle: "kxkaro, 21/06/2020 14:25",
                    body: `Data collected from the whole world wide web.`,
                    content: <Gallery user={user} changeQuery={changeQuery} data={data} mode={mode} />,
                    additional: <ContentsList items={[{ name: "Dungeons", path: "#" }, { name: "Dragons", path: "#" }]} />            
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
    );
}


export default guestPage(withPush(Home));