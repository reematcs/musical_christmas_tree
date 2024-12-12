export class Controls {
    constructor(audioController, lightSystem, snowfallEffect) {
        this.audioController = audioController;
        this.lightSystem = lightSystem;
        this.snowfallEffect = snowfallEffect;
        this.setupControls();
    }

    setupControls() {
        const musicToggle = document.getElementById('musicToggle');
        const snowToggle = document.getElementById('snowToggle');
        const lightsToggle = document.getElementById('lightsToggle');

        if (musicToggle) {
            musicToggle.addEventListener('click', () => {
                const isPlaying = this.audioController.toggleMusic();
                musicToggle.textContent = isPlaying ? '🔊' : '🔇';
            });
        }

        if (snowToggle) {
            snowToggle.addEventListener('click', () => {
                const isSnowing = this.snowfallEffect.toggle();
                snowToggle.textContent = isSnowing ? '❄️' : '☁️';
            });
        }

        if (lightsToggle) {
            lightsToggle.addEventListener('click', () => {
                const isOn = this.lightSystem.toggleLights();
                lightsToggle.textContent = isOn ? '💡' : '⭕';
            });
        }
    }
}