// VARIABLES GLOBALES
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
const ataques = ['FUEGO 🔥', 'AGUA 💧', 'TIERRA 🌱'];

// VARIABLE TIPO BOLEANA QUE VERIFICA SI LA FUNCIÓN INDICADA FUE EJECUTADA O NO
let executed = false;

// FUNCIÓN PARA INCIAR EL JUEGO
function iniciarJuego() {
    // OCULTAR SECCION DE ATAQUES
    let seccionAtaques = document.getElementById('seleccionar-ataque');
    seccionAtaques.style.display = 'none';

    // EVENTO DEL BOTON SELECCIONAR MASCOTA JUGADOR
    let btnMascotaJugador = document.getElementById('boton-mascota');

    btnMascotaJugador.addEventListener('click', () => {
        seleccionarMascotaJugador();

        // SI UNA MASCOTA FUE SELECCIONADA Y EL USUARIO APRETÓ EL BOTÓN
        if (executed) {
            // DESPLEGANDO LA SECCION DE ATAQUES
            let seccionAtaques = document.getElementById('seleccionar-ataque');
            seccionAtaques.style.display = 'flex';
        }
    });

    let btnFuego = document.getElementById('boton-fuego');
    let btnAgua = document.getElementById('boton-agua');
    let btnTierra = document.getElementById('boton-tierra');

    btnFuego.addEventListener('click', ataqueFuego);
    btnAgua.addEventListener('click', ataqueAgua);
    btnTierra.addEventListener('click', ataqueTierra);

    let btnReiniciarJuego = document.getElementById('boton-reiniciar');

    btnReiniciarJuego.addEventListener('click', () => location.reload());
}

// FUNCIONES PARA MASCOTAS
function seleccionarMascotaJugador() {
    let mascotas = document.querySelectorAll('input[type="radio"]');
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    for (let mascota of mascotas) {
        if (mascota.checked) {
            spanMascotaJugador.innerText = primerLetraMayuscula(mascota.id);

            // OCULTA SECCION SELECCIONAR MASCOTA
            let seccionMascota = document.getElementById('seleccionar-mascota');
            seccionMascota.style.display = 'none';

            executed = true;
        }
    }

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, 2);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');
    let mascotas = document.querySelectorAll('input[type="radio"]');

    let nombreMascotaEnemiga = primerLetraMayuscula(
        mascotas[mascotaAleatoria].id
    );

    spanMascotaEnemigo.innerHTML = nombreMascotaEnemiga;
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
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');

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
    let mostrarMensaje = document.getElementById('resultado');
    let ataquesJugador = document.getElementById('ataques-jugador');
    let ataquesEnemigo = document.getElementById('ataques-enemigo');
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
    let btnFuego = document.getElementById('boton-fuego');
    let btnAgua = document.getElementById('boton-agua');
    let btnTierra = document.getElementById('boton-tierra');

    btnFuego.disabled = true;
    btnAgua.disabled = true;
    btnTierra.disabled = true;

    let mostrarMensaje = document.getElementById('resultado');

    mostrarMensaje.innerHTML = resultadoFinal;
}

// FUNCIÓN PARA NÚMERO ALEATORIO
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// FUNCIÓN PARA CAPITALIZAR UNA PALABRA
function primerLetraMayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// EVENTO PARA INICIAR EL JUEGO CUANDO CARGUE EL DOM
window.addEventListener('load', iniciarJuego);
