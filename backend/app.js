import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/authRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import checkoutRoutes from "./routes/checkoutRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// ✅ Fix __dirname (VERY IMPORTANT)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ======================================
// ✅ STEP 1: Serve static frontend
// ======================================
app.use(express.static(path.join(__dirname, "../public")));

// ======================================
// ✅ STEP 2: API routes (keep AFTER static)
// ======================================
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/product", productRoutes);

// ======================================
// ✅ STEP 3: FINAL fallback (IMPORTANT)
// ======================================
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

export default app;