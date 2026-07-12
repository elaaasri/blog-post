import express from "express";
import morgan from "morgan";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import Blog from "./models/blog.js";

console.log("app running!");
dotenv.config();
mongoose
  .connect(process.env.DB_URI)
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

const app = express();

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/create", (req, res) => {
  res.render("create");
});

app.get("/about", (req, res) => {
  res.render("about");
});
