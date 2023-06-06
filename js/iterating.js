(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

})();
// #1
// const names = ['Rick', 'Damian', 'Emily', 'Rick'];
//
// console.log(names);

// #2
// const names = ['John', 'Mary', 'David', 'Bart'];
//
// console.log(names.length);

// #3
// const names = ['John', 'Mary', 'David', 'Emily'];
//
// console.log(names[0]); // Prints 'John'
// console.log(names[1]); // Prints 'Mary'
// console.log(names[2]); // Prints 'David'
// console.log(names[3]); // Prints 'Emily'

// const names = ['John', 'Mary', 'David', 'Emily'];
//
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// #4
// const names = ['Rick', 'Mary', 'David', 'Emily'];
// for (let i = 0; i < names.length; i++){
//     console.log(names)
// }

// ??????????????????????????????????????????????????????
// const names = ['John', 'Mary', 'Jack', 'Emily'];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// #5
const names = ['John', 'Mary', 'David', 'Emily'];

names.forEach((name) => {
    console.log(name);
});

function first(arr){
    return arr[0];
}
function second(arr){
    return arr[1];
}
function last(arr){
    return arr[arr.length - 1];
}


