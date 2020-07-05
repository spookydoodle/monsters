import React, { useState } from 'react';
import clsx from 'clsx';
import { useStyles, createTheme } from '../../styles/main';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Jumbotron from '../navigation/Jumbotron';
import MenuDrawer from '../navigation/MenuDrawer';
import NavBar from '../navigation/NavBar';
import { DrawerType, ModeType, JumbotronType, UserType } from '../../logic/types';

// TODO: remove changeQuery from here
/*
  This component should serve as a wrapper for all pages. 
  Jumbotron and appBar are optional so the component can be use for either an option with both, with only jumbotron or only appBar.
  Drawer allows additional properties, like variant. Not specified (default) is temporary. Other option is: persistent.
*/
interface Props {
  user: UserType,
  children: React.ReactChild,
  jumbotron?: JumbotronType,
  drawer?: DrawerType,
  appBar?: boolean,
  mode: ModeType,
  setDarkMode: any,
  changeQuery: any,
}

const Layout = ({
  user,
  children,
  jumbotron,
  drawer,
  appBar,
  mode,
  setDarkMode,
  changeQuery,
}: Props) => {
  const classes = useStyles();
  const theme = createTheme(mode);

  // Drawer functions
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {appBar && <NavBar
        user={user}
        name="Monsters Gallery"
        mode={mode}
        setDarkMode={setDarkMode}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />}

      <MenuDrawer
        user={user}
        {...drawer}
        theme={theme}
        mode={mode}
        setDarkMode={setDarkMode}
        open={open}
        toggleDrawer={toggleDrawer}
      />

      {jumbotron && <Jumbotron {...jumbotron} />}

      <main className={drawer && drawer.variant === "persistent" ? clsx(classes.content, {
        [classes.contentShift]: open,
      }) : classes.contentPadding}
      >
        <div className={jumbotron ? classes.jumbotron : classes.drawerHeader} />

        {children}

      </main>
    </ThemeProvider>
  );
}

export default Layout;