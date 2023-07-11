let asteroids = [];
let starshipImage;
let bullets = [];
let rotationAngle = 0;
let rotationSpeed = 0.1;
let totalLives = 3; // Initial total lives
let currentLives = totalLives; // Current remaining lives
let isGameOver = false; // Track if the game is over

function preload() {
    starshipImage = loadImage('img/starship.png');
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
    for (let i = asteroids.length - 1; i >= 0; i--) {
        asteroids[i].update();
        asteroids[i].display();

        // Check for collision with starship
        if (!isGameOver && asteroids[i].checkCollision(starshipImage)) {
            destroyStarship();
        }
    }

    // Update and display bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].update();
        bullets[i].display();

        // Check for collision with asteroids
        for (let j = asteroids.length - 1; j >= 0; j--) {
            if (bullets[i].checkCollision(asteroids[j])) {
                break; // Exit the loop if a collision occurs to avoid redundant checks
            }
        }
    }

    // Remove destroyed asteroids and bullets
    asteroids = asteroids.filter(asteroid => !asteroid.isDestroyed);
    bullets = bullets.filter(bullet => !bullet.isDestroyed);

    // Calculate the reduced size of the starship image
    let reducedSize = starshipImage.width / 12;

    // Set the rotation angle based on key presses
    if (keyIsDown(65)) { // "a" key
        rotationAngle -= rotationSpeed;
    }
    if (keyIsDown(68)) { // "d" key
        rotationAngle += rotationSpeed;
    }

    // Apply the rotation and display the starship image
    push();
    translate(width / 2, height / 2);
    rotate(rotationAngle);
    image(starshipImage, -reducedSize / 2, -reducedSize / 2, reducedSize, reducedSize);
    pop();

    // Display the current number of lives at the top center of the screen
    fill(4, 51, 255);
    textSize(48);
    textAlign(CENTER, TOP);
    text(`Lives: ${currentLives}`, width / 2, 10);

    // Check if the game is over
    if (currentLives === 0) {
        isGameOver = true;
        showGameOver();
    }
}

function destroyStarship() {
    currentLives--;
    if (currentLives > 0) {
        // Reset starship position and remove bullets
        rotationAngle = 0;
        bullets = [];
    } else {
        // Game over
        isGameOver = true;
        showGameOver();
    }
}

function showGameOver() {
    // Display game over message
    fill(255);
    textSize(48);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
}

class Asteroid {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(20, 50);
        this.speedX = random(-2, 2);
        this.speedY = random(-2, 2);
        this.isDestroyed = false; // Track if the asteroid has been destroyed
        this.isExploded = false; // Track if the asteroid has been hit and exploded
    }

    update() {
        if (!this.isDestroyed) {
            this.x += this.speedX;
            this.y += this.speedY;

            // Wrap around screen edges
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }
    }

    display() {
        if (!this.isDestroyed && !this.isExploded) {
            fill(170, 121, 66);
            ellipse(this.x, this.y, this.size);
        }
        if (this.isExploded) {
            // Display explosion effect
            fill(255, 0, 0);
            ellipse(this.x, this.y, this.size);
        }
    }

    checkCollision(starship) {
        if (!this.isDestroyed && !this.isExploded) {
            let starshipSize = starship.width / 15;
            let starshipX = (width - starshipSize) / 2;
            let starshipY = (height - starshipSize) / 2;

            // Check collision between the asteroid and starship
            if (
                this.x + this.size / 2 > starshipX &&
                this.x - this.size / 2 < starshipX + starshipSize &&
                this.y + this.size / 2 > starshipY &&
                this.y - this.size / 2 < starshipY + starshipSize
            ) {
                this.isExploded = true;
                return true; // Collision occurred
            }
        }
        return false; // No collision
    }

    destroy() {
        this.isDestroyed = true;
    }
}


class Bullet {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speed = 5;
        this.size = 10;
        this.isDestroyed = false; // Track if the bullet has hit an asteroid
    }

    update() {
        if (!this.isDestroyed) {
            this.x += this.direction.x * this.speed;
            this.y += this.direction.y * this.speed;
        }
    }

    display() {
        if (!this.isDestroyed) {
            fill(255);
            ellipse(this.x, this.y, this.size);
        }
    }

    checkCollision(asteroid) {
        if (!this.isDestroyed && !asteroid.isExploded && dist(this.x, this.y, asteroid.x, asteroid.y) <= (this.size + asteroid.size) / 2) {
            this.isDestroyed = true;
            asteroid.destroy();
            asteroid.isExploded = true;
            return true; // Collision occurred
        }
        return false; // No collision
    }
}


const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
let konamiIndex = 0;

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

$(document).keypress(function(event) {
    if (event.key === 'k' && !isGameOver) {
        shootBullet();
    }
});

function konamiSuccess() {
    // Display the updated alert message
    alert('You have added 30 lives!');
    totalLives += 30;
    currentLives += 30;
}

function shootBullet() {
    let x = (width - starshipImage.width / 15) / 2 + starshipImage.width / 30;
    let y = (height - starshipImage.width / 15) / 2;

    // Calculate the direction vector of the bullet based on the rotation angle
    let direction = p5.Vector.fromAngle(rotationAngle - HALF_PI); // Subtract HALF_PI to align with the front of the ship

    // Set the bullet's initial position relative to the starship's position and rotation
    let bulletX = x + direction.x * (starshipImage.width / 30);
    let bulletY = y + direction.y * (starshipImage.width / 30);

    bullets.push(new Bullet(bulletX, bulletY, direction));
}