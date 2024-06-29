function handleAdd() {
    const taskInput = document.getElementById("task-input");
    const todoList = document.getElementById("todo-list");
    const task = taskInput.value;

    if (task.trim() !== "") { //Verifica que no se inserten Elementos vacios
        // Creación del elemento padre <li>
        const newTask = document.createElement("li");
        newTask.classList.add("list-group-item", "task-element", "d-flex", "justify-content-between", "align-items-center");

        // Agregando el texto de la tarea
        newTask.appendChild(document.createTextNode(task));

        // Creacion de los eventos de los botones
        const buttonContainer = document.createElement("div");

        const moveButton = document.createElement("button");
        moveButton.appendChild(document.createTextNode("Mover"));
        moveButton.classList.add("btn", "btn-success", "btn-sm");
        moveButton.addEventListener("click", handleDone);
        buttonContainer.appendChild(moveButton);

        const deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Eliminar"));
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteButton.addEventListener("click", handleDelete);
        buttonContainer.appendChild(deleteButton);

        newTask.appendChild(buttonContainer);
        todoList.appendChild(newTask);

        // Limpiar el campo de entrada de texto
        taskInput.value = "";
    }
}

function handleDone(event) {
    const task = event.target.parentElement.parentElement;
    const doneList = document.getElementById("done-list").querySelector("ul");
    doneList.appendChild(task);
}

function handleDelete(event) {
    console.log(event);
    const task = event.target.parentElement.parentElement;
    task.remove();
}