const username = document.getElementById("name");
const email = document.getElementById("email");
const phone= document.getElementById("phone");
const form = document.getElementById("my-form");
const ul = document.getElementById("users")
form.addEventListener("submit", addinlocal);
function addinlocal(e){
    e.preventDefault();
    var details ={"username":username.value,"email":email.value,"phone":phone.value};
    var strdetails = JSON.stringify(details)
    localStorage.setItem(username.value, strdetails);
    var li = document.createElement("li");
    var btn = document.createElement("button");
    btn.className="delete"
    btn.appendChild(document.createTextNode("Delete"))
    li.appendChild(document.createTextNode(`Name = ${username.value} Email = ${email.value} 
    Phone No = ${phone.value}`))
    li.append(btn)
    ul.appendChild(li)
    ul.addEventListener("click", deletelist);
}
function deletelist(e){
    if(e.target.className= "delete"){
        ul.removeChild(e.target.parentElement)
        localStorage.removeItem(username.value)
    
    }
}