//Initiate DOM for adding task, deleting task and showing task
let toDoInput = document.querySelector("#to-do");
let addTask = document.getElementById("add-task");
let showTask = document.querySelector("#task-show");
const todoHistoryInput = document.getElementById("todo-history-input");

//Store my to-dos (if there is any) inside a variable
let storedToDoArray = JSON.parse(localStorage.getItem("addTaskToArray"));

//Initialize a stored or an empty To-Do array
let toDoArray = storedToDoArray || [];

//Function to render tasks
function renderTasks() {
  //Clear the previous value and allow a dynamic rebuild
  showTask.innerHTML = "";
  todoHistoryInput = "";

  for (let i = 0; i < toDoArray.length; i++) {
    let html = `
      <div class="ol__list">
        <li class="${toDoArray[i].completed ? "done" : ""}">
          <h4>${toDoArray[i].text}</h4>
          <h6>${toDoArray[i].date}</h6>
        </li>
        <button>
          <input type="checkbox" name="checkbox" class="completed-task" data-index="${i}" ${
      toDoArray[i].completed ? "checked" : ""
    }/>
        </button>
        <button class="edit-task" data-index=  "${i}"><i class="ri-edit-line"></i></button>
        <button class="delete-task" data-index="${i}"><i class="ri-delete-bin-line"></i></button>
      </div>
      `;

    //Render to the main page
    showTask.innerHTML += html;
    todoHistoryInput.innerHTML += html;
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
    date: new Date().toLocaleDateString(),
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

    //Ask User if they really want to delete
    const confirmDelete = confirm("Are you sure you want to delete this task?");

    //Delete if the user agrees
    if (!confirmDelete) {
      return;
    }

    //Delete task finally
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
    alert("Your task will be saved!");
    logArray();
  });
}

//Edit a task
function editTask() {
  showTask.addEventListener("click", (e) => {
    const editButton = e.target.closest(".edit-task");

    if (!editButton) {
      return;
    }

    const toDoArrayIndex = editButton.dataset.index;
    const newTextEdit = prompt("Edit task:", toDoArray[toDoArrayIndex].text);

    //Check for only valid saved texts
    if (!newTextEdit || newTextEdit.trim() === "") {
      return;
    }

    //Update the new task
    toDoArray[toDoArrayIndex].text = newTextEdit.trim();

    //Save to local storage for persistance
    localStorage.setItem("addTaskToArray", JSON.stringify(toDoArray));

    //Re-render the new task list
    renderTasks();
  });
}

editTask();

//Use "ENTER" key as an add todo button alternative
toDoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    alert("Your task will be saved!");
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
const cancelSearchButton = document.getElementById("cancel-search-button");

//Search todo by typing
function runTodoSearch() {
  //Make it all lower case
  const searchValue = searchTodo.value.toLowerCase().trim();

  //Filter the the todos
  const filteredTodos = toDoArray.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue);
  });

  console.log(filteredTodos);
}

//Check with the search button
searchTodo.addEventListener("input", runTodoSearch);

//Trigger search by clicking the search button
searchButton.addEventListener("click", () => {
  runTodoSearch();
  console.log("Active!");
});

//Use cancel button to clear search
cancelSearchButton.addEventListener("click", () => {
  searchTodo.value = "";
  console.log(toDoArray);
});

//Make it all lower case

//Loop through all todos

//Keep only the matching todos

//Clear the User Interface

//Display the matching todos
