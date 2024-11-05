import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }, 
    accID: { type: String, required: true },
    designation: { type: String, },
})

const UserModel = mongoose.models.User || mongoose.model('User', userSchema);

export default UserModel;