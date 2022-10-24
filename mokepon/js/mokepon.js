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
const ataques = ['🔥', '💧', '🌱'];
let mascotas;
let opcionDeMokepones;
let ataquesMokeponJugador;
let ataquesMokeponEnemigo;
let btnFuego;
let btnAgua;
let btnTierra;
let botones;

// VARIABLE TIPO BOLEANA QUE NOS PERMITE VALIDAR SI UNA MASCOTA FUE SELECCIONADA
let mascotaSeleccionada = false;

// CREANDO LA CLASE
class Mokepon {
    constructor(nombre, imagen, tipo) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.tipo = tipo;
        this.ataques = [];
    }
}

// OBJETOS INSTANCIA DE LA CLASE MOKEPON
let hipodoge = new Mokepon(
    'Hipodoge',
    './assets/mokepons_mokepon_hipodoge_attack.png',
    'Agua'
);

let capipepo = new Mokepon(
    'Capipepo',
    './assets/mokepons_mokepon_capipepo_attack.png',
    'Tierra'
);

let ratigueya = new Mokepon(
    'Ratigueya',
    './assets/mokepons_mokepon_ratigueya_attack.png',
    'Fuego'
);

let pydos = new Mokepon(
    'Pydos',
    './assets/mokepons_mokepon_pydos_attack.png',
    'Agua'
);

let tucapalma = new Mokepon(
    'Tucapalma',
    './assets/mokepons_mokepon_tucapalma_attack.png',
    'Tierra'
);

let langostelvis = new Mokepon(
    'Langostelvis',
    './assets/mokepons_mokepon_langostelvis_attack.png',
    'Fuego'
);

// OBJETOS LITERALES CONSTRUIDOS SIN CLASES
hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌀', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
);

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌑', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' }
);

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '⚡', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' }
);

pydos.ataques.push(
    { nombre: '⚡', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌀', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
);

tucapalma.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌑', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌀', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' }
);

langostelvis.ataques.push(
    { nombre: '🌀', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '⚡', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' }
);

mokepones.push(hipodoge, capipepo, ratigueya);
mokepones.push(pydos, tucapalma, langostelvis);

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

        // SI LA MASCOTA DEL JUGADOR FUE SELECCIONADA
        if (mascotaSeleccionada) {
            seleccionarMascotaEnemigo();

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
        ataquesMokeponJugador = `
        <button id=${ataque.id} class="boton-de-ataque btnAtaque">${ataque.nombre}</button>
        `;

        contenedorBotones.innerHTML += ataquesMokeponJugador;
    });

    btnFuego = document.getElementById('boton-fuego');
    btnAgua = document.getElementById('boton-agua');
    btnTierra = document.getElementById('boton-tierra');

    botones = document.querySelectorAll('.btnAtaque');
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', function (e) {
            const id = e.currentTarget.id;
            if (id == 'boton-fuego') {
                ataqueFuego();
            } else if (id == 'boton-agua') {
                ataqueAgua();
            } else if (id == 'boton-tierra') {
                ataqueTierra();
            }
            e.currentTarget.style.background = '#30435d';
            e.currentTarget.disabled = true;
            ataqueAleatorioEnemigo();
        });
    });
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1);

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;

    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques.map(
        (ataque) => {
            return ataque.nombre;
        }
    );

    secuenciaAtaque();
}

// FUNCIONES PARA ATAQUES
function ataqueFuego() {
    ataqueJugador = ataques[0];
}

function ataqueAgua() {
    ataqueJugador = ataques[1];
}

function ataqueTierra() {
    ataqueJugador = ataques[2];
}

function ataqueAleatorioEnemigo() {
    let randomIndex = aleatorio(0, ataquesMokeponEnemigo.length - 1);

    ataqueEnemigo = ataquesMokeponEnemigo[randomIndex];

    ataquesMokeponEnemigo.splice(randomIndex, 1);

    // Invocamos la funcion de combate() y dentro de esta enviamos el resultado de la
    // batalla como argumento de la funcion crearMensaje() para mostrarlo en pantalla
    combate();
}

// FUNCIÓN QUE DETERMINA EL RESULTADO DEL COMBATE
function combate() {
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje('EMPATASTE 🤔❗');
    } else if (
        (ataqueJugador == '🔥' && ataqueEnemigo == '🌱') ||
        (ataqueJugador == '💧' && ataqueEnemigo == '🔥') ||
        (ataqueJugador == '🌱' && ataqueEnemigo == '💧')
    ) {
        crearMensaje('GANASTE 😆🎉');
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = `${vidasEnemigo} ❤`;
    } else {
        crearMensaje('PERDISTE 😢👎');
        vidasJugador--;
        spanVidasJugador.innerHTML = `${vidasJugador} ❤`;
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
