import React, { Suspense, lazy } from 'react';
import { withPush } from '../utils/routingDecorators';
import { useStyles } from '../styles/landings';
import ThemeWrapper from '../components/layouts/ThemeWrapper';
import { LinearBuffer } from '../components/Loading';
// import Header1 from '../components/landings/Header1';
import { ModeType, UserType } from '../logic/types';
import { PATHS } from '../constants/data';
import HeaderHover from '../components/landings/HeaderHover';
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
                <HeaderHover
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