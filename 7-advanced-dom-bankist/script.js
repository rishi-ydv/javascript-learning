'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////
// Lecture

/*
///////////////////////////////////////
// Selecting, Creating, and Deleting Elements

// -------------------------------------
// 1. Selecting Elements

// Select the entire HTML document (the root element).
console.log(document.documentElement);

// Select the <head> element.
console.log(document.head);

// Select the <body> element.
console.log(document.body);

// Select the first element with the class 'header'.
// querySelector() returns only the first matching element.
const header = document.querySelector('.header');
console.log(header);

// Select all elements with the class 'section'.
// Searches the entire document, not just inside the header.
// Returns a static NodeList containing all matching elements.
const allSections = document.querySelectorAll('.section');
console.log(allSections);

// To select only sections inside the header, use:
// header.querySelectorAll('.section');

// Select an element using its ID.
document.getElementById('section--1');

// Select all <button> elements.
// Returns a live HTMLCollection that updates automatically.
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Select all elements with the class 'btn'.
// Returns a live HTMLCollection.
console.log(document.getElementsByClassName('btn'));

// -------------------------------------
// 2. Creating and Inserting Elements

// Create a new <div> element.
// The element is created but is not yet inserted into the DOM.
const message = document.createElement('div');

// Add the class 'cookie-message' to the newly created element.
message.classList.add('cookie-message');

// Set plain text content inside the element.
// message.textContent =
//   'We use cookies for improved functionality and analytics.';

// Insert HTML content inside the newly created element.
// innerHTML parses the HTML string and creates actual HTML elements.
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// Insert the message as the first child of the header.
// header.prepend(message);

// Insert the message as the last child of the header.
header.append(message);

// append() moves an existing element instead of creating a copy.
// To insert a copy, use cloneNode(true).
// header.append(message.cloneNode(true));

// Insert the message immediately before the header.
// header.before(message);

// Insert the message immediately after the header.
// header.after(message);

// -------------------------------------
// 3. Deleting Elements

// Select the cookie close button and attach a click event listener.
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // Modern way: Remove the message element directly.
    message.remove();

    // Older DOM method: Remove the message through its parent.
    // message.parentElement.removeChild(message);
  });

// -------------------------------------
// SUMMARY & QUICK REVISION

// 1. Selecting Elements
// document.querySelector()       -> Selects the first matching element.
// document.querySelectorAll()    -> Selects all matching elements.
// document.getElementById()      -> Selects an element by ID.
// document.getElementsByTagName()-> Selects elements by tag name.
// document.getElementsByClassName() -> Selects elements by class name.

// 2. DOM Collections
// NodeList       -> Static collection when returned by querySelectorAll().
// HTMLCollection -> Live collection that updates automatically.

// 3. Creating Elements
// document.createElement() -> Creates a new HTML element.
// classList.add()           -> Adds a CSS class.
// textContent               -> Sets or gets plain text.
// innerHTML                 -> Sets or gets HTML markup.

// 4. Inserting Elements
// prepend()    -> Inserts as the first child.
// append()     -> Inserts as the last child.
// before()     -> Inserts immediately before an element.
// after()      -> Inserts immediately after an element.
// cloneNode(true) -> Creates a deep copy, including child elements.

// 5. Deleting Elements
// remove()                -> Removes an element directly.
// parentElement.removeChild() -> Removes a child through its parent.

// IMPORTANT THINGS TO REMEMBER:
// - querySelector() returns one element; querySelectorAll() returns a NodeList.
// - querySelectorAll() searches the entire document unless called on an element.
// - append() and prepend() move existing elements; they don't duplicate them.
// - Use textContent for plain text and avoid innerHTML with untrusted input.
// - Use remove() as the modern way to delete an element.
*/