import express from "express";
import morgan from "morgan";
import Blog from "./models/blog.js";

console.log("app running!");

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

app.listen(3000);
