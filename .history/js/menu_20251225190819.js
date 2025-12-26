//target the the hamburger menu and the contents
const hamburgerMenu = document.getElementById("hamburger-menu");
const todoHistoryId = document.getElementById("todo-history-id");

//Function to take toggle action
function toggleMenu() {
  hamburgerMenu.addEventListener("click", () => {
    todoHistoryId.classList.toggle("show-menu");
  });
}
