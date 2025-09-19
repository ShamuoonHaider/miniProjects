const input = document.getElementById("taskInput");
const add = document.getElementById("addBtn");
const message = document.getElementById("message");
const taskList = document.getElementById("taskList");

add.addEventListener("click", () => {
  const task = input.value;
  
  let firstChild = document.createElement("li");

  firstChild.innerHTML = `<div class="flex"><li class="text-2xl p-4 bg-gray-600 rounded-2xl w-120 ml-15 mb-5">${task}</li> <button class=" text-black text-3xl px-4 pt-0 rounded-full relative right-17 bottom-2 cursor-pointer" id="deletBtn">🗑️</button></div>`;

  let list = taskList.appendChild(firstChild);
  list = taskList.textContent;

  const deletBtn = firstChild.querySelector("#deletBtn");
  deletBtn.addEventListener("click", () => {
    firstChild.remove();
    
    // Show task deleted message
    message.innerText = "task deleted";
    message.classList.remove("text-green-600");
    message.classList.add("text-red-500");
    setTimeout(() => {
      message.innerText = "";
      message.classList.remove("text-red-500");
    }, 1000);
  });

  input.value = "";

  switch(true){
    case (task === ""):
        message.innerText = "please add a task";
        message.classList.add("text-red-500");
      setTimeout(() => {
        message.innerText = "";
      }, 1000);
      taskList.removeChild(firstChild);
      break;
      
    case (task === task):
        message.innerText = "task added";
        message.classList.remove("text-red-500");
        message.classList.add("text-green-600");
      setTimeout(() => {
        message.innerText = "";
      }, 1000);
      taskList.appendChild(firstChild);
      break;
  }
})