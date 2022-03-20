console.log("Welcome to the first public release of the telegraph 2!");

const HTML_over = document.getElementById("over");
const HTML_sendSignal = document.getElementById("sendSignal");

const channel = 20154;
const signalLength = 10;
var microphone;
var FFTAnalyzer;
var player;

function setup() {
    createCanvas(200, 200);

    // microphone
    microphone = new p5.AudioIn();
    microphone.start();

    // analyzer
    FFTAnalyzer = new p5.FFT();
    FFTAnalyzer.setInput(microphone);
    
    // player
    player = new p5.Oscillator();
    player.freq(channel);
}

function draw() {
    background(255, 0, 0);
    FFTAnalyzer.analyze();
    const strength = FFTAnalyzer.getEnergy(channel);
    const threshold = parseInt(HTML_over.value);
    if (strength > threshold) {
        background(0, 200, 0);
    }
    console.log(`Threshold; ${threshold}`);
    console.log(`Strength: ${strength}`);
}

// event listeners
HTML_sendSignal.addEventListener("click", () => {
    player.start();
    setTimeout(() => {player.stop();}, signalLength);
});
