// función para obtener número aleatorio
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// función para determinar la opción elegida
function eleccion(jugada) {
    let resultado = '';
    if (jugada == 1) {
        resultado = 'Piedra 🥌';
    } else if (jugada == 2) {
        resultado = 'Papel 🧻';
    } else if (jugada == 3) {
        resultado = 'Tijera ✂';
    } else {
        resultado = 'MAL ELEGIDO';
    }
    return resultado;
}

// 1 es piedra, 2 es papel, 3 es tijera
let pc = 0;
let jugador = 0;
let triunfos = 0;
let perdidas = 0;
let empates = 0;

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1, 3);
    jugador = prompt('Elige: 1 piedra, 2 papel, 3 tijera');

    alert(`PC: ${eleccion(pc)} *VS* Jugador: ${eleccion(jugador)}`);

    // Algoritmo de combate
    if (pc == jugador) {
        alert('EMPATE');
        empates++;
    } else if (
        (jugador == 1 && pc == 3) ||
        (jugador == 2 && pc == 1) ||
        (jugador == 3 && pc == 2)
    ) {
        alert('GANASTE');
        triunfos++;
    } else {
        alert('PERDISTE');
        perdidas++;
    }
}

alert(
    `Ganaste ${triunfos} veces.\nPerdiste ${perdidas} veces.\nEmpataste ${empates} veces.`
);
