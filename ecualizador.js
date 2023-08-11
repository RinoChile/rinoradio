const bars = [document.getElementById('barra1'), document.getElementById('barra2'), document.getElementById('barra3')];

function animateBars() {
    bars.forEach(bar => {
        const randomHeight = Math.floor(Math.random() * 100) + 1;
        bar.style.height = randomHeight + '%';
    });

    requestAnimationFrame(animateBars);
}

animateBars();