import express from "express";
import morgan from "morgan";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes.js";

// express app :
const app = express();

// connect to mongodb & listen for requests :
dotenv.config();
mongoose
  .connect(process.env.DB_URI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine :
app.set("view engine", "ejs");

// midllewares :
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/", blogRoutes);

// stlyes
// In Vercel → Settings → Environment Variables, add:
// DB_URI=your_mongodb_atlas_connection_string
// In MongoDB Atlas → Network Access, add:
// 0.0.0.0/0
// Redeploy your Vercel project.
