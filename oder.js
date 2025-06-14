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
      },
    ],
  },
  { timestamps: true }
);

const Order = mongoose.model("addtocar", orderSchema);

export default Order;
