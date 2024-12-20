import { getPosts } from '@/api/post/queries';
import React from 'react';

const PostsPage = async () => {
    const posts = await getPosts();

    return (
        <div>
            <h1>List of all posts</h1>
            {JSON.stringify(posts, null, 4)}
        </div>
    );
};

export default PostsPage;
