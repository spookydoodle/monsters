import React from 'react';
import { useStyles } from '../../styles/main';
import { Link, List, ListItem, ListItemText } from '@material-ui/core';
import { ActionType } from '../../logic/types';

interface Props {
    items: Array<ActionType>
}

const ContentsList = ({ items }: Props) => {
    const classes = useStyles();

    return (
        <List>
            {items.map((item, i) =>
                <ListItem key={`item-${i}`} className={classes.pageNavList} button component={Link} href={item.path}>
                    <ListItemText key={`item-text-${i}`} primary={`${item.name.substring(0, 15)}...`} />
                </ListItem>
            )}
        </List>
    );
}

export default ContentsList;