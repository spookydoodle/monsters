import React, { useState } from 'react';
import clsx from 'clsx';
import { useStyles, createTheme } from '../../styles/main';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Jumbotron from './Jumbotron';
import MenuDrawer from './MenuDrawer';
import NavBar from './NavBar';
import { ModeType, JumboActionType } from '../../typings/types';


interface Props {
  children: React.ReactChild,
  title: string,
  subtitle: string,
  action: JumboActionType,
  onClick?: any,
  mode: ModeType,
  changeQuery: any,
  setDarkMode: any,
}

const Layout = ({ 
  children, 
  title,
  subtitle,
  action,
  onClick,
  mode, 
  changeQuery, 
  setDarkMode 
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

        <Jumbotron
          title={title}
          subtitle={subtitle}
          action={action}
        />
        <main className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
        >
          <div className={classes.jumbotron} />

          {children}

        </main>
      </div>
    </ThemeProvider>
  );
}

export default Layout;