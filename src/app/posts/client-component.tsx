'use client';

import { useUser } from '@/components/providers/UserProvider';

const ClientComponent = () => {
    const { user } = useUser();

    return (
        <div>
            <h1>Client Component</h1>
            {JSON.stringify(user, null, 4)}
        </div>
    );
};

export default ClientComponent;
