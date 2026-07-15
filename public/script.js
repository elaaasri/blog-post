const removeBtn = document.querySelectorAll(".remove-btn");

const removeBlog = (e) => {
  e.preventDefault();
  const { id } = e.target.dataset;

  fetch(`/blogs/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      window.location.href = "/blogs";
    })
    .catch((err) => console.log(err));
};

removeBtn.forEach((btn) => btn.addEventListener("click", removeBlog));
