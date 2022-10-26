let mokepones = [];

class Mokepon {
    constructor(nombre, imagen, tipo) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.tipo = tipo;
        this.ataques = [];
    }
}

let hipodoge = new Mokepon(
    'Hipodoge',
    './assets/mokepons_mokepon_hipodoge_attack.png',
    'Agua'
);

let capipepo = new Mokepon(
    'Capipepo',
    './assets/mokepons_mokepon_capipepo_attack.png',
    'Tierra'
);

let ratigueya = new Mokepon(
    'Ratigueya',
    './assets/mokepons_mokepon_ratigueya_attack.png',
    'Fuego'
);

let pydos = new Mokepon(
    'Pydos',
    './assets/mokepons_mokepon_pydos_attack.png',
    'Agua'
);

let tucapalma = new Mokepon(
    'Tucapalma',
    './assets/mokepons_mokepon_tucapalma_attack.png',
    'Tierra'
);

let langostelvis = new Mokepon(
    'Langostelvis',
    './assets/mokepons_mokepon_langostelvis_attack.png',
    'Fuego'
);

hipodoge.ataques.push(
    { nombre: 'Agua 💧', emoji: '💧', id: 'boton-agua' },
    { nombre: 'Agua 💧', emoji: '💧', id: 'boton-agua' },
    { nombre: 'Tornado 🌀', emoji: '🌀', id: 'boton-agua' },
    { nombre: 'Fuego 🔥', emoji: '🔥', id: 'boton-fuego' },
    { nombre: 'Tierra 🌱', emoji: '🌱', id: 'boton-tierra' }
);

capipepo.ataques.push(
    { nombre: 'Tierra 🌱', emoji: '🌱', id: 'boton-tierra' },
    { nombre: 'Tierra 🌱', emoji: '🌱', id: 'boton-tierra' },
    { nombre: 'Roca 🌑', emoji: '🌑', id: 'boton-tierra' },
    { nombre: 'Agua 💧', emoji: '💧', id: 'boton-agua' },
    { nombre: 'Fuego 🔥', emoji: '🔥', id: 'boton-fuego' }
);

ratigueya.ataques.push(
    { nombre: 'Fuego 🔥', emoji: '🔥', id: 'boton-fuego' },
    { nombre: 'Fuego 🔥', emoji: '🔥', id: 'boton-fuego' },
    { nombre: 'Trueno ⚡', emoji: '⚡', id: 'boton-fuego' },
    { nombre: 'Agua 💧', emoji: '💧', id: 'boton-agua' },
    { nombre: 'Tierra 🌱', emoji: '🌱', id: 'boton-tierra' }
);

pydos.ataques.push(
    { nombre: 'Trueno ⚡', emoji: '⚡', id: 'boton-fuego' },
    { nombre: 'Agua 💧', emoji: '💧', id: 'boton-agua' },
    { nombre: 'Tornado 🌀', emoji: '🌀', id: 'boton-agua' },
    { nombre: 'Fuego 🔥', emoji: '🔥', id: 'boton-fuego' },
    { nombre: 'Tierra 🌱', emoji: '🌱', id: 'boton-tierra' }
);

tucapalma.ataques.push(
    { nombre: 'Tierra 🌱', emoji: '🌱', id: 'boton-tierra' },
    { nombre: 'Roca 🌑', emoji: '🌑', id: 'boton-tierra' },
    { nombre: 'Tierra 🌱', emoji: '🌱', id: 'boton-tierra' },
    { nombre: 'Tornado 🌀', emoji: '🌀', id: 'boton-agua' },
    { nombre: 'Fuego 🔥', emoji: '🔥', id: 'boton-fuego' }
);

langostelvis.ataques.push(
    { nombre: 'Tornado 🌀', emoji: '🌀', id: 'boton-agua' },
    { nombre: 'Fuego 🔥', emoji: '🔥', id: 'boton-fuego' },
    { nombre: 'Trueno ⚡', emoji: '⚡', id: 'boton-fuego' },
    { nombre: 'Agua 💧', emoji: '💧', id: 'boton-agua' },
    { nombre: 'Tierra 🌱', emoji: '🌱', id: 'boton-tierra' }
);

mokepones.push(hipodoge);
mokepones.push(capipepo);
mokepones.push(ratigueya);
mokepones.push(pydos);
mokepones.push(tucapalma);
mokepones.push(langostelvis);
