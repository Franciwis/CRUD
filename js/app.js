
//Declarar el arreglo global
// let infoMusic=[];

// //se declara el objeto 
// const cancion = {
//     titulo: "",
//     autor: "",
//    // id:""
// }
// //declaro variable para editar/actualizar info
// let editando = false;

// //declarar las constantes para el formulario, input y botones
// const formMusic = document.getElementById("formMusic");
// const tituloImput = document.getElementById("titulo");
// const artistaInput = document.getElementById("artista");
// const btnAgregar = document.getElementById("btnAgregar");

//funcion al evento submit del formulario
// formMusic.addEventListener("submit", validarFormulario);
    
function validarFormulario(){
       // e.preventDefault();
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


//funcion para agregar canción si se cumple la validacin del formulario
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
    
   // const listaMusic = musica;
   
    //listaMusic.push({...cancion});

    


}

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
            li += "<button>"
            li +="</ul>";
        });
        document.querySelector("#contenedorLista").innerHTML=li;   

//     const listaMusic = document.getElementById("list");

//     listaMusic.forEach(musica => {
//         const {titulo, autor} = musica;
        
//         const li = document.createElement("li");
//         li.textContent = `${titulo} - ${artista}`;
//         li.dataset = titulo;
        
//         const editarBtn = document.createElement("button");
//         //editarbtn.onclick = () => cargarCancion(musica);
//         editarBtn.textContent = "Editar";
//         editarBtn.classList.add("btn" , "btn-editar");
//         li.append(editarBtn);

//         const eliminarBtn = document.createElement("button");
//         //eliminarBt.onclick = () => eliminarCancion(id);
//         eliminarBtn.textContent = "Editar";
//         eliminarBtn.classList.add("btn" , "btn-eliminar");
//         li.append(eliminarBtn);

//         const hr = document.createElement("hr");

//         li.appendChild(li);
//         li.appendChild(hr);
//     });
}

document.onload = mostrarMusic();



// //!este funciona

// formMusic.addEventListener("submit", (e)=> {
//     e.preventDefault()
//     const tituloInput = formMusic.elements.titulo.value;
//     //console.log(tituloInput.value)
//     const artistaInput = formMusic.elements.artista.value;
//    // console.log(artistaInput.value)
//     addMusic(tituloInput, artistaInput);
 
// })

// //Declarar funcion para agregar cancion en el arreglo, recibe datos desde el objeto
// function agregarCancion  () {

//     const newTitulo = document.getElementById("titulo_cancion");
//     const newAutor = document.getElementById("nombre_artista");
    

// //se guarda el objeto dentro del arreglo declarado anteriormente, con el metodo push se va guardando al final del arreglo
//     infoCancion.push(cancion); 
   
// }
//   //  const formMusic = document.getElementById ("formMusic");
//     const listContainer = document.getElementById("list");

   
// const addMusic = (titulo,artista ) => { 
//     const newMusic = document.createElement("li");
//     const difNewMusic = document.createElement ("b");
//     difNewMusic.append(titulo);
//     newMusic.append(difNewMusic);
//     //newMusic.append(list);
//     newMusic.append(`- ${artista}`);
//     listContainer.append(newMusic);
// }

// //listContainer.addEventListener("click", e => {
//     //e.target.nodename === "li" && e.target.remove();
// //}) 