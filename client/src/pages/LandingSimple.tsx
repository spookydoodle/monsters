import React, { Suspense, lazy } from 'react';
import { withPush } from '../utils/routingDecorators';
import { useStyles } from '../styles/landings';
import ThemeWrapper from '../components/layouts/ThemeWrapper';
import { LinearBuffer } from '../components/Loading';
// import Header1 from '../components/landings/Header1';
import { ModeType, UserType } from '../logic/types';
import { PATHS } from '../constants/data';
import ContentSimple from '../components/animated/ContentSimple';
const HeaderSimple = lazy(() => import('../components/landings/HeaderSimple'));
const { landingsHub } = PATHS;


interface Props {
    user: UserType,
    mode: ModeType,
    setDarkMode: any,
    push: string,
}

const LandingSimple = ({ user, mode, setDarkMode, push }: Props) => {
    const classes = useStyles();

    return (
        <Suspense fallback={<LinearBuffer />}>
            <ThemeWrapper mode={mode}>
                <HeaderSimple
                    user={user}
                    mode={mode}
                    setDarkMode={setDarkMode}
                    title="Awesome landing page"
                    subtitle="Start of the coolest project"
                    button={{ name: "Get started", path: landingsHub }}
                />
                <ContentSimple
                    user={user}
                    mode={mode}
                    setDarkMode={setDarkMode}
                    title="Awesome landing page"
                    subtitle="Start of the coolest project"
                    button={{ name: "Get started", path: landingsHub }}
                />
            </ThemeWrapper>
        </Suspense>
    );
}


export default withPush(LandingSimple);