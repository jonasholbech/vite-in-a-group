import { getRandomGreeting } from "./modules/greeting";
import "./modules/darkmode";

document.querySelector("h1").textContent = getRandomGreeting();
