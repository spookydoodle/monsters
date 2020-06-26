import React from 'react';
import { useStyles } from '../../styles/main';
import { Theme } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DarkModeSwitch from '../DarkModeSwitch';
import { AuthButtonsVertical } from '../AuthButtons';
import { CATEGORIES } from '../../constants/data';
import { DrawerVariantType, ModeType, UserType } from '../../logic/types';


interface Props {
  user: UserType,
  theme: Theme,
  mode: ModeType,
  setDarkMode: any,
  open: boolean,
  toggleDrawer: any,
  changeQuery: any,
  variant?: DrawerVariantType,
}

// This component can be either temporary or persistent. By default temporary. use prop 'variant' to change to "persistent"
const MenuDrawer = ({ user, variant = "temporary", theme, mode, setDarkMode, open, toggleDrawer, changeQuery }: Props) => {
  const classes = useStyles();

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
      <Divider />

      <AuthButtonsVertical user={user} />
      <Divider />
      
      <DarkModeSwitch style={{ marginLeft: "auto" }} mode={mode} setDarkMode={setDarkMode} />

    </Drawer>
  );
}

export default MenuDrawer;