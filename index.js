 
 let title = document.querySelector(".title");
 title.style.color = "green";
 title.style.font = "bold";
 title.style.border = "3px solid black"

 // one


 let list = document.getElementsByClassName("list-group-item");
 list[2].style.backgroundColor = "green"
  
  for(l of list)
  {
    l.style.fontWeight = "bold"
  }
  
  let item = document.querySelectorAll(".list-group")[0].lastElementChild;

  item.classList.add("list-group-item"); 

// two

  let liTags = document.getElementsByTagName("li");
  let n = liTags.length-1;
  liTags[n].style.fontWeight = "bold"

  let secondItem = document.querySelector(".list-group-item:nth-child(2)");
  console.log(secondItem);
  secondItem.style.backgroundColor = "green";
  let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
  thirdItem.style.display = "none"

  // three

  let container = document.querySelector(".container");
  let h3 = document.createElement("h3");
  h3.innerText = "hello World";
  container.appendChild(h3);

  let ulitems = document.querySelector("#items");
  let listelement  = document.createElement("li");
  listelement.classList.add("list-group-item");
  listelement.innerText = "hello world";
  ulitems.insertBefore(listelement,ulitems.firstChild);

  //four
  