import ProductModel from "@/app/models/productModel";
import connectDB from "@/lib/dbConfig";
import { NextResponse } from "next/server";

// get all products
export async function GET() {
    try {
        await connectDB();
        const products = await ProductModel.find();
        return NextResponse.json({
            data: products,
            message: "Products fetched successfully",
            status: 200
        });
        
    } catch (error) {
        return NextResponse.json({
            message: "Error fetching products",
            status: 500
        })
    }
}

// insert product on db
export async function POST(request) {
    try {
        const reqBody = await request.json();
        // get product model
        await connectDB();
        const product = await ProductModel.findOne({
            title: reqBody.title,
            barcode: reqBody.barcode, 
        });

        if (product) {
            return NextResponse.json({
                message: "Product already exists",
                status: 409
            });
        }
        
        const addProduct = new ProductModel({
            title: reqBody.title,
            barcode: reqBody.barcode,
            status: reqBody.status,
            type: reqBody.type,
            storage: reqBody.storage,
            category: reqBody.category,
            purchase_unit: reqBody.purchase_unit,
            counting_unit: reqBody.counting_unit,
            price: reqBody.price,
            supplier: reqBody.supplier,
            department: reqBody.department,
        });
        const newProduct = await addProduct.save();
        if (newProduct) {
            return NextResponse.json({
                message: "Product added successfully", 
                status: 201
            }); 
        }
         


    } catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500
        })
    }
}