import SupplierModel from "@/app/models/supplierModel";
import connectDB from "@/lib/dbConfig";
import { NextResponse } from "next/server";

// connect to db before fetching data
await connectDB();

// get all supplier models from database
export async function GET() {
  try { 
    const suppliers = await SupplierModel.find();
    // console.log(suppliers, 'suppliers');
    return NextResponse.json({
      message: "Success",
      data: suppliers,
      status: 200,
    })
    

  } catch (error) {
    return NextResponse.json({
      message: "Invalid request: "+error.message,
      status: 500,
    })
  }
}

// add supplier model to db
export async function POST(request){
  try { 
    const reqBody = await request.json(); 
    // console.log(reqBody);
    
    const { name, email, phone, address } = reqBody;
    // check if supplier is already exist'
    const existingSupplier = await SupplierModel.findOne({ name, email, phone, address });
    if(existingSupplier) {
      return NextResponse.json({
        message: "Supplier already exists",
        status: 409
      });
    }
    
    // save supplier to db 
    const addSupplier = new SupplierModel({ name, email, phone, address });
    const supplier = await addSupplier.save();
    if(!supplier) {
      return NextResponse.json({
        message: "Failed to add supplier",
        status: 400,
      });
    }

    return NextResponse.json({
      message: "Supplier added successfully", 
      status: 201,
    });

  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500
    });
  }
}


