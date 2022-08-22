document.addEventListener("DOMContentLoaded", () => {
  let form=document.querySelector("#create-task-form")
  form.addEventListener("submit",function(e){
    e.preventDefault();
    createNewTask(e.target.new_task_description.value)
    form.reset()
  })
})
function createNewTask(task){
  let li=document.createElement("li");
  let btn=document.createElement("button")
  btn.addEventListener("click",removeList)
  btn.textContent="Remove"
  li.textContent=` ${task}    `
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li)
}
function removeList(e){
  e.target.parentNode.remove()
}
