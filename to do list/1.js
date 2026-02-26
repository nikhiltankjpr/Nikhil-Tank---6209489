var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        var task = taskInput.value.trim();
        if (task !== "") {
            var li_1 = document.createElement("li");
            var text = document.createElement("span");
            text.textContent = task;
            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", function () {
                li_1.remove();
            });
            li_1.appendChild(text);
            li_1.appendChild(deleteBtn);
            taskList.appendChild(li_1);
            taskInput.value = "";
        }
    }
});
