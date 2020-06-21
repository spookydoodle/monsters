import React, { useState } from 'react';
import clsx from 'clsx';
import { useStyles, createTheme } from '../../styles/main';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Jumbotron from './Jumbotron';
import MenuDrawer from './MenuDrawer';
import NavBar from './NavBar';
import { ModeType, JumbotronType } from '../../typings/types';

/*
  This component should serve as a wrapper for all pages. 
  Jumbotron is optional.
*/
interface Props {
  children: React.ReactChild,
  jumbotron?: JumbotronType,
  mode: ModeType,
  setDarkMode: any,
  changeQuery: any,
}

const Layout = ({ 
  children, 
  jumbotron,
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


  return (
    <ThemeProvider theme={theme}>
      <div className={classes.navRoot}>
        <CssBaseline />

        <NavBar
          name="Monsters Gallery"
          mode={mode}
          setDarkMode={setDarkMode}
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />

        <MenuDrawer
          theme={theme}
          mode={mode}
          setDarkMode={setDarkMode}
          open={open}
          changeQuery={changeQuery}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />

        {jumbotron ? <Jumbotron {...jumbotron} /> : null }
        <main className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
        >
          <div className={jumbotron ? classes.jumbotron : classes.drawerHeader} />

          {children}

        </main>
      </div>
    </ThemeProvider>
  );
}

export default Layout;