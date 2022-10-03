function iniciarJuego() {
    let btnMascotaJugador = document.getElementById('btnMascota');
    btnMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

// Mi solución
function seleccionarMascotaJugador() {
    // #1: Utilizando arrays de mascotas y retornando la seleccionada
    let mascotas = document.querySelectorAll('input');
    for (let mascota of mascotas) {
        if (mascota.checked) {
            return console.log(primerLetraMayuscula(mascota.id));
        }
    }

    // #2: Evaluando si existe algún input checked en el DOM
    // para imprimir el valor del elemento seleccionado
    let mascotaSeleccionada = document.querySelector('input:checked');
    if (mascotaSeleccionada) {
        console.log(primerLetraMayuscula(mascotaSeleccionada.id));
    }
}

function primerLetraMayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

window.addEventListener('load', iniciarJuego);
