import React from 'react';
import { useStyles } from '../../styles/main';
import { Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { CATEGORIES } from '../../constants/data';
import { ModeType } from '../../typings/types';
import DarkModeSwitch from './DarkModeSwitch';


interface Props {
  theme: Theme,
  mode: ModeType,
  setDarkMode: any,
  open: boolean,
  handleDrawerOpen: any,
  handleDrawerClose: any,
  changeQuery: any,
}

const MenuDrawer = ({ theme, mode, setDarkMode, open, handleDrawerOpen, handleDrawerClose, changeQuery }: Props) => {
  const classes = useStyles();

  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };


  return (
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
      <Divider />
      <DarkModeSwitch style={{ marginLeft: "auto" }} mode={mode} setDarkMode={setDarkMode} />

    </Drawer>
  );
}

export default MenuDrawer;