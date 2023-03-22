const header = document.querySelector("#main-header");
header.style.borderBottom = "10px solid black"
const childheader= document.getElementsByTagName("h2");
childheader[0].style.color= "green";
childheader[0].innerHTML="<b>Add Items</b>";
const list = document.getElementsByClassName("list-group-item");
list[2].style.backgroundColor="green"
for(let i=0;i<list.length;i++){
    list[i].style.fontWeight="bold"
    // which does't apply to item 5 because it does not have class
}
const list2=document.getElementsByTagName("li");
for(let i=0;i<list2.length;i++){
    list2[i].style.fontWeight="bold"
// which does apply to item 5 because it has tagname li
}

