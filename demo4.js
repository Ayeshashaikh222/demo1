// parentnode
let itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);

// PARENTELEMENT
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);

// childNodes
console.log(itemList.childNodes);

// child
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//firstchild
console.log(itemList.firstChild); 
// firstElementchild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'hello';

//lastchild
console.log(itemList.lastChild); 
//lastelementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'hello 2';

// nextsibling
console.log(itemList.nextSibling);

// // nextElementsibling
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);

// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// createElement

// create a div
let newDiv = document.createElement('div');

//Add class
newDiv.className = 'hello';

//Add id
newDiv.id='hello1';

// Add attr
newDiv.setAttribute('title', 'hello Div');

//creating text node
let newDivText = document.createTextNode('HEllo Word');

//Add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);


let newDiv1 = document.createElement('div');
let newDiv1Text = document.createTextNode('hello World');
newDiv1.appendChild(newDiv1Text);
let listGroup = document.querySelector('.card .list-group');
let li = document.querySelector('.card li');
listGroup.insertBefore(newDiv1, li);