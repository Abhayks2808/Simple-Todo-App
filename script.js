let todoInput=document.querySelector(".todo-input");
let todosList=document.querySelector(".todo-list");

todoInput.addEventListener("keypress",handleKeyPress)


function handleKeyPress(event){
    if(event.key=="Enter"){
        let todo=todoInput.value;
        if(todo){
            let li=document.createElement("li");
            li.classList.add("todo");
            li.innerHTML=todo;
            
            li.addEventListener("dblclick",handledeletetodo);
            todosList.append(li);
            event.target.value="";
        }else{
            alert("Enter Todo");
        }
        
    }
}


function handledeletetodo(event){
    event.target.remove();
}