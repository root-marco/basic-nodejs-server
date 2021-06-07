import User from "../models/User.js";
import bcrypt from "bcrypt";

export async function getLogin(req, res) {

  res.render("login.ejs");

}

export async function getRegister(req, res) {

  res.render("register.ejs");

}

export async function postLogin(req, res) {



}

export async function postRegister(req, res) {

  const body = req.body;

  if (!(body.name && body.email && body.password)) {
    return res.status(400).send({
      error: "data not formatted properly",
    });
  }

  const newUser = new User({
    name: body.name,
    email: body.email,
    password: await bcrypt.hash(body.password, 10),
  });

  try {
    await newUser.save();
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.redirect("/user/register");
  }

}