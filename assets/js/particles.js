document.addEventListener("DOMContentLoaded", function() {
    const particleImages = [
        "assets/particles/flower.png",
        "assets/particles/snowflake.png",
        "assets/particles/leaf.png"
    ];

    function createParticle() {
        const particle = document.createElement("img");
        particle.classList.add("particle");
        particle.src = particleImages[Math.floor(Math.random() * particleImages.length)];
        document.body.appendChild(particle);

        // Random positioning
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${5 + Math.random() * 5}s`; // Vary animation time

        setTimeout(() => {
            particle.remove();
        }, 10000); // Remove after animation
    }

    // Generate particles at intervals
    setInterval(createParticle, 2000);
});
