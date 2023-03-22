const header = document.querySelector("#main-header");
header.style.borderBottom = "10px solid black"
const childheader= document.getElementsByTagName("h2");
childheader[0].style.color= "green";
childheader[0].innerHTML="<b>Add Items</b>";
const list = document.querySelectorAll(".list-group-item");
list[2].style.backgroundColor="green"
for(i=0;i<list.length;i++){
    list[i].style.fontWeight="bold"
}