import React, { Suspense, lazy } from 'react';
import { withPush } from '../utils/routingDecorators';
import { useStyles } from '../styles/main';
import ThemeWrapper from '../components/layouts/ThemeWrapper';
import { LinearBuffer } from '../components/Loading';
// import Header1 from '../components/landings/Header1';
import { ModeType, UserType } from '../logic/types';
import { PATHS } from '../constants/data';
import Parallax from '../components/animated/Parallax';
const HeaderFrame = lazy(() => import('../components/landings/HeaderFrame'));
const { landingsHub } = PATHS;

interface Props {
    user: UserType,
    mode: ModeType,
    setDarkMode: any,
    push: string,
}

const LandingFrame = ({ user, mode, setDarkMode, push }: Props) => {
    const classes = useStyles();

    return (
        <Suspense fallback={<LinearBuffer />}>
            <ThemeWrapper mode={mode}>
                <HeaderFrame
                    user={user}
                    mode={mode}
                    setDarkMode={setDarkMode}
                    title="Starship Enterprise"
                    subtitle="is our destiny"
                    button={{ name: "Explore", path: landingsHub }}
                />
            </ThemeWrapper>
        </Suspense>
    );
}


export default withPush(LandingFrame);