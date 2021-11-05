const darkmode = localStorage.getItem("darkmode");
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
