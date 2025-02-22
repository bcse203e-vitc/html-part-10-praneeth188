document
  .getElementById("lightMode")
  .addEventListener("click", () => setTheme("light"));
document
  .getElementById("darkMode")
  .addEventListener("click", () => setTheme("dark"));

function setTheme(theme) {
  document.body.className = theme;

  if (theme === "dark") {
    document.body.style.backgroundColor = "#333333";
    document.body.style.color = "#ffffff";
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#333333";
  }
}
