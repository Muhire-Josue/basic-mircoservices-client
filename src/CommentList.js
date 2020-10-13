import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CommentList = ({ postId }) => {
    const [comments, setComments] = ([]);

    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(res.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

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
