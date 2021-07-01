
function myfun(){
           
    var myvar = document.getElementById("inputField").value;
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
    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
         close[i].onclick = function() {
        var div = this.parentElement;
        div.parentNode.removeChild(div);
    }
      
   }
}