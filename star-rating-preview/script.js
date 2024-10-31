const post = document.querySelector(".post");
const editBtn = document.querySelector(".edit");
const widget = document.querySelector(".star-widget");
const btn = document.querySelector("button");

function submitWidget() {
  widget.style.display = "none";
  post.style.display = "block";

  editBtn.onclick = () => {
    widget.style.display = "block";
    post.style.display = "none";
  };
}
