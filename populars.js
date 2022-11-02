let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnSiguiente.addEventListener("click", () => {
    if(pagina < 1000){
    pagina += 1;
    cargarPeliculas();
    }
});
btnAnterior.addEventListener("click", () => {
    if(pagina > 1){
    pagina -= 1;
    cargarPeliculas();
    }
});

const cargarPeliculas = async () => {

    try {
        const  respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b8f62f889387d08df32348acc7386c2a&language=es-MX&page=${pagina}`);
    
        //console.log(respuesta);

        //comprobar respuesta correcta
        if(respuesta.status === 200){
            const datos = await respuesta.json();


            let peliculas = "";
            datos.results.forEach(pelicula => {
                peliculas +=`
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                    
                    </div>
                `;

            });
            document.getElementById("contenedor").innerHTML = peliculas;

        }   else if(respuesta.status === 401){
               // console.log("Pusiste mal la llave");
        }   else if(respuesta.status === 404){
                //console.log("La pelicula que buscas no existe");
        }   else {
               // console.log("Hubo un error que no entendemos");
        }

    } catch(error){
       // console.log(error);
    }
    
}

cargarPeliculas();