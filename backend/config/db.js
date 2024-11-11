import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ribalbaghdadi:1990ribal@cluster0.umrx9.mongodb.net/food-del').then(() => console.log("DB Connected"));

}