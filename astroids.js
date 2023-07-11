let asteroids = [];

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