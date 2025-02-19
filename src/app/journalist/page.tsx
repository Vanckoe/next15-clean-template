'use client';

import { useJournalistsPosts } from '@/api/journalist/hook';

const JournalistsPage = () => {
    const { data } = useJournalistsPosts();

    return (
        <div>
            <h1>Journalists posts</h1>
            {JSON.stringify(data, null, 0)}
        </div>
    );
};

export default JournalistsPage;
