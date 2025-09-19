document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const input = document.getElementById("new-task-description").value;

    if (input.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = input; 
      taskList.appendChild(li);

      form.reset();
    }
  });
});
