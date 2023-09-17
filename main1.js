let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//form submit button
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup', filterItems);


//Add item
function addItem(e){
    e.preventDefault();
    
    // console.log(1);

    //get input value
    let newItem = document.getElementById('item').value;
    //get desc value
    let newItem1 = document.getElementById('desc').value;
    
    //create new li element
    let li = document.createElement('li');
    //add class
    li.className = 'list-group-item';

    // add text node with input value
    // let items = document.createTextNode(newItem);
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);
    //add text node with input value
    li.appendChild(document.createTextNode(newItem1));
    itemList.appendChild(li)


    //creating edit button
    let editBtn = document.createElement('edit');
    //add class
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    //append text node
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

    //create del button element
    let deleteBtn = document.createElement('button');
    // add class
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // aappend text node
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

   
    // console.log(li);



}

function removeItem(e) {
   if(e.target.classList.contains('delete')){
    //    console.log(1)
    if(confirm("Are you Sure?")){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
   }
}


function filterItems(e){
    //convert text to lowercase
    let text = e.target.value.toLowerCase();
    //get lis
    let items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        let itemDesc = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || itemDesc.toLocaleLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    })
}