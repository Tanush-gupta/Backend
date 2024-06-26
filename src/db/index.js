import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Datbase connected || Database Host :", connectionInstance.connection.host);
    } catch (error) {
        console.error('MONG~ODB connection error', error);
        process.exit(1);
    }
}
export default connectDB;