let date = new Date();
console.log(date);
let now =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
console.log(now);

const input = document.querySelector("#root > form > input");
input.addEventListener("click", (e) => {
  input.value = now;
});

const Maker = () => {
  let date = new Date();
  console.log(date);
};
