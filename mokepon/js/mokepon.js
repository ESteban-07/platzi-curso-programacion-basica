// VARIABLE GLOBAL
let ataqueJugador;
let ataqueEnemigo;
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
}

// FUNCIONES PARA MASCOTAS
function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascotaJugador');

    if (inputHipodoge.checked) {
        alert('Seleccionaste a Hipodoge');
        spanMascotaJugador.innerText = 'Hipodoge';
    } else if (inputCapipepo.checked) {
        alert('Seleccionaste a Capipepo');
        spanMascotaJugador.innerText = 'Capipepo';
    } else if (inputRatigueya.checked) {
        alert('Seleccionaste a Ratigueya');
        spanMascotaJugador.innerText = 'Ratigueya';
    } else {
        alert('Selecciona una mascota');
    }

    if (!(spanMascotaJugador.innerText == '')) {
        seleccionarMascotaEnemigo();
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

    crearMensaje();
}

// FUNCIÓN PARA CREAR MENSAJES
function crearMensaje() {
    let mostrarMensaje = document.getElementById('mostrarMensaje');

    let parrafo = document.createElement('p');
    parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}, la mascota del enemigo atacó con ${ataqueEnemigo}`;

    mostrarMensaje.appendChild(parrafo);
}

// FUNCIÓN PARA NÚMERO ALEATORIO
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// EVENTO PARA INICIAR EL JUEGO CUANDO CARGUE EL DOM
window.addEventListener('load', iniciarJuego);
