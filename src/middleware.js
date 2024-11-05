import { NextResponse, NextRequest } from "next/server"; 

export function middleware(request) {
    const path = request.nextUrl.pathname;
    const publicPath = path === '/login';
    const token = request.cookies.get('login_token')?.value || '';
    if (!publicPath && !token) {
        return NextResponse.redirect( new URL('/login', request.url) );
    }
    if ( publicPath && token ) {
        return NextResponse.redirect( new URL('/', request.url));
    }
}

export const config = {
    matcher: [
        '/', 
        '/login',
    ]
}