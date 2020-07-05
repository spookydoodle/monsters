import React from 'react';
// import { useStyles } from '../styles/main';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
// import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
// import SaveAltIcon from '@material-ui/icons/SaveAlt';
// import ShareIcon from '@material-ui/icons/ShareIcon';
import { ModeType, UserType } from '../logic/types';

interface Props {
    user: UserType,
    mode: ModeType,
    comments: Array<object>,
    likes: Array<object>,
    handleExpandClick: any,
    expanded: boolean,
}

export const ActionButtons = ({
    user,
    mode,
    comments,
    likes,
    handleExpandClick,
    expanded
}: Props) => {
    return (
        <>
            <IconButton style={{marginLeft: "auto"}} aria-label="add to favorites">
                {/* <Typography variant="caption">{likes.length}</Typography> */}
                <FavoriteBorderOutlinedIcon color={mode === "light" ? "primary" : undefined} />
            </IconButton>
            {/* <IconButton aria-label="share">
                <SaveAltIcon />
            </IconButton> */}
            {/* <IconButton
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ModeCommentOutlinedIcon />
                <Typography variant="caption">{comments.length}</Typography>
            </IconButton> */}
        </>
    );
};
