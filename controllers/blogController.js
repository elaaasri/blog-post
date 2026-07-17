import Blog from "../models/blog.js";

const homeRedirect = (req, res) => {
  res.redirect("/blogs");
};

const blogCreateGet = (req, res) => {
  res.render("create");
};

const about = (req, res) => {
  res.render("about");
};

const blogIndex = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => res.render("index", { blogs }))
    .catch((err) => console.log(err));
};

const blogCreatePost = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then(() => res.redirect("/blogs"))
    .catch((err) => console.log(err));
};

const blogDetails = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((blog) => res.render("details", { blog }))
    .catch((err) => {
      res.status(404).render("404");
      console.log(err);
    });
};

const blogDelete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status(404).render("404");
      console.log(err);
    });
};

const notFoundPage = (req, res) => {
  res.status(404).render("404");
};

export {
  homeRedirect,
  blogCreateGet,
  about,
  blogIndex,
  blogCreatePost,
  blogDetails,
  blogDelete,
  notFoundPage,
};
