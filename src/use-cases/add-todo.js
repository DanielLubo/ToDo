import { Todo } from "../models/todo";
import { addTodoToState, Filters, getTodos } from "../state/todos-state";
import { saveTodos } from "../storage/local-storage";


/**
 * Agrega un nuevo todo
 * @param {String} text - Texto de la tarea
 * @returns {Object|null} El nuevo todo creado o null si el texto está vacío
 */
export const addTodo = (text) => {
    const enterTex = text.trim();

    if(enterTex.length === 0){
        console.warn('El texto de la tarea no puede estar vacío');
        return null;
    }

    const newTodo = new Todo(text, 'low');

    addTodoToState(newTodo);
    saveTodos(getTodos);
    return newTodo;
}