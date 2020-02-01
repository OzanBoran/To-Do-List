var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement(){
    var li = document.createElement("li");
    var btn= document.createElement("button");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        btn.appendChild(document.createTextNode("Delete"));
        li.appendChild(btn);
        input.value = "";
        btn.onclick = removeParent;
}

function addListAfterClick(){
    if(input.value.length > 0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(input.value.length > 0 && event.keyCode === 13){
        createListElement();
    }
}

function removeParent(evt){
	evt.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress);

