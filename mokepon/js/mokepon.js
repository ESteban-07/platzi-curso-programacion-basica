const seccionMascota = document.getElementById('seleccionar-mascota');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const btnMascotaJugador = document.getElementById('boton-mascota');

const seccionAtaques = document.getElementById('seleccionar-ataque');
const divMascotaJugador = document.getElementById('div-mascota-jugador');
const divMascotaEnemigo = document.getElementById('div-mascota-enemigo');
const contenedorBotones = document.getElementById('contenedor-botones');
const btnReiniciarJuego = document.getElementById('boton-reiniciar');

const mostrarMensaje = document.getElementById('resultado');
const ataquesJugador = document.getElementById('ataque-jugador');
const ataquesEnemigo = document.getElementById('ataque-enemigo');
const trofeosJugador = document.getElementById('trofeos-jugador');
const trofeosEnemigo = document.getElementById('trofeos-enemigo');

let tarjetaDeMokepon;
let inputsMascotas;

let mascotaJugador;
let mascotaSeleccionada = false;

let emojiAtaqueJugador;
let emojiAtaqueEnemigo;
let ataqueJugador;
let ataqueEnemigo;
let ataquesMokeponJugador;
let ataquesMokeponEnemigo;

let btnFuego;
let btnAgua;
let btnTierra;
let botonesDeAtaque;

let numeroRonda = 1;
let victoriasJugador = 0;
let victoriasEnemigo = 0;

function iniciarJuego() {
    seccionAtaques.style.display = 'none';

    mokepones.forEach((mokepon) => {
        tarjetaDeMokepon = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
                <img
                    src=${mokepon.imagen}
                    alt=${mokepon.nombre}
                />
        </label>
        `;

        contenedorTarjetas.innerHTML += tarjetaDeMokepon;

        inputsMascotas = document.querySelectorAll('input[type="radio"]');
    });

    btnMascotaJugador.addEventListener('click', () => {
        seleccionarMascotaJugador();

        if (mascotaSeleccionada) {
            seleccionarMascotaEnemigo();

            seccionAtaques.style.display = 'flex';
        }
    });

    btnReiniciarJuego.addEventListener('click', reiniciarJuego);
}

function mascotaUsuario(rol, mascota) {
    let tarjetaMascota;

    mokepones.forEach((mokepon) => {
        if (mokepon.nombre == mascota) {
            tarjetaMascota = `
                <p id="rol">${rol}</p>
                <img
                    class="imagen-mascota"
                    src="${mokepon.imagen}"
                    alt="${mokepon.nombre}"
                />
                <p>${mokepon.nombre}</p>
                `;
        }
    });

    return tarjetaMascota;
}

function seleccionarMascotaJugador() {
    for (let inputMascota of inputsMascotas) {
        if (inputMascota.checked) {
            mascotaJugador = inputMascota.id;

            divMascotaJugador.innerHTML = mascotaUsuario(
                'jugador',
                mascotaJugador
            );

            extraerAtaques(mascotaJugador);

            seccionMascota.style.display = 'none';

            mascotaSeleccionada = true;
        }
    }
}

function extraerAtaques(mascotaJugador) {
    let ataques;

    mokepones.forEach((mokepon) => {
        if (mokepon.nombre == mascotaJugador) {
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

    botonesDeAtaque = document.querySelectorAll('.btnAtaque');
}

function secuenciaAtaque() {
    botonesDeAtaque.forEach((boton) => {
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

    divMascotaEnemigo.innerHTML = mascotaUsuario(
        'enemigo',
        mokepones[mascotaAleatoria].nombre
    );

    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques;

    secuenciaAtaque();
}

function ataqueFuego(emojiAtaque, id) {
    emojiAtaqueJugador = emojiAtaque;
    ataqueJugador = id;
}

function ataqueAgua(emojiAtaque, id) {
    emojiAtaqueJugador = emojiAtaque;
    ataqueJugador = id;
}

function ataqueTierra(emojiAtaque, id) {
    emojiAtaqueJugador = emojiAtaque;
    ataqueJugador = id;
}

function ataqueAleatorioEnemigo() {
    let randomIndex = aleatorio(0, ataquesMokeponEnemigo.length - 1);

    emojiAtaqueEnemigo = ataquesMokeponEnemigo[randomIndex].emoji;

    ataqueEnemigo = ataquesMokeponEnemigo[randomIndex].id;

    ataquesMokeponEnemigo.splice(randomIndex, 1);

    combate();
}

function combate() {
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje('EMPATASTE❗');
    } else if (
        (ataqueJugador == 'boton-fuego' && ataqueEnemigo == 'boton-tierra') ||
        (ataqueJugador == 'boton-agua' && ataqueEnemigo == 'boton-fuego') ||
        (ataqueJugador == 'boton-tierra' && ataqueEnemigo == 'boton-agua')
    ) {
        crearMensaje('GANASTE🎉');
        victoriasJugador++;
        trofeosJugador.innerHTML = `${victoriasJugador}`;
    } else {
        crearMensaje('PERDISTE👎');
        victoriasEnemigo++;
        trofeosEnemigo.innerHTML = `${victoriasEnemigo}`;
    }

    numeroRonda++;

    if (finDelCombate()) {
        setTimeout(() => {
            revisarTrofeos();
        }, 1500);
    }
}

function finDelCombate() {
    let ataquesDeshabilitados = [...botonesDeAtaque].every(
        (btn) => btn.disabled
    );

    return ataquesDeshabilitados;
}

function revisarTrofeos() {
    if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('GANASTE EL COMBATE 😀');
    } else if (victoriasEnemigo > victoriasJugador) {
        crearMensajeFinal('PERDISTE EL COMBATE 😪');
    } else {
        crearMensajeFinal('COMBATE EMPATADO ❗');
    }
}

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
    mostrarMensaje.innerHTML = `${numeroRonda}° RONDA: ${resultado}`;
    ataquesJugador.innerText = mostrarNombreAtaque(emojiAtaqueJugador);
    ataquesEnemigo.innerText = mostrarNombreAtaque(emojiAtaqueEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
    mostrarMensaje.innerHTML = resultadoFinal;
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function reiniciarJuego() {
    return location.reload();
}

window.addEventListener('load', iniciarJuego);
