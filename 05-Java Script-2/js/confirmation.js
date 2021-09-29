const inputItem = document.getElementById('input-item');
const btnAddItem = document.getElementById('btn-add-item');
const listContainer = document.querySelector('.list');
const database = new Map();
btnAddItem.addEventListener('click', () => {
  const ITEM_KEY = inputItem.value.toUpperCase();
  const ITEM_VALUE = inputItem.value;
  

  // NOTE: Create element
  const listItem = document.createElement('li');
  const textItem = document.createElement('p');
  const btnDelete = document.createElement('button');
  btnDelete.style.color="white";
  btnDelete.style.backgroundColor = "MediumAquamarine";
  btnDelete.style.border = "none";
  btnDelete.style.borderRadius= "10px";
  btnDelete.style.marginLeft="10px";
  btnDelete.style.marginBottom = "10px";
  const counter = document.createElement('button');
  counter.style.color="white";
  counter.style.backgroundColor="MediumAquamarine";
  counter.style.border="none";
  counter.style.borderRadius="10px";
  counter.style.marginLeft = "10px";

  // WARN: Handle error, empty input
  if (ITEM_VALUE === '') {
    alert("Item Name can't be blank");
    inputItem.focus();
    return;
  }

  // WARN: Check for duplication
  if (database.has(ITEM_KEY)) {
    alert(`You already have ${ITEM_VALUE}`);
    inputItem.value = '';
    inputItem.focus();
    return;
  }

  // NOTE: Add the new item to database
  database.set(ITEM_KEY, ITEM_VALUE);

  // NOTE: Add attribute
  listItem.classList.add('list-item'); // NOTE: Add Class

  // NOTE: Add value
  textItem.textContent = ITEM_VALUE;
  btnDelete.textContent = 'Delete';


  // NOTE: The counter should be dynamicly show how much do we have for this item
  //counter.textContent = 5;

  // NOTE: Combine elements
  listItem.textContent = ITEM_VALUE;
  listItem.appendChild(btnDelete, counter);
  listContainer.appendChild(listItem);

  // NOTE: Handle click event for delete button
  btnDelete.addEventListener('click', () => {
    let dialog_konfirmasi = confirm("Are you sure to delete this item?");
        if(dialog_konfirmasi === false)
        return;
    listContainer.removeChild(listItem);
    //give confirmation yes or no
    
  });

  inputItem.value = '';
  inputItem.focus();
});