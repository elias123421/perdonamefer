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

btnOpcionMusica.addEventListener('click', () => {
    audio.play().catch(() => { });
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
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
    btnNo.style.display = 'none';
    btnSi.style.display = 'none';
    mensajeFinal.classList.remove('oculto');
});