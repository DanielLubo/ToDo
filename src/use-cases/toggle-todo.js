import { toggleTodoInState, getTodos } from "../state/todos-state";
import { saveTodos } from "../storage/local-storage";


/**
 * Cambia el estado de completado de un todo
 * @param {String} id - Id del todo a cambiar
 */
export const toggleTodo = (id) => {
    toggleTodoInState(id);
    saveTodos(getTodos());
}