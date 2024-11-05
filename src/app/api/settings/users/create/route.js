import connectDB from "@/lib/dbConfig";
import UserModel from "@/app/models/userModel"; 
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        await connectDB();
        const reqBody = await request.json();
        const { username, email, password, accID, designation } = reqBody;
        // const newUser = await UserModel.findOne({ username: username, email: email, password: password, accID: accID, designation: designation });
        // if (newUser) {
        //     return NextResponse.json({
        //         message: "User already exists",
        //         status: 409
        //     });
        // }

        const user = new UserModel({ username, email, password, accID, designation });
        await user.save();

        return NextResponse.json({
            message: "User created successfully",
            status: 201
        });
        
    } catch (e) {
        return NextResponse.json({ 
            message: e.message,
            status: 500
         });
    }
}