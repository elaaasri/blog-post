const blogs = document.getElementById("blogs");
const addBlog = document.getElementById("add-blog");
const about = document.getElementById("about");
const blogTitle = document.getElementById("blog-title");

blogs.addEventListener("click", () => {
  window.location.href = "/blogs";
});

addBlog.addEventListener("click", () => {
  window.location.href = "/create";
});

about.addEventListener("click", () => {
  window.location.href = "/about";
});

blogTitle.addEventListener("click", (e) => {
  window.location.href = "/details";
});
