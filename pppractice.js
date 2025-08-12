document.addEventListener("DOMContentLoaded",()=>{
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList =document.getElementById("task-list");
    taskForm.addEventListener('sumbit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });
    function addTask(task) {
        const li = document.createElement("li");
        li.textcontent = task;
        const deleteBurron = document.createElement("button");
        deleteBurron.textContent = 'Delete';
        deleteBurron.addEventListener("click", () => {
            taskList.removeChild(li);
        });
        li.appendChild(deleteBurron);
        task.appendChild(li);
    }
});