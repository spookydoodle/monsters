import React, { Suspense, lazy } from 'react';
import { guestPage } from '../utils/authenticatedPage';
import { withPush } from '../utils/routingDecorators';
import { useStyles } from '../styles/main';
import { Container } from '@material-ui/core';
import { LinearBuffer } from '../components/Loading';
// import Header1 from '../components/landings/Header1';
import { ModeType, UserType } from '../logic/types';
import { PATHS } from '../constants/data';
const Header1 = lazy(() => import('../components/landings/Header1'));

interface Props {
    user: UserType,
    mode: ModeType,
    setDarkMode: any,
    push: string,
}

const Animations = ({ user, mode, setDarkMode, push }: Props) => {
    const classes = useStyles();
    const { home } = PATHS;

    return (
        <Suspense fallback={<LinearBuffer />}>
            <Header1
                user={user}
                mode={mode}
                setDarkMode={setDarkMode}
                title="Awesome landing page"
                subtitle="Start of the coolest project"
                button={{ name: "Get started", path: home }}
            />
        </Suspense>
    );
}


export default guestPage(withPush(Animations));