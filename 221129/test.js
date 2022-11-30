const root = document.getElementById("root");
console.log(root);

const li = document.querySelectorAll("li");
console.log(li);

const main = document.getElementsByTagName("main")[0];

const home = li[0];
const my = li[1];
const menu = li[2];
const item = li[3];

home.addEventListener("click", () => {
  main.style.backgroundColor = "red";
  location.href = "http://localhost:5678/home";
});

my.addEventListener("click", () => {
  main.style.backgroundColor = "blue";
  location.href = "http://localhost:5678/my";
});

menu.addEventListener("click", () => {
  main.style.backgroundColor = "green";
  location.href = "http://localhost:5678/menu";
});

item.addEventListener("click", () => {
  main.style.backgroundColor = "purple";
  location.href = "http://localhost:5678/item";
});
