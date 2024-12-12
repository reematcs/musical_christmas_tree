export class AudioController {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.bgMusicBuffer = null;
        this.audioSource = null;
        this.isPlaying = false;
        
        // Load audio file when constructed
        this.loadAudio('/src/assets/sounds/jingle-bells-jingling.mp3');
    }

    async loadAudio(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load audio file: ${response.statusText}`);
            }
            const arrayBuffer = await response.arrayBuffer();
            this.bgMusicBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
            console.log("Background music loaded successfully.");
        } catch (error) {
            console.error("Error loading audio:", error);
        }
    }

    toggleMusic() {
        if (!this.bgMusicBuffer) {
            console.error("Background music is not loaded yet.");
            return false;
        }

        if (this.isPlaying && this.audioSource) {
            this.audioSource.stop();
            this.audioSource = null;
            this.isPlaying = false;
            console.log("Music stopped.");
        } else {
            this.audioSource = this.audioContext.createBufferSource();
            this.audioSource.buffer = this.bgMusicBuffer;
            this.audioSource.loop = true;
            this.audioSource.connect(this.audioContext.destination);
            this.audioSource.start(0);
            this.isPlaying = true;
            console.log("Music playing...");
        }
        return this.isPlaying;
    }
}