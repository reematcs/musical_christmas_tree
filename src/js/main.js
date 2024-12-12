import { AudioController } from './audio.js';
import { LightSystem } from './lights.js';
import { Controls } from './controls.js';
import { SnowfallEffect } from './snowfall.js';

class ChristmasTreeApp {
    constructor() {
        this.audioController = new AudioController();
        this.lightSystem = new LightSystem();
        this.snowfallEffect = new SnowfallEffect();
        this.controls = new Controls(
            this.audioController,
            this.lightSystem,
            this.snowfallEffect
        );
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.christmasTreeApp = new ChristmasTreeApp();
});