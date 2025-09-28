import './style.css'
import { v4 as uuid } from "uuid";


// Estado de la Aplicacion
let todos = [
    {
        id: uuid(),
        text: 'Aprender JavaScript',
        completed: false,
    },
    {
        id: uuid(),
        text: 'Los huevos de pascua',
        completed: false,
    },
];


// Referencias al DOM   
const todoInput = document.querySelector('.todo__input');
const addBtn = document.querySelector('.todo__add-btn');
const todoList = document.querySelector('.todo__list');
const remainigCount = document.querySelector('.todo__remaining');


// Funciones


// Funcion para Renderizar ToDos
const renderTodos = () => {
    todoList.innerHTML = '';
    todos.forEach((todo) => {
        const {id, text, completed} = todo;
        todoList.innerHTML += `
            <li class="todo__item">
                <input class="todo__checkbox" type="checkbox" id="task-${id}" ${completed ? 'checked' : ''}>
                <p class="todo__text">${text}</p>
                <button class="todo__delete-btn" data-id="${id}">
                    <img class="todo__img" src="/src/image/equis.png" alt="Delete task">
                </button>
            </li>
        `
    })
}

// Funcion para Agregar una Tarea
const addTask = () => {

    // Obtener el valor del input
    const text = todoInput.value.trim();
    // Verificar si el input esta vacio
    if(text.length === 0){
        console.log('Por favor escribe una tarea');
        return;
    }
    // Crear un Todo (estructura)
    const newTodo = {
        id: uuid(),
        text: text,
        completed: false,
    }
    // Agregar el nuevo todo al array
    todos.push(newTodo);
    todoInput.value = '';

    console.log(todos);
    renderTodos();
    savedTodos();
    updateCounter();
};

// Funcion para Eliminar Tareas
const deleteTask = ( todoId ) => {

    todos = todos.filter( todo => todo.id !== todoId)

    renderTodos();
    savedTodos();
    updateCounter();
}

// Funcion para Marcar/Desmarcar tarea completada
const toggleTodo = ( todoId) => {
    const todo = todos.find(task => task.id === todoId );
    if(todo){
        todo.completed = !todo.completed;
        console.log(`cambiado a: ${todo.completed} `);
    }

    renderTodos();
    savedTodos();
    updateCounter();
}

// Funcion para Actualizar contador de tareas
const updateCounter = () => {
    const pending = todos.filter(todo => !todo.completed).length;
    remainigCount.textContent = pending === 0
        ? `!Felicidades, No tienes tareas pendientes 🎉`
        : `Tienes ${pending} tarea${pending > 1 ? 's' : ''} pendiente${pending > 1 ? 's' : ''}`;
}

// Funcion para Guarda LocalStorage
const savedTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Funcion para cargar desde LocalStorage
const loadTodos = () => {
    const savedTodos = localStorage.getItem('todos');
    if(savedTodos){
        todos = JSON.parse(savedTodos);
    }
}

// Event Listeners
addBtn.addEventListener('click', addTask);

todoInput.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        addTask();
    }
})

todoList.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.todo__delete-btn'); // 'closest' De esta forma busca el elemento padre más cercano que coincida
    if(deleteBtn){
        const id = deleteBtn.dataset.id;    // 'dataset' Es una propiedad que accede a los atributos 'data-*' del html
        deleteTask(id);
        return
    }

    const checkBox = e.target.closest('.todo__checkbox');
    if(checkBox){
        const id = checkBox.id.replace('task-', '');    // 'replace' De esta forma buscar por el id que coincida
        toggleTodo(id);
    }
})


// Inicializar la App
loadTodos();
renderTodos();      
updateCounter();