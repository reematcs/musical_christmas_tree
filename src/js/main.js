import { AudioController } from './audio.js';
import { LightSystem } from './lights.js';
import { Controls } from './controls.js';
import { SnowfallEffect } from './snowfall.js';
import { GestureController } from './gestures.js';
import { TreeController } from './tree.js';
import { ParticleSystem } from './particles.js';

class ChristmasTreeApp {
    constructor() {
        this.initializeComponents();
        this.setupEventListeners();
    }

    initializeComponents() {
        this.audioController = new AudioController();
        this.lightSystem = new LightSystem();
        this.snowfallEffect = new SnowfallEffect();
        this.treeController = new TreeController();
        this.gestureController = new GestureController();
        
        const canvas = document.getElementById('particle-canvas');
        if (canvas) {
            this.particleSystem = new ParticleSystem();
        }

        this.controls = new Controls(
            this.audioController,
            this.lightSystem,
            this.snowfallEffect
        );
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            if (this.particleSystem) {
                this.particleSystem.resizeCanvas();
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.christmasTreeApp = new ChristmasTreeApp();
});