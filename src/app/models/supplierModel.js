import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }, 
},{ timeStamps: true});

const SupplierModel = mongoose.models.Supplier || mongoose.model('Supplier', supplierSchema);
export default SupplierModel;