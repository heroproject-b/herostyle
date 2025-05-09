document.addEventListener('DOMContentLoaded', () => {
    const waves = document.querySelectorAll('.wave path');
    
    // Randomize wave paths periodically
    function randomizeWaves() {
        waves.forEach(wave => {
            const amplitude = 50 + Math.random() * 50;
            const frequency = 2 + Math.random() * 3;
            const offset = Math.random() * 50;
            
            const newPath = `M0,100 C${50},${100 + amplitude} ${150},${100 - amplitude} 250,100 S${450},${100 + amplitude} 500,${100 + offset}`;
            wave.setAttribute('d', newPath);
        });
    }
    
    // Initial randomization
    randomizeWaves();
    
    // Continue randomizing every 8 seconds
    setInterval(randomizeWaves, 8000);
});