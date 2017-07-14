var addBtn = document.querySelector(".btn");
addBtn.addEventListener("click", function ()
{
	var li = document.createElement("li");
	var list = document.querySelector (".list");
	var input = document.querySelector (".text");
	li.innerHTML = input.value;
	list.appendChild(li);	
},false )

