const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");

function updateTheme(isDarkMode) {
  document.body.classList.toggle("dark-mode", isDarkMode);
  themeToggle.setAttribute("aria-pressed", String(isDarkMode));
  themeToggle.textContent = isDarkMode ? "浅色模式" : "深色模式";
}

updateTheme(savedTheme === "dark");

themeToggle.addEventListener("click", () => {
  const isDarkMode = !document.body.classList.contains("dark-mode");
  updateTheme(isDarkMode);
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

const profileButton = document.querySelector(".profile-button");
const imageDialog = document.querySelector(".image-dialog");
const dialogClose = document.querySelector(".dialog-close");

profileButton.addEventListener("click", () => {
  imageDialog.showModal();
});

dialogClose.addEventListener("click", () => {
  imageDialog.close();
});

imageDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  imageDialog.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageDialog.open) {
    imageDialog.close();
  }
});
