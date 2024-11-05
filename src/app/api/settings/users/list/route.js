import UserModel from "@/app/models/userModel";
import connectDB from "@/lib/dbConfig";
import { NextResponse } from "next/server";


export async function GET(request) {
    try {
        await connectDB();
        const users = await UserModel.find();
        // console.log(users);
        
        return NextResponse.json({
            message: 'Success',
            data:    users,
            status: 200
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Failed to get users",
            status: 500
        });
    }
}