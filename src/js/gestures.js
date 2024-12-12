export class GestureController {
    constructor() {
    this.tree = document.querySelector('.tree-3d');
    this.initialX = 0;
    this.initialY = 0;
    this.initGestures();
    }
    initGestures() {
    this.tree.addEventListener('mousedown', this.startRotation.bind(this));
    document.addEventListener('mousemove', this.handleRotation.bind(this));
    document.addEventListener('mouseup', this.stopRotation.bind(this));
    // Touch events
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
    const currentX = e.clientX || e.touches[0].clientX;
    const currentY = e.clientY || e.touches[0].clientY;
    const deltaX = currentX - this.initialX;
    const deltaY = currentY - this.initialY;
    this.tree.style.transform = `rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
    }
    }
    stopRotation() {
    this.isRotating = false;
    }