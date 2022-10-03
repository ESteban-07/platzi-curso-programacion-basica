// VARIABLE GLOBAL
let ataqueJugador;

// FUNCIÓN PARA INCIAR EL JUEGO
function iniciarJuego() {
    let btnMascotaJugador = document.getElementById('btnMascota');
    btnMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let btnFuego = document.getElementById('btnFuego');
    btnFuego.addEventListener('click', ataqueFuego);
    let btnAgua = document.getElementById('btnAgua');
    btnAgua.addEventListener('click', ataqueAgua);
    let btnTierra = document.getElementById('btnTierra');
    btnTierra.addEventListener('click', ataqueTierra);
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
    }
}

function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);
    let spanMascotaEnemigo = document.getElementById('mascotaEnemigo');

    if (ataqueAleatorio == 1) {
        // Hipodoge
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if (ataqueAleatorio == 2) {
        // Capipepo
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else {
        // Ratigueya
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }
}

// FUNCIONES PARA ATAQUES
function ataqueFuego() {
    ataqueJugador = 'FUEGO';
    alert(ataqueJugador);
}
function ataqueAgua() {
    ataqueJugador = 'AGUA';
    alert(ataqueJugador);
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA';
    alert(ataqueJugador);
}

// FUNCIÓN PARA NÚMERO ALEATORIO
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// EVENTO PARA INICIAR EL JUEGO CUANDO CARGUE EL DOM
window.addEventListener('load', iniciarJuego);
