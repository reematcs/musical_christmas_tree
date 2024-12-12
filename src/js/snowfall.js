export class SnowfallEffect {
    constructor() {
        this.container = document.querySelector('.snow-container');
        this.snowflakeCount = 50;
        this.active = false;
        this.snowflakes = [];
        this.init();
    }

    init() {
        this.createSnowflakes();
        
        const snowToggle = document.getElementById('snowToggle');
        if (snowToggle) {
            snowToggle.addEventListener('click', () => this.toggle());
        }
    }

    createSnowflakes() {
        this.container.innerHTML = '';
        this.snowflakes = [];

        for (let i = 0; i < this.snowflakeCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            
            snowflake.style.left = `${Math.random() * 100}%`;
            snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`;
            snowflake.style.animationDelay = `${Math.random() * 5}s`;
            snowflake.style.opacity = Math.random() * 0.6 + 0.4;

            this.container.appendChild(snowflake);
            this.snowflakes.push(snowflake);
        }

        this.container.style.display = 'none';
    }

    toggle() {
        this.active = !this.active;
        this.container.style.display = this.active ? 'block' : 'none';
        if (this.active) {
            this.createSnowflakes();
        }
        return this.active;
    }
}
