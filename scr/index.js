let form = document.querySelector('#form-add');
let items = document.querySelector('#items');

form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    let inputAdd = document.querySelector('#input-add').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(inputAdd));
    items.appendChild(li);
    let btn = document.createElement('button');
    btn.className = 'delete';
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn);
}

