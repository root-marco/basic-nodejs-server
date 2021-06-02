import express from "express";

const app = express();
const PORT = process.env.PORT;

// ROUTES
import userRouter from "./src/routes/userRouter.js";
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("server running");
});
