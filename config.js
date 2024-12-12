module.exports = {
    port: process.env.PORT || 3000,
    environment: process.env.NODE_ENV || 'development',
    audioEnabled: process.env.AUDIO_ENABLED || true,
    features: {
    snow: true,
    music: true,
    lights: true,
    gestures: true
    },
    performance: {
    maxParticles: 100,
    maxLights: 50,
    animationFPS: 60
    }
    };