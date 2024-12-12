export class LightSystem {
    constructor() {
        this.tree = document.querySelector('.tree');
        this.lights = [];
        this.isOn = false;
        this.createLights();
    }

    createLights() {
        const colors = ['#ff0000', '#00ff00', '#ffff00', '#0000ff', '#ff00ff'];
        const lightCount = 30;

        for (let i = 0; i < lightCount; i++) {
            const light = document.createElement('div');
            light.className = 'light';
            light.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Position lights in a spiral pattern
            const angle = (i / lightCount) * Math.PI * 2 * 3;
            const radius = 100 - (i / lightCount) * 50;
            const x = Math.cos(angle) * radius + 150;
            const y = Math.sin(angle) * radius + 300;
            
            light.style.left = `${x}px`;
            light.style.top = `${y}px`;
            light.style.animationDelay = `${Math.random() * 2}s`;
            
            this.tree.appendChild(light);
            this.lights.push(light);
        }
    }

    toggleLights() {
        this.isOn = !this.isOn;
        this.lights.forEach(light => {
            light.style.animation = this.isOn ? 'blink 2s infinite alternate' : 'none';
            light.style.opacity = this.isOn ? 1 : 0.2;
        });
        return this.isOn;
    }
}
