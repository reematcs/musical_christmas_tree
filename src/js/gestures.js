export class GestureController {
    constructor() {
        this.tree = document.querySelector('.tree-3d');
        this.initialX = 0;
        this.initialY = 0;
        this.isRotating = false;
        this.currentRotationX = 0;
        this.currentRotationY = 0;
        
        if (this.tree) {
            this.initGestures();
        }
    }

    initGestures() {
        this.tree.addEventListener('mousedown', this.startRotation.bind(this));
        document.addEventListener('mousemove', this.handleRotation.bind(this));
        document.addEventListener('mouseup', this.stopRotation.bind(this));

        this.tree.addEventListener('touchstart', this.startRotation.bind(this));
        document.addEventListener('touchmove', this.handleRotation.bind(this));
        document.addEventListener('touchend', this.stopRotation.bind(this));
    }

    startRotation(e) {
        this.isRotating = true;
        this.initialX = e.clientX || e.touches[0].clientX;
        this.initialY = e.clientY || e.touches[0].clientY;
    }

    handleRotation(e) {
        if (!this.isRotating) return;

        e.preventDefault();
        const currentX = e.clientX || e.touches[0].clientX;
        const currentY = e.clientY || e.touches[0].clientY;

        const deltaX = currentX - this.initialX;
        const deltaY = currentY - this.initialY;

        this.currentRotationY += deltaX * 0.5;
        this.currentRotationX = Math.max(Math.min(this.currentRotationX + deltaY * 0.5, 30), -30);

        this.tree.style.transform = `
            rotateY(${this.currentRotationY}deg) 
            rotateX(${-this.currentRotationX}deg)
        `;

        this.initialX = currentX;
        this.initialY = currentY;
    }

    stopRotation() {
        this.isRotating = false;
    }
}