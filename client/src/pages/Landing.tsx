import React, { Suspense, lazy } from 'react';
import '../styles/landing.css';
import { LinearBuffer } from '../components/Loading';
import { PATHS } from '../constants/data';
const Header2 = lazy(() => import('../components/landings/Header2'));
const { home } = PATHS;

// TODO: move to components/landings and migrate styles from css file to makeStyles
const Landing = ({ user, mode, setDarkmode }: any) => {

    return <Suspense fallback={<LinearBuffer/>}>
        <Header2 
            user={user}
            mode={mode}
            setDarkMode={setDarkmode}
            title="A large, ugly, and frightening imaginary creature" 
            subtitle="noun | UK /ˈmɒn.stər/ | US /ˈmɑːn.stɚ/"
            button={{ name: "ENTER IF YOU DARE", path: home }}
        />
    </Suspense>
};

export default Landing;

