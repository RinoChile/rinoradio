const bars = [document.getElementById('barra1'), document.getElementById('barra2'), document.getElementById('barra3')];
const minHeight = 0.1; // Altura mínima en porcentaje
const maxHeight = 100; // Altura máxima en porcentaje
let animationSpeed = 300; // Velocidad de animación (intervalo en milisegundos)

function animateBars() {
    bars.forEach(bar => {
        const randomHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
        bar.style.height = randomHeight + '%';
    });

    setTimeout(animateBars, animationSpeed);
}

animateBars();