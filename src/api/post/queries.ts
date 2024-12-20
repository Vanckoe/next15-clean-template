import { delay } from '@/lib/helpers/delay';
import { Post } from './types';
import { apiClient } from '@/lib/api';

export const getPosts = async (): Promise<Post[]> => {
    try {
        const data = await apiClient.request<Post[]>('/api/posts');
        await delay(2000);

        return data.data;
    } catch {
        throw new Error('Error while fetching posts');
    }
};
