import React from 'react';
import { useStyles } from '../styles/main';
import { Card, CardMedia, CardMediaTypeMap, CardHeader, CardContent, CardActions, IconButton, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ActionButtons } from './ActionButtons';
import { CardMenu } from './Menu';
import { CommentsSection } from './CommentsSection';
import { CommentType } from '../types/types';

interface Props {
    user: string,
    object: { _id: string },
    model: string,
    comments: Array<CommentType>,
    likes: Array<object>,
    users: Map<string, any>,
    title: string,
    subtitle: string,
    body: string,
    mediaTop?: any,
    mediaMiddle?: any,
    menuItems: Array<{ name: string }>,
    // updateStateData: any // or void?
}

// Pass a component to mediaTop or mediaBottom depending on which location it is needed in
export const MonsterCard = ({
    user,
    object,
    model,
    comments,
    likes,
    users,
    title,
    subtitle,
    body,
    mediaTop,
    mediaMiddle,
    menuItems,
    // updateStateData,
}: Props) => {
    const classes = useStyles();
    // TODO: figure out how to declare it in typescript
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Card className={classes.card} >
            {mediaTop ? mediaTop : null}
            {/* <CardHeader
                avatar={null}
                // action={
                //     <IconButton
                //         aria-label="more"
                //         aria-controls="long-menu"
                //         aria-haspopup="true"
                //         onClick={handleMenuClick}
                //     >
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title={title}
                subheader={subtitle}
            /> */}
            {/* <CardMenu
                user={user}
                object={object}
                model={model}
                anchorEl={anchorEl}
                handleMenuClose={handleMenuClose}
                menuItems={menuItems}
            /> */}
            {mediaMiddle ? mediaMiddle : null}
            <CardContent>
                <Typography noWrap variant="h6" color="textPrimary">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {body}
                </Typography>
            </CardContent>
            <CardActions style={{ marginTop: "auto" }} disableSpacing>
                <ActionButtons 
                    user={user} 
                    comments={comments} 
                    likes={likes} 
                    handleExpandClick={handleExpandClick} 
                    expanded={expanded}
                />
            </CardActions>
            {/* <CardContent>
                <CommentsSection
                    expanded={expanded}
                    user={user}
                    object={object}
                    model={model}
                    comments={comments}
                    users={users}
                />
            </CardContent> */}
        </Card>
    );
};
