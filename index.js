 
 let title = document.querySelector(".title");
 title.style.color = "green";
 title.style.font = "bold";
 title.style.border = "3px solid black"


 let list = document.getElementsByClassName("list-group-item");
 list[2].style.backgroundColor = "green"
  
  for(l of list)
  {
    l.style.fontWeight = "bold"
  }
  
  let item = document.querySelectorAll(".list-group")[0].lastElementChild;

  item.classList.add("list-group-item"); 

  let liTags = document.getElementsByTagName("li");
  let n = liTags.length-1;
  liTags[n].style.fontWeight = "bold"