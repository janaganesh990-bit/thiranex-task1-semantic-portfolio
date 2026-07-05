// Wait until DOM fully loads
document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("theme-toggle");

    if (!themeButton) return;

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }

    // Toggle theme
    themeButton.addEventListener("click", () => {
        const isDark =
            document.documentElement.getAttribute("data-theme") === "dark";

        if (isDark) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
            themeButton.textContent = "🌙";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            themeButton.textContent = "☀️";
        }
    });
});