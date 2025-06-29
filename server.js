import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import Order from "./oder.js"; // make sure filename matches (order.js / oder.js)

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// POST route
app.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send({ success: true, message: "Order placed", order });
  } catch (error) {
    console.error("ERROR saving order:", error);
    res.status(500).send({
      success: false,
      message: "Failed to save order",
      error: error.message || error.toString(),
    });
  }
});

// GET route
app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "Orders fetched successfully",
      data: orders,
    });
  } catch (error) {
    console.error("ERROR fetching orders:", error);
    res.status(500).send({
      success: false,
      message: "Failed to fetch orders",
      error: error.message || error.toString(),
    });
  }
});

export default app;
