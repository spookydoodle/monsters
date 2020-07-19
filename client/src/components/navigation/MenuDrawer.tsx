import React from 'react';
import { useStyles } from '../../styles/main';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton, Hidden } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
  const { home, landingsHub } = PATHS;

  const items = [
    {
      name: "Home",
      path: home,
    },
    {
      name: "Landing pages",
      path: landingsHub,
    }
  ];

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
        {items.map(item => (
          <Link to={item.path}>
            <ListItem button>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
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