import React from 'react';
import { guestPage } from '../utils/authenticatedPage';
import { withPush } from '../utils/routingDecorators';
import { useStyles } from '../styles/main';
import { Container } from '@material-ui/core';
import Header1 from '../components/landings/Header1';
import { ModeType, UserType } from '../logic/types';
import { PATHS } from '../constants/data';

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
        <>
            <Header1
                user={user}
                mode={mode}
                setDarkMode={setDarkMode}
                title="Awesome landing page"
                subtitle="Start of the coolest project"
                button={{ name: "Get started", path: home }}
            />
        </>
    );
}


export default guestPage(withPush(Animations));