// db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://sabihop56:Mypassword12@cluster0.vfwnugr.mongodb.net/ecommerce?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // 🔥 Exit the app if DB fails
  }
};

export default connectDB;
