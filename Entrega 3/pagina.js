var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var listado = document.getElementById("listado");


btn.onclick = function() {
    if (inputTarea.value == "") {
        return;
    }

    var elemento = inputTarea.value;
    var li = document.createElement("li");
  
    li.textContent = elemento;
    listado.appendChild(li);


    var btnEliminar = document.createElement("span");
    btnEliminar.textContent = "\u00d7";
    li.appendChild(btnEliminar);

    btnEliminar.onclick = function() {
        li.remove();
    
    }

}