import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const ConnectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connect to database", error);
    }
}

export default ConnectDB;