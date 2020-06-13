import React from 'react';
import { Box } from '@material-ui/core';
import { CommentsList } from './CommentsList';
// import { AddComment } from './forms/Comment';
import CollapsePanel from './CollapsePanel';

const CommentsSection = ({ expanded, user, object, model, comments, users }) => {
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
