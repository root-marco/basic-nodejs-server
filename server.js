import path from "path";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGOURI = process.env.MONGOURI;
const DIR = process.cwd();
app.use(express.urlencoded({
  extended: false,
}));

// MONGOOSE
try {
  await mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.info("database connected");
} catch (error) {
  console.error(error);
  process.exit(1);
}

// EJS
app.set("view-engine", "ejs");
app.set("views", path.join(`${DIR}/src/views`));

// ROUTES
app.get("/", (req, res) => {
  res.render("index.ejs");
});
import userRouter from "./src/routes/userRouter.js";
app.use("/user", userRouter);

// LISTEN
app.listen(PORT, () => {
  console.info("server running");
});
