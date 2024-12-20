import React from 'react';
import FileIcon from '@/assets/icons/file.svg';

export default function Home() {
    return (
        <div>
            <h1 className="text-2xl">
                Empty project
                <FileIcon width={150} height={150} color="red" />
            </h1>
        </div>
    );
}
