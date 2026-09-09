const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  const darkMode = theme === "dark";
  document.body.classList.toggle("dark-mode", darkMode);
  localStorage.setItem("park-theme", theme);

  if (themeToggle) {
    themeToggle.textContent = darkMode ? "☀️" : "🌙";
    themeToggle.setAttribute(
      "aria-label",
      darkMode ? "Switch to light mode" : "Switch to dark mode",
    );
  }
}

if (themeToggle) {
  const savedTheme = localStorage.getItem("park-theme") || "light";
  applyTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-mode")
      ? "light"
      : "dark";
    applyTheme(nextTheme);
  });
}
