const taskList = document.getElementById("tasks__list");
const input = document.getElementById("task__input");
const btn = document.getElementById("tasks__add");


function taskAdd () {
    taskList.insertAdjacentHTML("afterbegin", `<div class="task">
    <div class="task__title">${input.value}</div>
    <a href="#" class="task__remove">&times;</a>
  </div>`);
  taskList.querySelector(".task__remove").onclick = function remove() {
    this.closest(".task").remove();
}
input.value = "";
}

input.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.key === "Enter" && input.value != ""){
        taskAdd(input.value)
    }
})


btn.addEventListener("click", (event) => {
    event.preventDefault();
    if (input.value != ""){
        taskAdd(input.value)
    }
})
    
