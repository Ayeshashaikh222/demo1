// console.dir(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "hello";
// console.log(document.forms);
// document.log(document.link);


// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// var title = document.getElementsByClassName('borderTitle');
// console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerHTML = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';
// title.style.color = "green";


// GETELEMENTBYCLASSNAME
var items= document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';
items[2].style.backgroundColor = 'green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
    items[i].style.color = 'brown';
    items[i].style.fontSize = '23px';
}





