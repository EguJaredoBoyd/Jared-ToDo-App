//Target the theme button
const theme = document.getElementById("theme");
const body = document.getElementById("body");
const themeIcon = document.getElementById("sun-icon");

//Load the chosen theme color
const savedTheme = localStorage.getItem("theme-color");

if (savedTheme === "true") {
  //If the user clicks and it is true, show the light-theme
  body.classList.toggle("light-theme");

  //Now change the icons so that it matches the light theme
  themeIcon.classList.remove("ri-sun-line");
  themeIcon.classList.add("ri-contrast-2-fill");
}

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
