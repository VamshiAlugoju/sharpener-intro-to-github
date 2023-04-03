 
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