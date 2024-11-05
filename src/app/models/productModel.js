import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    barcode: { type: String, required: true },
    status: { type: String, required: true },
    type: { type: String, required: true },
    thumbnail: { type: String },
    storage: { type: String, required: true },
    category: { type: String, required: true },
    purchase_unit: { type: String, required: true },
    counting_unit: { type: String, required: true },
    price: { type: String, required: true },
    supplier: { type: Array, required: true },
    department: { type: Array, required: true },
}, { timestamps: true });

const ProductModel = mongoose.models.Product || mongoose.model('Product', productSchema);
export default ProductModel;