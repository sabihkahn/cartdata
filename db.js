import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sabihop56:Mypassword12@cluster0.vfwnugr.mongodb.net/ecommerce?retryWrites=true&w=majority");
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
  }
};

export default connectDB;
