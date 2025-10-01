import { Todo } from "../models/todo";
const STORAGE_KEY = 'todosListState';


/**
 * Guarda los todos en localStorage
 * @param {Array} todos - Lista de ToDos a guarda
 */
export const saveTodos = ( todos ) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}


/**
 * Carga los todos desde localStorage 
 * @returns {Array|null}  Lista de todos o null si no existe
 */
export const loadTodos = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if(!saved){
        return null
    }

    const todosPlain = JSON.parse(saved);
    return todosPlain.map(todoData => {

        const todoInstance = new Todo(todoData.text, todoData.priority);
        todoInstance.id = todoData.id;
        todoInstance.completed = todoData.completed;
        todoData.date = new Date(todoData.date);

        return todoInstance;
    });
};


/**
 * Limpia todos los datos del localStorage
 */
export const clearTodos = () => {
    localStorage.removeItem(STORAGE_KEY);
}