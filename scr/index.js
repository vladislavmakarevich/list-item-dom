let form = document.querySelector('#form-add');
let items = document.querySelector('#items');
let filterItems = document.querySelector('#filter');

form.addEventListener('submit', addItem);
items.addEventListener('click', removeItem);
filterItems.addEventListener('keyup', searchItem);

function addItem(e) {
    e.preventDefault();
    let text = document.querySelector('#input-add').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(text));
    let btn = document.createElement('button');
    btn.className = 'delete';
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn);
    items.appendChild(li);
}

function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are yoou sure?')){
            items.removeChild(e.target.parentElement);
        }
    }
}

function searchItem(e) {
    let text = e.target.value.toLowerCase();
    let li = document.getElementsByTagName('li');
    Array.from(li).forEach(item => {
        let itemText = item.firstChild.textContent.toLowerCase();
        if(itemText.indexOf(text) !==-1 ) {
            item.style.display = 'flex';
        }
        else {
            item.style.display = 'none';
        }     
    });
}

