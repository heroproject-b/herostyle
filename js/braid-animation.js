document.addEventListener('DOMContentLoaded', () => {
    const braids = document.querySelectorAll('.braid');
    
    // Create realistic braid segments
    braids.forEach((braid, index) => {
        // Create gradient for braid
        const grad = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        grad.id = `braid-grad-${index}`;
        grad.setAttribute("x1", "0%");
        grad.setAttribute("y1", "0%");
        grad.setAttribute("x2", "100%");
        grad.setAttribute("y2", "100%");
        
        const stops = [
            {offset: "0%", color: "var(--hair-base)"},
            {offset: "30%", color: "var(--hair-highlight)"},
            {offset: "70%", color: "var(--hair-highlight)"},
            {offset: "100%", color: "var(--hair-base)"}
        ];
        
        stops.forEach(stop => {
            const stopEl = document.createElementNS("http://www.w3.org/2000/svg", "stop");
            stopEl.setAttribute("offset", stop.offset);
            stopEl.setAttribute("stop-color", stop.color);
            grad.appendChild(stopEl);
        });
        
        braid.insertBefore(grad, braid.firstChild);
        
        // Apply gradient to braid
        const mainBraid = braid.querySelector('.braid-main');
        mainBraid.style.stroke = `url(#braid-grad-${index})`;
        
        // Create braid segments
        createBraidSegments(braid);
    });
    
    // Animate braids
    function animateBraids() {
        const now = performance.now() / 1000;
        document.querySelectorAll('.braid-segment').forEach(segment => {
            const speed = parseFloat(segment.dataset.speed);
            const offset = parseFloat(segment.dataset.offset);
            const y = Math.sin(now * speed + offset) * 3;
            segment.setAttribute('transform', `translate(0,${y})`);
        });
        requestAnimationFrame(animateBraids);
    }
    
    animateBraids();
});

function createBraidSegments(braid) {
    const mainPath = braid.querySelector('.braid-main');
    const pathLength = mainPath.getTotalLength();
    const segmentCount = 20;
    
    for (let i = 0; i < segmentCount; i++) {
        const pos = i / segmentCount;
        const point = mainPath.getPointAtLength(pos * pathLength);
        const nextPoint = mainPath.getPointAtLength((pos + 0.05) * pathLength);
        
        const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180 / Math.PI;
        
        const segment = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        segment.classList.add('braid-segment');
        segment.setAttribute('x', '-5');
        segment.setAttribute('y', '-3');
        segment.setAttribute('width', '10');
        segment.setAttribute('height', '6');
        segment.setAttribute('rx', '3');
        segment.setAttribute('ry', '3');
        segment.setAttribute('transform', `translate(${point.x},${point.y}) rotate(${angle})`);
        segment.setAttribute('fill', i % 2 === 0 ? 'var(--hair-highlight)' : 'var(--hair-base)');
        segment.dataset.speed = (0.5 + Math.random() * 1.5).toFixed(2);
        segment.dataset.offset = (Math.random() * Math.PI * 2).toFixed(2);
        
        braid.appendChild(segment);
    }
}
