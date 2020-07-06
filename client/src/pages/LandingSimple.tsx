import React, { Suspense, lazy } from 'react';
import { withPush } from '../utils/routingDecorators';
import { useStyles } from '../styles/main';
import ThemeWrapper from '../components/layouts/ThemeWrapper';
import { LinearBuffer } from '../components/Loading';
// import Header1 from '../components/landings/Header1';
import { ModeType, UserType } from '../logic/types';
import { PATHS } from '../constants/data';
const HeaderSimple = lazy(() => import('../components/landings/HeaderSimple'));

interface Props {
    user: UserType,
    mode: ModeType,
    setDarkMode: any,
    push: string,
}

const LandingSimple = ({ user, mode, setDarkMode, push }: Props) => {
    const classes = useStyles();
    const { home } = PATHS;

    return (
        <Suspense fallback={<LinearBuffer />}>
            <ThemeWrapper mode={mode}>
                <HeaderSimple
                    user={user}
                    mode={mode}
                    setDarkMode={setDarkMode}
                    title="Awesome landing page"
                    subtitle="Start of the coolest project"
                    button={{ name: "Get started", path: home }}
                />
            </ThemeWrapper>
        </Suspense>
    );
}


export default withPush(LandingSimple);