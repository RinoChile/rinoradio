document.addEventListener('DOMContentLoaded', () => {
    const radio = document.getElementById('radio');
    const playPauseButton = document.getElementById('playPauseButton');
    const playImage = document.getElementById('playImage');
    const pauseImage = document.getElementById('pauseImage');
    const volumeSlider = document.getElementById('volumeSlider');
    const radioUrl = 'https://stream-40.zeno.fm/8rrehyqb6reuv';

    let isPlaying = false;

    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            radio.pause();
            isPlaying = false;
            playImage.style.display = 'block';
            pauseImage.style.display = 'none';
        } else {
            radio.src = radioUrl; // Cargar la URL original en tiempo real
            radio.play();
            isPlaying = true;
            playImage.style.display = 'none';
            pauseImage.style.display = 'block';
        }
    });

    radio.addEventListener('ended', () => {
        isPlaying = false;
        playImage.style.display = 'block';
        pauseImage.style.display = 'none';
    });

    volumeSlider.addEventListener('input', () => {
        const volume = volumeSlider.value;
        radio.volume = volume;
    });
});