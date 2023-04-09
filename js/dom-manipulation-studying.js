//DOM Manipulation

//styling elements

// const title = document.querySelector('#main-heading');
//
// title.style.color = 'red'
//
// console.log(title)
//
// const listItems = document.querySelectorAll('.list-items');
// // for (let i = 0; i < listItems.length; i++){
// //     listItems[i].style.color = 'red';
// // }
// listItems.forEach(item => {
//     item.style.color = 'red';
// });
// console.log(listItems)

//creating elements
const ul = document.querySelector('ul');
const li = document.createElement('li')
//Adding elements
ul.append(li)

//modifying a text
const firstListItem = document.querySelector('.list-items')
console.log(firstListItem.innerText)
console.log(firstListItem.textContent)
console.log(firstListItem.innerHTML)

li.innerText = 'X-men';

//Modifying Attributes

/**
 * Write your solutions here
 */

const box = document.querySelector('.dbl-click-box')

box.addEventListener('dblclick', function(){
    alert('BOX DOUBLE-CLICKED!')
});
/*---------------------------------------------*/
// get the button element with id "dark-mode-btn"
const darkModeBtn = document.querySelector('#dark-mode-btn');
// add a click event listener to the button element
darkModeBtn.addEventListener('click', function() {
    // get the body element
    const body = document.querySelector('body');
    // toggle the "dark-mode" class on the body element
    body.classList.toggle('dark-mode');
});
/*---------------------------------------------*/
let makeLowercase = document.querySelector('#uppercase')
makeLowercase.addEventListener('mouseover', function(){
    makeLowercase.innerText = makeLowercase.innerText.toLowerCase()
});
/*---------------------------------------------*/
let counter = document.querySelector('#counter')
let count = 0;

setInterval(function(){
    count++
    counter.innerText = count
}, 1000);

/*---------------------------------------------*/
// get the button element with id "list-chars-btn"
const listCharsBtn = document.querySelector('#list-chars-btn');

// get the input element with id "characters"
const charactersInput = document.querySelector('#characters');

// get the unordered list element with id "characters-list"
const charactersList = document.querySelector('#characters-list');

// add a click event listener to the button element
listCharsBtn.addEventListener('click', function(event) {
    // prevent the default form submission behavior
    event.preventDefault();

    // get the text from the input field
    const text = charactersInput.value;

    // clear the existing list items
    charactersList.innerHTML = '';

    // create a new unordered list element
    const newList = document.createElement('ul');

    // loop through each character in the text and add it as a list item to the new unordered list
    for (let i = 0; i < text.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerText = text[i];
        newList.appendChild(listItem);
    }

    // append the new unordered list to the charactersList element
    charactersList.appendChild(newList);
});

/*---------------------------------------------*/

const hiddenLettersDivs = document.querySelectorAll('.hidden-letters div');

hiddenLettersDivs.forEach(div => {
    div.addEventListener('mouseover', () => {
        console.log('you have rolled over');
        const span = div.querySelector('span');
        span.style.visibility = 'visible';
    });
});