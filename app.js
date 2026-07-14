import express from "express";
import morgan from "morgan";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import Blog from "./models/blog.js";

// express app :
const app = express();

// connect to mongodb & listen for requests
dotenv.config();
mongoose
  .connect(process.env.DB_URI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine :
app.set("view engine", "ejs");

// midllewares :
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/create", (req, res) => {
  res.render("create");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .then((blogs) => res.render("index", { blogs }))
    .catch((err) => console.log(err));
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then(() => res.redirect("/blogs"))
    .catch((err) => console.log(err));
});

// res.status(500).send("Something went wrong.");
