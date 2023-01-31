import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [postId])
    return (
        <div>
            <h2>This is post detail : {postId}</h2>
            <h4>Title : {post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;