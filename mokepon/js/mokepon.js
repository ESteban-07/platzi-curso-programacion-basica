// VARIABLE GLOBAL
let ataqueJugador;
let ataqueEnemigo;
let numVidasJugador = 3;
let numVidasEnemigo = 3;
const ataques = ['FUEGO 🔥', 'AGUA 💧', 'TIERRA 🌱'];

// VARIABLE TIPO BOLEANA QUE VERIFICA SI LA FUNCIÓN INDICADA FUE EJECUTADA O NO
let executed = false;

// FUNCIÓN PARA INCIAR EL JUEGO
function iniciarJuego() {
    let btnFuego = document.getElementById('btnFuego');
    let btnAgua = document.getElementById('btnAgua');
    let btnTierra = document.getElementById('btnTierra');

    // DESHABILITANDO LOS BOTONES DE COMBATE
    btnFuego.disabled = true;
    btnAgua.disabled = true;
    btnTierra.disabled = true;

    let btnMascotaJugador = document.getElementById('btnMascota');

    const mascotas = document.querySelectorAll('input[type=radio]');

    btnMascotaJugador.addEventListener('click', () => {
        seleccionarMascotaJugador();

        // VALIDANDO QUE LA FUNCIÓN SE HA EJECUTADO PARA HABILITAR LOS BOTONES DE COMBATE
        if (executed) {
            btnFuego.disabled = false;
            btnAgua.disabled = false;
            btnTierra.disabled = false;

            btnFuego.addEventListener('click', ataqueFuego);
            btnAgua.addEventListener('click', ataqueAgua);
            btnTierra.addEventListener('click', ataqueTierra);
        }
    });

    let btnReiniciarJuego = document.getElementById('btnReiniciar');
    btnReiniciarJuego.addEventListener('click', () => location.reload());
}

// FUNCIONES PARA MASCOTAS
function seleccionarMascotaJugador() {
    let mascotaSeleccionada = '';
    const mascotas = document.querySelectorAll('input[type=radio]');
    let btnMascotaJugador = document.getElementById('btnMascota');
    let spanMascotaJugador = document.getElementById('mascotaJugador');
    let spanNombreMascota = document.getElementById('nombreMascota');

    for (let mascota of mascotas) {
        if (mascota.checked) {
            mascotaSeleccionada = primerLetraMayuscula(mascota.id);
        }
    }

    if (!(mascotaSeleccionada == '')) {
        spanNombreMascota.innerHTML = mascotaSeleccionada;
        spanMascotaJugador.innerText = mascotaSeleccionada;
    } else {
        spanNombreMascota.innerHTML = '(Selecciona tu mascota)';
    }

    if (!(spanMascotaJugador.innerText == '')) {
        seleccionarMascotaEnemigo();
        btnMascotaJugador.disabled = true;
        return (executed = true);
    }

    return (executed = false);
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3);
    let spanMascotaEnemigo = document.getElementById('mascotaEnemigo');

    if (mascotaAleatoria == 1) {
        // Hipodoge
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if (mascotaAleatoria == 2) {
        // Capipepo
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else {
        // Ratigueya
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }
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
    let spanVidasJugador = document.getElementById('vidasJugador');
    let spanVidasEnemigo = document.getElementById('vidasEnemigo');

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje('EMPATASTE 🤔❗');
    } else if (
        (ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌱') ||
        (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥') ||
        (ataqueJugador == 'TIERRA 🌱' && ataqueEnemigo == 'AGUA 💧')
    ) {
        crearMensaje('GANASTE 😆🎉');
        numVidasEnemigo--;
        spanVidasEnemigo.innerHTML = `${numVidasEnemigo}`;
    } else {
        crearMensaje('PERDISTE 😢👎');
        numVidasJugador--;
        spanVidasJugador.innerHTML = `${numVidasJugador}`;
    }

    revisarVidas();
}

// REVISAR VIDAS DESPUES DE CADA COMBATE
function revisarVidas() {
    if (numVidasEnemigo == 0) {
        crearMensajeFinal('GANASTE EL COMBATE 😀');
    } else if (numVidasJugador == 0) {
        crearMensajeFinal('PERDISTE EL COMBATE 😪');
    }
}

// FUNCIÓN PARA CREAR MENSAJES
function crearMensaje(resultado) {
    let mostrarMensaje = document.getElementById('mostrarMensaje');

    let parrafo = document.createElement('p');
    parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}, la mascota del enemigo atacó con ${ataqueEnemigo} - ${resultado}`;

    mostrarMensaje.appendChild(parrafo);
}

// FUNCIÓN PARA MOSTRAR MENSAJE FINAL
function crearMensajeFinal(resultadoFinal) {
    let btnFuego = document.getElementById('btnFuego');
    let btnAgua = document.getElementById('btnAgua');
    let btnTierra = document.getElementById('btnTierra');

    btnFuego.disabled = true;
    btnAgua.disabled = true;
    btnTierra.disabled = true;

    let mostrarMensaje = document.getElementById('mostrarMensaje');

    let parrafo = document.createElement('p');
    parrafo.innerHTML = `${resultadoFinal}`;

    mostrarMensaje.appendChild(parrafo);
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
