const music = document.getElementById('bg-music');

if (music) {
    music.volume = 0.5;

    function startMusic() {
        music.play().then(() => {
            document.removeEventListener('click', startMusic);
            document.removeEventListener('touchstart', startMusic);
        }).catch(() => {});
    }

    // Intento inicial al cargar
    startMusic();

    // Arranca al primer clic o toque en cualquier parte de la invitación
    document.addEventListener('click', startMusic);
    document.addEventListener('touchstart', startMusic, { passive: true });
}