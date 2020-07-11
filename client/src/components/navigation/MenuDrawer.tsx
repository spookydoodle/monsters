import React from 'react';
import { useStyles } from '../../styles/main';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton, Hidden } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DarkModeSwitch from '../DarkModeSwitch';
import { AuthButtonsVertical } from './AuthButtons';
import { PATHS } from '../../constants/data';
import { DrawerVariantType, ModeType, UserType } from '../../logic/types';


interface Props {
  user: UserType,
  mode: ModeType,
  setDarkMode: any,
  open: boolean,
  toggleDrawer: any,
  variant?: DrawerVariantType,
}

// This component can be either temporary or persistent. By default temporary. use prop 'variant' to change to "persistent"
const MenuDrawer = ({ user, variant = "temporary", mode, setDarkMode, open, toggleDrawer }: Props) => {
  const classes = useStyles();
<<<<<<< HEAD
  const { landingSimple, landingSlideShow, landingFrame, landingHover } = PATHS;
=======
  const { landingSimple, landingSlideShow, landingFrame } = PATHS;
>>>>>>> dde1bf6ef325757be65ca05f2b620acbb9203c47

  return (
    <Drawer
      className={classes.drawer}
      variant={variant}
      anchor="left"
      open={open}
      onClose={toggleDrawer(false)}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>

      <Divider />

      <List>
        <Link to={landingSimple}>
          <ListItem button>
            <ListItemText primary="Simple" />
          </ListItem>
        </Link>
        <Link to={landingSlideShow}>
          <ListItem button>
            <ListItemText primary="Slide Show" />
          </ListItem>
        </Link>
        <Link to={landingFrame}>
          <ListItem button>
            <ListItemText primary="Frame" />
          </ListItem>
        </Link>
<<<<<<< HEAD
        <Link to={landingHover}>
          <ListItem button>
            <ListItemText primary="Hover" />
          </ListItem>
        </Link>
=======
>>>>>>> dde1bf6ef325757be65ca05f2b620acbb9203c47
      </List>
      <Hidden mdUp>
        <Divider />
        <AuthButtonsVertical user={user} />
      </Hidden>

      <Divider />
      <DarkModeSwitch style={{ marginLeft: "auto" }} mode={mode} setDarkMode={setDarkMode} />

    </Drawer>
  );
}

export default MenuDrawer;