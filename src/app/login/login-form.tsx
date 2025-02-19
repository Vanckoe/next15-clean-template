'use client';

import { loginAction } from '@/lib/auth/actions';
import { useActionState } from 'react';

export function LoginForm() {
    const [errorState, action, loading] = useActionState(loginAction, '');

    return (
        <form action={action} className="space-y-4">
            {errorState && <p className="text-red-500">{errorState}</p>}
            <div>
                <label htmlFor="username" className="block text-sm font-medium">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
            </div>
            <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                {loading ? 'Logging in...' : 'Log in'}
            </button>
        </form>
    );
}
