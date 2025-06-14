import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    address: String,
    city: String,
    products: [
      {
        name: String,
        quantity: Number,
        price: Number,
        image: String,
        braceletText: String,    // 📝 Text to write on bracelet
        braceletColor: String,   // 🎨 Color of the bracelet
        userAddress: String,     // 📦 Optional separate address per item
      },
    ],
  },
  { timestamps: true }
);

const Order = mongoose.model("addtocar", orderSchema);
export default Order;
