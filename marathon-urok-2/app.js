const item = document.querySelector(".item");
const placeHolders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const item of placeHolders) {
  item.addEventListener("dragover", dragover);
  item.addEventListener("dragenter", dragenter);
  item.addEventListener("dragleave", dragleave);
  item.addEventListener("drop", dragDrop);
}

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
}

function dragend(event) {
  event.target.className = "item";
}

function dragover(event) {
  event.preventDefault();
}
function dragenter(event) {
  event.target.classList.add("hovered");
}
function dragleave(event) {
  event.target.classList.remove("hovered");
}
function dragDrop(event) {
  event.target.classList.remove("hovered");
  event.target.append(item);
}
