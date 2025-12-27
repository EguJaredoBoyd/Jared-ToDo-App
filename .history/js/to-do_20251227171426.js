//Initiate DOM for adding task, deleting task and showing task
let toDoInput = document.querySelector("#to-do");
let addTask = document.getElementById("add-task");
let showTask = document.querySelector("#task-show");

//Target the h6 button for the date output
let dateOutput = document.getElementById("date-output");

//Store my to-dos (if there is any) inside a variable
let storedToDoArray = JSON.parse(localStorage.getItem("addTaskToArray"));

//Initialize a stored or an empty To-Do array
let toDoArray = storedToDoArray || [];

//Date function
function dateOutputFunction() {
  dateOutput = new Date().toLocaleDateString();
  console.log(dateOutput);
}

dateOutputFunction();

//Function to render tasks
function renderTasks() {
  //Clear the previous value and allow a dynamic rebuild
  showTask.innerHTML = "";

  for (let i = 0; i < toDoArray.length; i++) {
    showTask.innerHTML += `
      <div class="ol__list">
        <li class="${toDoArray[i].completed ? "done" : ""}">
          <h4>${toDoArray[i].text}</h4>
          <h6 id="date-output"></h6>
        </li>
        <button>
          <input type="checkbox" name="checkbox" class="completed-task" data-index="${i}" ${
      toDoArray[i].completed ? "checked" : ""
    }/>
        </button>
        <button><i class="ri-edit-line"></i></button>
        <button class="delete-task" data-index="${i}"><i class="ri-delete-bin-line"></i></button>
      </div>
      `;
  }
}

//Loop through the stored array (check) to get the values persist
if (storedToDoArray) {
  renderTasks();
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
    return element.text === newTask;
  });

  if (taskExist) {
    alert("This task already exists!");
    return;
  }

  //Pushing or adding new values to the array!
  toDoArray.push({
    text: newTask,
    completed: false,
  });

  //Save to local storage
  localStorage.setItem("addTaskToArray", JSON.stringify(toDoArray));

  renderTasks();
  toDoInput.value = "";
}

//Function to delete an input task
function deleteTaskArray() {
  showTask.addEventListener("click", (e) => {
    //Target the delete button
    const deleteButton = e.target.closest(".delete-task");

    //Check whether the user clicks on delete button and activate action
    if (!deleteButton) {
      return;
    }

    //DELETE TODO
    const index = Number(deleteButton.dataset.index);
    toDoArray.splice(index, 1);

    localStorage.setItem("addTaskToArray", JSON.stringify(toDoArray));
    renderTasks();
  });
}

function completeTask() {
  showTask.addEventListener("click", (e) => {
    //Target the checkbox button
    const completedButton = e.target.classList.contains("completed-task");

    //Check whether the user clicks the checkbox button to start action
    if (!completedButton) {
      return;
    }

    //CHECKMARK COMPLETION
    const completeIndex = e.target.dataset.index;

    toDoArray[completeIndex].completed = e.target.checked;

    localStorage.setItem("addTaskToArray", JSON.stringify(toDoArray));
    renderTasks();
  });
}

//Add A Task
function buttonAdd() {
  addTask.addEventListener("click", () => {
    logArray();
  });
}

//Use "ENTER" key as an add todo button alternative
toDoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    logArray();
  }
});

buttonAdd();
deleteTaskArray();
completeTask();

// SEARCH TODO FUNCTION

//Target necessary buttons and inputs
const searchTodo = document.getElementById("search-todo");
const searchButton = document.getElementById("search-button");

//Read the search value
console.log(searchTodo);

//Make it all lower case

//Loop through all todos

//Keep only the matching todos

//Clear the User Interface

//Display the matching todos
