// src/js/audio.js
// Initialize the AudioContext
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let bgMusicBuffer = null;
let audioSource = null; // Store the current audio source for toggling
/**
*/
try {
* Load and decode the background music file.
* @param {string} url - The URL of the audio file to fetch and decode.
async function loadAudio(url) {
const response = await fetch(url);
if (!response.ok) {
throw new Error(`Failed to load audio file: ${response.statusText}`);
}
const arrayBuffer = await response.arrayBuffer();
bgMusicBuffer = await audioContext.decodeAudioData(arrayBuffer);
console.log("Background music loaded successfully.");
} catch (error) {
console.error("Error loading audio:", error);
}
}
/**
*/
* Play or toggle the background music.
function toggleMusic() {
if (!bgMusicBuffer) {
console.error("Background music is not loaded yet.");
return;
}
// Check if music is already playing
if (audioSource) {
audioSource.stop(); // Stop the current music
audioSource = null;
console.log("Music stopped.");
return;
}
// Create a new audio source
audioSource = audioContext.createBufferSource();
audioSource.buffer = bgMusicBuffer;
audioSource.loop = true; // Enable looping
audioSource.connect(audioContext.destination);
audioSource.start(0);
console.log("Music playing...");
}
// Initialize audio when the page loads
document.addEventListener("DOMContentLoaded", () => {
loadAudio('/audio/jingle-bells.mp3'); // Replace with your audio file path
// Add event listener for the music toggle button
const musicToggleButton = document.getElementById("musicToggle");
if (musicToggleButton) {
musicToggleButton.addEventListener("click", toggleMusic);
} else {
console.warn("Music toggle button not found.");
}
});