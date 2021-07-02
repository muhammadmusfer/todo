
function myfun(i){
           
    var myvar = document.getElementById(`inputField${i}`).value;
    if(myvar==""||myvar.trim().length==0){
        return;
    }
    var t = document.createTextNode(myvar);
    var listItem = document.createElement('li');
    listItem.appendChild(t);
    t.className="text";
    listItem.className="listItem";

    document.getElementById("list").appendChild(listItem);

    document.getElementById(`inputField${i}`).value='';
    var button = document.createElement("button");
    var txt = document.createTextNode("DEL");
   
    button.className = "del";
    button.appendChild(txt);
    listItem.appendChild(button);
    
    //after this line is my new code
    button.onclick = () => {
        var div = this.parentElement;
        console.log(div);
        div.parentNode.removeChild(div);
    }
    
}

function delAll(){
    document.getElementById('list').innerHTML='';
}

function switchScreen(){
    document.getElementById("mainScreen").style.display="none";
    document.getElementById("inputField0").value='';
    document.getElementById("secondScreen").style.display="block";
}

function back(){
    document.getElementById("secondScreen").style.display="none";
    document.getElementById("mainScreen").style.display="block";
    document.getElementById("inputField1").value='';
    document.getElementById("inputField2").value='';
    document.getElementById("inputField3").value='';
}

function addAll(){
    var var1 = document.getElementById("inputField1").value;
    var var2 = document.getElementById("inputField2").value;
    var var3 = document.getElementById("inputField3").value;
    
    if(!((var1==""||var1.trim().length==0)&&(var2==""||var2.trim().length==0)&&(var3==""||var3.trim().length==0))){
    for(i=1;i<=3;i++){
        myfun(i);  
    }
    document.getElementById("secondScreen").style.display="none";
    document.getElementById("mainScreen").style.display="block";
    }
    else{
        alert("Enter values");
    }   
}