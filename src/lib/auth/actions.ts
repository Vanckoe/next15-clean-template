'use server';

import { apiClient } from '@/lib/api';
import { redirect } from 'next/navigation';
import { login } from '.';

type LoginResponse = {
    token: string;
};

export async function loginAction(previousState: string, formData: FormData) {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    try {
        const response = await apiClient.request<LoginResponse>(`accounts/login/`, {
            method: 'POST',
            body: {
                username,
                password,
            },
        });

        await login(response.data.token);
    } catch {
        return 'Неправильный логин или пароль';
    }

    redirect('/posts');
}
