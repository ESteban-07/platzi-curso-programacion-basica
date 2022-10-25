// VARIABLES GLOBALES
const seccionMascota = document.getElementById('seleccionar-mascota');
const seccionAtaques = document.getElementById('seleccionar-ataque');
const contenedorBotones = document.getElementById('contenedor-botones');
const btnReiniciarJuego = document.getElementById('boton-reiniciar');

const mostrarMensaje = document.getElementById('resultado');

const divMascotaJugador = document.getElementById('div-mascota-jugador');
const divMascotaEnemigo = document.getElementById('div-mascota-enemigo');
// const spanMascotaJugador = document.getElementById('mascota-jugador');

const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');

const ataquesJugador = document.getElementById('ataques-jugador');
const ataquesEnemigo = document.getElementById('ataques-enemigo');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');

let mokepones = [];
let mascotaJugador;
let ataqueJugador;
let idBtnAtaqueJugador;
let idBtnAtaqueEnemigo;
let nombreAtaqueJugador;
let nombreAtaqueEnemigo;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
// const ataques = ['🔥', '💧', '🌱'];
let mascotas;
let opcionDeMokepones;
let ataquesMokeponJugador;
let ataquesMokeponEnemigo;
let btnFuego;
let btnAgua;
let btnTierra;
let botones;

let victoriasJugador = 0;
let victoriasEnemigo = 0;
const trofeosJugador = document.getElementById('trofeos-jugador');
const trofeosEnemigo = document.getElementById('trofeos-enemigo');
// VARIABLE TIPO BOLEANA QUE NOS PERMITE VALIDAR SI UNA MASCOTA FUE SELECCIONADA
let mascotaSeleccionada = false;

