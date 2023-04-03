 let form = document.querySelector("#addForm");
 let ul = document.querySelector("#items");
 let search = document.querySelector("#filter");

 form.addEventListener("submit",addelement);
 search.addEventListener("keyup",filter)
//  console.log(search)

 function addelement(e)
 {    
    e.preventDefault();


    let name = document.querySelector("#addForm #item");
    let description = document.querySelector("#addForm #description")
    localStorage.setItem(name.value,description.value)

    let li = document.createElement("li");
    let div = document.createElement("div");
    li.innerText  =  name.value + " " + description.value;
    li.className = "list-group-item d-flex justify-content-between";

    let btn = document.createElement("button");
    let editbtn = document.createElement("button");
    btn.className = "btn btn-danger  btn-sm delete"
    editbtn.className = "btn btn-primary btn-sm "
    btn.innerText = "X"
    editbtn.innerText = "edit"
    div.appendChild(btn);
    div.appendChild(editbtn);
      
    li.appendChild(div)
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

 function filter(e)
 {
    let text = e.target.value.toLowerCase();
    // console.log(text)
    let items = ul.querySelectorAll("li");

    // console.log(items)
    Array.from(items).forEach((item)=>{
          
        let itemName = item.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(text) != -1)
        {
            item.style.display ="block";
            item.classList.add("d-flex")
            // console.log(itemName)
        }
        else{
            item.style.display ="none"
            item.classList.remove("d-flex")
          
        }
    })

 }