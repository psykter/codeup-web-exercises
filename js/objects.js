    "use strict";

    /**
     * TODO: //Done........
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // const person = {
    //     firstName: 'Rick',
    //     lastName: 'Sanchez',
    //     sayHello: function() {
    //         return 'Hello from ' + this.firstName + ' ' + this.lastName + '!';
    //     }
    // };
    //
    // console.log(person.firstName); // Output: "Rick"
    // console.log(person.lastName); // Output: "Sanchez"
    //
    // console.log(person.sayHello())

    /**
     * TODO: //Done........
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // person.sayHello = function (){
    //     return `Hello from ${this.firstName} ${this.lastName}`;
    // }

    // const person = {
    //     firstName: "Rick",
    //     lastName: "Diaz",
    //     sayHello(){
    //         return `Hello from ${this.firstName} ${this.lastName}`;
    //     }
    // }

    // let person = {
    //     firstName: 'Rick',
    //     lastName: 'Sanchez',
    //     sayHello: function() {
    //         return 'Hello, ' + this.firstName + ' ' + this.lastName + '!';
    //     }
    // };
    //
    // console.log(person.sayHello()); // "Hello, John Doe!"


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // function calculateAmountToPay(shopper) {
    //     var discount = 0;
    //     var amountAfterDiscount = shopper.amount;
    //
    //     if (shopper.amount > 200) {
    //
    //         // console.log(`${shopperr.name} spent $${shopper.amount.toFixed(2)}.  Your got the discount`)
    //
    //         discount = shopper.amount * 0.12;
    //         amountAfterDiscount = shopper.amount - discount;
    //     }
    //
    //     return {
    //         name: shopper.name,
    //         amountBeforeDiscount: shopper.amount,
    //         discount: discount,
    //         amountAfterDiscount: amountAfterDiscount
    //     };
    // }
    //
    // shoppers.forEach(function(shopper) {
    //     var amountToPay = calculateAmountToPay(shopper);
    //     console.log(
    //         amountToPay.name +
    //         ' needs to pay $' +
    //         amountToPay.amountBeforeDiscount.toFixed(2) +
    //         '. Discount: $' +
    //         amountToPay.discount.toFixed(2) +
    //         '. Amount after discount: $' +
    //         amountToPay.amountAfterDiscount.toFixed(2)
    //     );
    // });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // let books = [
    //     {
    //         title: 'The Salmon of Doubt',
    //         author: {
    //             firstName: 'Douglas',
    //             lastName: 'Adams'
    //         }
    //     },
    //     {
    //         title: 'Harry Potter and the Sorcerer\'s Stone',
    //         author: {
    //             firstName: 'J.K.',
    //             lastName: 'Rowling'
    //         }
    //     },
    //     {
    //         title: 'The Hobbit',
    //         author: {
    //             firstName: 'J.R.R.',
    //             lastName: 'Tolkien'
    //         }
    //     },
    //     {
    //         title: 'To Kill a Mockingbird',
    //         author: {
    //             firstName: 'Harper',
    //             lastName: 'Lee'
    //         }
    //     },
    //     {
    //         title: '1984',
    //         author: {
    //             firstName: 'George',
    //             lastName: 'Orwell'
    //         }
    //     }
    // ];
    //
    // // books.push ({
    // //     title: "Twilight",
    //
    // })
    //
    // console.log(books[1].title); // "The Salmon of Doubt"
    // console.log(books[1].author.firstName); // "Douglas"
    // console.log(books[1].author.lastName); // "Adams"


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach((book, index) => {
    //     console.log(`Book #${index + 1}`);
    //     console.log(`Title: ${books[index].title}`);
    //     console.log('Author:')
    // }) {
    //
    // }


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


        // const car = {};
        // car.make = "Subaru";
        // car.model = "Outback";
        // car.color = "White";
        //
        //
        // const car = {
        //     make: "Subaru",
        //     model: "Outback",
        //     color: "white",
        //     features: ["Automatic Windows", "Bluetooth Connectivity", "AM/FM Radio"],
        //     owner: {
        //         name: "Rick Diaz",
        //         age: 100
        //     },
        //     honk: function (){
        //         console.log("Car honked")
        //     }
        // },
        //
        // console.log(car.model);
        // console.log(car.color);
        // console.log(car["make"]);

    // function createBook(title, authorFirstName, authorLastName) {
    //     return {
    //         title: title,
    //         author: {
    //             firstName: authorFirstName,
    //             lastName: authorLastName
    //         }
    //     };
    // }
    //
    // let books = [
    //     createBook('The Great Gatsby', 'F. Scott', 'Fitzgerald'),
    //     createBook('To Kill a Mockingbird', 'Harper', 'Lee'),
    //     createBook('Pride and Prejudice', 'Jane', 'Austen'),
    //     createBook('1984', 'George', 'Orwell'),
    //     createBook('The Catcher in the Rye', 'J.D.', 'Salinger')
    // ];
    //
    // console.log(books[0].title); // "The Great Gatsby"
    // console.log(books[0].author.firstName); // "F. Scott"
    // console.log(books[0].author.lastName); // "Fitzgerald"


    // function createBook(title, authorFirstName, authorLastName) {
    //     return {
    //         title: title,
    //         author: {
    //             firstName: authorFirstName,
    //             lastName: authorLastName
    //         }
    //     };
    // }

    // function showBookInfo(book) {
    //     console.log('Title:', book.title);
    //     console.log('Author:', book.author.firstName, book.author.lastName);
    //     console.log('-------------------------');
    // }
    //
    let books = [
        createBook('The Great Gatsby', 'F. Scott', 'Fitzgerald'),
        createBook('To Kill a Mockingbird', 'Harper', 'Lee'),
        createBook('Pride and Prejudice', 'Jane', 'Austen'),
        createBook('1984', 'George', 'Orwell'),
        createBook('The Catcher in the Rye', 'J.D.', 'Salinger')
    ];
    //
    // for (let i = 0; i < books.length; i++) {
    //     showBookInfo(books[i]);
    // }

    function createBook(title, authorFirstName, aurthorLaseName) {
        return {
            title: title
            aurthor: {
                firstName: aurthorFirstName,
                lastName: aurthorLastName}
        };
    }