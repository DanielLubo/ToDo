import { getTodos } from "../state/todos-state";


/**
 * Renderiza la lista de todos en el DOM
 * @param {HTMLElement} container - Contenedor donde se renderizarán los todos
 */
export const renderTodos = (container) => {
    const todos = getTodos();
    container.innerHTML = '';

    todos.forEach((todo) => {
        const {id, text, completed} = todo;
        container.innerHTML += `
            <li class="todo__item">
                <input 
                    class="todo__checkbox" 
                    type="checkbox" 
                    id="task-${id}" 
                    data-id="${id}" 
                    ${completed ? 'checked' : ''}
                >
                <p class="todo__text">${text}</p>
                <button class="todo__edit-btn" data-id="${id}">
                    <img class="todo__edit-img" src="/src/image/boton-editar.png" alt="Edit task">
                </button>
                <button class="todo__delete-btn" data-id="${id}">
                    <img class="todo__img" src="/src/image/equis.png" alt="Delete task">
                </button>
            </li>
        `
    })
}