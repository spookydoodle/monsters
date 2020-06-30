import React from 'react';
import { useStyles } from '../../styles/main';
import { HashLink as Link } from 'react-router-hash-link';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { ActionType } from '../../logic/types';

interface Props {
    items: Array<ActionType>
}
// TODO: investigate why Link from router does not handle hashes #
const ContentsList = ({ items }: Props) => {
    const classes = useStyles();

    return (
        <List>
            {items.map((item, i) =>
                <Link key={`link-item-${i}`} to={item.path} smooth={true}>
                    <ListItem key={`item-${i}`} className={classes.pageNavList} button>
                        <ListItemText key={`item-text-${i}`} primary={`${item.name.substring(0, 15)}...`} />
                    </ListItem>
                </Link>
            )}
        </List>
    );
}

export default ContentsList;