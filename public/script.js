const blogs = document.getElementById("blogs");
const addBlog = document.getElementById("add-blog");
const about = document.getElementById("about");

blogs.addEventListener("click", () => {
  window.location.href = "/";
  console.log("clicked");
});

addBlog.addEventListener("click", () => {
  window.location.href = "/create";
});

about.addEventListener("click", () => {
  window.location.href = "/about";
});
