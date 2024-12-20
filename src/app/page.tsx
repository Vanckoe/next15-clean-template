'use client';
import React from 'react';
import FileIcon from '@/assets/icons/file.svg';
import { useUser } from '@/components/providers/UserProvider';

export default function Home() {
    const { user } = useUser();

    return (
        <div>
            <h1 className="text-2xl">
                Empty project
                <FileIcon width={150} height={150} color="red" />
                {user?.name}
            </h1>
        </div>
    );
}
