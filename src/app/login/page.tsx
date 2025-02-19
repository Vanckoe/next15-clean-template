import { LoginForm } from './login-form';

export default async function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow">
                <h2 className="text-center text-3xl font-extrabold">Sign in to your account</h2>
                <LoginForm />
            </div>
        </div>
    );
}
