//Initiate DOM for adding task, deleting task and showing task
let toDoInput = document.querySelector("#to-do");
let addTask = document.getElementById("add-task");
let showTask = document.querySelector("#task-show");
let deleteTask = document.querySelector(".delete-task");

//Store my to-dos (if there is any) inside a variable
let storedToDoArray = JSON.parse(localStorage.getItem("addTaskToArray"));

//Initialize a stored or an empty To-Do array
let toDoArray = storedToDoArray || [];

//Loop through the stored array (check) to get the values persist
if (storedToDoArray) {
  for (let i = 0; i < storedToDoArray.length; i++) {
    showTask.innerHTML += `<li>${storedToDoArray[i]}</li> <button class="delete-task">Delete Task</button>`;
  }
} else {
  toDoArray = [];
}

//Function to input values and loop through them
function logArray() {
  let newTask = toDoInput.value.trim();
  //Statement to check if the input is empty
  if (newTask === "") {
    alert("Your Input is Empty");
    return;
  }
  //Statement to check if there is a duplicate input
  let taskExist = toDoArray.some((element) => {
    return element === toDoInput.value;
  });
  if (taskExist) {
    alert("This task already exists!");
    return;
  }
  //Pushing or adding new values to the array!
  toDoArray.push(toDoInput.value);
  //Save to local storage
  localStorage.setItem("addTaskToArray", JSON.stringify(toDoArray));

  //Clear the previous value and allow a dynamic rebuild
  showTask.innerHTML = "";

  for (let i = 0; i < toDoArray.length; i++) {
    showTask.innerHTML += `<li>${toDoArray[i]}</li> <button class="delete-task">Delete Task</button>`;
  }
}

//Function to delete an input task
function deleteTaskArray() {
  showTask.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-task")) {
      let taskText = e.target.previousElementSibling.textContent;
      toDoArray = toDoArray.filter((element) => {
        return element !== taskText;
      });
      console.log(toDoArray);
      localStorage.setItem("addTaskToArray", JSON.stringify(toDoArray));
      //Clear the previous value and allow a dynamic rebuild
      showTask.innerHTML = "";

      for (let i = 0; i < toDoArray.length; i++) {
        showTask.innerHTML += `<li>${toDoArray[i]}</li> <button class="delete-task">Delete Task</button>`;
      }
    }
  });
}

//Add A Task
function buttonAdd() {
  addTask.addEventListener("click", () => {
    logArray();
  });
}
buttonAdd();
deleteTaskArray();
