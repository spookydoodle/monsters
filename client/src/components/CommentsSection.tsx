import React from 'react';
import { Box } from '@material-ui/core';
import { CommentsList } from './CommentsList';
// import { AddComment } from './forms/Comment';
import CollapsePanel from './CollapsePanel';
import { CommentType } from '../types/types';

interface Props {
    expanded: Boolean,
    user: string,
    object: Object,
    model: string,
    comments: Array<CommentType>,
    users: Map<string, any>,
}

const CommentsSection = ({ expanded, user, object, model, comments, users }: Props) => {
    return (
        <Box id="comments">
            <CollapsePanel expanded={expanded}>
                <CommentsList user={user} comments={comments} users={users} />
                {/* <AddComment user={user} _id={object._id} model={model} updateStateData={updateStateData} push={push} /> */}
            </CollapsePanel>
        </Box>
    );
};

export { CommentsSection };
