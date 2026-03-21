// Serve static files from correct location
app.use(express.static(path.join(process.cwd(), "public")));

// API routes
app.use(authRoutes);
app.use(cartRoutes);
app.use(orderRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use(adminRoutes);
app.use(productRoutes);

// Homepage route (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});