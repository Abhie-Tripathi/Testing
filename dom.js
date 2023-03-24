const username = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("my-form");
form.addEventListener("submit", addinlocal);
function addinlocal(e){
    localStorage.setItem("name",username.value);
    localStorage.setItem("email",email.value);
}


