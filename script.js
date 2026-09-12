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
const btnPlayPause = document.getElementById('btn-play-pause');
const disco = document.getElementById('disco');
let isPlaying = false;

btnOpcionMusica.addEventListener('click', () => {
    audio.play().then(() => {
        isPlaying = true;
        disco.classList.remove('pausado');
        btnPlayPause.textContent = '⏸ Pausar';
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

btnPlayPause.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        disco.classList.add('pausado');
        btnPlayPause.textContent = '▶ Reproducir';
    } else {
        audio.play();
        disco.classList.remove('pausado');
        btnPlayPause.textContent = '⏸ Pausar';
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
    // Configuración de corazones asegurada
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = 2000;
        if (timeLeft <= 0) { return clearInterval(interval); }
        const particleCount = 50;

        // Confeti rosa y blanco con forma definida
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
            colors: ['#ff8fab', '#ffb3c6', '#ff6f91', '#ffffff'],
            shapes: ['circle']
        }));
    }, 250);

    btnNo.style.display = 'none';
    btnSi.style.display = 'none';
    mensajeFinal.classList.remove('oculto');
});