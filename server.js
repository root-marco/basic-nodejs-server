import methodOverride from "method-override";
import session from "express-session";
import flash from "express-flash";
import passport from "passport";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import path from "path";
if (process.env.NODE_ENV !== "production") dotenv.config();
import configAuth from "./src/middlewares/passport.js";
import userRouter from "./src/routes/userRouter.js";
import checkAuthenticated from "./src/middlewares/checkAuthenticated.js";

// APP
const app = express();
const PORT = process.env.PORT;
const MONGOURI = process.env.MONGOURI;
const SECRET = process.env.SESSION;
const DIR = process.cwd();

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

// MIDDLEWARES
app.use(methodOverride("_method"));
app.use(express.urlencoded({
  extended: false,
}));
app.use(express.json());
app.use(flash());
configAuth(passport);
app.use(session({
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use("/user", userRouter);

// INDEX
app.get("/", checkAuthenticated, async (req, res) => {
  res.render("index.ejs", {
    name: req.user.name,
  });
});

// LISTEN
app.listen(PORT, () => {
  console.info("server running");
});