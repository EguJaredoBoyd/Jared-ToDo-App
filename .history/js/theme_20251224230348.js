//Target the theme button
const theme = document.getElementById("theme");
const body = document.getElementById("body");
const themeIcon = document.getElementById("sun-icon");

//Action to toggle theme class in-between
function toggleTheme() {
  theme.addEventListener("click", () => {
    const lightTheme = body.classList.toggle("light-theme");

    //Switch between sun and moon icons
    themeIcon.classList.toggle("ri-sun-line");
    themeIcon.classList.toggle("ri-contrast-2-fill");

    //Save the selected background
    localStorage.setItem("theme-color", lightTheme);
  });
}

toggleTheme();
