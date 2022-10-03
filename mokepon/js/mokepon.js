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
    let mascotaEnemigo = document.getElementById('mascotaEnemigo');

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
}

window.addEventListener('load', iniciarJuego);
