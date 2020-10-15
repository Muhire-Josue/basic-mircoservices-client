import React from 'react';

const CommentList = ({ comments }) => {
    const renderedData = comments.map(comment => {
        return (<li key={comment.id}>{comment.content}</li>)
    });
    return (
        <div>
            {renderedData}
        </div>
    )
}

export default CommentList
