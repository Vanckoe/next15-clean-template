import { User } from '@/data/user';
// import { apiClient } from '@/lib/api';
import { delay } from '@/lib/helpers/delay';

export const getUser = async (): Promise<User> => {
    // try {
    //     const data = await apiClient.request<User>('/profile');
    //     return data.data;
    // } catch {
    //     throw new Error('Error while fetching profile');
    // }
    await delay(1000);
    return {
        id: '1',
        name: 'John Doe',
        role: 'user',
    };
};
