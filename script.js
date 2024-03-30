 

let inputBox = document.querySelector(".inputfield input");
let addButton = document.querySelector(".inputfield button");
let clearButton = document.querySelector(".clearbtn button");
let todoList = document.querySelector(".todolist");
 
inputBox.onkeyup = ()=>{
    let userdata = inputBox.value; 
    if(userdata.trim() != 0){
        addButton.classList.add("active"); 
    }
    else{
        addButton.classList.remove("active");

    }
}
 addButton.addEventListener("click", () =>{
     let newElement = document.createElement("li");
     let userdata = inputBox.value; 
      newElement.innerHTML = `${userdata}  <i class="bi bi-trash3-fill"></i>`;
      todoList.appendChild(newElement);
      inputBox.value = "";

      newElement.querySelector("i").addEventListener("click", ()=>{
        newElement.remove(); 
      })
 })


 clearButton.addEventListener("click", () =>{
    todoList.innerHTML="";
 })
  
