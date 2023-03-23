const form = document.getElementById("addForm");
const newlist = document.getElementById("items");
const desciption = document.createElement("input");
desciption.className="form-control mr-2";
desciption.id= "description";
desciption.setAttribute("type","text");
form.insertBefore(desciption, form.lastElementChild);


form.addEventListener("submit", additem);
function additem(e){
    e.preventDefault();
    const item = document.getElementById('item').value;
    const list = document.createElement('li');
    const btn = document.createElement('button');
    btn.className="btn btn-danger btn-sm float-right delete"
    btn.appendChild(document.createTextNode('x'))
    list.className="list-group-item"
    list.appendChild(document.createTextNode(item))
    
    li = document.createElement("br")
    list.appendChild(li)
    list.appendChild(document.createTextNode(desciption.value))
    
    
    
    list.appendChild(btn)
    const edit = document.createElement("button");
    edit.className="btn btn-primary btn-sm float-right"
    edit.appendChild(document.createTextNode('Edit'))
    list.appendChild(edit)
    newlist.appendChild(list)
}
newlist.addEventListener("click", deleteitem);
function deleteitem(e){
    if(e.target.classList.contains('delete')){
        let rli = e.target.parentElement
        newlist.removeChild(rli)
    }
}
const filter = document.getElementById("filter");
filter.addEventListener("keyup",filteritems);
function filteritems(e){
    var text = e.target.value.toLowerCase()
    var items = newlist.getElementsByTagName("li");
    console.log(items)
    Array.from(items).forEach(function(item){
        var itemname = item.firstChild.textContent;
        if(item.childNodes[2]!=undefined){
            var itemnode = item.childNodes[2].textContent
        }
        else{
            var itemnode = ""
        }
        console.log(itemnode)
        console.log(itemname)
    
        if(itemname.toLowerCase().indexOf(text) != -1 || itemnode.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display= 'none'
        }
     } )}


