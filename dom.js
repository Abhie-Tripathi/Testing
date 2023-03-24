// const username = document.getElementById("name");
// const email = document.getElementById("email");
// const form = document.getElementById("my-form");
// form.addEventListener("submit", addinlocal);
// function addinlocal(e){
//     localStorage.setItem("name",username.value);
//     localStorage.setItem("email",email.value);
// }
var obj={user:"Abhinav",email:"Abhiiii.tripathi@gmail.com"}
var stringobj=JSON.stringify(obj);
localStorage.setItem("obj", stringobj);
console.log(localStorage.getItem("obj"));
var destingobh = JSON.parse(localStorage.getItem("obj"));
console.log(destingobh)
