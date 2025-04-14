document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    
    for (let i = 0; i < 150; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 2}s`;
        body.appendChild(star);
    }

    
    body.addEventListener("click", () => {
        const stars = document.querySelectorAll(".star");
        stars.forEach(star => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            star.style.transform = `translate(${x}vw, ${y}vh)`;
        });
    });

    
    console.log("Bienvenido a mi portafolio. ¡Espero que te guste!");
});