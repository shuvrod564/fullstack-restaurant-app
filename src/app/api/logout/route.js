import { NextResponse } from "next/server";

export async function GET(request) {
    try { 
        const response = NextResponse.json({
            message: "User logged out successfully",
            status: 201
        });
        response.cookies.set('login_token', '', {
            httpOnly: true,
            expires: new Date(0)
        });
         
        return response;
       
        
    } catch (error) {
        return NextResponse.json({
            message: "Invalid request",
            status: 500
        })
    }
}