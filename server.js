import dotenv from "dotenv";
dotenv.config();

import app from "./backend/app.js";
import connectDB from "./backend/config/db.js";
import paymentRoutes from "./backend/routes/paymentRoutes.js";
import { importStaticProducts } from "./backend/utils/importStaticProducts.js";
import Product from "./backend/models/Product.js";

const start = async () => {
  await connectDB();

  // ✅ Payment route
  app.use("/api/payment", paymentRoutes);

  // ✅ Import products if DB empty
  try {
    const count = await Product.countDocuments();
    if (!count) {
      console.log("No products found — importing...");
      await importStaticProducts();
    }
  } catch (err) {
    console.log("Import error:", err.message);
  }

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

start();