let asteroids = [];
let lives = 3;
let spaceship;

const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
let konamiIndex = 0;

function preload() {
    spaceship = loadImage('playerShip1_blue.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Create 10 random asteroids
    for (let i = 0; i < 10; i++) {
        asteroids.push(new Asteroid());
    }
}

function draw() {
    background(0);

    // Update and display asteroids
    for (let asteroid of asteroids) {
        asteroid.update();
        asteroid.display();
    }

    // Display the spaceship at the center of the canvas
    image(spaceship, (width - spaceship.width) / 2, (height - spaceship.height) / 2);
}

class Asteroid {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(20, 50);
        this.speedX = random(-2, 2);
        this.speedY = random(-2, 2);
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen edges
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    display() {
        ellipse(this.x, this.y, this.size);
    }
}

$(document).keyup(function(event) {
    if (event.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            konamiSuccess();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function konamiSuccess() {
    // Add 30 lives
    lives += 30;
    alert('You have added 30 lives!');
}