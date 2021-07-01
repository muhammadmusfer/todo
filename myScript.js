
function myfun(){
           
    var myvar = document.getElementById("inputField").value;
    if(myvar==""||myvar.trim().length==0){
        alert("Enter message");
        return;
    }
    var t = document.createTextNode(myvar);
    var listItem = document.createElement('li');
    listItem.appendChild(t);
    t.className="text";
    listItem.className="listItem";

    document.getElementById("list").appendChild(listItem);

    document.getElementById("inputField").value='';
    var button = document.createElement("button");
    var txt = document.createTextNode("DEL");
   
    button.className = "close";
    button.appendChild(txt);
    listItem.appendChild(button);
    
    //after this line is my new code
    button.onclick = function() {
        var div = this.parentElement;
        div.parentNode.removeChild(div);
    }
    
}

function delAll(){
    document.getElementById('list').innerHTML='';
}