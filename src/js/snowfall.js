export class SnowfallEffect {
    constructor() {
        this.container = document.querySelector('.snow-container');
        this.snowflakeCount = 50;
        this.active = false;
        this.snowflakes = [];
        this.init();
    }

    init() {
        // Create initial snowflakes but keep them hidden
        this.createSnowflakes();
        
        // Add toggle button listener if it exists
        const snowToggle = document.getElementById('snowToggle');
        if (snowToggle) {
            snowToggle.addEventListener('click', () => this.toggle());
        }
    }

    createSnowflakes() {
        // Clear existing snowflakes
        this.container.innerHTML = '';
        this.snowflakes = [];

        // Create new snowflakes
        for (let i = 0; i < this.snowflakeCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            
            // Randomize starting position
            snowflake.style.left = `${Math.random() * 100}%`;
            
            // Randomize animation
            snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`; // 5-8s duration
            snowflake.style.animationDelay = `${Math.random() * 5}s`; // 0-5s delay
            
            // Add some random opacity
            snowflake.style.opacity = Math.random() * 0.6 + 0.4;

            this.container.appendChild(snowflake);
            this.snowflakes.push(snowflake);
        }

        // Initially hide the container
        this.container.style.display = 'none';
    }

    toggle() {
        this.active = !this.active;
        if (this.active) {
            this.container.style.display = 'block';
            // Recreate snowflakes for a fresh animation
            this.createSnowflakes();
        } else {
            this.container.style.display = 'none';
        }
        
        // Update button text/icon if it exists
        const snowToggle = document.getElementById('snowToggle');
        if (snowToggle) {
            snowToggle.textContent = this.active ? '❄️' : '☁️';
        }
    }
}