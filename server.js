import dotenv from "dotenv";
dotenv.config();

import app from "./backend/app.js";
import connectDB from "./backend/config/db.js";

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB();

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.log(err);
  }
};

start();