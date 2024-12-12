import { TreeController } from './tree.js';
import { AudioController } from './audio.js';
import { LightSystem } from './lights.js';
import { GestureController } from './gestures.js';
import { ParticleSystem } from './particles.js';
import { SnowfallEffect } from './snowfall.js';
class ChristmasTreeApp {
constructor() {
this.initializeComponents();
this.setupEventListeners();
}
/**
* Initialize all components of the app.
*/
initializeComponents() {
try {
this.treeController = new TreeController();
this.audioController = new AudioController();
this.lightSystem = new LightSystem();
this.gestureController = new GestureController();
this.particleSystem = new ParticleSystem();
this.snowfallEffect = new SnowfallEffect();
console.log("Components initialized successfully.");
} catch (error) {
console.error("Error initializing components:", error);
}
}
/**
*/
setupEventListeners() {
try {
* Set up event listeners for interactive controls.
const musicToggle = document.getElementById('music-toggle');
const snowToggle = document.getElementById('snow-toggle');
const lightsToggle = document.getElementById('lights-toggle');
if (musicToggle) {
musicToggle.addEventListener('click', () => {
this.audioController.toggleMusic();
});
} else {
console.warn("Music toggle button not found.");
}
if (snowToggle) {
snowToggle.addEventListener('click', () => {
this.snowfallEffect.toggle();
});
} else {
console.warn("Snow toggle button not found.");
}
if (lightsToggle) {
lightsToggle.addEventListener('click', () => {
this.lightSystem.toggleLights();
});
} else {
console.warn("Lights toggle button not found.");
}
} catch (error) {
console.error("Error setting up event listeners:", error);
}
}
}
// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
try {
new ChristmasTreeApp();
console.log("Christmas Tree App initialized.");
} catch (error) {
console.error("Error initializing Christmas Tree App:", error);
}
});