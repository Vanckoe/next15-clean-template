'use client';
import { usePosts } from '@/api/post/hooks';
import React from 'react';

const PostsPage = () => {
    const { data, isLoading } = usePosts();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            List of all posts (client-side)
            {JSON.stringify(data, null, 4)}
        </div>
    );
};

export default PostsPage;
