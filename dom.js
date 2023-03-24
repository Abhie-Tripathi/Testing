const username = document.getElementById("name");
const email = document.getElementById("email");
const phone= document.getElementById("phone");
const form = document.getElementById("my-form");
const ul = document.getElementById("users")
form.addEventListener("submit", addinlocal);
function addinlocal(e){
    e.preventDefault();
    var details ={"'username":username.value,"email":email.value,"phone":phone.value};
    var strdetails = JSON.stringify(details)
    localStorage.setItem(username.value, strdetails);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(`Name = ${username.value} Email = ${email.value} 
    Phone No = ${phone.value}`))
    ul.appendChild(li)
    var details =""
    

}