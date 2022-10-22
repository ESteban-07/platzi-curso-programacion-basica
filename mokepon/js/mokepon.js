// VARIABLES GLOBALES
const seccionMascota = document.getElementById('seleccionar-mascota');
const seccionAtaques = document.getElementById('seleccionar-ataque');
const contenedorBotones = document.getElementById('contenedor-botones');
const btnReiniciarJuego = document.getElementById('boton-reiniciar');

const mostrarMensaje = document.getElementById('resultado');

const spanMascotaJugador = document.getElementById('mascota-jugador');

const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');

const ataquesJugador = document.getElementById('ataques-jugador');
const ataquesEnemigo = document.getElementById('ataques-enemigo');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');

let mokepones = [];
let mascotaJugador;
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
const ataques = ['FUEGO 🔥', 'AGUA 💧', 'TIERRA 🌱'];
let mascotas;
let opcionDeMokepones;
let ataquesMokepon;
let btnFuego;
let btnAgua;
let btnTierra;

// VARIABLE TIPO BOLEANA QUE NOS PERMITE VALIDAR SI UNA MASCOTA FUE SELECCIONADA
let mascotaSeleccionada = false;

// CREANDO LA CLASE
class Mokepon {
    constructor(nombre, imagen, vida) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.vida = vida;
        this.ataques = [];
    }
}

// OBJETOS INSTANCIA DE LA CLASE MOKEPON
let hipodoge = new Mokepon(
    'Hipodoge',
    './assets/mokepons_mokepon_hipodoge_attack.png',
    5
);

let capipepo = new Mokepon(
    'Capipepo',
    './assets/mokepons_mokepon_capipepo_attack.png',
    5
);

let ratigueya = new Mokepon(
    'Ratigueya',
    './assets/mokepons_mokepon_ratigueya_attack.png',
    5
);

// OBJETOS LITERALES CONSTRUIDOS SIN CLASES
hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
);

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' }
);

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' }
);

mokepones.push(hipodoge, capipepo, ratigueya);

// FUNCIÓN PARA INCIAR EL JUEGO
function iniciarJuego() {
    // OCULTAR SECCION DE ATAQUES
    seccionAtaques.style.display = 'none';

    // INSERTANDO MASCOTAS DESDE JS AL HTML
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
                <img
                    src=${mokepon.imagen}
                    alt=${mokepon.nombre}
                />
        </label>
        `;

        contenedorTarjetas.innerHTML += opcionDeMokepones;

        // UNA VEZ SE INYECTEN LOS MOKEPONES EN EL HTML, SUS INPUTS
        // SERÁN ALMACENADOS EN LA VARIABLE 'MASCOTAS'
        mascotas = document.querySelectorAll('input[type="radio"]');
    });

    // ALMACENANDO INPUT MASCOTAS UNA VEZ SE HALLAN CREADO EN EL HTML

    // EVENTO DEL BOTON SELECCIONAR MASCOTA JUGADOR
    let btnMascotaJugador = document.getElementById('boton-mascota');

    btnMascotaJugador.addEventListener('click', () => {
        seleccionarMascotaJugador();

        // SI UNA MASCOTA FUE SELECCIONADA Y EL USUARIO APRETÓ EL BOTÓN
        if (mascotaSeleccionada) {
            // DESPLEGANDO LA SECCION DE ATAQUES
            seccionAtaques.style.display = 'flex';
        }
    });

    btnReiniciarJuego.addEventListener('click', reiniciarJuego);
}

// FUNCIONES PARA MASCOTAS
function seleccionarMascotaJugador() {
    for (let mascota of mascotas) {
        if (mascota.checked) {
            mascotaJugador = mascota.id;
            spanMascotaJugador.innerText = mascotaJugador;

            extraerAtaques(mascotaJugador);

            // OCULTA SECCION SELECCIONAR MASCOTA
            seccionMascota.style.display = 'none';

            mascotaSeleccionada = true;
        }
    }

    seleccionarMascotaEnemigo();
}

function extraerAtaques(mascotaJugador) {
    let ataques;

    mokepones.forEach((mokepon) => {
        if (mokepon.nombre == mascotaJugador) {
            ataques = mokepon.ataques;
        }
    });

    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `<button id=${ataque.id} class="boton-de-ataque">${ataque.nombre}</button>`;

        contenedorBotones.innerHTML += ataquesMokepon;
    });

    btnFuego = document.getElementById('boton-fuego');
    btnAgua = document.getElementById('boton-agua');
    btnTierra = document.getElementById('boton-tierra');

    btnFuego.addEventListener('click', ataqueFuego);
    btnAgua.addEventListener('click', ataqueAgua);
    btnTierra.addEventListener('click', ataqueTierra);
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1);

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
}

// FUNCIONES PARA ATAQUES
function ataqueFuego() {
    ataqueJugador = ataques[0];
    ataqueAleatorioEnemigo();
}

function ataqueAgua() {
    ataqueJugador = ataques[1];
    ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    ataqueJugador = ataques[2];
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    let random = aleatorio(0, 2);
    ataqueEnemigo = ataques[random];

    // Invocamos la funcion de combate() y dentro de esta enviamos el resultado de la
    // batalla como argumento de la funcion crearMensaje() para mostrarlo en pantalla
    combate();
}

// FUNCIÓN QUE DETERMINA EL RESULTADO DEL COMBATE
function combate() {
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje('EMPATASTE 🤔❗');
    } else if (
        (ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌱') ||
        (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥') ||
        (ataqueJugador == 'TIERRA 🌱' && ataqueEnemigo == 'AGUA 💧')
    ) {
        crearMensaje('GANASTE 😆🎉');
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = `${vidasEnemigo}`;
    } else {
        crearMensaje('PERDISTE 😢👎');
        vidasJugador--;
        spanVidasJugador.innerHTML = `${vidasJugador}`;
    }

    revisarVidas();
}

// REVISAR VIDAS DESPUES DE CADA COMBATE
function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('GANASTE EL COMBATE 😀');
    } else if (vidasJugador == 0) {
        crearMensajeFinal('PERDISTE EL COMBATE 😪');
    }
}

// FUNCIÓN PARA CREAR MENSAJES
function crearMensaje(resultado) {
    let nuevoAtaqueJugador = document.createElement('p');
    let nuevoAtaqueEnemigo = document.createElement('p');

    mostrarMensaje.innerText = resultado;
    nuevoAtaqueJugador.innerText = ataqueJugador;
    nuevoAtaqueEnemigo.innerText = ataqueEnemigo;

    ataquesJugador.appendChild(nuevoAtaqueJugador);
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo);
}

// FUNCIÓN PARA MOSTRAR MENSAJE FINAL
function crearMensajeFinal(resultadoFinal) {
    // DESHABILITANDO BOTONES DE ATAQUE
    btnFuego.disabled = true;
    btnAgua.disabled = true;
    btnTierra.disabled = true;

    mostrarMensaje.innerHTML = resultadoFinal;
}

// FUNCIÓN PARA NÚMERO ALEATORIO
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// FUNCIÓN PARA REINICIAR EL JUEGO
function reiniciarJuego() {
    return location.reload();
}

// EVENTO PARA INICIAR EL JUEGO CUANDO TODA LA PÁGINA CARGUE, INCLUYENDO ARCHIVOS DEPENDIENTES
window.addEventListener('load', iniciarJuego);
