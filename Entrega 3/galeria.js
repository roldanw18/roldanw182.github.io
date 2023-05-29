window.addEventListener("load", function(){
    var imagenes=document.querySelectorAll("img");
    var imagengrande=document.createElement("img");
    var mostrarfoto = (f)=>{
        switch(f.target.id){
            case"1":cambioImagen("1");break;
            case"2":cambioImagen("2");break;
            case"3":cambioImagen("3");break;
            case"4":cambioImagen("4");break;

        }
    }
    var cambioImagen=(id)=>{
        var marco=this.document.getElementById("marco");
        var source= document.getElementById(id).getAttribute("src");
        imagengrande.setAttribute("src",source);
        imagengrande.classList.add("expandir");
        marco.appendChild(imagengrande);
    }

    imagenes.forEach((id)=> {
        id.addEventListener("click",mostrarfoto)
    });
});