const username = document.getElementById("name");
const email = document.getElementById("email");
const phone= document.getElementById("phone");
const form = document.getElementById("my-form");
const ul = document.getElementById("users")
form.addEventListener("submit", addinlocal);
function addinlocal(e){
    e.preventDefault();
    var obj ={"username":username.value,"email":email.value,"phone":phone.value};
    var strobj = JSON.stringify(obj)
    localStorage.setItem(username.value, strobj);
    console.log(obj)
    var li = document.createElement("li");
    var btn = document.createElement("button");
    btn.className="delete"
    btn.appendChild(document.createTextNode("Delete"))
    li.appendChild(document.createTextNode(`Name = ${username.value} Email = ${email.value} 
    Phone No = ${phone.value}`))
    li.append(btn)
    ul.appendChild(li)
    btn.onclick=() =>{
        localStorage.removeItem(obj.username)
        ul.removeChild(li)
    }}

