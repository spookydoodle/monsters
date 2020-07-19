import React, { Suspense, lazy } from 'react';
import '../styles/landing.css';
import ThemeWrapper from '../components/layouts/ThemeWrapper';
import { LinearBuffer } from '../components/Loading';
import { PATHS } from '../constants/data';
const HeaderSlideshow = lazy(() => import('../components/landings/HeaderSlideshow'));
const { landingsHub } = PATHS;

// TODO: move to components/landings and migrate styles from css file to makeStyles
const LandingSlideShow = ({ user, mode, setDarkmode }: any) => {
    // TODO: replace LinearBuffer with something nicer
    return (
        <Suspense fallback={<LinearBuffer />}>
            <ThemeWrapper mode={mode}>
                <HeaderSlideshow
                    user={user}
                    mode={mode}
                    setDarkMode={setDarkmode}
                    title="A large, ugly, and frightening imaginary creature"
                    subtitle="noun | UK /ˈmɒn.stər/ | US /ˈmɑːn.stɚ/"
                    button={{ name: "ENTER IF YOU DARE", path: landingsHub }}
                />
            </ThemeWrapper>
        </Suspense>
    )
};

export default LandingSlideShow;

