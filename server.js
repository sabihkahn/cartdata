import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import Order from "./oder.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send({ success: true, message: "Order placed", order });
  } catch (error) {
    console.error("ERROR saving order:", error);  // full stacktrace in logs
    res.status(500).send({
      success: false,
      message: "Failed to save order",
      error: error.message || error.toString()
    });
  }
});




export default app;
