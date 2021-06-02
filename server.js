import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// EJS
app.set("view-engine", "ejs");
app.set("views", path.join(`${process.cwd()}/src/views`));

// ROUTES
app.get("/", (req, res) => {
  res.render("index.ejs");
});

import userRouter from 
"./src/routes/userRouter.js";
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("server running" + PORT);
});
