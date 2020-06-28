import React from 'react';
import { useStyles } from '../../styles/main';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { ActionType } from '../../logic/types';

interface Props {
    items: Array<ActionType>
}

const ContentsList = ({ items }: Props) => {
    const classes = useStyles();

    return (
        <List>
            {items.map((item, i) =>
                <Link to={item.path} style={{ textDecoration: "none", color: "inherit" }}>
                    <ListItem key={`item-${i}`} className={classes.pageNavList} button>
                        <ListItemText key={`item-text-${i}`} primary={`${item.name.substring(0, 15)}...`} />
                    </ListItem>
                </Link>
            )}
        </List>
    );
}

export default ContentsList;