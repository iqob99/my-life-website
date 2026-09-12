const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");

function updateTheme(isDarkMode) {
  document.body.classList.toggle("dark-mode", isDarkMode);
  themeToggle.setAttribute("aria-pressed", String(isDarkMode));
  themeToggle.textContent = isDarkMode ? "浅色模式" : "深色模式";
}

if (themeToggle) {
  updateTheme(savedTheme === "dark");

  themeToggle.addEventListener("click", () => {
    const isDarkMode = !document.body.classList.contains("dark-mode");
    updateTheme(isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });
}

const profileButton = document.querySelector(".profile-button");
const imageDialog = document.querySelector(".image-dialog");
const dialogClose = document.querySelector(".dialog-close");

if (profileButton && imageDialog && dialogClose) {
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
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageDialog && imageDialog.open) {
    imageDialog.close();
  }
});

const readingProgress = document.querySelector(".reading-progress");

function updateReadingProgress() {
  if (!readingProgress) {
    return;
  }

  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0
    ? (window.scrollY / scrollableHeight) * 100
    : 100;

  readingProgress.style.width = `${Math.min(progress, 100)}%`;
  readingProgress.setAttribute("aria-valuenow", String(Math.round(progress)));
}

if (readingProgress) {
  updateReadingProgress();
  window.addEventListener("scroll", updateReadingProgress, { passive: true });
  window.addEventListener("resize", updateReadingProgress);
}

const readingTime = document.querySelector(".reading-time");
const articleBody = document.querySelector(".article-body");

if (readingTime && articleBody) {
  const characterCount = articleBody.textContent.trim().length;
  const minutes = Math.max(1, Math.ceil(characterCount / 300));
  readingTime.textContent = `预计阅读 ${minutes} 分钟`;
}

const backToTop = document.querySelector(".back-to-top");

function updateBackToTopVisibility() {
  if (!backToTop) {
    return;
  }

  backToTop.classList.toggle("is-visible", window.scrollY > 200);
}

if (backToTop) {
  updateBackToTopVisibility();
  window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });

  backToTop.addEventListener("click", () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  });
}
