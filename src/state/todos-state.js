import { Todo } from "../models/todo";

export const Filters = {
    All: 'all',
    Pending: 'pending',
    Completed: 'completed'
};

// Estado de la Aplicacion
const stateTodos = { 
    todos: [
        new Todo('Aprender Js', 'high'),
        new Todo('Los huevos de pascua', 'low'),
        new Todo('Leer la rata con thiner', 'high'),
        new Todo('Nose ekisde', 'medium'),
    ],
    filter : Filters.All
};


/**
 * Retorna los todos dependiendo de su estado
 * @param {String} filter 
 * @returns {Array} un array de todos completados, pendientes o todos
 */
export const getTodos = () => {
    const currentFilter = stateTodos.filter;
    switch(currentFilter){
        case Filters.All:
            return [...stateTodos.todos];

        case Filters.Pending:
            return stateTodos.todos.filter(task => !task.completed);

        case Filters.Completed:
            return stateTodos.todos.filter(task => task.completed);

        default:
            throw new Error (`Option ${filter} is not valid.`);
    };
};


/**
 * Establece un nuevo estado de los todos
 * @param {Array} newTodos - Nueva lista de todos
 */
export const setTodos = ( newTodos ) => {
    stateTodos.todos = newTodos;
};


/**
 * Agrega un nuevo todo al estado
 * @param {Object} todo - El nuevo todo a agregar
 */
export const addTodoToState = (todo) => {
    stateTodos.todos.push(todo);
};


/**
 * Elimina un todo del estado por su ID
 * @param {String} id - ID del todo a eliminar
 */
export const removeTodoFromState = (id) => {
    stateTodos.todos = stateTodos.todos.filter(task => task.id !== id);
};


/**
 * Actualiza el estado de completado de un todo
 * @param {String} id - ID del todo a actualizar
 * @returns 
 */
export const toggleTodoInState = (id) => {
    const todo = stateTodos.todos.find(task => task.id === id);
    if(todo){
        todo.completed = !todo.completed;
        return
    };
};


export const setFilterToState = ( newFilter = Filters.All) => {
    stateTodos.filter = newFilter.toLowerCase(); 
}


/**
 * Cuenta cuántos todos están pendientes (no completados)
 * @returns {number} Cantidad de todos pendientes
 */
export const getPendingCount = () => {
    return stateTodos.todos.filter(task => !task.completed).length;
}