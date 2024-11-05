import SupplierModel from "@/app/models/supplierModel";
import connectDB from "@/lib/dbConfig";
import { NextResponse } from "next/server";




// get supplier from db based on id
export async function GET(request, { params }) {
    try {
        await connectDB();
      const id = (await params).id;
        //   console.log(id);
      const supplier = await SupplierModel.findOne({ _id: id });
        //   console.log(supplier);
      if(!supplier) {
        return NextResponse.json({
          message: "Supplier not found",
          status: 404,
        });
      }

      return NextResponse.json({
        message: "Supplier found",
        status: 200,
        data: supplier,
      });

    } catch (error) {

      return NextResponse.json({
        message: "Invalid request",
        status: 400,
      })
    }
}

// update the supplier based on the id
export async function PUT(request) {
    try {
        await connectDB();
        const reqBody = await request.json();
        // console.log(reqBody);
        const { id, name, email, phone, address } = reqBody;
        const supplier = await SupplierModel.findByIdAndUpdate(
            id, 
            {
                name,
                email,
                phone,
                address
            }, 
            {
                new: true
            }
        );
        if(!supplier) {
            return NextResponse.json({
                message: "Supplier not updated",
                status: 500
            });
        } 
        return NextResponse.json({
            message: 'Supplier updated successfull!',
            status: 201
        });

    } catch (error) {
        return NextResponse.json({
            message: "Invalid request",
            status: 500
        });
    }
}

// delete the supplier record from db
export async function DELETE(request, {params}) {
  try {
    await connectDB();
    const id = (await params).id;
    console.log(id, '-- supplier get id');
    
    const supplier = await SupplierModel.findByIdAndDelete(id);
    if(!supplier) {
      return NextResponse.json({
        message: "Supplier not deleted",
        status: 500
      });
    }
    return NextResponse.json({
      message: "Supplier deleted successfully",
      status: 201
    });
    
  } catch (error) {
    return NextResponse.json({
      message: "Invalid request",
      status: 500,
    });
  }
}