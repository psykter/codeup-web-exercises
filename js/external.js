console.log("Hello from external JavaScript")

alert("Welcome to my website!")

let userInput = prompt('What is your favorite color?');
console.log(userInput);

let userFavoriteColor  = alert("Great, " + userInput + " is my favorite color.");
console.log(userFavoriteColor)

//// Movie Rental
// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?
//
// ...
//
     let dailyRentalRateDollars;
//
     let littleMermaidDaysRented;
     let brotherBearDaysRented;
     let herculesDaysRented;
//
     let totalRentalCost;
//
     totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars;
//
//
// // Contractor
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
//
// ...
//
   let googleHourlyRateDollars = 400;
   let amazonHourlyRateDollars = 380;
   let facebookHourlyRateDollars = 350;
//
   let googleHours = 6;
   let amazonHours = 4;
   let facebookHours = 10;
//
   let totalPayment = googlePayment + amazonPayment + facebookPayment;
//
   totalPayment = googleHours * googleHourlyRateDollars;
   totalPayment += amazonHours * amazonHourlyRateDollars;
   totalPayment += facebookHours * facebookHourlyRateDollars;
//
//
// // Student Enrollment
// A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.
//
// ...
//
   let classIsNotFull; // boolean
   let classScheduleDoesNotConflict; // boolean
//
   let studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;
//
//
//
//
// // Product Offer
// A product offer can be applied only if people buy more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
// Use the following code to follow the instructions below:
//
// ...
//
   let numberOfItems; // number
   let offerIsValid; // boolean
   let isPremiumMember; // boolean
//
   let productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);