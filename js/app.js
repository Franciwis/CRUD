
//funcion para agregar canción si se cumple la validacin del formulario   
function validarFormulario() {
    // e.preventDefault();    //no se esta usando
    let artista = document.getElementById("artista").value;
    let titulo = document.getElementById("titulo").value;
    if (titulo == '') {

        alert("Todos los campos deben ser obligatorios");
        return false;

    }
    else if (artista == '') {
        alert("Todos los campos deben ser obligatorios")
        return false;

    }


    return true;

}


//funcion para agregar la cancion a la lista en la pagina web y en el localstore
function agregarCancion() {
    if (validarFormulario() == true) {
        let artista = document.getElementById("artista").value;
        let titulo = document.getElementById("titulo").value;
        let listaMusic;
        if (localStorage.getItem("listaMusic") == null) {
            listaMusic = [];
        } else {
            listaMusic = JSON.parse(localStorage.getItem("listaMusic"))
        }
        listaMusic.push({
            artista: artista,
            titulo: titulo

        });

        localStorage.setItem("listaMusic", JSON.stringify(listaMusic));

        mostrarMusic();
        // document.getElementById("artista").value = ""
        // document.getElementById("titulo").value = ""



    }

}


//funcion para mostrar en una lista la cancion y el artista escrito en los campos solicitados
function mostrarMusic() {

    let listaMusic;
    if (localStorage.getItem("listaMusic") == null) {
        listaMusic = [];
    } else {
        listaMusic = JSON.parse(localStorage.getItem("listaMusic"))
    }
    let tform = "";

    tform += "<tr>";
    tform += "<th>" + "Titulo" + "</th>";
    tform += "<th>" + "Artista" + "</th>";
    tform += "<th>" + "Opciones" + "</th>";
    tform += "</tr>";

    listaMusic.forEach(function (element, index) {
        var editButton = document.createElement("button");
        editButton.innerHTML = "Editar";

        tform += "<tr>";
        tform += "<td>" + element.titulo + "</td>";
        tform += "<td>" + element.artista + "</td>";
        tform += "<td class='contBoton'>";
        //el codigo de abajo crear los botones y se les entrega el atributo onclick con la funcion a ejecutar, junto con la funcion se especifica el indice
        tform += "<button class='boton' onclick=modificarForm(" + index + ") >Editar</button>" + "<button class='botonDel' onclick=eliminarLista(" + index + ") data-index='" + index + "'>Eliminar</button>";
        tform += "</td>";
        tform += "</tr>";

    });



    document.querySelector("#contenedorTable").innerHTML = tform;


}



function modificarForm(index) {
    let indice = index;
    let listaMusic;
    listaMusic = JSON.parse(localStorage.getItem("listaMusic"));

    let btnModificar = document.getElementById("btnAgregar");
    let titulomod = document.getElementById("titulo");
    let artistamod = document.getElementById("artista");
    let formMod = document.getElementById("contFormMusic");
    let h1Mod = document.getElementById("h1Tittle");

    if (formMod.className === "modForm") {
        titulomod.setAttribute("value", listaMusic[indice].titulo);
        artistamod.setAttribute("value", listaMusic[indice].artista);
        btnModificar.setAttribute("onclick", "editarLista(" + indice + ")");
    } else {
        //FRAN
        let btnCancelar = document.createElement("button");
        btnCancelar.innerHTML = "Cancelar";
        btnCancelar.setAttribute("class", "botonCan");
        btnCancelar.setAttribute("onclick", "mostrarMusic()");

        h1Mod.innerHTML = "Modificar Musica"
        titulomod.setAttribute("value", listaMusic[indice].titulo);
        artistamod.setAttribute("value", listaMusic[indice].artista);

        formMod.setAttribute("class", "formModif");

        btnModificar.setAttribute("onclick", "editarLista(" + indice + ")");
        btnModificar.innerHTML = "Modificar";
        

        document.querySelector("#formMusic").appendChild(btnCancelar);
    }


}

function editarLista(index) {

    let indice = index;

    if (validarFormulario() == true) {
        let artista = document.getElementById("artista").value;
        let titulo = document.getElementById("titulo").value;
        let listaMusic;
        if (localStorage.getItem("listaMusic") == null) {
            listaMusic = [];
        } else {
            listaMusic = JSON.parse(localStorage.getItem("listaMusic"))
        }
        listaMusic[indice] = ({
            artista: artista,
            titulo: titulo

        });

        localStorage.setItem("listaMusic", JSON.stringify(listaMusic));

        mostrarMusic();
        document.getElementById("artista").value = ""
        document.getElementById("titulo").value = ""



    }

}

function eliminarLista(index) {

    var resultado = window.confirm("¿Estás seguro de que deseas eliminar el registro?");

    if (resultado) {

    let listaMusic;
    listaMusic = JSON.parse(localStorage.getItem("listaMusic"));
    let indice = index;

    listaMusic.splice(indice, 1);

    localStorage.setItem("listaMusic", JSON.stringify(listaMusic));


    document.onload = mostrarMusic();

    }

}

document.onload = mostrarMusic();

