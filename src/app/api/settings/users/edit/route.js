import UserModel from "@/app/models/userModel";
import connectDB from "@/lib/dbConfig";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectDB(); 
        const reqBody = await request.json();
        const userID = reqBody.userid; 
        // console.log("userID", userID);
        
        // find from users by the id
        const user = await UserModel.findById({ _id: userID });
        return NextResponse.json({
            message: "User found",
            status: 200,
            data: user
        });
        
 
    } catch (error) {
        return NextResponse.json({
            message: 'Internal Server Error',
            status: 405
        })
    }
}