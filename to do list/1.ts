const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const task = taskInput.value.trim();

        if (task !== "") {
            const li = document.createElement("li");

            const text = document.createElement("span");
            text.textContent = task;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";

            deleteBtn.addEventListener("click", function () {
                li.remove();
            });

            li.appendChild(text);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);

            taskInput.value = "";
        }
    }
});