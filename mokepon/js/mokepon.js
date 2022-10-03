function iniciarJuego() {
    let btnMascotaJugador = document.getElementById('btnMascota');
    btnMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

// Solución Clase
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

    // Explicación: Sí la etiqueta <span> que contiene el nombre de la mascota del
    // jugador NO se encuentra vacía, entonces el enemigo puede elegir su mascota.
    // En caso contrario, no se ejecutará la función seleccionarMascotaEnemigo().
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

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);
