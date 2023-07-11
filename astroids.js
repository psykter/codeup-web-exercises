let asteroids = [];
let starshipImage;
let soundtrack;

function preload() {
    starshipImage = loadImage('starship.png');
    soundtrack = new Audio('a-space-journey-through-the-solar-system-153272.mp3');
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

    // Calculate the reduced size of the starship image
    let reducedSize = starshipImage.width / 15;

    // Display the starship image at the center of the canvas with reduced size
    image(starshipImage, (width - reducedSize) / 2, (height - reducedSize) / 2, reducedSize, reducedSize);
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

function konamiSuccess() {
    // Display the updated alert message
    alert('You have added 30 lives!');
}

// Pause the soundtrack when the window loses focus
$(window).blur(function() {
    soundtrack.pause();
});

// Resume the soundtrack when the window regains focus
$(window).focus(function() {
    soundtrack.play();
});
