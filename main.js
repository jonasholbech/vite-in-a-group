import "./style.css";
import { getRandomGreeting } from "./modules/greeting";

document.querySelector("h1").textContent = getRandomGreeting();

const darkmode = localStorage.getItem("darkmode");
console.log(darkmode);
if (darkmode) {
  document.body.classList.toggle("dark");
}

document.querySelector("button").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (localStorage.getItem("darkmode")) {
    localStorage.removeItem("darkmode");
  } else {
    localStorage.setItem("darkmode", true);
  }
});

const peeps = ["Jonas", "Dannie"];
localStorage.setItem("people", JSON.stringify(peeps));

console.log(JSON.parse(localStorage.getItem("people")));
