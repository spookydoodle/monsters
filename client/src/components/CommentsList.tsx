import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Comment } from './Comment';
import { CommentType } from '../logic/types';


interface Props {
    user: string,
    comments: Array<CommentType>,
    users: Map<string, any>,
}

export const CommentsList = ({ user, comments, users }: Props) => {
    return (
        <List>
            <Divider component="li" />
            {(comments || []).map(comment => (
                <Comment key={comment._id} user={user} comment={comment} users={users} />
            ))}
        </List>
    );
};
