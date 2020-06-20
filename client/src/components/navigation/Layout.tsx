import React, { useState } from 'react';
import clsx from 'clsx';
import { useStyles, createTheme } from '../../styles/main';
import { ThemeProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Switch from '@material-ui/core/Switch';
import Slide from '@material-ui/core/Slide';
import Hidden from '@material-ui/core/Hidden';
import Jumbotron from './Jumbotron';
import { CATEGORIES } from '../../constants/data';
import { ModeType } from '../../typings/types';


interface PropsHide {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const HideOnScroll = (props: PropsHide) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


interface Props {
  children: React.ReactChild,
  mode: ModeType,
  changeQuery: any,
  setMode: any,
}

const Layout = ({ children, mode, changeQuery, setMode }: Props) => {
  const classes = useStyles();
  const theme = createTheme(mode);

  // Drawer functions
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Toggle mode light/dark
  const [state, setState] = useState({
    darkModeChecked: mode === "dark",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const darkModeChecked = event.target.checked;
    setState({ ...state, [event.target.name]: darkModeChecked });
    setMode(darkModeChecked ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.navRoot}>
        <CssBaseline />
        <HideOnScroll>
          <AppBar
            color="primary"
            // position="absolute"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Monsters Gallery
          </Typography>
              <Typography style={{ marginLeft: "auto" }} variant="subtitle2" noWrap>
                Dark Mode
            <Switch
                  checked={state.darkModeChecked}
                  onChange={handleChange}
                  name="darkModeChecked"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {CATEGORIES.map((text, index) => (
              <ListItem button key={text} onClick={changeQuery(text)}>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          {/* <Divider /> */}
        </Drawer>
        <Jumbotron 
          title="Hello, stranger" 
          subtitle="Welcome to our world" 
          action={{name: "Join the other side", path: "/register"}} 
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