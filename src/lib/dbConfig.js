import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error, '-- db error');
        process.exit();
    }
}

export default connectDB;