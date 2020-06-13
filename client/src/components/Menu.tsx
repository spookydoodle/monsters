import React from 'react';
// import { ObjectDeleteButton } from '../../../Buttons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

interface Props {
    user: string,
    model: string,
    object: Object,
    // anchorEl: HTMLElement,
    // handleMenuClose: any,
    menuItems: Array<{ name: string }>,
}

export const CardMenu = ({
    user,
    model,
    object,
    // anchorEl,
    // handleMenuClose,
    menuItems
}: Props) => {
    return (
        <Menu 
            id="simple-menu" 
            // anchorEl={anchorEl} 
            keepMounted 
            open={false} 
            // open={Boolean(anchorEl)} 
            // onClose={handleMenuClose}
        >
            {/* TODO: implement action to go to projects page and change state for current project */}
            {menuItems.map((item, i) => (
                <MenuItem 
                    key={i} 
                    // onClick={handleMenuClose}
                >
                    {item.name}
                </MenuItem>
            ))}
            {/* <ObjectDeleteButton user={user} model={model} object={object} /> */}
        </Menu>
    );
};
