import UserModel from "@/app/models/userModel";
import connectDB from "@/lib/dbConfig";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        await connectDB();

        const reqBody = await request.json();
        // console.log(reqBody);
        
        const { username, password, accID } = reqBody;
        const user = await UserModel.findOne({ email: username, password: password, accID: accID });
        // console.log(user);
        
        if(!user) return NextResponse.json({
            message: "Invalid credentials",
            status: 401
        })
        if (user) {
            const response = NextResponse.json({
                message: "Authentication successful",
                status: 201
            });

            // set token data
            const tokenData = {
                username: user.username,
                email: user.email,
                accID: user.accID
            }
            // create token 
            const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
            // set the token in coockies
            response.cookies.set('login_token', token, {
                httpOnly: true, 
            });
            return response;  
        }
    } catch (error) {
        return NextResponse.json({
            message: "Invalid request",
            status: 500
        })
    }
}