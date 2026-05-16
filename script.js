const peliculas = [
    {"imdbID":"231035","Title":"Violet Evergarden Movie","Year":"2020","Type":"Drama","Poster":"https://cdn.myanimelist.net/images/anime/1825/110716.jpg","description":"Han pasado varios años desde el final de la Primera Guerra Mundial. A medida que se sigue construyendo la torre de radio en Leidenschaftlich...","Ubication":"POPCINEMA","Estado":false,"Fec_Registro":"2025-08-29T23:39:05.023Z"},
    {"imdbID":"29082025","Title":"Rápido y furioso","Year":"2001","Type":"Accion","Poster":"https://hips.hearstapps.com/hmg-prod/images/fast-and-furious-1-1564933929.jpg?crop=1xw:1xh;center,top&resize=980:*","description":"Una misteriosa banda de delincuentes...","Ubication":"Guastatoya","Estado":true,"Fec_Registro":"2025-08-29T23:00:29.773Z"},
    {"imdbID":"50","Title":"Kingsman","Year":"2014","Type":"Acción","Poster":"https://th.bing.com/th/id/R.65787ae015b3f841c132ebce37f68c7c","description":"Cuando un agente secreto de Kingsman muere...","Ubication":"POPCINEMA","Estado":false,"Fec_Registro":"2025-08-29T21:12:22.900Z"},
    {"imdbID":"54","Title":"50 SOMBRAS DE GREY","Year":"2015","Type":"MAYORES 18","Poster":"https://es.web.img3.acsta.net/pictures/14/11/14/11/16/546987.jpg","description":"PASION INTENSA GG","Ubication":"GUASTATOYA","Estado":true,"Fec_Registro":"2025-08-30T09:52:51.980Z"},
    {"imdbID":"5555555555","Title":"El Conjuro 4","Year":"2025","Type":"Terror","Poster":"https://static.cinepolis.com/img/peliculas/50733/1/1/50733.jpg","description":"El Conjuro: Último Ritos ofrece otro emocionante capítulo...","Ubication":"POPCINEMA","Estado":false,"Fec_Registro":"2025-08-29T09:33:27.783Z"},
    {"imdbID":"555562244","Title":"Superman","Year":"2025","Type":"Acción/Suspenso","Poster":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFgxfqC60z1VjcC151bjgVNl9RhH9Tg6N8jDMkqQN0zsMCwLbV","description":"Un superhéroe se reconcilia con su herencia...","Ubication":"CHIMALTENANGO","Estado":true,"Fec_Registro":"2025-08-30T10:59:55.683Z"},
    {"imdbID":"72344","Title":"Shrek","Year":"2004","Type":"Infantil/Comedia","Poster":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQkYPkJwr8Ce5OCE_lAEqsdRwk8I4xF_phEA&s","description":"Woody, el juguete favorito de Andy...","Ubication":"POPCINEMA","Estado":true,"Fec_Registro":"2025-08-30T00:18:31.517Z"},
    {"imdbID":"76542","Title":"Toy Story","Year":"1995","Type":"Infantil/Comedia","Poster":"https://media.tenor.com/XcBhzswyUV0AAAAM/e.gif","description":"Woody, el juguete favorito de Andy...","Ubication":"POPCINEMA","Estado":false,"Fec_Registro":"2025-08-30T00:13:47.053Z"},
    {"imdbID":"76543","Title":"Megamente","Year":"2010","Type":"Infantil/Comedia","Poster":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAh-kcOK1B-LDz8SCZaeX9Klrho15sgdiu0w&s","description":"El super villano Megamente...","Ubication":"POPCINEMA","Estado":true,"Fec_Registro":"2025-08-30T00:11:30.720Z"},
    {"imdbID":"80000","Title":"Titanes del Atlantico","Year":"2014","Type":"Ciencia Ficcion","Poster":"https://imagenes.20minutos.es/files/image_640_auto/uploads/imagenes/2018/03/26/3135555.jpg","description":"La humanidad se transforma en robots gigantes...","Ubication":"POPCINEMA","Estado":true,"Fec_Registro":"2025-08-28T11:09:12.260Z"},
    {"imdbID":"80005","Title":"Iron Man","Year":"2008","Type":"Acción","Poster":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT95Db6V4jzEkaZjnWEV5n0qHu1a2InkUgafj3lWQDRxQIxYvL3","description":"Tony Stark inventa un traje armado...","Ubication":"chimaltenango","Estado":true,"Fec_Registro":"2025-08-30T10:28:34.590Z"},
    {"imdbID":"800096","Title":"YOUR NAME","Year":"2017","Type":"DRAMA","Poster":"https://meowmeowguatemala.com/wp-content/uploads/2023/03/Your-name-vol.01.jpg","description":"Historia de Taki y Mitsuha...","Ubication":"SANTA CLARA","Estado":false,"Fec_Registro":"2025-08-28T23:45:32.860Z"},
    {"imdbID":"AL032","Title":"RAPIDOS Y CURIOSOS","Year":"2022","Type":"Aventura","Poster":"https://static.boredpanda.com/blog/wp-content/uploads/2020/02/super-bowl-ad-jason-momoa-rocket-mortgage-1-8-5e37c7d979e87__700.jpg","description":"Entre mas rapidos, mas curiosos...","Ubication":"PORTALES","Estado":true,"Fec_Registro":"2023-08-11T00:45:18.057Z"},
    {"imdbID":"DV2003","Title":"Jurassic World Rebirth","Year":"2025","Type":"Acción","Poster":"https://dx35vtwkllhj9.cloudfront.net/universalstudios/jurassic-world-rebirth/images/regions/us/updates1/onesheet.jpg","description":"Misión secreta con dinosaurios...","Ubication":"Oakland mall","Estado":true,"Fec_Registro":"2025-08-29T15:13:56.387Z"},
    {"imdbID":"LB740","Title":"Los Simpson: La película","Year":"2007","Type":"Comedia/Aventura","Poster":"https://images.justwatch.com/poster/307275623/s718/los-simpson-la-pelicula.jpg","description":"Homero y una catástrofe mundial...","Ubication":"PRADERA CHIMALTENANGO","Estado":true,"Fec_Registro":"2025-08-30T21:28:44.047Z"},
    {"imdbID":"mjpa","Title":"son como niños","Year":"2001","Type":"comedia","Poster":"https://image.tmdb.org/t/p/original/poUK5Gg7IkPokaBTjadzjPfJgKw.jpg","description":"Grupo de amigos...","Ubication":"miraflores","Estado":true,"Fec_Registro":"2025-08-29T20:09:21.130Z"},
    {"imdbID":"NU265","Title":"La Primera Vez Como Si Fuera","Year":"2004","Type":"Comedia/Romance","Poster":"https://m.media-amazon.com/images/M/MV5BOWE0NjgxYjQtYTg5ZC00OWE2LWFmMjItZDdhODcwMmE3MGRkXkEyXkFqcGc@._V1_.jpg","description":"Henry conoce a Lucy...","Ubication":"ZONA PRADERA","Estado":true,"Fec_Registro":"2025-08-29T20:47:09.907Z"},
    {"imdbID":"PR500","Title":"ALARIDO","Year":"2022","Type":"Drama","Poster":"https://static.cinepolis.com/img/peliculas/39933/1/1/39933.jpg","description":"Una madre atrapada protege a sus hijos...","Ubication":"OKLAN","Estado":false,"Fec_Registro":"2023-08-11T16:07:21.640Z"},
    {"imdbID":"XI460","Title":"Demon Slayer: MUGEN TRAIN","Year":"2020","Type":"Drama","Poster":"https://m.media-amazon.com/images/M/MV5BOWRhMzU3YWEtYTlkMC00ZmUwLTk4ZmMtMDE2YTFlNDFiNjhmXkEyXkFqcGc@._V1_.jpg","description":"Hola tanjuro ??","Ubication":"Oklan","Estado":true,"Fec_Registro":"2025-08-30T21:52:51.047Z"}
];

// Imagen de respaldo global por si algún link falla
const IMAGEN_RESPALDO = 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=600&auto=format&fit=crop';

// Captura e inicialización de elementos del DOM
const DOM = {
    contenedor: document.getElementById("peliculas"),
    filtroUbicacion: document.getElementById("filtroUbicacion"),
    buscarGenero: document.getElementById("buscarGenero"),
    contador: document.getElementById("contadorResultados"),
    modalInstance: new bootstrap.Modal(document.getElementById('movieDetailModal')),
    modalTitle: document.getElementById('modalTitle'),
    modalPoster: document.getElementById('modalPoster'),
    modalBgBlur: document.getElementById('modalBgBlur'),
    modalDescription: document.getElementById('modalDescription'),
    modalBadges: document.getElementById('modalBadgesContainer')
};

// Eventos de inicio de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    cargarUbicaciones();
    cargarGeneros();
    mostrarPeliculas();
    
    DOM.filtroUbicacion.addEventListener("change", mostrarPeliculas);
    DOM.buscarGenero.addEventListener("change", mostrarPeliculas);
});

// Helper para normalizar textos duplicados o mal escritos en los datos fuente
function capitalizarTexto(str) {
    if (!str) return "";
    return str.trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

// Carga las opciones únicas en el select de ubicaciones
function cargarUbicaciones() {
    const normalizadas = peliculas.map(p => capitalizarTexto(p.Ubication)).filter(Boolean);
    const unicas = [...new Set(normalizadas)].sort();

    unicas.forEach(ubi => {
        const option = document.createElement("option");
        option.value = ubi.toLowerCase();
        option.textContent = ubi;
        DOM.filtroUbicacion.appendChild(option);
    });
}

// Carga las opciones únicas en el select de géneros
function cargarGeneros() {
    const normalizadas = peliculas.map(p => capitalizarTexto(p.Type)).filter(Boolean);
    const unicas = [...new Set(normalizadas)].sort();

    unicas.forEach(gen => {
        const option = document.createElement("option");
        option.value = gen.toLowerCase();
        option.textContent = gen;
        DOM.buscarGenero.appendChild(option);
    });
}

// Valida las URLs y parcha específicamente la rota de Kingsman
function corregirPoster(peli) {
    if (peli.Title.toLowerCase().includes("kingsman")) {
        return "https://m.media-amazon.com/images/M/MV5BMjA5NTY2MjM2NF5BMl5BanBnXkFtZTgwOTA5MTY5NDE@._V1_.jpg";
    }
    return (peli.Poster && peli.Poster.startsWith('http')) ? peli.Poster : IMAGEN_RESPALDO;
}

// Renderiza dinámicamente las tarjetas filtradas en pantalla
function mostrarPeliculas() {
    DOM.contenedor.innerHTML = "";

    const ubiSeleccionada = DOM.filtroUbicacion.value;
    const genSeleccionado = DOM.buscarGenero.value;

    const filtradas = peliculas.filter(peli => {
        const ubiPeli = (peli.Ubication || "").toLowerCase();
        const genPeli = (peli.Type || "").toLowerCase();

        const okUbicacion = ubiSeleccionada === "" || ubiPeli.includes(ubiSeleccionada);
        const okGenero = genSeleccionado === "" || genPeli.includes(genSeleccionado);

        return okUbicacion && okGenero;
    });

    // Actualizar el texto del contador dinámico
    DOM.contador.textContent = `${filtradas.length} película${filtradas.length !== 1 ? 's' : ''} encontrada${filtradas.length !== 1 ? 's' : ''}`;

    if (filtradas.length === 0) {
        DOM.contenedor.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-muted fs-5">🎬 No hay películas disponibles para los filtros seleccionados.</p>
            </div>
        `;
        return;
    }

    filtradas.forEach((peli, index) => {
        const estadoTexto = peli.Estado ? "En cartelera" : "No disponible";
        const estadoClase = peli.Estado ? "" : "inactive";
        const posterValidado = corregirPoster(peli);
        
        const tituloStr = capitalizarTexto(peli.Title);
        const ubicacionStr = capitalizarTexto(peli.Ubication);
        const generoStr = capitalizarTexto(peli.Type);

        const col = document.createElement("div");
        col.classList.add("col");
        
        col.innerHTML = `
            <div class="movie-card-wrapper">
                <div class="card movie-card">
                    <span class="badge-status ${estadoClase}">${estadoTexto}</span>
                    <div class="poster-container">
                        <img src="${posterValidado}" alt="${tituloStr}" loading="lazy" onerror="this.onerror=null; this.src='${IMAGEN_RESPALDO}';">
                        <div class="hover-overlay">
                            <span class="overlay-btn">🔎 Ver detalles</span>
                        </div>
                    </div>
                    <div class="card-content-body">
                        <h5 class="movie-title-short" title="${tituloStr}">${tituloStr}</h5>
                        <div class="meta-row">
                            <span class="meta-year">${peli.Year} • ${generoStr}</span>
                            <span class="meta-location" title="${ubicacionStr}">📍 ${ubicacionStr}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Evento click inyectado para disparar el modal inmersivo
        col.querySelector('.movie-card-wrapper').addEventListener('click', () => abrirModal(peli, posterValidado));
        DOM.contenedor.appendChild(col);
    });
}

// Despliega el modal inmersivo con efecto blur dinámico
function abrirModal(peli, urlPoster) {
    const tituloStr = capitalizarTexto(peli.Title);
    
    DOM.modalTitle.textContent = tituloStr;
    DOM.modalPoster.src = urlPoster;
    DOM.modalBgBlur.style.backgroundImage = `url('${urlPoster}')`;
    DOM.modalDescription.textContent = peli.description || "Este complejo no cuenta con una sinopsis oficial actualmente.";

    DOM.modalBadges.innerHTML = `
        <span class="modal-badge-info genre">${capitalizarTexto(peli.Type)}</span>
        <span class="modal-badge-info year">Año ${peli.Year}</span>
        <span class="modal-badge-info location">📍 ${capitalizarTexto(peli.Ubication)}</span>
    `;

    DOM.modalInstance.show();
}