(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // Calculate the area of the circle using the formula: area = pi * radius^2
            return Math.PI * Math.pow(this.radius, 2);
        },

        logInfo: function (doRounding) {
            // Calculate the area of the circle
            var area = this.getArea();

            // If doRounding is true, round the result to the nearest integer.
            if (doRounding) {
                area = Math.round(area);
            }

            // Output the information
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false); // Output the area without rounding
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);  // Output the area with rounding

    console.log("=======================================================");

    // Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle with the new radius
    console.log("Raw circle information");
    circle.logInfo(false); // Output the area without rounding
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);  // Output the area with rounding
})();
