const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.getElementById("my-form");
const ul = document.getElementById("users")
form.addEventListener("submit", addinlocal);
function addinlocal(e) {
    e.preventDefault();
    var obj = { "username": username.value, "email": email.value, "phone": phone.value };
    // Calling post request on crucrud api
    axios.post("https://crudcrud.com/api/54a2404bdf944e6fa66a4b648c25abf6/appointments",obj)

    var li = document.createElement("li");
    var btn = document.createElement("button");
    var edit = document.createElement("button");
    edit.className= "edit"
    edit.appendChild(document.createTextNode("Edit"));
    btn.className = "delete"
    btn.appendChild(document.createTextNode("Delete"))
    li.appendChild(document.createTextNode(`Name = ${username.value} Email = ${email.value} 
    Phone No = ${phone.value}`))
    li.appendChild(edit)
    li.append(btn)
    ul.appendChild(li)
    // btn.onclick = () => {
    //     localStorage.removeItem(obj.username)
    //     ul.removeChild(li)
    // }
    edit.addEventListener("click",r);
    function r(e){
        e.preventDefault()
        if(e.target.className="edit"){
        localStorage.removeItem(obj.username);
        username.value=obj.username
        email.value= obj.email
        phone.value= obj.phone}}

        }