let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task.text;

    if (task.done) li.classList.add("done");

    li.onclick = () => toggleTask(index);

    let btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = (e) => {
      e.stopPropagation();
      deleteTask(index);
    };

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

// تشغيل عند البداية
displayTasks();
