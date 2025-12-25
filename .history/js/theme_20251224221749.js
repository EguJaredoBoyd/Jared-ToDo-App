//Target the theme button
const theme = document.getElementById("theme");
const body = document.getElementById("body");
const sunIcon = document.getElementById("sun-icon");

//Action to toggle theme class in-between
function toggleTheme() {
  theme.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    sunIcon.classList.toggle("ri-contrast-2-fill");
  });
}

toggleTheme();
