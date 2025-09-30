import { v4 as uuid } from "uuid";


// Estado de la Aplicacion
let todosListState = [
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
    {
        id: uuid(),
        text: 'Leer la rata con thiner',
        completed: false,
    },
];


/**
 * Obtiene el estado actual de los todos
 * @returns {Array} Lista de ToDos
 */
export const getTodos = () => todosListState;


/**
 * Establece un nuevo estado de los todos
 * @param {Array} newTodos - Nueva lista de todos
 */
export const setTodos = ( newTodos ) => {
    todosListState = newTodos;
};


/**
 * Agrega un nuevo todo al estado
 * @param {Object} todo - El nuevo todo a agregar
 */
export const addTodoToState = (todo) => {
    todosListState.push(todo);
};


/**
 * Elimina un todo del estado por su ID
 * @param {String} id - ID del todo a eliminar
 */
export const removeTodoFromState = (id) => {
    todosListState = todosListState.filter(task => task.id !== id);
};


/**
 * Actualiza el estado de completado de un todo
 * @param {String} id - ID del todo a actualizar
 * @returns 
 */
export const toggleTodoInState = (id) => {
    const todo = todosListState.find(task => task.id === id);
    if(todo){
        todo.completed = !todo.completed;
        return
    };
};

/**
 * Cuenta cuántos todos están pendientes (no completados)
 * @returns {number} Cantidad de todos pendientes
 */
export const getPendingCount = () => {
    return todosListState.filter(task => !task.completed).length;
}