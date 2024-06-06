

document.addEventListener("DOMContentLoaded", () => {
    

    //const aux = document.getElementById('titulo');
    fetch("http://localhost:3000/generos")
        .then((respuesta) => respuesta.json())
        .then((data) => {
            //cargar el combo de genero del formulario de contactos
            console.log(data)
        })
})

