 let form = document.querySelector("#addForm");
 let ul = document.querySelector("#items");
 form.addEventListener("submit",addelement);

//  console.log(ul)

 function addelement(e)
 {    
    e.preventDefault();

    let name = document.querySelector("#addForm #item");
    let li = document.createElement("li");
    li.innerText  =  name.value;
    li.className = "list-group-item d-flex justify-content-between";

    let btn = document.createElement("button");
    btn.className = "btn btn-danger btn-sm float-right delete"
    btn.innerText = "X"
    li.appendChild(btn);
    ul.appendChild(li);
 }

 let deletebtn = document.querySelectorAll("#items .list-group-item .delete");
 for(let btn of deletebtn)
 {
     btn.addEventListener("click" , remove);
 }
 
 function remove(e)
 {   
     let btn = e.target;
     console.log()
     let liitem = btn.parentElement.parentElement;
     ul.removeChild(liitem)
     
 }