export class SnowfallEffect {
    constructor() {
    this.container = document.querySelector('.snow-container');
    this.snowflakeCount = 50;
    this.active = false;
    this.createSnowflakes();
    }
    createSnowflakes() {
    for (let i = 0; i < this.snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.animationDelay = `${Math.random() * 2}s`;
    this.container.appendChild(snowflake);
    }
    }
    toggle() {
    this.active = !this.active;
    this.container.style.display = this.active ? 'block' : 'none';
    }
    }