function iniciarJuego() {
    let btnMascotaJugador = document.getElementById('btnMascota');
    btnMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

// Solución Clase
function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    if (inputHipodoge.checked) {
        alert('Seleccionaste a Hipodoge');
    } else if (inputCapipepo.checked) {
        alert('Seleccionaste a Capipepo');
    } else if (inputRatigueya.checked) {
        alert('Seleccionaste a Ratigueya');
    } else {
        alert('Selecciona una mascota');
    }
}

window.addEventListener('load', iniciarJuego);
