let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  let filtered = tasks.filter(task => {
    if (currentFilter === "active") return !task.done;
    if (currentFilter === "done") return task.done;
    return true;
  });

  filtered.forEach((task, index) => {
    let li = document.createElement("li");
    
    let text = document.createElement("span");
    text.textContent = task.text;

    if (task.done) li.classList.add("done");

    text.onclick = () => toggleTask(index);

    let btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = (e) => {
      e.stopPropagation();
      deleteTask(index);
    };

    li.appendChild(text);
    li.appendChild(btn);
    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value.trim() !== "") {
    tasks.push({ text: input.value, done: false });
    input.value = "";
    displayTasks();
  }
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function filterTasks(type) {
  currentFilter = type;
  displayTasks();
}

displayTasks();
