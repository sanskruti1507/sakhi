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



// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



// ✅ API routes
app.use(authRoutes);
app.use(cartRoutes);
app.use(orderRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use(adminRoutes);
app.use(productRoutes);

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve static files
app.use(express.static(path.join(__dirname, "../public")));

// ✅ FORCE homepage for ALL routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
export default app;