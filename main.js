let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click',removeItem);


//Add item
function addItem(e){
    e.preventDefault();
    
    // console.log(1);

    //get input value
    let newItem = document.getElementById('item').value;
    
    //create new li element
    let li = document.createElement('li');
    //add class
    li.className = 'list-group-item';

    // add text node with input value
    // let items = document.createTextNode(newItem);
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);


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