import express from "express";

const app = express();

// ROUTES
import userRouter from "./routes/user.js";
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("server running");
});
