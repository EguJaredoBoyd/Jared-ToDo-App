//Initiate DOM for adding task, deleting task and showing task
let toDoInput = document.querySelector("#to-do");
let addTask = document.getElementById("add-task");
let showTask = document.querySelector("#task-show");

//Store my to-dos (if there is any) inside a variable
let storedToDoArray = JSON.parse(localStorage.getItem("addTaskToArray"));

//Initialize a stored or an empty To-Do array
let toDoArray = storedToDoArray || [];

//Function to render tasks
function renderTasks() {
  //Clear the previous value and allow a dynamic rebuild
  showTask.innerHTML = "";

  for (let i = 0; i < toDoArray.length; i++) {
    showTask.innerHTML += `
      <div class="ol__list">
        <li>${toDoArray[i].text}</li>
        <button>
          <input type="checkbox" name="checkbox" id="checkbox" />
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
    const deleteButton = e.target.closest(".delete-task");
    let index = Number(e.target.dataset.index);
    console.log("delete button!");

    //DELETE
    if (e.target.classList.contains("delete-task")) {
      toDoArray.splice(index, 1);
    }

    //UPDATE (Complete)
    if (e.target.classList.contains("complete-task")) {
      toDoArray[index].completed = !toDoArray[index].completed;
    }

    //UPDATE (Edit)
    if (e.target.classList.contains("edit-task")) {
      let newText = prompt("Edit task:", toDoArray[index].text);
      if (newText && newText.trim() !== "") {
        toDoArray[index].text = newText.trim();
      }
    }

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

buttonAdd();
deleteTaskArray();

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
