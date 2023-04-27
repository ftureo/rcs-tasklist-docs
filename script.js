const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// console.log(taskInput, addButton, taskList)
// Las arrow functions necesitan ser declaradas y escritas antes de ser ejecutadas (antes de ser llamadas) mientras que las regular functions permiten ser invocadas y luego declaradas.

addButton.addEventListener("click", addTask);

function addTask(event) {
    event.preventDefault();
    const textInput = taskInput.value;
    if (textInput === "") {
        alert("Debes ingresar una tarea");
        return;
    }

    const containerNewItem = document.createElement("div");
    containerNewItem.classList.add("container-task-item");

    const newItem = document.createElement("li");
    newItem.textContent = textInput;
    newItem.addEventListener("click", completeTask);

    const deleteButton = document.createElement("p");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", deleteTask);

    containerNewItem.appendChild(newItem);
    containerNewItem.appendChild(deleteButton);

    taskList.appendChild(containerNewItem);
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}

function completeTask(event) {
    const taskItem = event.target;
    taskItem.classList.toggle("completed");
}


// Buenas prácticas documentación de Software.
// Documentación del código: Asegúrese de que el código esté documentado para que sea fácil de entender y modificar. Incluya comentarios para cada función y método que describan su funcionalidad y propósito.
// Diagramas de arquitectura: Los diagramas de arquitectura son una excelente manera de representar la estructura de su aplicación web y su arquitectura
// Documentación de funcionalidades: Documente cada una de las funcionalidades de la aplicación y cómo se pueden utilizar. Incluya descripciones detalladas de cómo cada función debe comportarse, cómo interactúa con otros componentes de la aplicación y qué entradas y salidas se esperan.
// Control de versiones: Utilice un sistema de control de versiones para su código fuente y documentación, lo que permitirá que los desarrolladores accedan y mantengan diferentes versiones de la documentación a lo largo del tiempo.