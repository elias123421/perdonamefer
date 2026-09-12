const audio = document.getElementById('cancion');
const pantallaInicio = document.getElementById('inicio');
const pantallaReproductor = document.getElementById('reproductor');
const pantallaCarta = document.getElementById('carta');
const btnOpcionMusica = document.getElementById('btn-opcion-musica');
const btnOpcionCarta = document.getElementById('btn-opcion-carta');
const btnIrCarta = document.getElementById('btn-ir-carta');
const btnSi = document.getElementById('btn-si');
const btnNo = document.getElementById('btn-no');
const mensajeFinal = document.getElementById('mensaje-final');

// Nuevas variables para el reproductor interactivo
const btnPlayPause = document.getElementById('btn-play-pause');
const disco = document.getElementById('disco');
let isPlaying = false;

btnOpcionMusica.addEventListener('click', () => {
    audio.play().then(() => {
        isPlaying = true;
        disco.classList.remove('pausado');
        btnPlayPause.textContent = '⏸ Pausar Música';
    }).catch(() => { });

    pantallaInicio.classList.add('oculta');
    pantallaReproductor.classList.remove('oculta');
});

btnOpcionCarta.addEventListener('click', () => {
    pantallaInicio.classList.add('oculta');
    pantallaCarta.classList.remove('oculta');
});

btnIrCarta.addEventListener('click', () => {
    pantallaReproductor.classList.add('oculta');
    pantallaCarta.classList.remove('oculta');
});

// Lógica de Pausa/Reproducir
btnPlayPause.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        disco.classList.add('pausado');
        btnPlayPause.textContent = '▶ Reproducir Música';
    } else {
        audio.play();
        disco.classList.remove('pausado');
        btnPlayPause.textContent = '⏸ Pausar Música';
    }
    isPlaying = !isPlaying;
});

function moverBotonNo() {
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 150;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}

btnNo.addEventListener('mouseover', moverBotonNo);
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moverBotonNo();
});

btnSi.addEventListener('click', () => {
    const heart = confetti.shapeFromPath({
        path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -75,-76 -151,-151 -151,-227 0,-42 34,-75 76,-75 38,0 56,18 75,56z'
    });

    confetti({
        shapes: [heart],
        scalar: 2,
        particleCount: 60,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#f7a8b8', '#f9c5d1', '#e56b8f', '#ffffff']
    });

    btnNo.style.display = 'none';
    btnSi.style.display = 'none';
    mensajeFinal.classList.remove('oculto');
});