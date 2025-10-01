import './style.css';
import { setTodos } from './state/todos-state';
import { loadTodos } from './storage/local-storage';
import { addTodo, deleteTodo, toggleTodo } from './use-cases/index.js';
import { renderTodos } from './ui/render-todos.js';
import { updateCounter } from './ui/update-counter.js'
import { setFilterToState, Filters } from './state/todos-state';


// Referencias al DOM
const todoInput = document.querySelector('.todo__input');
const addBtn = document.querySelector('.todo__add-btn');
const todoListHTML = document.querySelector('.todo__list');
const remainingCount = document.querySelector('.todo__remaining');

const priorityFilterSelect = document.querySelector('.task__filter-select'); 

/**
 * Actualiza toda la UI
 */
const refreshUI = () => {
    renderTodos(todoListHTML);
    updateCounter(remainingCount);
};


/**
 * Handler para agregar un todo
 */
const handleAddTodo = () => {
    const text = todoInput.value;
    const newTodo = addTodo(text);

    if(newTodo){
        todoInput.value = '';
        refreshUI();
    };
};

/**
 * Handler para clicks en la lista de todos
 */
const handleListClick = (e) => {
    // Manejar eliminación
    const deleteBtn = e.target.closest('.todo__delete-btn'); //¿Hiciste click en algo relacionado con eliminar?
    if(deleteBtn){
        const id = deleteBtn.dataset.id; //Sí, extraer el ID
        deleteTodo(id); // Emplear la funcion de Eliminar
        refreshUI();
        return; //Salir (return) para que no ejecute el código de abajo
    }

    // Manejar toggle de completado
    const checkBox = e.target.closest('.todo__checkbox'); //¿Hiciste click en algo relacionado con el checkbox?
    if(checkBox){
        const id = checkBox.dataset.id; //Sí, extraer el ID
        toggleTodo(id); //Emplear la funcion Toggle
        refreshUI();
        return;
    }
}

const handleFilterChange = (e) => { 
    // Ahora 'e.target' es el <select> mismo.
    const newFilter = e.target.value; 
    
    // Usamos tu función de estado
    setFilterToState(newFilter);
    
    // Refrescamos la interfaz para que muestre la lista filtrada
    refreshUI();
}


const initApp = () => {
    // Cargar datos del localStorage
    const savedTodos = loadTodos();
    if(savedTodos){
        setTodos(savedTodos);
    }

    // Event Listeners
    addBtn.addEventListener('click', handleAddTodo);

    todoInput.addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
            handleAddTodo();
        }
    })

    todoListHTML.addEventListener('click', handleListClick);

    priorityFilterSelect.addEventListener('change', handleFilterChange);
    refreshUI();
}

initApp();

