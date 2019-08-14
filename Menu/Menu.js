/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

//STRETCH, create items for the menu function
const menuItems = ['Articles','About','Contact', 'Home'];
//store menu class in variable
const menuOne = document.querySelector('menu');
//declare
function createMenu(menuItems) {
  const menuCreator = document.createElement('div');
  menuCreator.classList.add('menu--open');
  //add a ul to it
  menuCreator.createElement('ul');
  //add some list items
  menuCreator.createElement('li');
  menuCreator.createElement('li');
  //toggle the class list in the menu and add a click event
  menuCreator.addEventListener('click', (e) => {
    menuCreator.classList.toggle('menu--open');
  })
  //append the button to the articles as child
  menuOne.appendChild(menuCreator);
  return menuCreator;
};
//call function
createMenu(menuItems);



// DRY code, simpler next 

// const toggleMenu = item => {
//   // Toggle the "menu--open" class on your menu 
//   item.classList.toggle('menu--open');
// };

// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector('.menu');
// // create a reference to the ".menu-button" class
// const menuBtn = document.querySelector('.menu-button');
// // Using your menuButton reference, add a click handler that calls toggleMenu

// menuButton.addEventListener('click', () => {
// //toggle menu function called
// toggleMenu(menu);