
 //funcion para agregar canción si se cumple la validacin del formulario   
function validarFormulario(){
       // e.preventDefault();    //no se esta usando
        let artista = document.getElementById("artista").value;
        let titulo = document.getElementById("titulo").value;
    if (titulo == '' ){
        
        alert("Todos los campos deben ser obligatorios");
        return false;

    }
    else if (artista == '') {
        alert ("Todos los campos deben ser obligatorios")
        return false;

    }
   

    return true;

}


//funcion para agregar la cancion a la lista en la pagina web y en el localstore
 function agregarCancion (){
        if (validarFormulario ()== true){
            let artista = document.getElementById("artista").value;
            let titulo = document.getElementById("titulo").value;
            let listaMusic;
            if(localStorage.getItem("listaMusic") == null) {
                listaMusic = [];
            }else{
                listaMusic = JSON.parse(localStorage.getItem("listaMusic"))
            }
            listaMusic.push({
                artista:artista,
                titulo:titulo
        
            });
            localStorage.setItem("listaMusic" , JSON.stringify(listaMusic));

            mostrarMusic();
            document.getElementById("artista").value = ""
            document.getElementById("titulo").value = ""
            

        
    }
    
}


//funcion para mostrar en una lista la cancion y el artista escrito en los campos solicitados
function mostrarMusic() {
   
        let listaMusic;
        if(localStorage.getItem("listaMusic") == null) {
            listaMusic = [];
        }else{
            listaMusic = JSON.parse(localStorage.getItem("listaMusic"))
        }
        let li = "";
        listaMusic.forEach(function (element, index) {
            li += "<ul>";
            li += "<li>" + element.artista +"-"+ element.titulo +"</li>";
            li +="</ul>";
            
        });
        document.querySelector("#contenedorLista").innerHTML=li;   

}

document.onload = mostrarMusic();

