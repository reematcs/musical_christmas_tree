export class TreeController {
    constructor() {
        this.tree = document.querySelector('.tree');
        this.ornamentSounds = {};
        this.init();
    }

    async init() {
        if (this.tree) {
            await this.preloadSounds();
            this.addOrnaments();
        }
    }

    async preloadSounds() {
        const sounds = ['ornament1', 'ornament2'];
        for (const sound of sounds) {
            const audio = new Audio(`src/assets/sounds/${sound}.mp3`);
            await audio.load();
            this.ornamentSounds[sound] = audio;
        }
    }

    addOrnaments() {
        const colors = ['#ff0000', '#ffff00', '#00ff00', '#0000ff', '#ffa500', '#ff69b4'];
        const ornamentCount = 30;

        for (let i = 0; i < ornamentCount; i++) {
            const ornament = document.createElement('div');
            ornament.className = 'ornament';
            
            // Similar triangle-based positioning as lights
            const section = i < ornamentCount/3 ? 'top' : 
                          i < (2*ornamentCount)/3 ? 'middle' : 'bottom';
            
            let yPercent, maxWidth;
            switch(section) {
                case 'top':
                    yPercent = Math.random() * 20 + 10; // 10-30%
                    maxWidth = 25; // narrower at top
                    break;
                case 'middle':
                    yPercent = Math.random() * 20 + 40; // 40-60%
                    maxWidth = 45; // wider in middle
                    break;
                case 'bottom':
                    yPercent = Math.random() * 20 + 70; // 70-90%
                    maxWidth = 65; // widest at bottom
                    break;
            }
            
            // Calculate x position based on y position (triangle shape)
            const maxX = maxWidth * (1 - yPercent/100);
            const xPercent = 50 + (Math.random() * 2 - 1) * maxX;
            
            ornament.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            ornament.style.left = `${xPercent}%`;
            ornament.style.top = `${yPercent}%`;
            
            // Reduced z-translation to keep ornaments closer to tree
            ornament.style.transform = `translateZ(${Math.random() * 20 - 10}px)`;
            
            const soundType = `ornament${(i % 2) + 1}`;
            ornament.addEventListener('click', () => this.playOrnamentSound(soundType));
            
            this.tree.appendChild(ornament);
        }
    }


    playOrnamentSound(soundType) {
        const sound = this.ornamentSounds[soundType];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(err => console.error("Error playing sound:", err));
        }
    }
}