
//Declarar el arreglo global
let infoMusic=[];

//se declara el objeto 
const cancion = {
    titulo: "",
    autor: "",
    id:""
}
//declaro variable para editar/actualizar info
let editando = false;

//declarar las constantes para el formulario, input y botones
const formMusic = document.getElementById("formMusic");
const tituloImput = document.getElementById("titulo");
const artistaInput = document.getElementById("artista");
const btnAgregar = document.getElementById("btnAgregar");

//funcion al evento submit del formulario
formMusic.addEventListener("submit", validarFormulario);

// function validarFormulario(e){
//     e.preventDefault();

//     if (tituloImput.value === "" || artistaInput.value === ""){
//         alert("Todos los campos son obligatorios")
//     }
// }
    
function validarFormulario(e){
        e.preventDefault();
    if (tituloImput.value === '' ){
        
        alert("Todos los campos deben ser obligatorios");
        return false;

    }
    else if (artistaInput.value === '') {
        alert ("Todos los campos deben ser obligatorios")
        return false;

    }
    return true;
}
//funcion para agregar canción si se cumple la validacin del formulario
function agregarCancion (){
    if (validarFormulario ()== true){

    }
}


/*formMusic.addEventListener("submit", (e)=> {
    e.preventDefault()
    const tituloInput = formMusic.elements.titulo.value;
    //console.log(tituloInput.value)
    const artistaInput = formMusic.elements.artista.value;
   // console.log(artistaInput.value)
    addMusic(tituloInput, artistaInput);
 
})

//Declarar funcion para agregar libros en el arreglo, recibe datos desde el objeto
function agregarCancion  () {

   const newTitulo = document.getElementById("titulo_cancion").value;
    const newAutor = document.getElementById("nombre_artista").value;
    

//se guarda el objeto dentro del arreglo declarado anteriormente, con el metodo push se va guardando al final del arreglo
    infoCancion.push(cancion);  
}
  //  const formMusic = document.getElementById ("formMusic");
    const listContainer = document.getElementById("list");

   
const addMusic = (titulo,artista ) => { 
    const newMusic = document.createElement("li");
    const difNewMusic = document.createElement ("b");
    difNewMusic.append(titulo);
    newMusic.append(difNewMusic);
    //newMusic.append(list);
    newMusic.append(`- ${artista}`);
    listContainer.append(newMusic);
}

//listContainer.addEventListener("click", e => {
    //e.target.nodename === "li" && e.target.remove();
//}) */