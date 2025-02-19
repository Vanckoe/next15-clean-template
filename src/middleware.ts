import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicPaths = ['/login', '/register'];

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('auth-token');

    const isPublicPath = publicPaths.includes(request.nextUrl.pathname);

    if (!token && !isPublicPath) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (token && isPublicPath) {
        return NextResponse.redirect(new URL('/posts', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