// CREANDO LA CLASE
class Mokepon {
    constructor(emoji, imagen, tipo) {
        this.emoji = emoji;
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
    { nombre: '💧 AGUA 💧', emoji: '💧', id: 'boton-agua' },
    { nombre: '💧 AGUA 💧', emoji: '💧', id: 'boton-agua' },
    { nombre: '🌀 TORNADO 🌀', emoji: '🌀', id: 'boton-agua' },
    { nombre: '🔥 FUEGO 🔥', emoji: '🔥', id: 'boton-fuego' },
    { nombre: '🌱 TIERRA 🌱', emoji: '🌱', id: 'boton-tierra' }
);

capipepo.ataques.push(
    { nombre: '🌱 TIERRA 🌱', emoji: '🌱', id: 'boton-tierra' },
    { nombre: '🌱 TIERRA 🌱', emoji: '🌱', id: 'boton-tierra' },
    { nombre: '🌑 ROCA 🌑', emoji: '🌑', id: 'boton-tierra' },
    { nombre: '💧 AGUA 💧', emoji: '💧', id: 'boton-agua' },
    { nombre: '🔥 FUEGO 🔥', emoji: '🔥', id: 'boton-fuego' }
);

ratigueya.ataques.push(
    { nombre: '🔥 FUEGO 🔥', emoji: '🔥', id: 'boton-fuego' },
    { nombre: '🔥 FUEGO 🔥', emoji: '🔥', id: 'boton-fuego' },
    { nombre: '⚡ TRUENO ⚡', emoji: '⚡', id: 'boton-fuego' },
    { nombre: '💧 AGUA 💧', emoji: '💧', id: 'boton-agua' },
    { nombre: '🌱 TIERRA 🌱', emoji: '🌱', id: 'boton-tierra' }
);

pydos.ataques.push(
    { nombre: '⚡ TRUENO ⚡', emoji: '⚡', id: 'boton-fuego' },
    { nombre: '💧 AGUA 💧', emoji: '💧', id: 'boton-agua' },
    { nombre: '🌀 TORNADO 🌀', emoji: '🌀', id: 'boton-agua' },
    { nombre: '🔥 FUEGO 🔥', emoji: '🔥', id: 'boton-fuego' },
    { nombre: '🌱 TIERRA 🌱', emoji: '🌱', id: 'boton-tierra' }
);

tucapalma.ataques.push(
    { nombre: '🌱 TIERRA 🌱', emoji: '🌱', id: 'boton-tierra' },
    { nombre: '🌑 ROCA 🌑', emoji: '🌑', id: 'boton-tierra' },
    { nombre: '🌱 TIERRA 🌱', emoji: '🌱', id: 'boton-tierra' },
    { nombre: '🌀 TORNADO 🌀', emoji: '🌀', id: 'boton-agua' },
    { nombre: '🔥 FUEGO 🔥', emoji: '🔥', id: 'boton-fuego' }
);

langostelvis.ataques.push(
    { nombre: '🌀 TORNADO 🌀', emoji: '🌀', id: 'boton-agua' },
    { nombre: '🔥 FUEGO 🔥', emoji: '🔥', id: 'boton-fuego' },
    { nombre: '⚡ TRUENO ⚡', emoji: '⚡', id: 'boton-fuego' },
    { nombre: '💧 AGUA 💧', emoji: '💧', id: 'boton-agua' },
    { nombre: '🌱 TIERRA 🌱', emoji: '🌱', id: 'boton-tierra' }
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
        <input type="radio" name="mascota" id=${mokepon.emoji} />
        <label class="tarjeta-de-mokepon" for=${mokepon.emoji}>
            <p>${mokepon.emoji}</p>
                <img
                    src=${mokepon.imagen}
                    alt=${mokepon.emoji}
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
function tarjetaMascota(rol, mascota) {
    let mascota_jugador = '';

    mokepones.forEach((mokepon) => {
        if (mokepon.emoji == mascota) {
            mascota_jugador = `
                <p id="rol">${rol}</p>
                <img
                    class="imagen-mascota"
                    src="${mokepon.imagen}"
                    alt="${mokepon.emoji}"
                />
                <p>${mokepon.emoji}</p>
                `;
        }
    });

    return mascota_jugador;
}

function seleccionarMascotaJugador() {
    for (let mascota of mascotas) {
        if (mascota.checked) {
            mascotaJugador = mascota.id;

            divMascotaJugador.innerHTML = `${tarjetaMascota(
                'jugador',
                mascotaJugador
            )}`;

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
        if (mokepon.emoji == mascotaJugador) {
            ataques = mokepon.ataques;
        }
    });

    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokeponJugador = `
        <button id=${ataque.id} class="boton-de-ataque btnAtaque">${ataque.emoji}</button>
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
            const emojiAtaque = e.currentTarget.innerText;
            if (id == 'boton-fuego') {
                ataqueFuego(emojiAtaque, id);
            } else if (id == 'boton-agua') {
                ataqueAgua(emojiAtaque, id);
            } else if (id == 'boton-tierra') {
                ataqueTierra(emojiAtaque, id);
            }
            e.currentTarget.style.background = '#30435d';
            e.currentTarget.disabled = true;
            ataqueAleatorioEnemigo();
        });
    });
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1);

    divMascotaEnemigo.innerHTML = tarjetaMascota(
        'enemigo',
        mokepones[mascotaAleatoria].emoji
    );

    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques;

    secuenciaAtaque();
}

// FUNCIONES PARA ATAQUES
function ataqueFuego(emojiAtaque, id) {
    ataqueJugador = emojiAtaque;
    idBtnAtaqueJugador = id;
}

function ataqueAgua(emojiAtaque, id) {
    ataqueJugador = emojiAtaque;
    idBtnAtaqueJugador = id;
}

function ataqueTierra(emojiAtaque, id) {
    ataqueJugador = emojiAtaque;
    idBtnAtaqueJugador = id;
}

function ataqueAleatorioEnemigo() {
    let randomIndex = aleatorio(0, ataquesMokeponEnemigo.length - 1);

    ataqueEnemigo = ataquesMokeponEnemigo[randomIndex].emoji;

    idBtnAtaqueEnemigo = ataquesMokeponEnemigo[randomIndex].id;

    ataquesMokeponEnemigo.splice(randomIndex, 1);

    combate();
}

// FUNCIÓN QUE DETERMINA EL RESULTADO DEL COMBATE
function combate() {
    if (idBtnAtaqueJugador == idBtnAtaqueEnemigo) {
        crearMensaje('EMPATASTE 🤔❗');
    } else if (
        (idBtnAtaqueJugador == 'boton-fuego' &&
            idBtnAtaqueEnemigo == 'boton-tierra') ||
        (idBtnAtaqueJugador == 'boton-agua' &&
            idBtnAtaqueEnemigo == 'boton-fuego') ||
        (idBtnAtaqueJugador == 'boton-tierra' &&
            idBtnAtaqueEnemigo == 'boton-agua')
    ) {
        crearMensaje('GANASTE 😆🎉');
        victoriasJugador++;
        trofeosJugador.innerHTML = `${victoriasJugador}`;
    } else {
        crearMensaje('PERDISTE 😢👎');
        victoriasEnemigo++;
        trofeosEnemigo.innerHTML = `${victoriasEnemigo}`;
    }

    if (finDelCombate()) {
        setTimeout(() => {
            revisarTrofeos();
        }, 1500);
    }
}

function finDelCombate() {
    let ataquesDeshabilitados = [...botones].every((btn) => btn.disabled);
    return ataquesDeshabilitados;
}

// REVISAR VIDAS DESPUES DE CADA COMBATE
function revisarTrofeos() {
    if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('GANASTE EL COMBATE 😀');
    } else if (victoriasEnemigo > victoriasJugador) {
        crearMensajeFinal('PERDISTE EL COMBATE 😪');
    } else {
        crearMensajeFinal('COMBATE EMPATADO ❗');
    }
}

// FUNCIÓN PARA CREAR MENSAJES
function mostrarNombreAtaque(emoji) {
    let nombreAtaque;

    mokepones.forEach((mokepon) => {
        mokepon.ataques.forEach((ataque) => {
            if (ataque.emoji == emoji) {
                nombreAtaque = ataque.nombre;
            }
        });
    });

    return nombreAtaque;
}

function crearMensaje(resultado) {
    let opcionAtaqueJugador = document.getElementById('ataque-jugador');
    let opcionAtaqueEnemigo = document.getElementById('ataque-enemigo');

    mostrarMensaje.innerHTML = resultado;
    opcionAtaqueJugador.innerText = mostrarNombreAtaque(ataqueJugador);
    opcionAtaqueEnemigo.innerText = mostrarNombreAtaque(ataqueEnemigo);
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
