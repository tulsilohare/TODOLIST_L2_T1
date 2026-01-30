window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = input.value.trim();

    // Prevent empty task
    if (taskText === "") {
      alert("Please enter a task");
      return;
    }

    const task = document.createElement("div");
    task.classList.add("task");

    const content = document.createElement("div");
    content.classList.add("content");

    const taskInput = document.createElement("input");
    taskInput.classList.add("text");
    taskInput.type = "text";
    taskInput.value = taskText;
    taskInput.setAttribute("readonly", "readonly");

    content.appendChild(taskInput);
    task.appendChild(content);

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.innerText = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "Delete";

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    task.appendChild(actions);

    list.appendChild(task);
    input.value = "";

    // Edit task
    editBtn.addEventListener("click", () => {
      if (editBtn.innerText === "Edit") {
        editBtn.innerText = "Save";
        taskInput.removeAttribute("readonly");
        taskInput.focus();
      } else {
        editBtn.innerText = "Edit";
        taskInput.setAttribute("readonly", "readonly");
      }
    });

    // Delete task
    deleteBtn.addEventListener("click", () => {
      list.removeChild(task);
    });
  });
});
