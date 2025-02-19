import { User } from '@/data/user';
import { delay } from '@/lib/helpers/delay';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const getUser = async (): Promise<User | null> => {
    // try {
    //     const data = await apiClient.request<User>('/profile');
    //     return data.data;
    // } catch {
    //     throw new Error('Error while fetching profile');
    // }
    await delay(1000);
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token');

    if (!token) return null;

    return {
        id: '1',
        name: 'John Doe',
        role: 'user',
    };
};

export const login = async (token: string) => {
    const cookieStore = await cookies();
    cookieStore.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    });
};

export async function logout() {
    const cookiesStore = await cookies();
    cookiesStore.delete('auth-token');
    redirect('/login');
}
