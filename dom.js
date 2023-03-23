const form = document.getElementById("addForm");
const newlist = document.getElementById("items");
form.addEventListener("submit", additem);
function additem(e){
    e.preventDefault();
    const item = document.getElementById('item').value;
    const list = document.createElement('li');
    const edit = document.createElement("button");
    edit.className="btn btn-primary btn-sm float-right delete"
    edit.appendChild(document.createTextNode('Edit'))
    list.appendChild(edit)
    const btn = document.createElement('button');
    btn.className="btn btn-danger btn-sm float-right delete"
    btn.appendChild(document.createTextNode('x'))
    list.className="list-group-item"
    list.appendChild(document.createTextNode(item))
    list.appendChild(btn)
    newlist.appendChild(list)
}
newlist.addEventListener("click", deleteitem);
function deleteitem(e){
    if(e.target.classList.contains('delete')){
        let rli = e.target.parentElement
        newlist.removeChild(rli)
    }
}
