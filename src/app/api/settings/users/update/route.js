import { NextResponse } from "next/server";
import connectDB from './../../../../../lib/dbConfig';
import UserModel from "@/app/models/userModel";


export async function PUT(req) {
    try {
        await connectDB();
        const reqBody = await req.json(); 
        const { id, username, email, password, accID, designation } = reqBody;
        // console.log(reqBody);
        const user = await UserModel.findByIdAndUpdate(
            id,
            {  
                username,
                email,
                password,
                accID,
                designation
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            return NextResponse.json({
                message: "User not found",
                status: 404
            })
        }
        return NextResponse.json({
            message: "User updated successfully",
            status: 200
        })
        
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500 
        });
    }
}