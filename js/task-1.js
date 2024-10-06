const list = [...document.querySelectorAll(".item")];
console.log("Number of categories:", list.length);
const categories = list.forEach((item) => {
  console.log("Category:", item.querySelector(".categories-title").textContent);
  console.log("Elements:", item.querySelectorAll(".categories-item").length);
});
