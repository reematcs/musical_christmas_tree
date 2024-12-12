// Initialize the tree
const tree = document.querySelector('.tree');
/**
* Add ornaments dynamically to the tree.
*/
function addOrnaments() {
const colors = ['#ff0000', '#ffff00', '#00ff00', '#0000ff', '#ffa500', '#ff69b4']; // Extended
color palette
const ornamentCount = 20; // Total number of ornaments
for (let i = 0; i < ornamentCount; i++) {
// Create an ornament element
const ornament = document.createElement('div');
ornament.className = 'ornament';
// Assign a random color from the palette
ornament.style.backgroundColor = colors[Math.floor(Math.random() *
colors.length)];
// Randomly position ornaments within the tree boundaries
ornament.style.left = Math.random() * 80 + 10 + '%'; // Avoid edges
ornament.style.top = Math.random() * 80 + 10 + '%'; // Avoid edges
// Add interactivity: play sound on click
ornament.dataset.sound = `ornament${(i % 2) + 1}`; // Alternate sounds for
ornaments
ornament.addEventListener('click', () => {
const soundPath = `src/assets/sounds/${ornament.dataset.sound}.mp3`;
const audio = new Audio(soundPath);
audio.play();
});
// Append ornament to the tree
tree.appendChild(ornament);
}
}
// Call the function to add ornaments after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
if (tree) {
addOrnaments();
console.log("Ornaments added to the tree.");
} else {
console.error("Tree element not found.");
}
});