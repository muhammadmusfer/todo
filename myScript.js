function addItem(){
    
    var myvar = document.getElementById("inputField").value;
    if(myvar==""||myvar.trim().length==0){
        return;
    }
    var text = document.createTextNode(myvar);
    var listItem = document.createElement('li');
    listItem.appendChild(text);
    text.className="text";
    listItem.className="listItem";

    document.getElementById("tasklist").appendChild(listItem);

    document.getElementById("inputField").value='';

    var delbtn = document.createElement("button");
    var icon = document.createElement("i");
    delbtn.className="delbtn";
    icon.className = "fa fa-trash";
    delbtn.appendChild(icon);
    listItem.appendChild(delbtn);
    var divider = document.createElement("vl");
    divider.className="divider";
    listItem.appendChild(divider);
    var completebtn = document.createElement("button");
    completebtn.className = "cmpltbtn";
    var icon2 = document.createElement("i");
    icon2.className="fa fa-check";
    completebtn.appendChild(icon2);
    listItem.appendChild(completebtn);     

    
    delbtn.onclick =function(){
        var div = this.parentElement;
        div.parentNode.removeChild(div);
    }

    completebtn.onclick = function(){
        var list = this.parentElement;
        list.parentNode.removeChild(list);
        
        var doneli = document.createElement('li');
        doneli.appendChild(text);
        document.getElementById("donelist").appendChild(doneli);
        doneli.className = "listItem";
        doneli.appendChild(delbtn);

        var completedbtn = document.createElement("button");
        completedbtn.className = "cmpltdbtn";
        var icon3 = document.createElement("i");
        icon3.className="fa fa-check-circle";
        completedbtn.appendChild(icon3);
        doneli.appendChild(completedbtn);
    }
}