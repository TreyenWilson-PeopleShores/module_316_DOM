// Exercise 02: Selecting Elements
// =================================
// Complete each task by selecting the specified element(s).
// Log your results to the console to verify.

// ===== Part 1: getElementById =====

// 1. Select the element with id "page-title" and store it in a variable
// Your code here:
const Title = document.getElementById("page-title");
console.log(Title);

// 2. Select the element with id "main-header" and store it in a variable
// Your code here:
const Header = document.getElementById("main-header");
console.log(Header);


// 3. Select the contact form by its id
// Your code here:
const ContactForm = document.getElementById('contact-form')
console.log(ContactForm);
// 4. Select the submit button by its id
// Your code here:
const SubmitButton = document.getElementById('submit-btn')
console.log(SubmitButton);


// ===== Part 2: querySelector =====

// 5. Select the first paragraph with class "intro-text"
// Your code here:
const intro = document.querySelector(".intro-text");
console.log(intro);

// 6. Select the navigation element using its class
// Your code here:
const nav = document.querySelector(".navigation");
console.log(nav);

// 7. Select the h3 element that also has class "special"
// Your code here:
const h3Special = document.querySelector(".card-title.special");
console.log(h3Special);

// 8. Select the first card using its data attribute
// Hint: use [data-id="1"]
// Your code here:
const firstCard = document.querySelector('[data-id="1"]');
console.log(firstCard);


// 9. Select the email input using an attribute selector
// Your code here:
const emailInput = document.querySelector('input[type="email"]');
console.log(emailInput);

// ===== Part 3: querySelectorAll =====

// 10. Select ALL nav links and store them in a variable
// Your code here:
const allNavs = document.querySelectorAll('.nav-link');
console.log(allNavs);

// 11. Select ALL cards on the page
// Your code here:
const allCards = document.querySelectorAll('.card');
console.log(allCards);

// 12. Select ALL paragraphs with class "intro-text"
// Your code here:
const pIntro = document.querySelectorAll('p, .intro-text');
console.log(pIntro);

// 13. Select ALL input elements in the form
// Your code here:
const allInputs = document.querySelectorAll('input');
console.log(allInputs);

// 14. Select ALL h2 AND h3 elements on the page
// Your code here:
const allh2h3 = document.querySelectorAll('h2, h3');
console.log(allh2h3);


// ===== Part 4: Caching and Using Selections =====

// 15. Cache the page title element, then log its text content
// Your code here:
const Title2 = document.getElementById("page-title");
console.log(Title2.textContent);


// 16. Cache all card titles, then log how many there are
// Your code here:
const everyCard = document.querySelectorAll(".card-title");
console.log(everyCard.length);

// 17. Select the footer and log its innerHTML
// Your code here:
const footer = document.querySelectorAll("footer");
console.log(footer[footer.length-1]);


// ===== BONUS Challenges =====

// 18. Select the second nav-link (not the first, not all - just the second)
// Hint: Look up :nth-child() or :nth-of-type()
// Your code here:
const secondNav = document.querySelector(".nav-link:nth-of-type(2)");
console.log(secondNav);


// 19. Select all cards that come after the first one
// Hint: Look up :not(:first-child)
// Your code here:
const allButFirstCard = document.querySelectorAll(".card:not(:first-child)");
console.log(allButFirstCard);

// 20. Convert a NodeList to an array and log it
// Your code here:
const items = document.querySelectorAll('.nav-link');
console.log(items.length);
let itemArray = []
for (let item = 0; item<items.length; item++){
    itemArray.push(items[item]);
}
console.log("Array:", itemArray);