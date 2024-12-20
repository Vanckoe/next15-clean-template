import { User } from '@/data/user';
import { apiClient } from '@/lib/api';

export const getUser = async () => {
    try {
        const data = await apiClient.request<User>('/profile');
        return data.data;
    } catch {
        throw new Error('Error while fetching profile');
    }
};
