// parentElement
// listitem=document.querySelector("#header-title");
// console.log(listitem.parentElement)
// listitem.parentElement.style.backgroundColor="red"
// lastelementchild
// listitem=document.querySelector("ul");
// console.log(listitem.lastElementChild)
// listitem.lastElementChild.style.backgroundColor="red"
// lastChild
// listitem=document.querySelector("ul");
// console.log(listitem.lastChild) //logs basically the white spaces
// listitem.lastChild.style.backgroundColor="red"
// firstElementChild
// listitem=document.querySelector("ul");
// console.log(listitem.firstElementChild)
// listitem.firstElementChild.style.backgroundColor="red"
// firstChild
// listitem=document.querySelector("ul");
// console.log(listitem.firstChild)//logs the white spaces 
// listitem.firstChild.style.backgroundColor="red"
// nextSiblings
// listitem=document.querySelector("h2");
// console.log(listitem.nextSibling)//white spaces
// listitem.nextSibling.style.color="red"
//nextElementSibling
// listitem=document.querySelector("h2");
// console.log(listitem.nextElementSibling)
// listitem.nextElementSibling.style.backgroundColor="red"
// previousSibling
// listitem=document.querySelector("ul");
// console.log(listitem.previousElementSibling)
// listitem.previousElementSibling.style.backgroundColor="red"
// create Element
const newdiv=document.createElement("div");
newdiv.className = "div"
newdiv.id="div1"
// setAttribute
newdiv.setAttribute('title',"attribute");
// create text node
const divtext = document.createTextNode("Hello");
// append text node to element
newdiv.appendChild(divtext)
// selecting where to insert
const cont = document.querySelector("header .container");
// selecting Element to be placed after
const h = document.querySelector("header h1");
// inserting newdiv before h
cont.insertBefore(newdiv,h);
const newdiv1=document.createElement("div");
const divtext1 = document.createTextNode("Hello");
newdiv1.appendChild(divtext1)

const list = document.querySelector("#items");

const listitem1=document.querySelector("li");

list.insertBefore(newdiv1,listitem1);

