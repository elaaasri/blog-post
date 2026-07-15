import express from "express";
import * as blogController from "../controllers/blogController.js";

const router = express.Router();

router.get("/", blogController.homeRedirect);
router.get("/blogs/create", blogController.blogCreateGet);
router.get("/about", blogController.about);
router.get("/blogs", blogController.blogIndex);
router.post("/blogs", blogController.blogCreatePost);
router.get("/blogs/:id", blogController.blogDetails);
router.delete("/blogs/:id", blogController.blogDelete);
router.use(blogController.notFoundPage);

export default router;
