import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://ribalbaghdadi:ribalbaghdadi@cluster0.umrx9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

}
