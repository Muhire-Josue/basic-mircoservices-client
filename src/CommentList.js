import React from 'react';

const CommentList = ({ comments }) => {
    const renderedData = comments.map(comment => {
        let content;
        if (comment.status === 'approved') {
            content = comment.content;
        }
        if (comment.status === 'pending') {
            content = 'This comment is awaiting moderation'
        }
        if (comment.status === 'rejected') {
            content = 'This comment has been rejected';
        }
        return (<li key={comment.id}>{comment.content}</li>)
    });
    return (
        <div>
            {renderedData}
        </div>
    )
}

export default CommentList
