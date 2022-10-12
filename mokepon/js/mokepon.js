// VARIABLE GLOBAL
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
const ataques = ['FUEGO 🔥', 'AGUA 💧', 'TIERRA 🌱'];

// VARIABLE PARA CONTAR LOS COMBATES
let contador = 1;

// VARIABLE TIPO BOLEANA QUE VERIFICA SI LA FUNCIÓN INDICADA FUE EJECUTADA O NO
let executed = false;

// FUNCIÓN PARA INCIAR EL JUEGO
function iniciarJuego() {
    mostrarNombreMascota();

    // OCULTAR SECCION DE ATAQUES
    // let seccionAtaques = document.getElementById('seleccionar-ataque');
    // seccionAtaques.style.display = 'none';

    let btnFuego = document.getElementById('boton-fuego');
    let btnAgua = document.getElementById('boton-agua');
    let btnTierra = document.getElementById('boton-tierra');

    // DESHABILITANDO LOS BOTONES DE COMBATE
    btnFuego.disabled = true;
    btnAgua.disabled = true;
    btnTierra.disabled = true;

    let btnMascotaJugador = document.getElementById('boton-mascota');

    btnMascotaJugador.addEventListener('click', () => {
        seleccionarMascotaJugador();

        // VALIDANDO QUE LA FUNCIÓN SE HA EJECUTADO PARA HABILITAR LOS BOTONES DE COMBATE
        if (executed) {
            // OCULTA SECCION DE ATAQUES
            let seccionAtaques = document.getElementById('seleccionar-ataque');
            seccionAtaques.style.display = 'block';

            btnFuego.disabled = false;
            btnAgua.disabled = false;
            btnTierra.disabled = false;

            btnFuego.addEventListener('click', ataqueFuego);
            btnAgua.addEventListener('click', ataqueAgua);
            btnTierra.addEventListener('click', ataqueTierra);
        }
    });

    let btnReiniciarJuego = document.getElementById('boton-reiniciar');

    // OCULTANDO BOTON DE REINICIAR JUEGO
    // btnReiniciarJuego.style.display = 'none';

    btnReiniciarJuego.addEventListener('click', () => location.reload());
}

// FUNCIONES PARA MASCOTAS
function seleccionarMascotaJugador() {
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');

    let mascotaSeleccionada = '';
    const mascotas = document.querySelectorAll('input[type="radio"]');
    let btnMascotaJugador = document.getElementById('boton-mascota');
    let spanMascotaJugador = document.getElementById('mascota-jugador');
    let spanNombreMascota = document.getElementById('nombre-mascota');

    for (let mascota of mascotas) {
        if (mascota.checked) {
            mascotaSeleccionada = primerLetraMayuscula(mascota.id);
        }
    }

    if (!(mascotaSeleccionada == '')) {
        spanNombreMascota.innerHTML = mascotaSeleccionada;
        spanMascotaJugador.innerText = mascotaSeleccionada;

        // INICIALIZANDO VIDAS
        spanVidasJugador.innerText = '3';
        spanVidasEnemigo.innerText = '3';

        // OCULTA SECCION SELECCIONAR MASCOTA
        // let seccionMascota = document.getElementById('seleccionar-mascota');
        // seccionMascota.style.display = 'none';
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
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

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

    // DESHABILITANDO RADIO BOTONES
    let radioBotones = document.querySelectorAll('input[type="radio"]');
    radioBotones.forEach((radio) => {
        if (!radio.checked) {
            radio.disabled = true;
        }
    });
}

// FUNCIONES PARA ATAQUES
function ataqueFuego() {
    ataqueJugador = ataques[0];
    ataqueAleatorioEnemigo();
    incrementar();
}

function ataqueAgua() {
    ataqueJugador = ataques[1];
    ataqueAleatorioEnemigo();
    incrementar();
}

function ataqueTierra() {
    ataqueJugador = ataques[2];
    ataqueAleatorioEnemigo();
    incrementar();
}

// CONTADOR DE COMBATES
function incrementar() {
    return contador++;
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
        crearMensaje('EMPATASTE ❗');
    } else if (
        (ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌱') ||
        (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥') ||
        (ataqueJugador == 'TIERRA 🌱' && ataqueEnemigo == 'AGUA 💧')
    ) {
        crearMensaje('GANASTE 🎉');
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = `${vidasEnemigo}`;
    } else {
        crearMensaje('PERDISTE 👎');
        vidasJugador--;
        spanVidasJugador.innerHTML = `${vidasJugador}`;
    }

    revisarVidas();
}

// REVISAR VIDAS DESPUES DE CADA COMBATE
function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('HAS GANADO, ENHORABUENA 🥳', 'verde');
    } else if (vidasJugador == 0) {
        crearMensajeFinal('HAS PERDIDO... 😪', 'rojo');
    }
}

// FUNCIÓN PARA CREAR MENSAJES
function crearMensaje(resultado) {
    let contenedorMensaje = document.getElementById('contenedor-mensaje');
    let nuevaFila = document.createElement('tr');

    nuevaFila.innerHTML = `<td class="tg-0pky" colspan="2">${contador}. ${ataqueJugador} ⚔️ ${ataqueEnemigo} - ${resultado}</td>`;

    contenedorMensaje.appendChild(nuevaFila);
}

// FUNCIÓN PARA MOSTRAR MENSAJE FINAL
function crearMensajeFinal(resultadoFinal, color) {
    let btnFuego = document.getElementById('boton-fuego');
    let btnAgua = document.getElementById('boton-agua');
    let btnTierra = document.getElementById('boton-tierra');

    btnFuego.disabled = true;
    btnAgua.disabled = true;
    btnTierra.disabled = true;

    const modal = document.getElementById('modal');
    let contenedorModal = document.getElementById('modal-wrapper');
    const btnCerrarModal = document.querySelector('[data-close]');
    const resultado = document.getElementById('resultado');
    resultado.innerText = resultadoFinal;
    contenedorModal.classList.add(`${color}`);

    setTimeout(() => {
        modal.classList.add('is-visible');
    }, '1000');

    btnCerrarModal.addEventListener('click', () => {
        return modal.classList.remove('is-visible');
    });
}

// FUNCIÓN PARA NÚMERO ALEATORIO
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// FUNCIÓN PARA CAPITALIZAR UNA PALABRA
function primerLetraMayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function mostrarNombreMascota() {
    let mascotas = document.querySelectorAll('input[type="radio"]');
    let spanNombreMascota = document.getElementById('nombre-mascota');

    mascotas.forEach((mascota) => {
        mascota.addEventListener('click', (e) => {
            let idMascota = e.currentTarget.id;
            spanNombreMascota.innerHTML = primerLetraMayuscula(idMascota);
        });
    });
}

// EVENTO PARA INICIAR EL JUEGO CUANDO CARGUE EL DOM
window.addEventListener('load', iniciarJuego);
