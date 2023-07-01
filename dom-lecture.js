"use strict";

// ========== Retrieve elements by id, class, tag name
//
// // id
//     const header = document.getElementById('main-title');
//     console.log(header);
//
// // class - will return an HTMLCollection
//     const cards = document.getElementsByClassName('card');
//     console.log(cards);
//     console.log(cards[0]);
//     // cards.pop(); // ERR/**/OR: Array specific method
//     const cardsArr = Array.from(cards); // convert HTMLCollection and NodeList to Array
//     cardsArr.pop();
//     console.log(cardsArr);
//
//
//
// // tag
//     const sections = document.getElementsByTagName('section');
//     console.log(sections);


    // ===========================================================================================


// ========== Query Selector and Query Selector All

// querySelector()

// const headerTitle = document.querySelector('header h1');
// const headerTitle = document.querySelector('#main-title');
// console.log(headerTitle);

// const li = document.querySelector('li'); // only returns first matching
// console.log(li);

// const lis = document.querySelectorAll('li'); // only returns first matching
// console.log(lis);

// const secondLi = document.querySelector('li:nth-child(2)');
// console.log(secondLi);



// // ========== Direct access to form inputs
//
//     const forms = document.forms;
//     console.log(forms['feedback-form'].feedback.value);


// ========== Accessing and modifying elements and properties

// // get value of innerHTML
//     const heading = document.getElementById("main-heading");
//     console.log(heading);
//
//     console.log(heading.innerHTML);
//     console.log(heading.innerText);

// set value of innerHTML
//     heading.innerHTML = "<em>Hi MOM!</em>";

// // set value of innerText
//     heading.innerText = "<em>Hi MOM!</em>";
//
// // append value to innerText (works the same with innerHTML)
//     heading.innerHTML += " ...and hi Mom!";


// // ========== Accessing and modifying attributes
//
// // check if attribute exists
//     const cowboy = document.getElementById('cowboy');
//     console.log(cowboy.hasAttribute('data-1'));
//
// // get an attribute value
//     console.log(cowboy.getAttribute('data-1'));
//
// // create a new attribute or change a value of an existing attribute
//     cowboy.setAttribute('data-1', 'hello');
//     cowboy.setAttribute('data-test', 'testing');
//     console.log(cowboy.getAttribute('data-1'));
//
// // remove attribute
//     cowboy.removeAttribute("data-test");
//     console.log(cowboy);


// // ========== Accessing and modifying styles
//
// // single style
//     const jumbotron = document.querySelector('.jumbotron');
//     jumbotron.style.display = "none";
//     jumbotron.style['font-family'] = "times";
//
// // apply multiple style changes
//     Object.assign(jumbotron.style, {
//         border: "10px solid black","font-family": "times", "text-decoration": "underline"
//     });
//
// // styling node list
//     const tableRows = document.getElementsByTagName("tr");
//     for (let i = 0; i < tableRows.length; i += 1) {
//         tableRows[i].style.background = "red";
//     }


// // ========== Add / Remove Elements
//
// see curriculum links