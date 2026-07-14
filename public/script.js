const blogs = document.getElementById("blogs");
const addBlog = document.getElementById("add-blog");
const about = document.getElementById("about");
// const blogTitle = document.getElementById("blog-title");
const detailDeleteBtn = document.getElementById("details-delete-btn");

blogs.addEventListener("click", () => {
  window.location.href = "/blogs";
});

addBlog.addEventListener("click", () => {
  window.location.href = "/create";
});

about.addEventListener("click", () => {
  window.location.href = "/about";
});

const deletBlog = (e) => {
  e.preventDefault();
  const id = e.target.dataset.id;

  fetch(`/blogs/${id}`, {
    method: "DELETE",
  }).then(() => {
    window.location.href = "/blogs";
  });
};

detailDeleteBtn?.addEventListener("click", deletBlog);
