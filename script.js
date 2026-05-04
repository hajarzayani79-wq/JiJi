function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value.trim() !== "") {
    tasks.push({ text: input.value, done: false });
    input.value = "";
    displayTasks();
  }
}
