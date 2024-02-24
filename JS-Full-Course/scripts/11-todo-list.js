const todoList = [{
    name: 'make dinner',
    dueDate: '2024-02-16'
}, {
    name: 'wash dishes',
    dueDate: '2024-02-16'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // (Does the same as the one below.) const name = todoObject.name;
        // (Does the same as the one below.) const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        ">Delete</button>
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-do-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: dueDate
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}




/*
function productPage (product) {
console.log(product.id)
}

const productPageButton = document.createElement('button');
productPageButton.textContent = 'See product';
productPageButton.classList.add('product-page-button');
productPageButton.addEventListener('click', () => {
    (product.id);
});
*/
