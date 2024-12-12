export class LightSystem {
    constructor() {
        this.tree = document.querySelector('.tree');
        this.lights = [];
        this.isOn = false;
        this.createLights();
    }

    createLights() {
        const colors = ['#ff0000', '#00ff00', '#ffff00', '#0000ff', '#ff00ff'];
        const lightCount = 50;

        for (let i = 0; i < lightCount; i++) {
            const light = document.createElement('div');
            light.className = 'light';
            
            // Calculate position to ensure lights stay within triangle
            const section = i < lightCount/3 ? 'top' : 
                          i < (2*lightCount)/3 ? 'middle' : 'bottom';
            
            let yPercent, maxWidth;
            switch(section) {
                case 'top':
                    yPercent = Math.random() * 25 + 5; // 5-30%
                    maxWidth = 30; // narrower at top
                    break;
                case 'middle':
                    yPercent = Math.random() * 25 + 35; // 35-60%
                    maxWidth = 50; // wider in middle
                    break;
                case 'bottom':
                    yPercent = Math.random() * 25 + 65; // 65-90%
                    maxWidth = 70; // widest at bottom
                    break;
            }
            
            // Calculate x position based on y position (triangle shape)
            const maxX = maxWidth * (1 - yPercent/100); // narrows as y decreases
            const xPercent = 50 + (Math.random() * 2 - 1) * maxX; // centered around 50%
            
            light.style.backgroundColor = colors[i % colors.length];
            light.style.left = `${xPercent}%`;
            light.style.top = `${yPercent}%`;
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