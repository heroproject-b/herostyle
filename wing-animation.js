document.addEventListener('DOMContentLoaded', () => {
    const leftWing = document.querySelector('.wing-left path');
    const rightWing = document.querySelector('.wing-right path');
    
    function animateWings() {
        // Create organic wing shapes
        const leftPoints = [
            `M200,200`,
            `C${150 + randomOffset(20)},${100 + randomOffset(30)}`,
            `${100 + randomOffset(15)},${150 + randomOffset(20)}`,
            `0,${200 + randomOffset(10)}`
        ].join(' ');
        
        const rightPoints = [
            `M0,200`,
            `C${50 + randomOffset(20)},${100 + randomOffset(30)}`,
            `${100 + randomOffset(15)},${150 + randomOffset(20)}`,
            `200,${200 + randomOffset(10)}`
        ].join(' ');
        
        leftWing.setAttribute('d', leftPoints);
        rightWing.setAttribute('d', rightPoints);
        
        function randomOffset(max) {
            return (Math.random() * max * 2) - max;
        }
    }
    
    // Initial animation
    animateWings();
    
    // Change wing shapes every 5 seconds
    setInterval(animateWings, 5000);
});
