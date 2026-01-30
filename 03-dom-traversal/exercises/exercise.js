// Exercise 03: DOM Traversal
// ===========================
// Use DOM traversal methods to navigate between elements.
// Avoid using getElementById or querySelector for these exercises
// (except for the initial element selection where specified).

// Get a starting element to work from
const activeNavItem = document.querySelector('.nav-item.active');
const secondCard = document.getElementById('card-2');
const firstActionBtn = document.querySelector('.action-btn');

// ===== Part 1: Parent Navigation =====

// 1. Starting from activeNavItem, get its parent element (the <ul>)
// Your code here:
let parentActiveNav = activeNavItem.parentElement
console.log(parentActiveNav);

// 2. From the activeNavItem, navigate up to find the <nav> element
// Hint: Use parentElement twice, or use closest()
// Your code here:
let nav1 = activeNavItem.parentElement.parentElement;
console.log(nav1);

// 3. From firstActionBtn, find the closest .card ancestor
// Your code here:
let closestCard = firstActionBtn.closest(".card");
console.log(closestCard);


// 4. From secondCard, navigate to its parent (main#content)
// Your code here:
const mainNode = secondCard.parentElement;
console.log(secondCard.parentElement)



// ===== Part 2: Child Navigation =====

// 5. Get the nav-list element and find all its child elements
// Your code here:
const navList = document.getElementById('nav-list');
let navListChildren = navList.childNodes;
console.log(navListChildren);

// 6. Get the first child element of the navList
// Your code here:
console.log(navList.firstElementChild);

// 7. Get the last child element of the navList
// Your code here:
console.log(navList.lastElementChild);


// 8. Get all children of secondCard
// Your code here:
console.log(secondCard.childNodes);


// 9. Get the first element child of secondCard (the h2)
// Your code here:
console.log(secondCard.firstElementChild);


// ===== Part 3: Sibling Navigation =====

// 10. From activeNavItem ("About"), get the previous sibling ("Home")
// Your code here:
console.log(activeNavItem.previousElementSibling);

// 11. From activeNavItem ("About"), get the next sibling ("Services")
// Your code here:
console.log(activeNavItem.nextElementSibling);

// 12. From secondCard, get the previous sibling card (card-1)
// Your code here:
console.log(secondCard.previousElementSibling);

// 13. From secondCard, get the next sibling card (card-3)
// Your code here:
console.log(secondCard.nextElementSibling);



// ===== Part 4: Combined Navigation =====

// 14. Starting from firstActionBtn, navigate to find the h2 of its card
// Hint: Go up to the card, then down to the first child
// Your code here:
console.log(firstActionBtn.closest(".card").firstElementChild);

// 15. Starting from secondCard, get the last nav item
// Hint: Navigate up, find header, then nav, then ul, then last child
// Your code here:
console.log(secondCard.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.lastElementChild)


// 16. Get all siblings of secondCard
// Hint: Start from parent's first child, then loop through nextElementSibling
// Your code here:
let childrenOfSecondCard =[secondCard.firstElementChild];
for (let element = 1; element<secondCard.childElementCount; element++){
    if(element<secondCard.childElementCount){
        childrenOfSecondCard[element] = childrenOfSecondCard[element-1].nextElementSibling
        
    }

}
console.log(childrenOfSecondCard);

// ===== Part 5: Counting and Checking =====

// 17. Count how many child elements the main#content has
// Your code here:
console.log(mainNode.childElementCount);

// 18. Check if secondCard has any children
// Hint: Check if children.length > 0 or use hasChildNodes()
// Your code here:
console.log(secondCard.hasChildNodes())


// 19. Check if activeNavItem has a previous sibling
// Your code here:
if(activeNavItem.parentElement.childElementCount>0){
    console.log("Has previous sibling:", activeNavItem.previousElementSibling);

}



// ===== BONUS Challenges =====

// 20. Write a function that takes an element and returns all its ancestors as an array
// Your code here:
let topAncestor = secondCard.parentElement.parentElement; ancestors = [topAncestor];
for (let elements = 1; elements<secondCard.parentElement.parentElement.childElementCount; elements++){
    if (topAncestor[elements]===elements<secondCard){
        topAncestor.pop();
        break;
    }
    ancestors[elements] = ancestors[elements-1].childNodes;
}
console.log(topAncestor);

// 21. Write a function that finds the index of an element among its siblings
// Your code here:
function FindElement(index, element){
    if(index>element.childElementCount){
        return ("That index is beyond this element:", element.childElementCount);
    }
    console.log(element.childNodes[index]);
}
FindElement(4, secondCard);

// 22. Starting from any button, navigate to find the sidebar
// Your code here:

