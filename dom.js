const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.getElementById("my-form");
const ul = document.getElementById("users")
form.addEventListener("submit", addinlocal);
function addinlocal(e) {
    e.preventDefault();

    var obj = { "username": username.value, "email": email.value, "phone": phone.value };
    
    axios.post("https://crudcrud.com/api/54a2404bdf944e6fa66a4b648c25abf6/appointments",obj)
    
    showonscreen(obj)
}

function showonscreen(obj){
            var li = document.createElement("li");
            var btn = document.createElement("button");
            var edit = document.createElement("button");
            edit.className= "edit"
            edit.appendChild(document.createTextNode("Edit"));
            btn.className = "delete"
            btn.appendChild(document.createTextNode("Delete"))
            li.appendChild(document.createTextNode(`Name = ${obj.username} Email = ${obj.email} 
            Phone No = ${obj.phone}`))
            li.appendChild(edit)
            li.append(btn)
            ul.appendChild(li)}



window.addEventListener("DOMContentLoaded",()=> {
    axios.get("https://crudcrud.com/api/54a2404bdf944e6fa66a4b648c25abf6/appointments")
    .then(data => {
        for(let i=0;i<data.data.length;i++){
            showonscreen(data.data[i])
        }
    })
})