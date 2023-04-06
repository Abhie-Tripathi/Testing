const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const ul = document.getElementById("users")
const submit = document.getElementById("submit")
submit.addEventListener("click", addinlocal);
function addinlocal(e) {
    var obj = { "username": username.value, "email": email.value, "phone": phone.value };
    axios.post("https://crudcrud.com/api/07ab24b575214d6b99042b94e4d6b54e/appoint",obj)
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
            ul.appendChild(li)
        btn.addEventListener("click",(e)=>{
            axios.delete(`https://crudcrud.com/api/07ab24b575214d6b99042b94e4d6b54e/appoint/${obj._id}`)
            .then(ul.removeChild(e.target.parentElement))

        })
        edit.addEventListener("click",(e)=>{
            axios.delete(`https://crudcrud.com/api/07ab24b575214d6b99042b94e4d6b54e/appoint/${obj._id}`)
            .then(()=>{username.value = obj.username
                email.value = obj.email
                phone.value = obj.phone
                ul.removeChild(e.target.parentElement)
                
            })
            })
            
        }




window.addEventListener("DOMContentLoaded",()=> {
   axios.get("https://crudcrud.com/api/07ab24b575214d6b99042b94e4d6b54e/appoint")
    .then(data => {
        for(let i=0;i<data.data.length;i++){
            showonscreen(data.data[i])
        }
    })
})