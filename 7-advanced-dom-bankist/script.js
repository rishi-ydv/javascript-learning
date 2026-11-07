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


/*
///////////////////////////////////////
// Styles, Attributes, and Classes

// -------------------------------------
// 1. Styles

// Set inline CSS styles using the style property.
// CSS property names use camelCase in JavaScript.
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// Access inline styles only.
// Returns an empty string if the style was not explicitly set inline.
console.log(message.style.color);
console.log(message.style.backgroundColor);

// getComputedStyle() returns the final computed CSS styles,
// including styles applied through external stylesheets and CSS rules.
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

// Increase the computed height by 30 pixels.

// getComputedStyle(message).height returns a string such as "80px".
// Number.parseFloat() extracts the numeric part (80).
// Add 30 and append "px" to create a valid CSS value.
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// Change a CSS custom property (CSS variable) on the root element.
// This updates the value of --color-primary globally.
document.documentElement.style.setProperty('--color-primary', 'orangered');

// -------------------------------------
// 2. Attributes

// Select the logo element.
const logo = document.querySelector('.nav__logo');

// Access standard HTML attributes using DOM properties.
console.log(logo.alt);
console.log(logo.className);

// Update the alt attribute using its DOM property.
logo.alt = 'Beautiful minimalist logo';

// Accessing a non-standard/custom attribute using a property
// does not automatically work unless that property exists.
console.log(logo.designer);

// getAttribute() retrieves the value of an HTML attribute.
console.log(logo.getAttribute('designer'));

// setAttribute() creates or updates an HTML attribute.
logo.setAttribute('company', 'Bankist');

// Access the image source using the DOM property.
// Returns the resolved absolute URL.
console.log(logo.src);

// Access the original value written in the HTML.
// Returns the attribute value, usually a relative URL.
console.log(logo.getAttribute('src'));

// Select the navigation button link.
const link = document.querySelector('.nav__link--btn');

// Access the link URL using the DOM property.
// Returns the resolved absolute URL.
console.log(link.href);

// Access the original href attribute value.
// Returns the URL as written in the HTML.
console.log(link.getAttribute('href'));

// -------------------------------------
// 3. Data Attributes

// Access custom HTML data attributes using the dataset property.
// HTML: data-version-number="3.0"
// JavaScript: dataset.versionNumber
console.log(logo.dataset.versionNumber);

// -------------------------------------
// 4. Classes

// Add multiple CSS classes to the element.
logo.classList.add('c', 'j');

// Remove multiple CSS classes from the element.
logo.classList.remove('c', 'j');

// Toggle a class:
// Adds the class if it doesn't exist.
// Removes the class if it already exists.
logo.classList.toggle('c');

// Check whether the element contains a particular class.
// Returns true or false.
logo.classList.contains('c'); // Not includes()

// -------------------------------------
// 5. Avoid Directly Replacing className

// Don't use this when you only want to add or remove a class.
// It replaces the entire class attribute and removes existing classes.
// logo.className = 'jonas';

// Prefer classList methods to preserve existing classes.

// -------------------------------------
// SUMMARY & QUICK REVISION

// 1. Styles
// element.style.property       -> Gets or sets inline CSS styles.
// getComputedStyle(element)    -> Gets the final computed CSS styles.
// style.setProperty()          -> Sets a CSS custom property (variable).

// 2. Attributes
// element.alt                  -> Gets or sets the alt property.
// getAttribute('attribute')    -> Gets an HTML attribute value.
// setAttribute('attribute', value) -> Creates or updates an attribute.
// element.src                  -> Returns the resolved absolute URL.
// getAttribute('src')          -> Returns the original src attribute value.

// 3. Data Attributes
// element.dataset              -> Accesses HTML data-* attributes.
// dataset.versionNumber        -> Accesses data-version-number.

// 4. Classes
// classList.add()              -> Adds classes.
// classList.remove()           -> Removes classes.
// classList.toggle()           -> Adds or removes a class.
// classList.contains()         -> Checks whether a class exists.
// className                   -> Gets or replaces the entire class attribute.

// IMPORTANT THINGS TO REMEMBER:
// - element.style accesses inline styles, not all CSS styles.
// - getComputedStyle() reads the final computed styles.
// - CSS properties use camelCase in JavaScript.
// - DOM properties and getAttribute() can return different values.
// - dataset converts kebab-case attribute names into camelCase.
// - Use classList instead of replacing className.
// - classList.contains() is used instead of includes().
*/