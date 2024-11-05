
import SupplierModel from "@/app/models/supplierModel";
import connectDB from "@/lib/dbConfig"
import { NextResponse } from "next/server"

// get the suppliers
export async function GET(){
    try {
        await connectDB();
        const suppliers = await SupplierModel.find(); 

        return NextResponse.json({
            message: "Fetching supplier",
            status: 201,
            data: suppliers
        })
    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error",
            status: 500
        })
    }
}